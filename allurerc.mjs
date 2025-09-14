import { defineConfig } from "allure";

export default defineConfig({
  name: "Allure Report Example",
  output: "./out/allure-report",
  plugins: {
    awesome: {
      options: {
        singleFile: false,
        reportLanguage: "en",
      },
    },
  },
});
