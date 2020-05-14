import todoObjects from './functionaltest.objects';
import { Utils } from './utils';
const utils = new Utils();
export class todoPage {
    constructor() {}
    createNewTodo() {
        utils.getType(todoObjects.newTodo, todoObjects.itemName);
        utils.getType(todoObjects.newTodo, todoObjects.enterButton);
        utils.containsAssertion(todoObjects.itemName);
    }

    markingAsCompleted() {
        utils.containsAssertion(todoObjects.itemName);
        utils.getClick(todoObjects.checkBox);
        utils.containsClick(todoObjects.completedTab);
        utils.getClick(todoObjects.checkBox);
        utils.containsClick(todoObjects.activeTab);
        utils.getClick(todoObjects.checkBox);
        utils.containsClick(todoObjects.clearCompletedOption);
        utils.getShould(todoObjects.itemName, 'not.be.visible');
    }

    editingModeAndChanges() {
        utils.getType(todoObjects.newTodo, todoObjects.itemName);
        utils.getType(todoObjects.newTodo, todoObjects.enterButton);
        utils.getDbclick(todoObjects.item);
        utils.getShould(todoObjects.editingMode, 'be.visible');
    }
}
