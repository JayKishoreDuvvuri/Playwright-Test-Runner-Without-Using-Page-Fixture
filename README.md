## Playwright Test Runner 

Design Page Objects and run Tests with JavaScript

## Run application

Clone the repository 
 
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Test-Runner.git
```

Install dependencies

```bash
Install Node modules: npm install
```

Run test

```bash
npm test
```

Folder Structure
 
    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── landingPage.js                  # Landing page testing functionality
    │   ├── addToCartPage.js                # Add To Cart page testing functionality
    │   ├── productPage.js                  # Product page testing functionality
    │
    ├── tests                               # Test suite
    │    ├── addToCart.test.js              # Automated Test Script     
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    │── util.js                             # Confiuguration JavSacript File
    │
    │
    ├── pageobjects                       
    │    ├──selectors.js                    # HTML and CSS identifier for elements to test
    │               
    │
    └─── Allure-test-report                 # Allure Test report for the tests executed
                    


```bash
Allure-test-report : npm run generate-report
```

