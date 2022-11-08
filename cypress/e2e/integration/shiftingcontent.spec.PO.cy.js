/// <reference types="cypress" />

import {MainPage} from "../page_objects/main.cy"
import {ShiftingPage} from "../page_objects/ShiftingContent.cy"
import {ElementPage} from "../page_objects/elementosSC.cy"


describe("TEST DE SHIFTING" , () => {
    const mainPage = new MainPage()
    const shiftingPage = new ShiftingPage()
    const elementPage = new ElementPage()

    beforeEach(() => {
        mainPage.navigate()
        mainPage.clickShiftingOption()
    })

    it ('Shifting Conten 5 elements' , () =>{
        shiftingPage.clickExample1()
        elementPage.CheckHave5Element()
    })



})