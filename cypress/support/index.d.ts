// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example cy.getByTestId('login-link')
     */
    getByTestId: (id: string) => Cypress.Chainable<JQuery<HTMLElement>>;
  }
}
