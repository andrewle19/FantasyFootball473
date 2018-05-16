import Controller from '@ember/controller';
import {inject as injectService} from '@ember/service';

export default Controller.extend({
  session: injectService('session'),

  actions: {
        sign_out() {
            this.get('session').close();
            this.transitionToRoute('index');
        }
    }
});
