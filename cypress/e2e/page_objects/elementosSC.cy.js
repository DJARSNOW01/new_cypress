export class ElementPage {

    CheckHave5Element() {
        cy.get('li').children().should("have.length",5)
    }




}