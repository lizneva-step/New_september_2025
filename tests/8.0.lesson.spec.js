import { test, expect } from "@playwright/test";
import { App } from "../src/pagesV3/app.page";
import { UserBuilder } from "../src/helpers/builders/index";

test.describe("Регистрация", () => {
  //	test.beforeEach(async ({ page }) => {
  //		await page.goto(URL);
  //	});
  test.only("Пользователь не может зарегистрироваться повторно Facade", async ({
    page,
  }) => {
    const user = new UserBuilder()
      .addEmail()
      .addName()
      .addPassword()
      .generate();
    console.log(user);
    let app = new App(page);
    await app.main.open();
    await app.main.gotoRegister();
    await app.register.register(user);
    //	await app.globalfeed.register();

    // todo переделать ассерт
    await expect(app.globalfeed.yourfeedEmptyText).toBeVisible();
  });
});
