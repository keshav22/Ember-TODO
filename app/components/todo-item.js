import Component from '@glimmer/component';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action, get } from '@ember/object';
export default class TodoItemComponent extends Component {
    @service todo;
    @service router;

    changedFirstName = '';
    changedLastName = '';

    @action modifyFirstName(val) {
        this.changedFirstName = val;
    };

    @action modifyLastName(val) {
        this.changedLastName = val;
    };

    get listItem() {
        alert
        if (this.args.index)
            return this.todo.todos[this.args.index];

        return { firstName: "", lastName: "" }
    }

    get todoType() {
        return this.args.type;
    }

    @action save() {
        this.actualSave();
    }

    @action saveAndBack() {
        this.actualSave(true);
    }

    @action actualSave(goback = false) {
        let finalFirstName = this.changedFirstName || this.listItem.firstName;
        let finalLastName = this.changedLastName || this.listItem.lastName;

        if (this.todoType == "ADD") {
            if (finalFirstName && finalLastName)
                this.todo.todos.push({ firstName: finalFirstName, lastName: finalLastName });
            else {
                alert("Please enter values in both field");
                return;
            }

        }
        else if (this.todoType == "EDIT") {
            this.todo.todos[this.args.index].firstName = finalFirstName;
            this.todo.todos[this.args.index].lastName = finalLastName;
        }

        if (goback)
            this.cancelTodoItem();
    }

    @action cancelTodoItem() {
        history.back();
    }
}

