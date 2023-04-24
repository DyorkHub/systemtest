/// <reference types="cypress" />

export class MenuElement {

    clicarHome(){
        cy.get(':nth-child(1) > a').click()
    }
    clicarAbout(){
        cy.get(':nth-child(7) > :nth-child(2) > a').click()
    }
    clicarContact(){
        cy.get(':nth-child(7) > :nth-child(3) > a').click()
    }
    clicarPortfolio(){
        cy.get(':nth-child(7) > :nth-child(4) > a').click()
    }
    clicarGallery(){
        cy.get('.shift').click()
    }
    checkHome(){
        cy.get('.heading').contains(text)
    }
}