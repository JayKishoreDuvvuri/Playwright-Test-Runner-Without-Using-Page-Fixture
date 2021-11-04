### Playwright with Playwright Test Runner 

Design Page Objects and run Tests with JavaScript
Description
```bash
We have not used { Page } fixture in the tests in test blocks that's the reason screenshot and videos are not working and captured. Only Retries option works here.
I have posted th github issues at the bottom of the page. The tests will run fine with generating report.
```

### Run application

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
                    


### Allure Test Report
```bash
Allure-test-report : npm run generate-report
```

### Docker Locally
```bash
docker build -t playwright:v1 .
docker run -it playwright:v1   
```

### From Docker Hub
```bash
docker pull jaykishoreduvvuri/playwright:v1   
docker run -it jaykishoreduvvuri/playwright:v1  
```

### GitHub issues on Playwright {Page, Context}
```bash
https://github.com/microsoft/playwright/issues/8402 
https://github.com/microsoft/playwright/issues/8354
https://github.com/microsoft/playwright/issues/8428
```
