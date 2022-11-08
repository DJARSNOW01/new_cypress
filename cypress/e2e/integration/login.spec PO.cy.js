/// <reference types="cypress" />

import {MainPage} from "../page_objects/main.cy"
import {LoginPage} from "../page_objects/login.cy"
import {WelcomePage} from "../page_objects/welcome.cy"


describe("TEST DE LOGIN" , () => {
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()


    beforeEach(() => {
        mainPage.navigate()
        mainPage.clickLoginOption()

    })

    it ('A valid user can login', () =>{
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("SuperSecretPassword!")
        loginPage.ClickButtonLogin()
        welcomePage.checkMessage("You logged into a secure area!")
    })

    it ('A invalid password cannot login', () =>{
        loginPage.fillUser("tomsmith")
        loginPage.fillPass("error!")
        loginPage.ClickButtonLogin()
        welcomePage.checkMessage("Your password is invalid!")
    })

    it ('A invalid user cannot login', () =>{
        loginPage.fillUser("invaliduser")
        loginPage.fillPass("error")
        loginPage.ClickButtonLogin()
        welcomePage.checkMessage("Your username is invalid!")
    })

    it ('A empty user and password cannot login', () =>{
        loginPage.clearUser()
        loginPage.clearPass()
        loginPage.ClickButtonLogin()
        welcomePage.checkMessage("Your username is invalid!")
     

    })
})

