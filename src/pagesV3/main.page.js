import { test } from '@playwright/test';
import { BasePage } from './base.page';

export class MainPage extends BasePage {
    constructor() {
        super();
        // техническое описание страницы
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }
    async gotoRegister() {
        return test.step('Переход на страницу регистрации', async (step) => {
            await this.signupLink.click();
        });
    }
}