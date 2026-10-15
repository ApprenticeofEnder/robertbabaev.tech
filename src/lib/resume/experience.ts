import type { I18n } from "i18n-js";

import { compile } from "$lib/server/config";
import type { ResumeEntry } from "$lib/types";

export interface IExperience {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  start?: string;
  end?: string;
  tech?: string[];
  link?: string;
  bulletIds?: string[];
}

export type ExperienceType = "experience" | "projects" | "hackathons" | "volunteering";

export class Experience implements IExperience {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  start?: string;
  end?: string;
  tech?: string[];
  link?: string;
  bulletIds?: string[];

  experienceType: ExperienceType;

  constructor(experienceType: ExperienceType, id: string, bulletIds: string[], i18n: I18n) {
    const dataScope = `${experienceType}.${id}`;
    this.experienceType = experienceType;
    this.id = id;
    this.title = i18n.t(`${dataScope}.title`);
    this.subtitle = i18n.t(`${dataScope}.subtitle`);
    this.location = i18n.t(`${dataScope}.location`);
    this.start = i18n.t(`${dataScope}.start`, { defaultValue: undefined });
    this.end = i18n.t(`${dataScope}.end`, { defaultValue: undefined });
    this.tech = i18n.t<string[]>(`${dataScope}.end`, { defaultValue: undefined }) as string[];
    this.link = i18n.t(`${dataScope}.link`);
    this.bulletIds = bulletIds;
  }

  async renderBulletPoint(
    bulletId: string,
    i18n: I18n,
    compileMarkdown: boolean = false
  ): Promise<string> {
    const translated = i18n.t(`${this.dataScope}.bullets.${bulletId}`);
    if (!compileMarkdown) {
      return translated;
    }
    return await compile(translated);
  }

  async renderBulletPoints(i18n: I18n, compileMarkdown: boolean = false): Promise<string[]> {
    if (!this.bulletIds) {
      return [];
    }
    const result = await Promise.all(
      this.bulletIds?.map(async (bulletId) => {
        return this.renderBulletPoint(bulletId, i18n, compileMarkdown);
      })
    );
    return result ?? [];
  }

  get date(): string {
    if (!!this.start && !!this.end) {
      return `${this.start} - ${this.end}`;
    }
    return this.start ?? "";
  }

  get dataScope(): string {
    return `${this.experienceType}.${this.id}`;
  }

  async toResumeEntry(i18n: I18n): Promise<ResumeEntry> {
    return {
      title: this.title,
      subtitle: this.subtitle,
      location: this.location,
      start: this.start,
      end: this.end,
      tech: this.tech,
      link: this.link,
      bulletPoints: await this.renderBulletPoints(i18n)
    };
  }

  async toPdfEntry(i18n: I18n) {
    const resumeEntry = await this.toResumeEntry(i18n);

    return {
      title: resumeEntry.title,
      description: resumeEntry.subtitle,
      date: this.date,
      location: resumeEntry.location,
      link: resumeEntry.link,
      bulletPoints: resumeEntry.bulletPoints
    };
  }
}
