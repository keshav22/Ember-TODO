import Component from '@glimmer/component';
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action, get } from '@ember/object';
export default class TodoItemComponent extends Component {
    @service todo;
    @service router;

    changedHeader = '';
    changedDescription = '';

    @action modifyFirstName(val) {
        this.changedHeader = val;
    };

    @action modifyLastName(val) {
        this.changedDescription = val;
    };

    get listItem() {
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
        let finalHeader = this.changedHeader || this.listItem.header;
        let finalDescription = this.changedDescription || this.listItem.description;

        if (this.todoType == "ADD") {
            if (finalHeader && finalDescription)
                this.todo.addTodo(finalHeader,finalDescription);
            else {
                alert("Please enter values in both field");
                return;
            }

        }
        else if (this.todoType == "EDIT") {
            this.todo.editTodosObj(this.args.index, finalHeader, finalDescription);
        }

        if (goback)
            this.cancelTodoItem();
    }

    @action cancelTodoItem() {
        history.back();
    }
}

