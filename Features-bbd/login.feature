

Feature: Login functionality for saucedemo application.

    Background:
        Given user navigate to "https://www.saucedemo.com"

    Scenario: user able to login succesfully.
        When user enter "standard_user" in "Username" textbox
        And user enter "secret_sauce" in "Password" textbox
        And user click on login button
        Then user validate dashboard

    Scenario Outline: Verify error message for execution
        When user enter "<Username>" in "Username" textbox
        And user enter "<Password>" in "Password" textbox
        And user click on login button
        Then user validate error message "<errormsg>"

    Example:
            | Username      | Password     | errormsg                                                                  |
            |               | secret_sauce | Epic sadface: Username is required                                        |
            | standard_user |              | Epic sadface: Password is required                                        |
            | asdsd         | sfsafdf      | Epic sadface: Username and password do not match any user in this service |
            | standard_user | secret_sauce |                                                                           |

# Scenario: user verify error message when user provide empty username.
#     When user enter "" in "useraname" textbox
#     And user enter "password1" in "password" textbox
#     And user click on login button
#     Then user validate error message "Please Provide Username"


# Scenario: user verify error message when user provide empty password.
#     When user enter "username1" in "useraname" textbox
#     And user enter "" in "password" textbox
#     And user click on login button
#     Then user validate error message "Please Provide Password"


# Scenario: user verify error message when user provide wrong credentials.
#     When user enter "fgdf" in "useraname" textbox
#     And user enter "fgdfgfd" in "password" textbox
#     And user click on login button
#     Then user validate error message ""Please Provide Valid Credentials"


