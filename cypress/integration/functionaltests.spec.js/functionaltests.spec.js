import { Utils } from './utils';
import todoObjects from './functionaltest.objects';
import { todoPage } from './functionaltest.pages';

const utils = new Utils();
const todopage = new todoPage();
context('Window', () => {
    before(() => {
        cy.visit('/');
    });
    it('should test whether the page loaded and the todo text is visible', () => {
        utils.windowContains(todoObjects.title);
    });

    it('should test whether the placeholder text displays in the text box', () => {
        utils.getShould(todoObjects.newTodo, 'be.visible');
    });
    it('should test whether item does not appear when clicked on the clear completed option', () => {
        todopage.createNewTodo();
        todopage.markingAsCompleted();
    });

    it('should test whether it creates a new todo', () => {
        todopage.createNewTodo();
    });
    it('should test whether Active tab shows the item addded', () => {
        utils.containsClick(todoObjects.activeTab);
        utils.containsShould(todoObjects.itemName, 'be.visible');
    });

    it('should test whether completed tab does not show the checked item addded', () => {
        utils.containsClick(todoObjects.completedTab);
        utils.containsShould(todoObjects.itemName, 'not.be.visible');
    });

    it('should test whether the checked item moves to the completed tab from active.', () => {
        utils.containsClick(todoObjects.activeTab);
        utils.getClick(todoObjects.checkBox);
    });
    it('should test whether the clear completed option appears once the item is checked.', () => {
        utils.containsShould(todoObjects.clearCompletedOption, 'be.visible');
    });

    it('should test whether the user is able to see even the completed items on the ALL tab.', () => {
        utils.containsClick(todoObjects.allTab);
        utils.containsShould(todoObjects.itemName, 'be.visible');
    });

    it('should test whether the count of the item displays on the left corner', () => {
        utils.containsClick(todoObjects.allTab);
        utils.getContains(todoObjects.itemCOunt, '0');
    });

    it('should test whether editing of item mode happens when double clicked on the item', () => {
        todopage.editingModeAndChanges();
    });

    it('should test whether the user is able to see the items even after the refresh of page.', () => {
        cy.visit('/');
        utils.containsShould(todoObjects.newTodo, 'not.be.visible');
    });
    it('should test whether close button is present in the item and clicking on it removes the item', () => {
        todopage.createNewTodo();
        utils.containsClick(todoObjects.activeTab);
        utils.getClick(todoObjects.closeButton);
        utils.containsShould(todoObjects.itemName, 'not.be.visible');
    });
});
