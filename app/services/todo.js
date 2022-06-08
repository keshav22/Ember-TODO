import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoService extends Service {
  @tracked todos = [{ firstName: 'Keshav', lastName: 'Agrawal' }];
}
