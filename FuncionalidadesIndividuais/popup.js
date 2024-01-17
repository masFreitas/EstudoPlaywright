const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open'),
    ])

    await browser.close();

})()