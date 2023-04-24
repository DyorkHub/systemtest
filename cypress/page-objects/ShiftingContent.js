/// <reference types="cypress" />

export class ShiftingContentPage {
    
    clicarMenuElement(){
    cy.get('[href="/shifting_content/menu"]').click()
}
}