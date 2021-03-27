/// <reference types="cypress"/>

describe('Editor Page', () => {
  beforeEach(() => {
    cy.LoginCommand();
  });

  context('Article', () => {
    it('should publish an article after filling out the form and clicking the publish article button', () => {
      cy.get('[data-testid=nav-new-post]').click();
      cy.location('pathname').should('equal', '/editor');
      cy.get('[data-testid=input-title]').type('title here');
      cy.get('[data-testid=input-description]').type('description here');
      cy.get('[data-testid=input-body]').type('body here');
      cy.get('[data-testid=input-tags]').type('tags here');
      cy.get('[data-testid=submit-button]').click();
      cy.location('pathname').should('contain', 'title-here');
    });

    it('should update an article', () => {
      cy.get('[data-testid=nav-article-post]').eq(0).click();
      cy.get('[data-testid=edit-article-button]').eq(0).click();
      cy.get('[data-testid=input-title]').type(' - edited');
      cy.get('[data-testid=submit-button]').click();
      cy.get('[data-testid=article-title]').contains('edited');
    });

    it('should delete an article', () => {
      cy.get('[data-testid=nav-article-post]').eq(0).click();
      cy.get('[data-testid=delete-article-button]').eq(0).click();
    });
  });
});
