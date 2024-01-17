const { chromium } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ storageState: 'token.json' });
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/');

    const html = await page.innerHTML('.feed-toggle');
    expect(html).toMatch('Your Feed');
    await page.waitForTimeout(5000);

    await browser.close();
})()
