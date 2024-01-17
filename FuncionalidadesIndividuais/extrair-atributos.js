const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://react-redux.realworld.io/#/login');

    await page.fill('input[type="email"]', 'mateustcteste@gmail.com');
    await page.fill('input[type="password"]', 'Pic@12345');
    await page.click('form >> "Sign in"', {position: {x: 0, y: 0}, button: 'left', modifiers: ['Shift'], force: true, timeout: 45000});

    await page.waitForTimeout(5000);

    const logoText = await page.$eval('.navbar-brand', el => el.innerText);
    console.log('logoText: ' + logoText);

    const logoHref = await page.$eval('.navbar-brand', el => el.href);
    console.log('logoHref: ' + logoHref);

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length);
    console.log('popularTagsCount: ' + popularTagsCount);

    const content = await page.textContent('.navbar-brand');
    console.log('content', + content)

    const text = await page.innerText('.navbar-brand');
    console.log('text', + text)

    const html = await page.innerHTML('.navbar-brand');
    console.log('html', + html)

    const attribute = await page.getAttribute('.navbar-brand', 'href');
    console.log('attribute', + attribute)
    
    await browser.close();

}) ()