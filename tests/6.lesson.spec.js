import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MainPage, RegisterPage } from "../src/pages/index";
import { UserBuilder } from "../src/builders/index";

const URL = "https://realworld.qa.guru/";

test.describe("Регистрация", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test("Пользователь не может зарегистрироваться повторно", async ({
    page,
  }) => {
    const userDTO = {
      name: "",
      email: "",
      password: "",
      dto(overrides = {}) {
        return {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          ...overrides,
        };
      },
    };
    //const user = userDTO.dto();
    const user = userDTO.dto({ email: "dlove@yandex.ru" });
    /* const userDTO = {
			id: null,
			email: '',
			age: 0,
			isActive: true,
			dto(overrides = {}) {
				return {
					email: this.email,
					id: Date.now(),
					isActive: false,
					...overrides,
				};
			},
		};

		//const userDemo = userDTO.dto();
		const userDemo = userDTO.dto({ age: 25 });

		console.log(userDemo);
		*/
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);

    // todo переделать ассерт
    await expect(registerPage.emailErrorText).toContainText(
      "Email already exists.. try logging in"
    );
  });
  test("Пользователь не может зарегистрироваться повторно Builder", async ({
    page,
  }) => {
    const user = new UserBuilder()
      .addEmail()
      .addName()
      .addPassword()
      .generate();

    console.log(user);
    const mainPage = new MainPage(page);
    const registerPage = new RegisterPage(page);

    await mainPage.gotoRegister();
    await registerPage.register(user);

    // todo переделать ассерт
    await expect(registerPage.emailErrorText).toContainText(
      "Email already exists.. try logging in"
    );
  });
});
