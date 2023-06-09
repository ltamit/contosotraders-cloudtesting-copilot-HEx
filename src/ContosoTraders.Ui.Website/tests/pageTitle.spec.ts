import {  expect } from '@playwright/test';
import test from '../lambda.setup';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('should have the correct page title', async ({ page }) => {
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Contoso Traders');
});
