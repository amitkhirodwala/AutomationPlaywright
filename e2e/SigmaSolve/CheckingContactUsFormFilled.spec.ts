import {test, expect} from 'playwright/test';

test('Checking the contact us form', async ({page})=> {
    await page.goto('https://sigmasolve.com/');
    await page.locator('//*[@id="Navbar"]/div/div/div/section[1]/div/div[1]/div/div/div').click();
    await page.getByRole('button', { name: 'Accept All' }).waitFor();
    await page.getByRole('button', { name: 'Accept All' }).click();
    await page.locator('//input[@placeholder="Full name"]').scrollIntoViewIfNeeded();
    await page.locator('//input[@placeholder="Full name"]').waitFor();
    await page.locator('//input[@placeholder="Full name"]').fill('Amit Khirodwala')
    await page.locator('//input[@placeholder="Business mail"]').fill('akhirodwala@sigmasolve.com')
    await page.locator('//input[@placeholder="Phone Number"]').fill('+01 123456789')
    await page.locator('//input[@placeholder="Company"]').fill('TestCompanyAutomation')
    await page.locator('#wpcf7-f783-o1 > form > div.f-contact-form > ul > li:nth-child(5) > p > span > select').click();
    await page.locator('#wpcf7-f783-o1 > form > div.f-contact-form > ul > li:nth-child(5) > p > span > select').selectOption({value: 'USD 10,000 - 20,000'});
    await page.locator('//*[@id="wpcf7-f783-o1"]/form/div[2]/ul/li[6]/p/span/textarea').fill('Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum')
    await page.locator('//input[@name="agreecheck[]"]').uncheck();
    
    await page.screenshot({ path: './Screenshots/ContactUsFormFilled.png' });
});