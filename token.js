const { chromium } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');

    await page.fill('input[type="email"]', 'mateustcteste@gmail.com');
    await page.fill('input[type="password"]', 'Pic@12345');
    await page.click('button[type="submit"]');

    const html = await page.innerHTML('.feed-toggle');
    expect(html).toMatch('Your Feed');

    await context.storageState({ path: './token.json' })

    await browser.close();
})()
