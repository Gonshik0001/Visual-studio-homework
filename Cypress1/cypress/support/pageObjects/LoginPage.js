class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    fillUsername(name) {
      const field = cy.get('#username');
      field.clear();
      field.type(name);
      return this;
    }
  
    fillPassword(password) {
      const field = cy.get('#password');
      field.clear();
      field.type(password);
      return this;
    }
  
    submit() {
      const button = cy.get('#login-button');
      button.click();
    }
  }
  
  export default LoginPage;
  