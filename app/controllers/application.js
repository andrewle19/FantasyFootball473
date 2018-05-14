import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
        sign_out() {
            console.log("here");
            this.get('session').close();
            this.transitionToRoute('index');
        }
    }
});
