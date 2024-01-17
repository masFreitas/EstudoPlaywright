const { chromium, devices } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 600, height: 600 },
    });
    const page = await context.newPage();

    await page.setViewportSize({ width: 600, height: 600 })

    await page.goto('http://todomvc.com/examples/react/#');
})()
