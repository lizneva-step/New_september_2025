import { test, expect } from '@playwright/test';
import { App } from '../src/pagesFacade/app.page';
import { UserBuilder } from '../src/helpers/builders/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(URL);
	});
	test('Пользователь не может зарегистрироваться повторно Facade', async ({
		page,
	}) => {
		const user = new UserBuilder()
			.addEmail()
			.addName()
			.addPassword()
			.generate();

		let app = new App(page);
		await app.main.gotoRegister();
		await app.register.register(user);
		//	await app.globalfeed.register();

		// todo переделать ассерт
		await expect(app.register.emailErrorText).toContainText(
			'Email already exists.. try logging in',
		);
	});
});

//может падать, не дебажен