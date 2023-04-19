/// <reference types="cypress" />

export class SecureAreaPage {
    comprobacionArea(text){
        cy.get('#flash').contains(text)

}    
}

