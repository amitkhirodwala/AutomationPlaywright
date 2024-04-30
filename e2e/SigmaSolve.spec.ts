import {test, expect} from 'playwright/test';

test('Navigation', async ({page}) => {
    await page.goto('https://sigmasolve.com/');
    await page.pause();
    await expect(page).toHaveTitle(/Digital Transformation Partner | Enterprise Software Development | Sigma Solve/);
});

test('Checking button navigation on homepage', async ({page})=> {
    await page.goto('https://sigmasolve.com/');
    await page.pause();
    await page.getByRole('link', {name:'Contact Us', exact:true}).click();
    await page.pause();
    await page.goto('https://sigmasolve.com/');
    await page.getByRole('link', {name:'Discover More', exact:true}).click();
    // await expect(page).toHaveTitle(/Our Services/);
    // await expect(page).toHaveURL('https://sigmasolve.com/services/');
    await page.pause();
    await page.waitForTimeout(15000);
    await page.getByRole('button', { name: 'Accept All' }).waitFor();
    await page.getByRole('button', { name: 'Accept All' }).click();
    await page.waitForTimeout(10000);
    await page.locator('//*[@id="Navbar"]/div/div/div/section[2]/div/div[4]/div/div/div/form/div[1]').click();
    await page.locator('//*[@id="elementor-search-form-8618160"]').waitFor();
    await page.locator('//*[@id="elementor-search-form-8618160"]').fill('costa');
    await page.locator('//*[@id="elementor-search-form-8618160"]').press('Enter');

}),

test('Checking the contact us form', async ({page})=> {
    await page.goto('https://sigmasolve.com/');
    page.locator('//input[@placeholder="Full name"]').waitFor();
    page.locator('//input[@placeholder="Full name"]').scrollIntoViewIfNeeded();
    page.locator('//input[@placeholder="Full name"]').fill('Amit Khirodwala')
    

    // await page.locator('#Navbar > div > div > div > section.elementor-section.elementor-inner-section.elementor-element.elementor-element-cb802b9.elementor-section-full_width.elementor-section-content-middle.header-bottom-sec.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-20.elementor-inner-column.elementor-element.elementor-element-e925308.elementor-hidden-mobile.search-main-sec > div > div').click();

    // await page.locator('#user-name').fill('testUser1')
    // await page.locator('#password').click();
    // await page.locator('#password').fill('RandomPassWord')
    // await page.locator('#login-button').click();
});

//*[@id="elementor-search-form-8618160"]
