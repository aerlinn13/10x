/// <reference types="cypress" />

describe('10x demo app', () => {
  it('displays six users by default', () => {
    cy.visit('http://localhost:3000');
    cy.wait(1000);
    cy.get('[data-test-id=user-item]').should('have.length', 6)
  });

  it('can add new users', () => {
    cy.get('[data-test-id=create-user-button]').click();
    cy.get('[data-test-id=first-name-field]').type("Danil");
    cy.get('[data-test-id=last-name-field]').type("Chernyshev");
    cy.get('[data-test-id=email-field]').type("danil@hey.com");
    cy.get('[data-test-id=submit-button]').click();
    cy.wait(1000);
    cy.get('[data-test-id=user-item]').contains('Danil').should('have.length', 1);
  });

  it('can delete new users', () => {
    cy.get('[data-test-id=user-item]').contains('Danil').click();
    cy.get('[data-test-id=delete-user-button]').click();
    cy.wait(1000);
    cy.get('[data-test-id=user-item]').should('have.length', 6);
  });

  it('can edit existing users', () => {
    cy.get('[data-test-id=user-item]').contains('George').click();
    cy.get('[data-test-id=first-name-field]').clear().type("Georgina");
    cy.get('[data-test-id=last-name-field]').clear().type("Blunt");
    cy.get('[data-test-id=email-field]').clear().type("georgina.blunt@gmail.com");
    cy.get('[data-test-id=submit-button]').click();
    cy.wait(1000);
    cy.get('[data-test-id=user-item]').contains('Georgina').should('have.length', 1);
  });

  it('can delete existing users', () => {
    cy.get('[data-test-id=user-item]').contains('Georgina').click();
    cy.get('[data-test-id=delete-user-button]').click();
    cy.wait(1000);
    cy.get('[data-test-id=user-item]').should('have.length', 5);
  });

})
