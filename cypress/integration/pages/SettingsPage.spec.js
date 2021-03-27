/// <reference types="cypress"/>

describe('Settings Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });

  it('should land on Settings Page', () => {
    cy.get('[data-testid=nav-settings]').click();
    cy.location('pathname').should('equal', '/settings');
  });
});
