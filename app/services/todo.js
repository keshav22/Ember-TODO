import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoService extends Service {
  @tracked todos = [{ header: 'Keshav', description: 'Agrawal' }];

  editTodosObj(index, header, description) {
    this.todos[index] = { header: header, description: description };
  }

  addTodo(header, descrition) {
    this.todos.push({ header: header, description: descrition });
  }

}
