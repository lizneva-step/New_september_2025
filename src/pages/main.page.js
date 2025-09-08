export class MainPage {
  constructor(page) {
    //техническое описание страницы (из каких селекторов и локаторов она состоит)
    //страничка - драйвер
    // техническое описание страницы
    this.signupLink = page.getByRole("link", { name: "Sign up" });
    this.loginLink = page.getByRole("link", { name: "Login" });
  }
  //методы
  // бизнесовые действия со страницой
  async gotoRegister() {
    await this.signupLink.click();
  }
}

//вот эту строчку взяли из теста и занесли в конструктор страницы
//const SIGNUP_LINK_TEXT = "Sign up";
// await page.getByRole("link", { name: SIGNUP_LINK_TEXT }).click();
