import {test, expect} from 'playwright/test';

test('Navigation', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login', async ({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('testUser1')
    await page.locator('#password').click();
    await page.locator('#password').fill('RandomPassWord')
    await page.locator('#login-button').click();
});


