import {  expect } from '@playwright/test';
import test from '../lambda.setup';
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});



//   test('verify message on site', async ({ page }) => {
//     await page.getByText("Memorial Sale Week is Live !")
//     await expect(page).toBeTruthy();
//   })



// test('verify message on site', async ({ page }) => {
//     await page.getByText("Weekend Offers !")
//     await expect(page).toBeTruthy();
//   });

test.describe('Verify message on site', () => { 
  test('verify message on site', async ({ page }) => {
    await page.getByText("Thursday Special Deals!")
    await expect(page).toBeTruthy();
  })
  });




