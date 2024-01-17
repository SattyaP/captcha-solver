const path = require('path');
const puppeteer = require('puppeteer-extra')
const api = true
let browser = null;

function sleep(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}

const main = async (keyword) => {
    const captcha = path.join(process.cwd(), "extension/captcha/");
    browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [
            `--disable-extensions-except=${captcha}`,
            `--load-extension=${captcha}`,
        ]
    })
    const page = await browser.newPage()

    page.on('load', async () => {
        await solveCaptcha(page)
    })

    if (api) {
        await page.goto('chrome-extension://nlgmghilgmblaebjpcfeodkeaffkifml/src/options/index.html', {
            waitUntil: ['networkidle2', 'domcontentloaded'],
            timeout: 120000
        })

        await page.evaluate(() => {
            document.querySelector("#app > div > div:nth-child(1) > div.option-wrap > div.option.select > div > div.v-input__control > div > div.v-field__field > div").click()
        })
        await sleep(3000)
        await page.evaluate(() => {
            document.querySelector("body > div.v-overlay-container > div > div > div > div:nth-child(3)").click()
        })

        const addApi = await page.$('#app > div > div:nth-child(1) > div.option-wrap > div.wit-add-api > button')
        addApi && await addApi.click()

        const fieldApi = await page.waitForSelector('#input-18')
        fieldApi && await fieldApi.type('YXXP7NHK3HBMWCGU22RJOED3L2XPX3X6')
    }

    await page.goto('https://www.google.com/recaptcha/api2/demo', {
        waitUntil: ['networkidle2', 'domcontentloaded'],
        timeout: 120000
    })

    const searchBox = await page.waitForSelector('textarea[name="q"]', {
        waitUntil : ['networkidle2', 'domcontentloaded'],
        timeout: 120000
    })

    searchBox && await searchBox.type(keyword)
    await Promise.all([
        page.keyboard.press("Enter"),
        page.waitForNavigation({
            waitUntil: 'networkidle2',
            timeout: 120000
        })
    ]);

    await scrollDownToBottom(page);

    await sleep(3000)
    await browser.close()
}

async function solveCaptcha(page) {
    return new Promise(async (resolve, reject) => {
        try {
            const captchaBox = await page.$('[title="reCAPTCHA"]')
            if (captchaBox) {
                console.log("Captcha Found Solve....");
                await captchaBox.click()
                const elIframe = await page.waitForSelector('iframe[title="recaptcha challenge expires in two minutes"]');
                if (elIframe) {
                    const iframe = await elIframe.contentFrame();
                    if (iframe) {
                        const body = await iframe.waitForSelector('body');
                        if (body) {
                            const solverButton = await body.waitForSelector('#solver-button');
                            if (solverButton) {
                                try {
                                    await solverButton.click();
                                    await sleep(10000);
                                    console.log("Solved ✅");
                                    resolve(); // Resolve the promise when operations are completed
                                } catch (error) {
                                    console.error('Error clicking the button:', error.message);
                                    reject(error); // Reject the promise if there's an error
                                }
                            } else {
                                console.error('Button not found in the iframe body.');
                                reject(new Error('Button not found in the iframe body.'));
                            }
                        } else {
                            console.error('Body element not found in the iframe.');
                            reject(new Error('Body element not found in the iframe.'));
                        }
                    } else {
                        console.error('Content frame not found for the iframe.');
                        reject(new Error('Content frame not found for the iframe.'));
                    }
                } else {
                    console.error('Iframe with title "captcha" not found on the page.');
                    reject(new Error('Iframe with title "captcha" not found on the page.'));
                }
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

async function scrollDownToBottom(page) {
    let lastScrollPosition = 0;
    let retries = 3;

    while (retries > 0) {
        const currentScrollPosition = await page.evaluate(() => window.scrollY);
        if (currentScrollPosition === lastScrollPosition) {
            retries--;
        } else {
            retries = 3;
        }

        lastScrollPosition = currentScrollPosition;
        await page.evaluate(() => window.scrollBy(0, 1000));
        await page.waitForTimeout(1000);
    }
}

const proc = async () => {
    try {
        const data = ["thaw", "assertive", "reactor", "paralyzed", "instinct", "atmosphere", "snarl", "iron", "flow", "discrimination", "morning", "or", "oral", "fairy", "promotion", "continuous", "trail", "absolute", "invasion", "frozen", "organize", "leftovers", "inhibition", "tendency", "lane", "embark", "system", "deer", "agile", "disaster", "descent", "sweet", "state", "rumor", "competence", "tape", "astonishing", "estimate", "instrument", "organisation", "purpose", "extinct", "equip", "perceive", "attachment", "spread", "inject", "goal", "reserve", "base"]

        for (let j = 0; j < 10; j++) {
            console.log(`Proses ${j}`);
            for (let i = 0; i < data.length; i++) {
                await main(data[i].trim())
            }
        }

        await browser.close()
    } catch (error) {
        console.error(error);
        await browser.close()
    }
}

proc()
// main()
