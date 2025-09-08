import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
	await page.goto('https://realworld.qa.guru/#/register');
	await page.getByRole('textbox', { name: 'Your Name' }).click();
	await page.getByRole('textbox', { name: 'Your Name' }).fill('Test2408');
	await page.getByRole('textbox', { name: 'Your Name' }).press('Tab');
	await page.getByRole('textbox', { name: 'Email' }).fill('test2408-1@mail.ru');
	await page.getByRole('textbox', { name: 'Email' }).press('Tab');
	await page.getByRole('textbox', { name: 'Password' }).fill('Test2408!');
	await page.getByRole('button', { name: 'Sign up' }).click();
	await expect(page.getByText('Test2408')).toBeVisible();
	await expect(page.getByRole('navigation')).toContainText('Test');
});