import type { I18n } from "i18n-js";

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

  constructor({ id, title, subtitle, location, start, end, tech, link, bulletIds }: IExperience) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.location = location;
    this.start = start;
    this.end = end;
    this.tech = tech;
    this.link = link;
    this.bulletIds = bulletIds;
  }

  renderBullets(i18n: I18n): string[] {
    const result = this.bulletIds?.map((bulletId) =>
      i18n.t(`experience.${this.id}.bullets.${bulletId}`)
    );
    return result ?? [];
  }

  get date(): string {
    if (!!this.start && !!this.end) {
      return `${this.start} - ${this.end}`;
    }
    return this.start ?? "";
  }
}
