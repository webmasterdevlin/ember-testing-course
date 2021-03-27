/// <reference types="cypress"/>

describe.only('Home Page', () => {
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
  context('Global Feed', () => {
    it('should navigate to article', () => {
      cy.get('[data-testid=nav-article-post]').eq(0).click();
      cy.get('[data-testid=article-title]').should('not.be.null');
    });

    it('should navigate to 404 page', () => {
      cy.visit('/articles/48qgauiflg747gtf47g');
      cy.get('[data-testid=sorry-message]').should(
        'contain',
        'Sorry but that page does not exist.',
      );
    });
  });
});
