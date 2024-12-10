import { test, expect } from '@playwright/test';

test('renders UI libs', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h3').first().innerText()).toContain('UI lib');
});
