export class LoginPage {

    fillUser(text) {
        cy.get('#username').type(text)
    }

    fillPass(text) {
        cy.get('#password').type(text)
    }

    ClickButtonLogin() {
        cy.get('.fa').click()
    }

    clearUser() {
        cy.get('#username').clear()
    }

    clearPass() {
        cy.get('#password').clear()
    }

}