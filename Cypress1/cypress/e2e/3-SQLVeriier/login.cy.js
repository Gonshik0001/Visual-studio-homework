describe('Login Tests', () => {
    beforeEach(() => {
      cy.visit('/login'); // Используем baseUrl из cypress.json
    });
  
    it('Login with invalid credentials shows error', () => {
      cy.login('incorrect', 'credentials');
      cy.contains('Invalid username or password').should('be.visible');
    });
  
    it('Login button is disabled when fields are empty', () => {
      cy.get('[data-cy=login-button]').should('be.disabled');
    });
  
    it('Required fields show error message on submit when empty', () => {
      cy.get('[data-cy=login-button]').click();
      cy.contains('Username is required').should('be.visible');
      cy.contains('Password is required').should('be.visible');
    });
  });
  