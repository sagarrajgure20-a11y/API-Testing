import { After, Given, Then, When } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { expect } from "playwright/test";

let browser;
let page;

Given("user navigate to {string}", async function(url){
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto(url);
});

When("user enter {string} in {string} textbox", async function(data, dataBox){
    if (dataBox === "Username"){
        await page.locator("#user-name").fill(data);
    } else if (dataBox === "Password"){
        await page.locator("#password").fill(data)
    }
});

When("user click on login button", async function(){
    await page.locator("#login-button").click();
});

Then("user validate error message {string}", async function(errormsg){
    const errorLocator = page.locator("[data-test='error']");
    if (!errormsg) {
        await expect(errorLocator).not.toBeVisible();
    } else {
        await expect(errorLocator).toHaveText(errormsg);
    }
});

Then("user validate dashboard", async function(){
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

After(async function() {
    if (page) await page.close();
    if (browser) await browser.close();
});