import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
        sign_out() {
            console.log("here");
            this.get('session').close();
            this.transitionToRoute('index');
        }
    }
});
