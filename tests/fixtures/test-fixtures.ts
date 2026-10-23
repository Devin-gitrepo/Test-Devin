import { test as base, Page } from '@playwright/test';

type TestFixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Perform authentication
    await page.goto('/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'testpass');
    await page.click('button[type="submit"]');
    
    // Wait for navigation to dashboard
    await page.waitForURL('/dashboard');
    
    // Use the authenticated page in tests
    await use(page);
    
    // Cleanup if needed
  },
});

export const expect = test.expect;
