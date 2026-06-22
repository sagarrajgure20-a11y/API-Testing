import { Given, When, Then, And } from "@cucumber/cucumber";
import { chromium } from "playwright";

let browser;
let page;

Given("user navigate to {string}", async function (url){
       browser = await chromium.launch({headless: false});
       page = await browser.newPage();
       await page.goto(url);    
});

When("user enter {string} in {string} textbox", async function (data, dataBox){
    await page.locator("username").fill("");
    console.log("")
});

// When("user enter {string} in {string} textbox", async function(){

// });

// When("user click on login button", async function(){

// });

// When("user validate dashboard", async function(){

// });

// When("user validate error message {string}", async function(errorMsg){

// });