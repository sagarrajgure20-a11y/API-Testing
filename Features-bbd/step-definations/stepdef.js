// import { Given, When, Then } from "@cucumber/cucumber";
// import { chromium } from "playwright";

// let browser;
// let page;

// Given("user navigate to {string}", async function (url){
//        browser = await chromium.launch({headless: false});
//        page = await browser.newPage();
//        await page.goto(url);    
// });

// When("user enter {string} in {string} textbox", async function (data, dataBox){
    

// });


// //     const field = (dataBox || "").toLowerCase();
// //     // basic selector mapping — adjust to your app's real selectors
// //     const selector = field.includes("user")
// //         ? 'input[name="username"], input#username, input[name="useraname"]'
// //         : 'input[name="password"], input#password';
// //     await page.fill(selector, data);
// // });

// // When("user click on login button", async function (){
// //     await page.click('button[type="submit"], button#login, input[type="submit"]');
// // });

// // Then("user validate dashboard", async function (){
// //     // crude validation: wait a bit — replace with real checks
// //     await page.waitForTimeout(1000);
// // });

// // After(async function (){
// //     if (browser) await browser.close();
// // });

// // When("user enter {string} in {string} textbox", async function(){

// // });

// // When("user click on login button", async function(){

// // });

// // When("user validate dashboard", async function(){

// // });

// // When("user validate error message {string}", async function(errorMsg){

// // });