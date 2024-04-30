import {test, expect} from 'playwright/test'; 

test('Checking button navigation on homepage', async ({page})=> {
    await page.goto('https://sigmasolve.com/');
    await page.locator('//*[@id="Navbar"]/div/div/div/section[1]/div/div[1]/div/div/div').click();
    await page.getByRole('link', {name:'Contact Us', exact:true}).click();
    await page.pause();
    await page.goto('https://sigmasolve.com/');
    await page.getByRole('link', {name:'Discover More', exact:true}).click();
    await expect(page).toHaveTitle(/Our Services/);
    await expect(page).toHaveURL('https://sigmasolve.com/services/');
    await page.pause();
    // await page.waitForTimeout(15000); //Uncomment if your system is slow
    await page.getByRole('button', { name: 'Accept All' }).waitFor();
    await page.getByRole('button', { name: 'Accept All' }).click();
    // await page.waitForTimeout(10000); //Uncomment if your system is slow
    await page.locator('//*[@id="Navbar"]/div/div/div/section[2]/div/div[4]/div/div/div/form/div[1]').click();
    await page.locator('//*[@id="elementor-search-form-8618160"]').waitFor();
    await page.locator('//*[@id="elementor-search-form-8618160"]').fill('costa');
    await page.locator('//*[@id="elementor-search-form-8618160"]').press('Enter');
    await expect(page).toHaveURL('https://sigmasolve.com/?s=costa');
    await expect(page.getByText('Search Results for: costa')).toBeVisible();
    await page.screenshot ({path: './Screenshots/CTAButtonNavigation.png'});
    await page.close();
});
