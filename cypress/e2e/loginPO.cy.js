/// <reference types="cypress" />

import { MainPage } from "../page-objects/MainPage.js"
import { LoginPage } from "../page-objects/LoginPage.js"
import { SecureAreaPage } from "../page-objects/SecureAreaPage.js"

describe('Pruebas_login', () => {

  const mainPage = new MainPage()
  const loginPage = new LoginPage()
  const secureAreaPage = new SecureAreaPage()

  beforeEach(() => {
     mainPage.visitarMainPage()
     mainPage.clicarFormAuthentication()

  })
  
  it('The user is logged', () => {
    loginPage.introducirUsuario("tomsmith")
    loginPage.introducirPassword("SuperSecretPassword!")
    loginPage.clicarBotonLogin()
    secureAreaPage.comprobacionArea("You logged into a secure area!")
  })

  it('The user is NOT logged, wrong USER', () => {
    loginPage.introducirUsuario("pedro")
    loginPage.introducirPassword("SuperSecretPassword!")
    loginPage.clicarBotonLogin()
    secureAreaPage.comprobacionArea("Your username is invalid!")
  })

  it('The user is NOT logged, wrong PASS', () => {
    loginPage.introducirUsuario("tomsmith")
    loginPage.introducirPassword("mala contra")
    loginPage.clicarBotonLogin()
    secureAreaPage.comprobacionArea("Your password is invalid!")
  })

  it('The user is NOT logged, wrong PASS', () => {
    loginPage.introducirUsuario("tomsmith")
    loginPage.introducirPassword("mala contra")
    loginPage.clicarBotonLogin()
    secureAreaPage.comprobacionArea("Your password is invalid!")
  })

})