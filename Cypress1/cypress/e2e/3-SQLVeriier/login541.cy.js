import LoginPage from '../support/pageObjects/LoginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  before(() => {
    loginPage.visit();
  });

  it('User logs in with valid credentials', () => {
    loginPage.fillUsername('user');
    loginPage.fillPassword('password');
    loginPage.submit();
    cy.url().should('include', '/dashboard');
  });
});
