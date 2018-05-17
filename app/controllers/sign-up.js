import Controller from '@ember/controller';
import {inject as injectService} from '@ember/service';

export default Controller.extend({
    firebaseApp: Ember.inject.service(),
    email: '',
    password: '',


    actions: {
        registerToDB() {
            const auth = this.get('firebaseApp').auth();


            const email = this.get('email');
            const password = this.get('password');
            if (password.length < 6){
              this.set('responseMessage', ``);
              this.set('errorMessage', `Your password must be longer than 6 characters`);
              return;
            }

            auth.createUserWithEmailAndPassword(email, password).
                then((userResponse) => {
                    const newUser = this.store.createRecord('user', {

                        password: password,
                        id: userResponse.uid,
                        email: userResponse.email
                    });
                     newUser.save();
                });

            this.set('responseMessage', `We have registered your email address:
            ${this.get('email')}`);
            this.set('errorMessage', ``);
            this.set('emailAddress', '');
        }
    }
});
