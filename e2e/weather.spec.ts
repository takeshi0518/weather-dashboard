import { test, expect } from '@playwright/test';

test.describe('天気アプリ', () => {
  test('初回表示で東京の天気が表示される', async ({ page }) => {
    await page.goto('/');

    await page.waitForSelector('text=東京都の天気', { timeout: 10000 });

    await expect(page.locator('text=東京都の天気')).toBeVisible();

    await expect(
      page.getByRole('heading', { name: '今日', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: '明日', exact: true })
    ).toBeVisible();
  });
});
