// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('flavi', () => {
    cy.get('#firstName').type('Maria')
    cy.get('#lastName').type('Leao')
    cy.get('#email').type('leao@email.com')
    cy.get('#open-text-area').type('edryeryerdhyredhhedrhedrhrhrdhdrh',{daley:0})
    //cy.get('.button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  
  });
  