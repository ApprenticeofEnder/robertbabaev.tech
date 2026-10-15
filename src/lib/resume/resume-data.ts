import { I18n } from "i18n-js";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { loadConfig } from "$lib/server";

import { Experience, type ExperienceType } from "./experience";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..", "..");
const dataDir = path.join(root, "config/resume_data");
const variantDir = path.join(root, "config/resume_variants");

interface RawVariantData {
  experience: Record<string, { bulletIds: string[] }>;
  projects: Record<string, { bulletIds: string[] }>;
  hackathons: Record<string, { bulletIds: string[] }>;
  volunteering: Record<string, { bulletIds: string[] }>;
}

export interface VariantData {
  experience: Record<string, Experience>;
  projects: Record<string, Experience>;
  hackathons: Record<string, Experience>;
  volunteering: Record<string, Experience>;
}

async function loadDataVariant(name: string) {
  return loadConfig(path.join(dataDir, `${name}.toml`));
}

export async function initResumeTranslator(): Promise<I18n> {
  const i18n = new I18n({
    common: await loadDataVariant("common"),
    dev: await loadDataVariant("dev"),
    devops: await loadDataVariant("devops")
  });
  i18n.enableFallback = true;
  i18n.defaultLocale = "common";
  return i18n;
}

export async function loadResumeVariant(variant: string, i18n: I18n): Promise<VariantData> {
  const rawVariantData = await loadConfig<RawVariantData>(path.join(variantDir, `${variant}.toml`));
  const variantData: VariantData = {
    experience: {},
    projects: {},
    hackathons: {},
    volunteering: {}
  };

  Object.keys(rawVariantData.experience).forEach((id) => {
    const experience = new Experience(
      "experience",
      id,
      rawVariantData.experience[id].bulletIds,
      i18n
    );
    variantData.experience[id] = experience;
  });

  Object.keys(rawVariantData.projects).forEach((id) => {
    const project = new Experience("projects", id, rawVariantData.projects[id].bulletIds, i18n);
    variantData.projects[id] = project;
  });

  Object.keys(rawVariantData.hackathons).forEach((id) => {
    const hackathon = new Experience(
      "hackathons",
      id,
      rawVariantData.hackathons[id].bulletIds,
      i18n
    );
    variantData.hackathons[id] = hackathon;
  });

  return variantData;
}
