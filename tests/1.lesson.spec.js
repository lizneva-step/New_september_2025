import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	// arrange или настройка, предусловие
	await page.goto('https://todomvc.com/examples/vue/dist/#/');
	// act шаги
	await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
	await page
		.getByRole('textbox', { name: 'What needs to be done?' })
		.fill('Залить код занятия на github');
	await page
		.getByRole('textbox', { name: 'What needs to be done?' })
		.press('Enter');

	/* 
		assert, проверяем ожидаемый результат и фактический
		*/
	await expect(page.getByRole('main')).toContainText(
		'Залить код занятия на github',
	);
	await expect(
		page.getByRole('textbox', { name: 'What needs to be done?' }),
	).toBeEmpty();
});
