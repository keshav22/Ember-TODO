import Component from '@glimmer/component';
import { action, get } from '@ember/object';

export default class ButtonComponent extends Component {
  @action onBtnClick(val) {
    if (this.args?.onClick) this.args?.onClick(val);
  }
}
