/// <reference types="cypress" />

export class MainPage {

        visitarMainPage () {
            cy.visit('https://the-internet.herokuapp.com/')
        }
        clicarShiftingContent(){
            cy.get(':nth-child(39) > a').click()
        }
        clicarFormAuthentication(){
            cy.get(':nth-child(21) > a').click()
        }
}