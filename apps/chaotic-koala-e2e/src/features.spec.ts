import { test, expect } from '@playwright/test';

test('has titles', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h2').first().innerText()).toContain('Welcome');
});
