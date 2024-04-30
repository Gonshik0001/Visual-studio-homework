import {faker} from "@faker-js/faker";
import { loginPage } from "../pages/loginPage";

describe("santa login - UI", () => {
    it("user cannot login with old password", () => {
let loginPage = new LoginPage();
let oldPassword = "test1111";
let newPassword = faker.internet.password(8); //8 characters
cy.log(new.Password);



        cy.visit("https://santa-secret.ru");
        cy.contains("Вход и регистрация").click({force: true});
        loginPage.login("kulshaev@gmail.com")
        cy.get(":nth-child(3) > .frm").type("kulshaev@gmail.com");
        cy.get(":nth-child(4) > .frm").type("Nikita1!");
        cy.get (".btn-main").click();
        cy.contains("Коробки").should("exist");
        cy.changePassword("oksana", newPassword);
    });
});
