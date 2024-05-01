import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sigmasolve.com/');
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Solutions', exact: true }).click();
  await page.getByRole('link', { name: 'Company' }).click();
  await page.getByRole('link', { name: 'Works' }).click();
  await page.getByRole('heading', { name: 'Success Story' }).first().click();
  await page.getByText('Our expertise extends across').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Contact' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Full name' }).click();
  await page1.getByRole('textbox', { name: 'Full name' }).fill('Amit Khirodwala');
  await page1.getByRole('textbox', { name: 'Full name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Business mail' }).fill('akhirodwala@sigmasolve.com');
  await page1.getByRole('textbox', { name: 'Phone Number' }).click();
  await page1.getByRole('textbox', { name: 'Phone Number' }).fill('+010294859604');
  await page1.getByRole('textbox', { name: 'Company' }).click();
  await page1.getByRole('textbox', { name: 'Company' }).fill('MastWaali');
  await page1.getByRole('combobox').selectOption('Above USD 100,000');
  await page1.getByRole('textbox', { name: 'How can we help you?' }).click();
  await page1.getByRole('textbox', { name: 'How can we help you?' }).fill('Lorem ipsum');
  await page1.getByRole('checkbox').uncheck();
});