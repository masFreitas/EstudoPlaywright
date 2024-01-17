const { chromium, devices } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        geolocation: { longitude: 99, latitude: 20},
        permissions: ['geolocation'],
    });
    await context.grantPermissions(['geolocation']);
    
    const page = await context.newPage();
    
    await page.goto('https://www.maps.ie/coordinates.html');
    await page.click('#find-loc');

})()
