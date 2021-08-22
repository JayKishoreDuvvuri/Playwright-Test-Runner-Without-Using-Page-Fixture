const AddToCartPage = require('../pages/addToCartPage')
const LandingPage = require('../pages/landingPage')
const { productCount } = require('../pageobjects/selectors')
const { test, expect } = require('@playwright/test')

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

test.describe('Add to Cart', function () {
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

	test('click on 20% discuont listed Item', async () => {
		await AddToCartPage.printedChiffonDress()
		await AddToCartPage.clickChiffonDress()
	})

	test('Check whether the Shopping Cart is enabled and click item to add to Cart', async () => {
		await AddToCartPage.clickAddToCart()
	})

	test('Verify whether the product added to Cart message is displayed', async () => {
		await AddToCartPage.cartSuccessMessage()
		let isVisible = await AddToCartPage.cartAddedMessage()
		expect(isVisible).toBeTruthy()
	})

	test('Verify the product count from the Cart', async () => {
		let getProductCount = await AddToCartPage.cartCount()
		expect(getProductCount).toEqual(productCount)
	})
})
