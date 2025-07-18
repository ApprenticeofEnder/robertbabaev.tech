import { type Page, expect, test } from '@playwright/test';

test.describe('Home page', () => {
	test('has the right title', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveTitle('Home - Robert Babaev');
	});

	test('hero section displays correct fields', async ({ page }) => {
		await page.goto('/');

		// TODO: Update these to use the loaded config instead

		// Check if the Designation field exists and has correct content
		const designationHeading = page.getByRole('heading', { name: 'Designation' });
		await expect(designationHeading).toBeVisible();

		// const designations = ['Security SWE', 'Full Stack SWE', 'Platform Engineer', 'DevOps Engineer'];
		// await Promise.all(
		// 	designations.map(async (designation) => {
		// 		await page.getByText(designation).waitFor({ state: 'visible', timeout: 20000 });
		// 	})
		// );

		// Check Current Affiliation field
		await expect(page.getByRole('heading', { name: 'Current Affiliation' })).toBeVisible();
		await expect(page.getByText('Independent')).toBeVisible();

		// Check Pronouns field
		await expect(page.getByRole('heading', { name: 'Pronouns' })).toBeVisible();
		await expect(page.getByText('He/Him')).toBeVisible();
	});

	test.describe('navigation cards', () => {
		const options = ['resume', 'about', 'contact'];
		options.forEach((option) => {
			test(option, async ({ page }) => {
				await page.goto('/');
				const optionCard = page.getByTestId(`home-option-${option}`);
				await expect(optionCard).toBeVisible();
				await optionCard.click();
				await page.waitForURL(`/${option}`);
			});
		});
	});

	test('featured projects are displayed correctly', async ({ page }) => {
		await page.goto('/');

		// Check if the featured projects section exists
		await expect(page.getByRole('heading', { name: 'Featured Projects' })).toBeVisible();

		// Check for speedbeaver project
		await expect(page.getByRole('heading', { name: 'speedbeaver' })).toBeVisible();
		await expect(
			page.getByText('A set-it-and-forget-it logging integration for FastAPI.')
		).toBeVisible();

		// Check for CourseFull project
		await expect(page.getByRole('heading', { name: 'CourseFull' })).toBeVisible();
		await expect(page.getByText('A better way for students to track their goals.')).toBeVisible();
	});
});
