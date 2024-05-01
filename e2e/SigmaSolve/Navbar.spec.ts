import {test, expect} from '@playwright/test'

test('Clicking Navbar links with assertions', async ({page}) => {

    page.goto('https://sigmasolve.com/');
    test.slow();
    await page.getByText('Leverage Our Technology').click();
    await page.getByRole('button', { name: 'Accept All' }).waitFor();
    await page.getByRole('button', { name: 'Accept All' }).click        ();

//Services Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    await page.getByRole('link', { name: 'Services', exact: true }).hover();
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    expect (page.locator('h1')).toBeVisible();
    expect (page).toHaveURL('https://sigmasolve.com/services/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({ path: './Screenshots/NavBarServices.png'});

//Solutions Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Solutions', exact: true }).click();
    await page.getByRole('link', { name: 'Solutions', exact: true }).hover();
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    expect (page.getByRole('heading', { name: 'Our Solutions' })).toBeVisible();
    expect (page).toHaveURL('https://sigmasolve.com/solutions/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({ path: './Screenshots/NavBarSolutions.png'});

//Company Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Company', exact: true }).click();
    await page.getByRole('link', { name: 'Company', exact: true }).hover();
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    expect (page.getByRole('heading', { name: 'About Us' })).toBeVisible();
    expect (page).toHaveURL('https://sigmasolve.com/about-us/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({path: './Screenshots/NavBarCompany.png'      });

//Works Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Works', exact: true }).click();
    await page.getByRole('link', { name: 'Works', exact: true }).hover();
    expect (page).toHaveURL('https://sigmasolve.com/success-stories/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    expect (page.getByRole('heading', { name: 'Success Story' }).first()).toBeVisible();
    expect (page).toHaveURL('https://sigmasolve.com/success-stories/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({path: './Screenshots/NavBarSuccessStory.png'})

//Blog Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Blog', exact: true }).click();
    await page.getByRole('link', { name: 'Blog', exact: true }).hover();
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    expect (page.getByRole('heading', { name: 'Insights' })).toBeVisible();
    expect (page).toHaveURL('https://sigmasolve.com/blog/');
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({path: './Screenshots/NavBarBlog.png'})

//Industries Tab Click and Assertion with Url Verification and screenshot
    await page.getByRole('link', { name: 'Industries', exact: true }).click();
    await page.waitForLoadState(); // The promise resolves after 'load' event.
    await page.screenshot({path: './Screenshots/NavBarIndustriesList.png'}      ); 

//Contact Tab Click and Assertion with Url Verification and screenshot
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Contact', exact: true }).click();
    await page.getByRole('link', { name: 'Contact', exact: true }).hover();
    const page1 = await page1Promise;
    await page1.waitForLoadState(); // The promise resolves after 'load' event.
    expect(page1.locator('section').filter({ hasText: 'Let’s Talk Get In Touch We' }).first()).toBeVisible
    expect (page1).toHaveURL('https://sigmasolve.com/contact/');
    await page1.screenshot({path: './Screenshots/NavBarContactUs.png'}); 

    page.close();
    page1.close();
});