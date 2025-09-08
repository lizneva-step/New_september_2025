//взяли 2-ю спеку и рефакторим код из неё

import { test, expect } from "@playwright/test";

const URL = "file:///C:/Users/Tatyan.Lizneva/Desktop/QA_Guru_Auto/demo.html";

              /*
              const NAME = "Tatyana"; - константа всегда большими буквами
              let surname = "Lizneva";
              let belkaAge = 4;
              console.log(NAME); - команда может испольщоваться в консоли браузера
              */

              /*
              let number1= 2;
              let number1= 4;
              let summa = number1+number2;

              Старый способ объявления функции (используется сейчас в определённых случаях):
              Function Declaration (Объявление функции)

                  function functionName(parameters) {
                  // тело функции
                  }

                  function getSumma(number1, number2){
                  const summa = number1+number2;
                  return summa; 
                  }
                  const sum = getSumma(115, 138);
                  console.log(sum);        

              Обновление старого способа объявления функции
              Function Expression (Функциональное выражение)

                  const functionName = function(parameters) {
                  // тело функции
                  };

                  const getSummaAdvanced = function(number1, number2){
                  const summa = number1+number2;
                  return summa; 
                  };

                  const sumAdvanced = getSummaAdvanced (115, 138);
                  console.log(sumAdvanced);

              Новый способ объявления функции (стрелочная) без слова function

                  const functionName = (parameters) => {
                  // тело функции
                  };

                  const getSummaAdvancedV2 = (number1, number2) => {
                  const summa = number1+number2;
                  return summa; 
                  };

                  const sumAdvanced2 = getSummaAdvanced2 (115, 138);
                  console.log(sumAdvanced2);


              */

//введи почту и пароль, получи уведомление
test("Поиск элемента по ID", async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator("#email").click();
  await page.locator("#email").fill("test@test.com");
  await page.locator("#password").click();
  await page.locator("#password").fill("superPassword123");
  await page.locator("#btn").click();

  await expect(page.locator("#welcome-txt")).toContainText("Привет");
});

test("Поиск элемент по атрибуту", async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  await page.locator('[name="email"]').click();
  await page.locator('[name="email"]').fill("test@test.com");
  await page.locator('[id="password"]').click();
  await page.locator('[id="password"]').fill("superPassword123");
  await page.locator("[id=btn]").click();

  await expect(page.locator("[id=welcome-txt]")).toContainText("Привет");
});

test("Поиск элемент по классу", async ({ page }) => {
  // arrange или настройка, предусловие
  await page.goto(URL);
  //await page.locator(".el-input__inner").first.click();

  //await page.locator('.el-input__inner').filter({ hasText: 'Email' }).click();
  // Будет работать по тексту (мб в 6 ти полях элемента), но не плейсхолдеру

  await page
    .locator(".el-input__wrapper")
    .filter({ has: page.locator("#email") })
    .click();
  // найди локатор по классу el-input__wrapper, отфильтруй по ID (дочернего эл-та), кликни

  await page.locator(".el-input__inner").first().fill("test@test.com");
  await page.locator(".el-input__inner").nth(1).click();
  await page.locator(".el-input__inner").nth(1).fill("superPassword123");
  await page.locator("[id=btn]").click();
  await expect(page.locator("[id=welcome-txt]")).toContainText("Привет");
});

test.only("Поиск элемента по семантическим селекторы", async ({ page }) => {
  await page.goto(URL);
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("d@ya.ru");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("superPassword");
  await page.getByRole("button", { name: "Войти" }).click();
  await expect(page.locator('[id="welcome-txt"]')).toContainText("Привет");
});
