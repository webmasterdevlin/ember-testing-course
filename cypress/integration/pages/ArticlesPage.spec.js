/// <reference types="cypress"/>

describe('Articles Page', () => {
  it('should navigate to an empty articles page', () => {
    cy.visit('/articles').location('pathname').should('equal', '/articles');
  });
});
