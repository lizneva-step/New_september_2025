export class SettingsPage {
	constructor(page) {
		// техническое описание страницы
        this.settingsHeader = page.getByRole('link', { name: 'Login' });
        this.updateSattingsButton = page.getByRole('link', { name: 'Login' });
        this.inputYourName = page.getByRole('heading', { name: 'name' });
		this.inputEmail = page.getByRole('heading', { name: 'name' });
	}
	// бизнесовые действия со страницой
	async gotoRegister() {
		await this.signupLink.click();
	}
}