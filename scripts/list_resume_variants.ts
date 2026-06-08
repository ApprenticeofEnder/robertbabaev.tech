import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { listPdfVariantNames } from '../src/lib/resume/variants.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const variants = await listPdfVariantNames(path.join(root, 'config/resume_variants'));

for (const variant of variants) {
	console.log(variant);
}
