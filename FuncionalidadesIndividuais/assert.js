const { default: expect } = require('expect');
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
    expect(logoText).toBe('conduit');

    const logoHref = await page.$eval('.navbar-brand', el => el.href);
    expect(logoHref).toBeDefined();

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length);
    expect(popularTagsCount).toBeGreaterThanOrEqual(5);
    expect(popularTagsCount).toBeLessThanOrEqual(30);
    expect(popularTagsCount).toEqual(20);

    const html = await page.innerHTML('.navbar-brand');
    expect(html).toMatch('Your Feed');

    const attribute = await page.getAttribute('.navbar-brand', 'href');
    expect(attribute).not.toMatch('https://react-redux.realworld.io');
    
    await browser.close();

}) ()