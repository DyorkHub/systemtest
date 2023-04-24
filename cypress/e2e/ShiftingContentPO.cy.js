/// <reference types="cypress" />

import { MainPage } from "../page-objects/MainPage.js"
import { ShiftingContentPage } from "../page-objects/ShiftingContent.js"
import { MenuElement } from "../page-objects/MenuElement.js"

describe('Pruebas_Menu', () => {

    const mainPage = new MainPage()
    const shiftingContent = new ShiftingContentPage()
    const menuElement = new MenuElement()
    
    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarShiftingContent()
        shiftingContent.clicarMenuElement()
    })
    })
    
    it('Home go to Main Page', () => {
        menuElement.clicarHome()
        menuElement.checkHome("Welcome to the-internet")
    })