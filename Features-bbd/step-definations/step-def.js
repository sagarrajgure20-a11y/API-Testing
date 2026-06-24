import { After, Given, Then, When } from "@cucumber/cucumber";
import { TIMEOUT } from "node:dns";
import { chromium } from "playwright";
import { expect } from "playwright/test";

Given("user navigate to {string}", async function(url){
    await this.page.goto(url, {timeout: 50000});
});

When("user enter {string} in {string} textbox", async function(data, dataBox){
    // await this.page.getByLabel(dataBox).fill(data);
    // console.log("");
    if (dataBox === "Username"){
        await this.page.locator("#user-name").fill(data);
    } else if (dataBox === "Password"){
        await this.page.locator("#password").fill(data)
    }
});

When("user click on login button", async function(){
    await this.page.locator("#login-button").click();
});

Then("user validate error message {string}", async function(errormsg){
    const errorLocator = this.page.locator("[data-test='error']");
    if (!errormsg) {
        await expect(errorLocator).not.toBeVisible();
    } else {
        await expect(errorLocator).toHaveText(errormsg, {timeout: 200000});
    }
});

Then("user validate dashboard", async function(){
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
});