describe('Registration Tests', () => {
    beforeEach(() => {
      cy.visit('/register'); // Используем baseUrl из cypress.json
    });
  
    it('Register with valid credentials completes registration', () => {
      cy.fixture('users').then((users) => {
        cy.get('[data-cy=username]').type(users.validUser.username);
        cy.get('[data-cy=email]').type(users.validUser.email);
        cy.get('[data-cy=password]').type(users.validUser.password);
        cy.get('[data-cy=confirm-password]').type(users.validUser.password);
        cy.get('[data-cy=register-button]').click();
        cy.contains('Registration successful').should('be.visible');
      });
    });
  
    it('Register with invalid email shows error', () => {
      cy.fixture('users').then((users) => {
        cy.get('[data-cy=username]').type(users.invalidEmailUser.username);
        cy.get('[data-cy=email]').type(users.invalidEmailUser.email);
        cy.get('[data-cy=password]').type(users.invalidEmailUser.password);
        cy.get('[data-cy=register-button]').click();
        cy.contains('Please enter a valid email address').should('be.visible');
      });
    });
  });
  