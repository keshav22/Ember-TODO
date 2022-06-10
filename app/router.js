import EmberRouter from '@ember/routing/router';
import config from 'keshav-todo-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add-todo');
  this.route('home', { path: '/' });
  this.route('todo-list');
  this.route('edit-todo');
});
