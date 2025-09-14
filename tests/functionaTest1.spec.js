import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage, RegisterPage } from '../src/pages/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Регистрация', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(URL);
	});

	test.only('Пользователь не может зарегистрироваться повторно', async ({
		page,
	}) => {
		const user = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		const mainPage = new MainPage(page);
		const registerPage = new RegisterPage(page);

		await mainPage.gotoRegister();
		await registerPage.register(user);

		// todo переделать ассерт
		await expect(registerPage.emailErrorText).toContainText(
			'Email already exists.. try logging in',
		);
	});
});


// тест1.  переключение таб (Сделать PO  Профиль)
// 0. Зарегистрироваться
// 1. Авторизоваться
// 4. Проверить 1 табу название
// 5. Проверить 1 табу текст
// 6. Перейти к 2 табе
// 7. Проверить 2 табу название
// 8. Проверить 2 табу текст