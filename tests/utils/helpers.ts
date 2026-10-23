import { Page } from '@playwright/test';

export async function waitForElement(page: Page, selector: string, timeout = 5000) {
  return await page.waitForSelector(selector, { timeout });
}

export async function fillForm(page: Page, data: Record<string, string>) {
  for (const [field, value] of Object.entries(data)) {
    await page.fill(`[name="${field}"]`, value);
  }
}

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({ path: `screenshots/${name}.png` });
}

export async function waitForNavigation(page: Page) {
  await page.waitForLoadState('networkidle');
}
