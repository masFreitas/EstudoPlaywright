const { chromium } = require('playwright');
const { default: expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html');

// ALERT
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept();
    });
    await page.click("//buton[@class='btn btn-default']")

// CONFIRM
    page.on('dialog', dialog => dialog.dismiss());
    await page.click("//buton[@class='btn btn-default btn-lg'][normalize-space()='Click me!']")

// PROMPT
    page.on('dialog', dialog => dialog.accept("QA Camp"));
    await page.click("//buton[normalize-space()='Click For Prompt Box']")

    await context.close();
    await browser.close();
})()
