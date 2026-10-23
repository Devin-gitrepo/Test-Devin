import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

// These tests are examples for a local application.
// Uncomment and modify when you have a real application to test.
/*
test.describe('Login Page', () => {
  test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login('invalid', 'credentials');
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await loginPage.login('validuser', 'validpassword');
    
    await expect(page).toHaveURL('/dashboard');
  });
});
*/
