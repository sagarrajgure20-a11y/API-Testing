import { Given, Then, When } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { expect } from "playwright/test";

let browser;
let page;

Given("user navigate to {string}", async function(URL){
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("URL");
});

When("user enter {string} in {string} textbox", async function(data, dataBox){
    if (dataBox === "Username"){
        await page.locator("[id='user-name']").fill(data);
    } else if (dataBox === "Password"){
        await page.locator("[id='password']").fill(data)
    }
});

When("user click on login button", async function(){
    await page.locator("[id='login-button']").click();
});

Then("user validate error message {string}", async function(errormsg){
    const errorLocator = page.locator("[data-test='error']");
    await expect(errorLocator).toHaveText(errormsg);
});

Then("user validate dashboard", async function(){
    await expect(page).toHaveURL("/inventory.html");
})