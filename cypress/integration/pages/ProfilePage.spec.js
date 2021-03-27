/// <reference types="Cypress"/>

describe('Profile Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });

  it('should land on Settings Page', () => {
    cy.get('[data-testid=nav-profile]').click();
    cy.location('pathname').should('contain', '/profile');
  });
  context('My Articles', () => {});
  context('Favorite Articles', () => {});
});
