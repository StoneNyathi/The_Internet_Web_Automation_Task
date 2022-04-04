/// <reference types="cypress" />
describe('The Internet TestSuite', () =>{

before(() => {
cy.visit('');
});

it('Verify & Select 5 Elements in the list menu', function(){
cy.contains('Floating Menu').click()
cy.url().should('include','/floating_menu')
cy.visit('')
//cy.contains('Forgot Password').click()
//cy.url().should('include','/forgot_password')
//cy.visit('https://the-internet.herokuapp.com')
//cy.contains('Form Authentication').click()
//cy.url().should('include','/login')
//cy.visit('https://the-internet.herokuapp.com')
//cy.contains('Frames').click()
//cy.url().should('include','/frames')
//cy.visit('https://the-internet.herokuapp.com')
//cy.contains('Geolocation').click()
//cy.url().should('include','/geolocation')
//cy.visit('https://the-internet.herokuapp.com')
})
})