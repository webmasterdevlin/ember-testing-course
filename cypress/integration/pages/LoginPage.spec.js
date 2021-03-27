/// <reference types="cypress"/>

describe('Login Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });
  it('should login', () => {
    cy.location('pathname').should('equal', '/');
  });
});
