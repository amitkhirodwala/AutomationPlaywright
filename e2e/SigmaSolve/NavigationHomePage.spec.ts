import {test, expect} from 'playwright/test';

test('Basic Navigation to the site', async ({page}) => {
    await page.goto('https://sigmasolve.com/');
    await page.getByText('Leverage Our Technology').click();
    await expect(page).toHaveTitle(/Digital Transformation Partner | Enterprise Software Development | Sigma Solve/);
    await page.screenshot({ path: './Screenshots/NavigationHomePage.png' });
    await page.close();
});

