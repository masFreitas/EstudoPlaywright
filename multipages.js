const { chromium } = require('playwright');

// Multiplos contextos
(async () => {
    const browser = await chromium.launch({ headless: false });

    const userContext = await browser.newContext();
    const adminContext = await browser.newContext();
    
    await browser.close();
})()

// Multiplas paginas
(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    
    const pageOne = await context.newPage()
    const pageTwqo = await context.newPage()
    
    await browser.close();
})()

// Nova Guia
(async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://react-redux.realworld.io/#/login');

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[target="_blank"]'),
    ])
    
    await browser.close();
})()

