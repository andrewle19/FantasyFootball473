import Controller from '@ember/controller';


export default Controller.extend({

    firebaseApp: Ember.inject.service(),
    actions: {
        registerToDB() {

            const auth = this.get('firebaseApp').auth();
            const email = this.get('email');
            const password = this.get('password');

          auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).
                then((userResponse) => {
                    const newUser = this.store.createRecord('user', {
                        password: password,
                        id: userResponse.uid,
                        email: userResponse.email
                    });
                     newUser.save();
                });

            this.set('responseMessage', `We have registered your email address: ${this.get('email')}`);
            this.set('emailAddress', '');
            this.set('email','')
            this.set('password','')
        }
    }
});
