import { GlobalFeedPage, MainPage, RegisterPage } from './index';

export class App {
	constructor(page) {
		this.page = page;
		this.globalfeed = new GlobalFeedPage(page);
		this.main = new MainPage(page);
		this.register = new RegisterPage(page);
	}
}