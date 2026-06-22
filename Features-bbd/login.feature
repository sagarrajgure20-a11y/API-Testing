

Feature: Login functionality forabcd application.

    Background:
        Given user navigate to "http://www.amazon.com"

    # Scenario: user able to login succesfully.
    #     When user enter "username1" in "useraname" textbox
    #     And user enter "password1" in "password" textbox
    #     And user click on login button
    #     Then user validate dashboard

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

    Scenario Outline: Verify error message for execution
        When user enter "<username>" in "useraname" textbox
        And user enter "<password>" in "password" textbox
        And user click on login button
        Then user validate error message "<errormsg>"

    Example:
            | useraname | password  | errormsg                         |
            |           | password1 | Please Provide useraname         |
            | username1 |           | Please Provide password          |
            | asdsd     | sfsafdf   | Please Provide Valid Credentials |
