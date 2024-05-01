import {test, expect} from '@playwright/test'

test('Clicking Navbar links with assertions', async ({page}) => {

    page.goto('https://sigmasolve.com/');

    await page.locator('//*[@id="Navbar"]/div/div/div/section[1]/div/div[1]/div/div/div').click();
    await page.getByRole('button', { name: 'Accept All' }).waitFor();
    await page.getByRole('button', { name: 'Accept All' }).click        ();

//Services Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    page.pause();
    expect (page.locator('h1')).toBeVisible();
    page.pause();
    await page.screenshot({ path: './Screenshots/NavBarServices.png'});

//Solutions Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Solutions', exact: true }).click();
    page.pause();
    expect (page.getByRole('heading', { name: 'Our Solutions' })).toBeVisible();
    page.pause();
    await page.screenshot({ path: './Screenshots/NavBarSolutions.png'});

//Company Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Company', exact: true }).click();
    page.pause();
    expect (page.getByRole('heading', { name: 'About Us' })).toBeVisible();
    page.pause();
    await page.screenshot({path: './Screenshots/NavBarCompany.png'      });

//Works Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Works', exact: true }).click();
    expect (page).toHaveURL('https://sigmasolve.com/success-stories/');
    page.pause();
    expect (page.getByRole('heading', { name: 'Success Story' }).first()).toBeVisible();
    page.pause();
    await page.screenshot({path: './Screenshots/NavBarSuccessStory.png'})


//Blog Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    page.pause();
    expect (page.getByRole('heading', { name: 'Insights' })).toBeVisible();
    page.pause();
    await page.screenshot({path: './Screenshots/NavBarBlog.png'})


//Industries Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Industries', exact: true }).click();
    page.pause();
    await page.screenshot({path: './Screenshots/NavBarIndustriesList.png'}      ); 

//Contact Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    page.pause();
    expect(page.locator('section').filter({ hasText: 'Let’s Talk Get In Touch We' }).first()).toBeVisible
    await page.screenshot({path: './Screenshots/NavBarContactUs.png'}); 

page.close();
page.close();

});