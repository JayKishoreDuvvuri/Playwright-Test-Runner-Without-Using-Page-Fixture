const BasePage = require('./basePage')
const {
	blouse,
	fadedShortSleeveTshirts,
	printedChiffonDress,
	printedDress,
	printedDressTwo,
	printedSummerDress,
	printedSummerDressTwo
} = require('../pageobjects/selectors')
const { baseUrl, timeout } = require('../util')

class LandingPage extends BasePage {
	constructor() {
		super(baseUrl, timeout)
	}

	async open() {
		await super.open()
		await super.waitForPageLoad()
	}

	async fadedShortSleeveTshirts() {
		return await this.isElementVisible(fadedShortSleeveTshirts)
	}

	async blouse() {
		return await this.isElementVisible(blouse)
	}

	async printedDress() {
		return await this.isElementVisible(printedDress)
	}

	async printedDressTwo() {
		return await this.isElementVisible(printedDressTwo)
	}
	async printedSummerDress() {
		return await this.isElementVisible(printedSummerDress)
	}
	async printedSummerDressTwo() {
		return await this.isElementVisible(printedSummerDressTwo)
	}
	async printedChiffonDress() {
		return await this.isElementVisible(printedChiffonDress)
	}
}
module.exports = new LandingPage()
