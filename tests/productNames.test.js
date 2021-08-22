const LandingPage = require('../pages/landingPage')
const { test } = require('@playwright/test')

// ### 1. Launch the Application
// ### 2. Arrive on the Landing Page
// ### 3. Verify the product names are visible
// ### 4. Print the Name of Products in to the Test Reort

test.describe('Check Product Names Visible and Print it to Test Report', () => {
	test.beforeAll(async () => {
		await LandingPage.open()
	})

	test.afterAll(async () => {
		await LandingPage.close()
	})

	test('Check the title and url on the Landing Page', async () => {
		await LandingPage.getTitle()
		await LandingPage.getUrl()
		await LandingPage.waitForPageLoad()
	})

	test('Check the product name: Faded Short Sleeve T-shirts is visible', async () => {
		await LandingPage.fadedShortSleeveTshirts()
	})

	test('Check the product name: Blouse is visible', async () => {
		await LandingPage.blouse()
	})

	test('Check the product name: Printed Dress is visible', async () => {
		await LandingPage.printedDress()
	})

	test('Check the product name: Printed Dress Two is visible', async () => {
		await LandingPage.printedDressTwo()
	})

	test('Check the product name: Printed Summer Dress is visible', async () => {
		await LandingPage.printedSummerDress()
	})

	test('Check the product name: Printed Summer Dress Two is visible', async () => {
		await LandingPage.printedSummerDressTwo()
	})

	test('Check the product name: Printed Chiffon Dress is visible', async () => {
		await LandingPage.printedChiffonDress()
	})
})
