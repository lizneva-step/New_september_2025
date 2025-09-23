import { expect } from "@playwright/test";
import { test } from "../src/helpers/fixtures/index";
import { UserBuilder } from "../src/helpers/builders/index";

const URL = "https://realworld.qa.guru/";

test.describe("Регистрация", () => {
  //test.beforeEach(async ({ page }) => {
  //		await page.goto(URL);
  //	});
  test("Пользователь не может зарегистрироваться повторно fixture", async ({
    app,
  }) => {
    const user = new UserBuilder()
      .addEmail()
      .addName()
      .addPassword()
      .generate();
    //	await app.main.open();
    await app.main.gotoRegister();
    await app.register.register(user);
    //	await app.globalfeed.register();

    // todo переделать ассерт
    await expect(app.register.emailErrorText).toContainText(
      "Email already exists.. try logging in"
    );
  });
  test.only("Пользователь не может зарегистрироваться повторно fixture2", async ({
    registerUser,
  }) => {
    // todo переделать ассерт
    await expect(registerUser.register.emailErrorText).toContainText(
      "Email already exists.. try logging in"
    );
  });
});

//может падать, не дебажен
