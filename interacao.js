const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');

    await page.fill('input[type="email"]', 'mateustcteste@gmail.com');
    await page.fill('input[type="password"]', 'Pic@12345');
    await page.click('form >> "Sign in"', {position: {x: 0, y: 0}, button: 'left', modifiers: ['Shift'], force: true, timeout: 45000});
}) ()