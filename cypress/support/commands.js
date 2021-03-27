/// <reference types="cypress"/>
import '@cypress/code-coverage/support';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('SetupInputFieldsCommand', () => {
  cy.get('[data-testid=firstName]').as('FirstName');
});

Cypress.Commands.add('LoginCommand', () => {
  cy.visit('/login');
  cy.get('[data-testid=login-email]').type('cypresse2e@gmail.com');
  cy.get('[data-testid=login-password]').type('cypresse2e!');
  cy.get('[data-testid=sign-in-button]').click();
});
