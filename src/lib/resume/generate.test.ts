import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import toml from 'smol-toml';
import { describe, expect, test } from 'vitest';

import { buildPdfData } from './build-pdf';
import { buildWebData } from './build-web';
import {
	mergeVariantConfig,
	parsePdfVariantConfig,
	parseWebVariantConfig
} from './merge-config';
import type { PdfVariant, RawResumeData } from './types';
import { BASE_VARIANT_FILE, listPdfVariantNames } from './variants';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const variantsDir = path.join(root, 'config/resume_variants');

async function loadToml(filePath: string): Promise<Record<string, unknown>> {
	return toml.parse(await readFile(filePath, 'utf-8')) as Record<string, unknown>;
}

describe('generate resume integration', () => {
	test('builds web data from real config', async () => {
		const master = (await loadToml(
			path.join(root, 'config/resume_data.toml')
		)) as unknown as RawResumeData;
		const webConfig = parseWebVariantConfig(await loadToml(path.join(variantsDir, 'web.toml')));
		const webData = buildWebData(master, webConfig);

		expect(webData.experience['deepcode-sec-swe'].bulletPoints?.length).toBeGreaterThan(0);
		expect(webData.experience).not.toHaveProperty('innovapost-security-specialist');
	});

	test.each(['dev', 'devops', 'security'])('builds %s pdf variant from real config', async (variant) => {
		const master = (await loadToml(
			path.join(root, 'config/resume_data.toml')
		)) as unknown as RawResumeData;
		const baseConfig = parsePdfVariantConfig(
			await loadToml(path.join(variantsDir, BASE_VARIANT_FILE))
		);
		const variantConfig = parsePdfVariantConfig(
			await loadToml(path.join(variantsDir, `${variant}.toml`))
		);
		const mergedConfig = mergeVariantConfig(baseConfig, variantConfig);
		const pdf = buildPdfData(master, mergedConfig, variant as PdfVariant);

		expect(pdf.experience && Object.keys(pdf.experience).length).toBeGreaterThan(0);
		expect(pdf.activities && Object.keys(pdf.activities).length).toBeGreaterThan(0);
	});

	test('lists the expected pdf variants', async () => {
		await expect(listPdfVariantNames(variantsDir)).resolves.toEqual(['dev', 'devops', 'security']);
	});
});
