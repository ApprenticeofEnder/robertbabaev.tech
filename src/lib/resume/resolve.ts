import type { BulletChannel, BulletsTable, RawResumeEntry } from './types';

export function isBulletsTable(value: unknown): value is BulletsTable {
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		return false;
	}

	return Object.values(value).every(
		(bullet) => bullet && typeof bullet === 'object' && !Array.isArray(bullet)
	);
}

function fallbackChain(channel: BulletChannel): BulletChannel[] {
	if (channel === 'default') {
		return ['default', 'web'];
	}

	return [channel, 'web', 'default'];
}

export function resolveBulletText(
	bullets: BulletsTable,
	bulletId: string,
	channel: BulletChannel
): string {
	const bullet = bullets[bulletId];
	if (!bullet || typeof bullet !== 'object') {
		throw new Error(`Unknown bullet id "${bulletId}".`);
	}

	for (const key of fallbackChain(channel)) {
		const text = bullet[key];
		if (typeof text === 'string' && text) {
			return text;
		}
	}

	throw new Error(`Bullet "${bulletId}" has no text for channel "${channel}".`);
}

export function resolveBulletsForEntry(
	entry: RawResumeEntry,
	channel: BulletChannel,
	bulletIds: string[],
	context: string
): string[] {
	if (!isBulletsTable(entry.bullets)) {
		throw new Error(`Entry "${context}" has bullet ids but no bullets table.`);
	}

	return bulletIds.map((bulletId) => resolveBulletText(entry.bullets!, bulletId, channel));
}
