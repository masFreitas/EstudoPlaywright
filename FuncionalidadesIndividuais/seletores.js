const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://react-redux.realworld.io/#/login');

    //HTML attribute - class
    const signIn = await page.$('.btn');

    //CSS Selector
    const signIn = await page.$('css=button');
    const signIn = await page.$('button');

    //Xpath
    const signIn = await page.$('//button[@type="submit"]');

    //Text
    const signIn = await page.$('text="Sign in"');
    const signIn = await page.$('text=Sign in');
    const signIn = await page.$('"Sign in"');

    //Element handle
        //Podemos localizar um atributo, 
        //e depois pesquisar o elemento que quisermos dentro do atributo encontrado
    const form = await page.$('css=form');
    const signIn = await form.$('"Sign in"');

        //Também pode ser feito em 1 linho só
    const signIn = await page.$('form >> "Sign in"');
    await signIn.click();

    //Localizar multiplos elementos com page.$$
    const input = await page.$$('.form-control');
    await input[0].click();
    await input[1].click();

}) ()