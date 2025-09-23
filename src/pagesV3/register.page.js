import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
	constructor(page) {
		// техническое описание страницы
		//todo нейминг
		super(page);
		this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
		this.emailInput = page.getByRole('textbox', { name: 'Email' });
		this.passwordInput = page.getByRole('textbox', { name: 'Password' });
		this.signupButton = page.getByRole('button', { name: 'Sign up' });
		this.emailErrorText = page.getByText(
			'Email already exists.. try logging in',
		);
	}
	// бизнесовые действия со страницой

	async register(user) {
		return test.step(`Зарегистрироваться пользователем ${user.name} с email ${user.email} и паролем ${user.password}`, async (step) => {
			step.attach('Реквизиты доступа', {
				body: `${user.name} с email ${user.email} и паролем ${user.password}`,
				contentType: 'text/plain',
			});

			const { name, email, password } = user;
			await this.nameInput.click();
			await this.nameInput.fill(name);
			await this.emailInput.click();
			//todo хардкод
			await this.emailInput.fill(email);
			await this.passwordInput.click();
			await this.passwordInput.fill(password);
			await this.signupButton.click();
		});
	}

	// пример
	async expectErrorVisible() {
		await expect(this.emailErrorText).toBeVisible();
	}
}