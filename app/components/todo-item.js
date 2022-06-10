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

        return { header: "", description: "" }
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
        let finalFirstName = this.changedFirstName || this.listItem.header;
        let finalLastName = this.changedLastName || this.listItem.description;

        if (this.todoType == "ADD") {
            if (finalFirstName && finalLastName)
                this.todo.todos.push({ header: finalFirstName, description: finalLastName });
            else {
                alert("Please enter values in both field");
                return;
            }

        }
        else if (this.todoType == "EDIT") {
            this.todo.todos[this.args.index].header = finalFirstName;
            this.todo.todos[this.args.index].description = finalLastName;
        }

        if (goback)
            this.cancelTodoItem();
    }

    @action cancelTodoItem() {
        history.back();
    }
}

