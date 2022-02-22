const puppeteer = require('puppeteer')

async function takeScreenshot(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({ path: 'example.png' })

    await browser.close()
}

takeScreenshot('http://www.facebook.com')