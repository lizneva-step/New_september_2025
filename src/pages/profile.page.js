export class ProfilePage {
	constructor(page) {
		// техническое описание страницы
		this.editProfileButton = page.getByRole('link', { name: 'Login' });
        this.profileHeader = page.getByRole('link', { name: 'Login' });
        this.tabMyArticles = page.getByRole('heading', { name: 'name' });
		this.tabFavorArticles = page.getByRole('heading', { name: 'name' });
		this.tabMyArticlesText = page.getByRole('heading', { name: 'name' });
		this.tabFavorArticlesText = page.getByRole('heading', { name: 'name' });
	}
	// бизнесовые действия со страницой
	async gotoRegister() {
		await this.signupLink.click();
	}
}