import {test, expect} from 'playwright/test';

test('Navigation', async ({page}) => {
    await page.goto('https://sigmasolve.com/');
    await page.locator('//*[@id="Navbar"]/div/div/div/section[1]/div/div[1]/div/div/div').click();
    await expect(page).toHaveTitle(/Digital Transformation Partner | Enterprise Software Development | Sigma Solve/);
    await page.screenshot({ path: './Screenshots/NavigationHomePage.png' });
    await page.close();
});

