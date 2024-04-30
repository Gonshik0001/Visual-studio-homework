export class LoginPage {
elements = {
loginField: () =>cy.get(":nth-child(3) > .frm"),
passwordField: () =>cy.get(":nth-child(3) > .frm"),
loginButton: () =>cy.get(".bin.main")
};


//inputLogin(login) {
 //   this.elements.loginField().type(login);
//}

//inputPassword(password) {
//    this.elements.passwordField().type(password);
//}

//submitLogin() {
  //  this.elements.loginButton().click();
//}
//}

// или такой метод

login(login, password) {
    this.elements.loginField().type(login);
    this.elements.passwordField().type(password);
}this.elements.loginButton().click();
}
}