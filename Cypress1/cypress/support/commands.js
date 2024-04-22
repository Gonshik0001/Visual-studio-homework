Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(password);
    cy.get('form').submit();
});
Cypress.Commands.add('loadAndCheckPage', (url, selector) => {
    cy.visit(url);
    cy.get(selector).should('exist');
});
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-cy=username]').type(username);
    cy.get('[data-cy=password]').type(password);
    cy.get('[data-cy=login-button]').click();
  });
 
  Cypress.Commands.add('loadLoginPage', () => {
    cy.visit('/login');
  });
  
  Cypress.Commands.add('loginWithCredentials', () => {
    cy.fixture('loginData').then((data) => {
      cy.get('#username').type(data.username);
      cy.get('#password').type(data.password);
    });
    cy.get('#login-button').click();
  });
  
