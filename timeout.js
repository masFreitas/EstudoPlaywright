const { default: expect } = require('expect');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    context.setDefaultTimeout(450000)
    const page = await context.newPage();
    page.setDefaultTimeout(450000)

    await page.goto('https://react-redux.realworld.io/#/login');
    const title = await page.title();
    expect(title).toBe('Conduit');

    await page.fill('input[type="email"]', 'mateustcteste@gmail.com');
    await page.fill('input[type="password"]', 'Pic@12345');
    await page.click('form >> "Sign in"', { timeout: 450000 });

    await page.waitForSelector('.ion-compose');

    await Promise.all([
        page.waitForNavigation(),
        await page.click('form >> "Sign in"'),
    ])

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[target="_blank"]') //abre nova guia
    ])

    await page.waitForLoadState();

    await browser.close();


})()