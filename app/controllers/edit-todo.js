import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action, get } from '@ember/object';
export default class EditTodoController extends Controller {
  queryParams = ['index'];
  @tracked index = null;
  @service todo;
  @service router;

  changedFirstName = '';
  changedLastName = '';

  modifyFirstName = (val) => {
    this.changedFirstName = val;
  };

  modifyLastName = (val) => {
    this.changedLastName = val;
  };

  get listItem() {
    return this.todo.todos[this.index];
  }

  @action save() {
    let finalFirstName = this.changedFirstName || this.listItem.firstName;
    let finalLastName = this.changedLastName || this.listItem.lastName;
    this.todo.todos[this.index].firstName = finalFirstName;
    this.todo.todos[this.index].lastName = finalLastName;
  }

  @action saveAndBack() {
    let finalFirstName = this.changedFirstName || this.listItem.firstName;
    let finalLastName = this.changedLastName || this.listItem.lastName;
    this.todo.todos[this.index].firstName = finalFirstName;
    this.todo.todos[this.index].lastName = finalLastName;
    history.back();
  }
}
