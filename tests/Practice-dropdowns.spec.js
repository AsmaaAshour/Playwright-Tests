//ts-check
import { test, expect } from "@playwright/test";

test("dropdowns", async ({ page }) => {
  await page.goto(
    "https://chercher.tech/practice/practice-dropdowns-selenium-webdriver"
  );
  await page.waitForTimeout(3000);

  //testing multipledropdown using label
  //await page.locator("//select[@id='second']").selectOption([{label:"Pizza"},{label:"Burger"}])

  //testing multipledropdown using index
  await page
    .locator("//select[@id='second']")
    .selectOption([{ index: 0 }, { index: 1 }, { index: 2 }]);
  await page.waitForTimeout(5000);
});
