import {  expect } from '@playwright/test';
import test from '../lambda.setup';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('verify message', () => {
  test('verify message on the Page', async ({ page }) => {
    await page.locator("text=Welcome to Contoso Traders").click()
    await expect(page).toHaveURL('http://localhost:3000/');
  })   
});

test.describe('verify message', () => {
  test('verify message on the Page', async ({ page }) => {
    await page.locator("text=Welcome to Contoso Traders").click()
    await expect(page).toHaveURL('http://localhost:3000/');
  })   
});


