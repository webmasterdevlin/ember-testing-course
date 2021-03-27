/// <reference types="cypress"/>

describe('Home Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });

  it('should land to home page', () => {
    cy.location('pathname').should('equal', '/');
  });

  it('should show article previews', () => {
    cy.get('[data-testid=article-preview]').should('have.length', 10);
  });

  context('Your Feed', () => {
    it('should show your-feed tab', () => {
      cy.get('[data-testid=your-feed-container]').should('be.visible');
    });
  });
  context('Global Feed', () => {});
});
