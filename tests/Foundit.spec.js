//ts-check
import { test, expect } from "@playwright/test";

test("upload File", async ({ page }) => {
  await page.goto("https://www.founditgulf.com/seeker/registration");

  const FileInput = await page.locator("input[type='file']");
  await FileInput.setInputFiles(
    "C:/Users/User/Desktop/Playwright Projects/Multiple Websites/asmaa cv2.pdf"
  );

  await page.waitForTimeout(3000);
});
