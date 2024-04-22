describe('Registration Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/register'); // Предполагаем, что URL страницы регистрации - '/register'
    });
  
    it('should display all registration fields', () => {
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('input[name="confirmPassword"]').should('be.visible');
    });
  
    it('should not allow registration with empty fields', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Username is required');
      cy.contains('Email is required');
      cy.contains('Password is required');
    });
  
    it('should check for the maximum length of the username', () => {
      const longUsername = 'a'.repeat(30); // предположим, что максимальная длина 30 символов
      cy.get('input[name="username"]').type(longUsername);
      cy.get('button[type="submit"]').click();
      cy.contains('Username should not exceed 30 characters').should('not.exist');
    });
  
    it('should validate email format', () => {
      cy.get('input[name="email"]').type('testexample.com');
      cy.get('button[type="submit"]').click();
      cy.contains('Please enter a valid email address');
    });
  
    it('should check password mismatch', () => {
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password321');
      cy.get('button[type="submit"]').click();
      cy.contains('Passwords do not match');
    });
  });