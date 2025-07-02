import DOMPurify from 'dompurify';
import { readFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import * as marked from 'marked';
import toml from 'smol-toml';

marked.use({
	renderer: {
		link({ href }) {
			return href;
		}
	}
});

async function compile(src: string): Promise<string> {
	const parsed = marked.parseInline(src, { async: true });
	const virtualDom = new JSDOM('').window;
	const purifier = DOMPurify(virtualDom);
	const sanitized = purifier.sanitize(await parsed);
	return sanitized.trim();
}

export async function compileSingleEntry(key: string, value: string): Promise<[string, string]> {
	const newValue = await compile(value);
	return [key, newValue];
}

export async function compileArrayEntry(
	key: string,
	values: string[]
): Promise<[string, string[]]> {
	const newValues = await Promise.all(
		values.map(async (value) => {
			const newValue = await compile(value);
			return newValue;
		})
	);
	return [key, newValues];
}

export async function compileEntries<T>(data: Record<string, any> | undefined): Promise<T> {
	const entries = Object.entries(data ?? {});
	const compiledEntries = await Promise.all(
		entries.map(async ([key, value]) => {
			const defaultResult = [key, value];
			if (!value) {
				return defaultResult;
			}
			if (typeof value === 'string') {
				return compileSingleEntry(key, value);
			}
			if (Array.isArray(value) && value.length > 0 && typeof value[0] == 'string') {
				return compileArrayEntry(key, value);
			}

			if (Object.getOwnPropertySymbols(value).length > 0) {
				return defaultResult;
			}

			if (Object.getOwnPropertySymbols(value).every((prop) => typeof prop === 'string')) {
				// value is a Record<string, any>
				return [key, await compileEntries(value)];
			}

			return defaultResult;
		})
	);
	const result: T = Object.fromEntries(compiledEntries) as T;
	return result;
}

export async function compileConfig<T>(filename: string): Promise<T> {
	const tomlContent = await readFile(filename, 'utf-8');
	const parsedContent = toml.parse(tomlContent);

	const compiledEntries = await compileEntries<T>(parsedContent);

	return compiledEntries;
}
