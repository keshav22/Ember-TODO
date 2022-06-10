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
    let finalFirstName = this.changedFirstName || this.listItem.header;
    let finalLastName = this.changedLastName || this.listItem.description;
    this.todo.todos[this.index].header = finalFirstName;
    this.todo.todos[this.index].description = finalLastName;
  }

  @action saveAndBack() {
    let finalFirstName = this.changedFirstName || this.listItem.header;
    let finalLastName = this.changedLastName || this.listItem.description;
    this.todo.todos[this.index].header = finalFirstName;
    this.todo.todos[this.index].description = finalLastName;
    history.back();
  }
}
