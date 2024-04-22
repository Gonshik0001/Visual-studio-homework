describe('Login Tests', () => {
    before(() => {
      cy.loadLoginPage();
    });
  
    it('User logs in using valid credentials', () => {
      cy.loginWithCredentials();
      cy.url().should('include', '/dashboard');
    });
  });