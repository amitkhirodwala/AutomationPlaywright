import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sigmasolve.com/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('link', { name: ' Servicesor.click: Test timeout of 30000ms exceeded.Call log:  - waiting for getByRole('button', { name: 'Accept All' })  -   locator resolved to <button aria-label="Accept All" data-cky-tag="accept-but%E2%80%A6>Accept All</button>  - attempting click action' }).click();
  await page.getByRole('link', { name: 'Robotic Process Automation' }).click();

});