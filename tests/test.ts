import { expect, test } from '@playwright/test';

const FULL_NAME = 'Robert Babaev';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: FULL_NAME })).toBeVisible();
});

test('index page has expected description', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('paragraph')).toHaveText(
		'A security-minded tech professional at the intersection of security, development, and people.'
	);
});

test('about does not have name h1', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: FULL_NAME })).toBeVisible({ visible: false });
});
