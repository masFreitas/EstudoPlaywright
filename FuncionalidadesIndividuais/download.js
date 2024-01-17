const { chromium } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage();

    await page.goto('https://github.com/gothinkster/react-redux-realworld-example-app');

    await page.click('id=:r1:');

    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('.octicon-file-zip', { timeout: 1500 })
    ])

    const path = await download.path();
    console.log(path);

    download.saveAs('./download.zip');

    await browser.close();
})()
