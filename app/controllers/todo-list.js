import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, get } from '@ember/object';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
export default class TodoListController extends Controller {
  @service todo;
  @service router;

  @tracked todos = this.todo.todos;

  get getTodos() {
    return this.todos;
  }

  @action modifyTodo(val) {
    this.router.transitionTo(`edit-todo`, { queryParams: { index: val } });
  }

  @action deleteTodo(index) {
    this.todo.todos.splice(index, 1);
    this.todos = this.todo.todos;
  }
}
