import {test, expect} from "@playwright/test"

test.beforeEach(async({page})=>{
    await page.goto("file:///D:/Plawright%20Folder/API%20Testing/html/html/test1.html");
})

test("Verify the Tital, URL and Heading of the page - @smoke", async({page})=>{
    await expect(page).toHaveTitle("Registration Form");
    await expect(page).toHaveURL("file:///D:/Plawright%20Folder/API%20Testing/html/html/test1.html");
    await expect(page.locator("h1")).toHaveText("User Registration Form");
});

test("Learning Textbox in playwright - @smoke", async({page})=>{
    await page.getByPlaceholder("Enter username").fill("Sagar Rajgure"); // To fill username
    await page.getByPlaceholder("Enter password").fill("Sagar@143");  // To fill password
    await page.getByLabel("Graduation").click();    // For Label
    await page.getByLabel("English").click();        // For Label
    // await page.locator("//label[text()='Languages']/..").getByLabel("Hindi").click();
    await page.locator("input[name='gender']").nth(0).click();
    await page.locator("input[name='nationality']").nth(0).click();
})

test("Select option from the dropdown - @smoke", async({page})=>{
    await page.locator("[id='country']").selectOption({label:"India"});
})

test("Open Dashboard - @smoke", async({page})=>{
    await page.goto("https://www.google.com/dashboard")
})

test("Entering text in the search texbox which is present in the frame - @smoke", async({page})=>{
    let frame1 = await page.frameLocator("[id='myframe']");
    await frame1.locator("[id='searchInput']").fill("Good Morning");
    await frame1.locator("button", {hasText:"Search"}).click();
})

test("Check the data from the table - @smoke", async({page})=>{
    let Occupation = await page.locator("table").locator("tr").filter({hasText:"Emma"}).locator("td").nth(2).textContent();
    await expect (Occupation).toBe("Doctor");
    await page.screenshot({ path: 'screenshots/test-result.png', fullPage: true });
})

test.only("checking window 1", async({page})=>{
    const user = page.getByPlaceholder("Enter Username");  // Double click 
    await user.dblclick();
    await user.fill("Sagar Rajgure")
             
    const image = page.getByAltText("Sample Image");  // Right click
    await expect(image).toBeVisible();
    await image.scrollIntoViewIfNeeded();
    await image.click({ button: 'right', timeout: 5000 });
    
    await page.mouse.move(100,200);                   // Mouse Move to specific location
    // page.locator("").hover();                   // To hover the curser
    // page.locator("").click();                   // Single click

    // To add javascript inside a browser

    page.evaluate(() => {
              document.getElementById('').value = '';
    });
})