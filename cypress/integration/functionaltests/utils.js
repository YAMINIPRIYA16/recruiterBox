export class Utils {
    constructor() {}

    click(el) {
        cy.get(el).click({ force: true });
    }
    windowContains(value) {
        cy.window().contains(value);
    }
    getShould(el, assertionCondition) {
        cy.get(el).should(assertionCondition);
    }
    getType(el, input) {
        cy.get(el).type(input);
    }
    containsClick(input) {
        cy.contains(input).click();
    }
    containsAssertion(input) {
        cy.contains(input);
    }
    getClick(el) {
        cy.get(el).click({ force: true });
    }
    containsShould(input, Condition) {
        cy.contains(input).should(Condition);
    }
    getContains(el, input) {
        cy.get(el).contains(input);
    }
    getDbclick(el) {
        cy.get(el).dblclick();
    }
    visitPage(url) {
        cy.visit(url);
    }
}
export default Utils;
