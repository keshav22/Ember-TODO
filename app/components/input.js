import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class InputComponent extends Component {
  @action onChange(event) {
    this.args.onChange(event.target.value);
  }
}
