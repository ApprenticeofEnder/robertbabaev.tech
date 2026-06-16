import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import toml from 'smol-toml';

import { buildPdfData, pdfDataToTomlRecord } from '../src/lib/resume/build-pdf.js';
import { mergeVariantConfig, parsePdfVariantConfig } from '../src/lib/resume/merge-config.js';
import type { PdfVariant, RawResumeData } from '../src/lib/resume/types.js';
import { BASE_VARIANT_FILE, listPdfVariantNames } from '../src/lib/resume/variants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const masterPath = path.join(root, 'config/resume_data.toml');
const variantsDir = path.join(root, 'config/resume_variants');
const resumeRoot = path.join(root, 'resume');

async function loadToml(filePath: string): Promise<Record<string, unknown>> {
	return toml.parse(await readFile(filePath, 'utf-8')) as Record<string, unknown>;
}

async function writeVariantData(variant: string, data: Record<string, unknown>): Promise<void> {
	const outDir = path.join(resumeRoot, variant);
	await mkdir(outDir, { recursive: true });

	const header = '# GENERATED — edit config/resume_data.toml and config/resume_variants/\n\n';
	const body = toml.stringify(data);
	await writeFile(path.join(outDir, 'data.toml'), header + body, 'utf-8');
}

async function main(): Promise<void> {
	const master = (await loadToml(masterPath)) as unknown as RawResumeData;
	const baseConfig = parsePdfVariantConfig(
		await loadToml(path.join(variantsDir, BASE_VARIANT_FILE))
	);

	for (const variant of await listPdfVariantNames(variantsDir)) {
		const variantConfig = parsePdfVariantConfig(
			await loadToml(path.join(variantsDir, `${variant}.toml`))
		);
		const mergedConfig = mergeVariantConfig(baseConfig, variantConfig);
		const pdfData = buildPdfData(master, mergedConfig, variant as PdfVariant);
		await writeVariantData(variant, pdfDataToTomlRecord(pdfData));
		console.log(`Generated resume/${variant}/data.toml`);
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
