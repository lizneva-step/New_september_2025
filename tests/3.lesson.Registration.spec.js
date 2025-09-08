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

//Выносим селекторы в отдельные константы

//main
const SIGNUP_LINK_TEXT = "Sign up"; // так делают индусы

//register
const YOUR_NAME_INPUT_TEXT = "Your Name";
const EMAIL_INPUT_TEXT = "Email";
const PASSWORD_INPUT_TEXT = "Password";
const SIGNUP_BUTTON_TEXT = "Sign up";

//нейминг можно посмотреть у фронта
//В названии имя+типселектора: например
// const nameInput = ('textbox', {Your Name});

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

test.describe("Регистрация", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test.only("Пользователь может зарегистрироваться с навигацией через клавиатуру", async ({
    page,
  }) => {
    const name = faker.person.fullName(); // обязательно скобки
    const email = faker.internet.email(); // константа с маленькой буквы (функция) snake case
    const password = faker.internet.password();

    await fillRegistrationForm(page, name, email, password); //подожди пока функция выполнится
    await expect(page.getByText(name)).toBeVisible();
    await expect(page.getByRole("navigation")).toContainText(name);
  });
});
