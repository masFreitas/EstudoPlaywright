const { chromium, devices } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const iphone13 = devices["iPhone 13"];
    const context = await browser.newContext({ ...iphone13 });
    const page = await context.newPage();

    await page.goto('https://www.maps.ie/coordinates.html');


})()
