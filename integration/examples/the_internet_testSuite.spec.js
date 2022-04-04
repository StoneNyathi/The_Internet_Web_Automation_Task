/// <reference types="cypress" />
import * as constants from "/Users/lukhanyolitye/Documents/Personal_Docies/Soum_QA_Tech_Lead_Interview/cypress/support/functions/my-const.js";

describe('The Internet TestSuite', () =>{

before(() => {
cy.visit(constants.DEFAULT_URL);
});

it('Verify & Select 5 Elements in the list menu', function(){
    cy.contains('Floating Menu').click()
    cy.url().should('include','/floating_menu')
    cy.visit(constants.DEFAULT_URL)
    cy.contains('Forgot Password').click()
    cy.url().should('include','/forgot_password')
    cy.visit(constants.DEFAULT_URL)
    cy.contains('Form Authentication').click()
    cy.url().should('include','/login')
    cy.visit(constants.DEFAULT_URL)
    cy.contains('Frames').click()
    cy.url().should('include','/frames')
    cy.visit(constants.DEFAULT_URL)
    cy.contains('Geolocation').click()
    cy.url().should('include','/geolocation')
    cy.visit(constants.DEFAULT_URL)
    })
})