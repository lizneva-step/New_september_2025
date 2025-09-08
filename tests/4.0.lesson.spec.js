//было 1 балл

/*
import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {
  await page.goto("https://realworld.qa.guru/#/register");                 //page - абстрактное значение
  await page.getByRole("textbox", { name: "Your Name" }).click();
  await page.getByRole("textbox", { name: "Your Name" }).fill("Test2408");
  await page.getByRole("textbox", { name: "Your Name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).fill("test2408-1@mail.ru");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("Test2408!");
  await page.getByRole("button", { name: "Sign up" }).click();
  await expect(page.getByText("Test2408")).toBeVisible();
  await expect(page.getByRole("navigation")).toContainText("Test");
});
*/

//стало

import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

//переменная выше области теста, с большой буквы (примитив: строка/текст)
const URL = "https://realworld.qa.guru/";

//Выносим селекторы в отдельные константы (капсом делают индийцы)
//main
const SIGNUP_LINK_TEXT = "Sign up";
//register
const YOUR_NAME_INPUT_TEXT = "Your Name";
const EMAIL_INPUT_TEXT = "Email";
const PASSWORD_INPUT_TEXT = "Password";
const SIGNUP_BUTTON_TEXT = "Sign up";

//нейминг можно посмотреть у фронта
//В названии имя+типселектора: например
// const nameInput = ('textbox', { name: 'Your Name' });

const fillRegistrationForm = async (page, name, email, password) => {
  await page.getByRole("link", { name: SIGNUP_LINK_TEXT }).click();
  await page.getByRole("textbox", { name: YOUR_NAME_INPUT_TEXT });
  await page.getByRole("textbox", { name: YOUR_NAME_INPUT_TEXT }).fill(name);
  await page.getByRole("textbox", { name: YOUR_NAME_INPUT_TEXT }).press("Tab");
  await page.getByRole("textbox", { name: EMAIL_INPUT_TEXT }).fill(email);
  await page.getByRole("textbox", { name: EMAIL_INPUT_TEXT }).press("Tab");
  await page.getByRole("textbox", { name: PASSWORD_INPUT_TEXT }).fill(password);
  await page.getByRole("button", { name: SIGNUP_BUTTON_TEXT }).click();
};

/*
     //   await fillRegistrationForm(page, user); тут пользователь разобран (user.name, user.email...)

const fillRegistrationForm = async (page, user) => {
	await page.getByRole('link', { name: SIGNUP_LINK_TEXT }).click();
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT });
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT }).fill(user.name);
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT }).press('Tab');
	await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).fill(user.email);
	await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).press('Tab');
	await page.getByRole('textbox', { name: PASSWORD_INPUT_TEXT }).fill(user.password);
	await page.getByRole('button', { name: SIGNUP_BUTTON_TEXT }).click();
}; */

test.describe("Регистрация", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test("Пользователь может зарегистрироваться с навигацией через клавиатуру", async ({  //вот так лучше писать
    page,
  }) => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await fillRegistrationForm(page, user.name, user.email, user.password); //подожди пока функция выполнится
    //await fillRegistrationForm(page, user); 
    // тогда вызову функцию регистрационной формы, передам страничку, передам объект пользователя, а разоберём его выше его 52 строка

    await expect(page.getByText(user.name)).toBeVisible();
    await expect(page.getByRole("navigation")).toContainText(user.name);
  });
  /* test('Пользователь может зарегистрироваться с навигацией через клавиатуру', async ({
		page,
	}) => {
		const user = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		await fillRegistrationForm(page, user.name, user.email, user.password);
		//   await fillRegistrationForm(page, user);
    // const { username} = user;

		await expect(page.getByText(username)).toBeVisible();
		await expect(page.getByRole('navigation')).toContainText(username);
	}); */
});

/*
const fillRegistrationForm = async (page, user) => {
    // const {email, password, username} = user;

	await page.getByRole('link', { name: SIGNUP_LINK_TEXT }).click();
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT });
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT }).fill(name);
	await page.getByRole('textbox', { name: YOUR_NAME_INPUT_TEXT }).press('Tab');
	await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).fill(email);
	await page.getByRole('textbox', { name: EMAIL_INPUT_TEXT }).press('Tab');
	await page.getByRole('textbox', { name: PASSWORD_INPUT_TEXT }).fill(password);
	await page.getByRole('button', { name: SIGNUP_BUTTON_TEXT }).click();
}; */
