import {  expect } from '@playwright/test';
import test from '../lambda.setup';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('msg validation', () => {
  test('should validate msg', async ({ page }) => {
    await page.fill('#msg', 'test');
    await page.click('text=Send');
    await page.waitForSelector('#msg-error');
    const msgError = await page.$eval('#msg-error', (el) => el.textContent);
    expect(msgError).toBe('msg is required');
  });
});