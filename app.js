const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

async function translateText(text) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://translate.google.com/?hl=es&sl=en&tl=es&op=translate');
    await page.waitForSelector('textarea');
    await page.type('textarea', text);
    await page.waitForSelector('span[jsname="W297wb"]');
    const translation = await page.$eval('span[jsname="W297wb"]', el => el.textContent);
    await browser.close();
    return translation.trim();
}

app.post('/translate', async (req, res) => {
    const text = req.body.text;

    try {
        const translation = await translateText(text);
        res.status(200).json({ translation: translation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/', (req, res) => res.json({ message:'Hello Andres' }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
