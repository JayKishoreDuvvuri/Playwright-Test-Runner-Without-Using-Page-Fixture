const { timeout } = require('../util')
const { homePageImage } = require('../pageobjects/selectors')
const { chromium } = require('playwright')

let browser, context, page

class BasePage {
	constructor(path, timeout) {
		this.path = path
		this.timeout = timeout
	}

	async getTitle() {
		return await page.title()
	}

	async open() {
		browser = await chromium.launch()
		context = await browser.newContext()
		page = await context.newPage()
		await page.goto(this.path)
	}

	async close() {
		await context.close()
		await browser.close()
	}

	async getUrl() {
		return page.url()
	}

	//Wait for the Page to Load
	async waitForPageLoad() {
		const isVisible = await page.waitForSelector(homePageImage, {
			timeout: timeout,
			visible: true
		})
		return isVisible
	}

	//wait and find a specific element with it's Selector and return Visible
	async isElementVisible(selector) {
		let isVisible = true
		await page
			.waitForSelector(selector, { visible: true, timeout: timeout })
			.catch(() => {
				isVisible = false
			})
		return isVisible
	}

	// wait and type for the element
	async waitAndType(Selector, text) {
		await page.waitForSelector(Selector)
		await page.click(Selector, { clickCount: 3 })
		await page.keyboard.press('Backspace')
		await page.type(Selector, text)
	}

	// wait and click the element
	async waitAndClick(Selector) {
		await page.waitForSelector(Selector)
		return page.click(Selector)
	}

	// Get text of the element
	async getText(Selector) {
		await page.waitForSelector(Selector)
		const text = await page.$eval(Selector, element => element.innerHTML)
		return text
	}

	// Get Count of the elements
	async getCount(Selector) {
		await page.waitForSelector(Selector)
		const count = await page.$$eval(Selector, elements => elements.length)
		return count
	}

	// Get Result for Black colour
	async blackColourResult() {
		const result = await page.evaluate(
			'document.querySelector("#color_11").getAttribute("class")'
		)
		return result
	}

	// Get Result for Orange colour
	async orangeColourResult() {
		const result = await page.evaluate(
			'document.querySelector("#color_13").getAttribute("class")'
		)
		return result
	}

	// Get Result for Blue colour
	async blueColourResult() {
		const result = await page.evaluate(
			'document.querySelector("#color_14").getAttribute("class")'
		)
		return result
	}

	// Get Result for yellow colour
	async yellowColourResult() {
		const result = await page.evaluate(
			'document.querySelector("#color_16").getAttribute("class")'
		)
		return result
	}

	// Get Result for black, blue, orange and yellow colour image updated
	async ColourImageUpdated() {
		const result = await page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}
}
module.exports = BasePage
