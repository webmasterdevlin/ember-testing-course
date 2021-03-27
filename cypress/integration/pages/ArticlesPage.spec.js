/// <reference types="cypress"/>

describe('Articles Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });

  it('should navigate to an empty articles page', () => {
    cy.visit('/articles').location('pathname').should('equal', '/articles');
  });

  context('Comment', () => {
    it('should post a comment', () => {
      cy.get('[data-testid=nav-article-post]').eq(0).click();
      cy.get('[data-testid=comment-textarea]').type('hello');
      cy.get('[data-testid=post-comment-button]').click();
      cy.get('[data-testid=comment-body]').eq(0).contains('hello');
    });
  });
});
