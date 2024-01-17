const { chromium } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

    await page.setInputFiles('input[type="file"]', 'Screenshot_1.png');
    await page.click('input[type="submit"]');

    const html = await page.innerHTML('p');
    expect(html).toMatch("You've uploaded a file");
    
    await browser.close();
})()
