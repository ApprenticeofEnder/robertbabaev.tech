import { readdir } from 'node:fs/promises';

export const BASE_VARIANT_FILE = 'base.toml';
export const WEB_VARIANT_FILE = 'web.toml';

const NON_PDF_VARIANT_FILES = new Set([BASE_VARIANT_FILE, WEB_VARIANT_FILE]);

export function isPdfVariantFile(filename: string): boolean {
	return filename.endsWith('.toml') && !NON_PDF_VARIANT_FILES.has(filename);
}

export function variantNameFromFile(filename: string): string {
	return filename.replace(/\.toml$/, '');
}

export async function listPdfVariantNames(variantsDir: string): Promise<string[]> {
	const files = await readdir(variantsDir);
	return files.filter(isPdfVariantFile).map(variantNameFromFile).sort();
}
