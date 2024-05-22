import { expect, test } from '@playwright/test';

const FULL_NAME = 'Robert Babaev';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: FULL_NAME })).toBeVisible();
});
