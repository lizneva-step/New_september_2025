export class EditorPage {
	constructor(page) {
		// техническое описание страницы
        this.inputArticleTitle = page.getByRole('link', { name: 'Login' });
        this.inputAbout = page.getByRole('heading', { name: 'name' });
		this.inputArticleText = page.getByRole('heading', { name: 'name' });
		this.inputTags = page.getByRole('heading', { name: 'name' });
        this.publishArticleButton = page.getByRole('link', { name: 'Login' });
	}
	// бизнесовые действия со страницой
	async gotoRegister() {
		await this.signupLink.click();
	}
}