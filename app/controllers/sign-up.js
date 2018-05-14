import Controller from '@ember/controller';


export default Controller.extend({
    firebaseApp: Ember.inject.service(),
    firstName: '',
    lastName: '',
    email: '',
    password: '',


    actions: {
        registerToDB() {
            const auth = this.get('firebaseApp').auth();


            const firstName = this.get('firstName');
            const lastName = this.get('lastName');
            const email = this.get('email');
            const password = this.get('password');

            auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).
                then((userResponse) => {
                    const newUser = this.store.createRecord('user', {
                        firstName: firstName,
                        lastName: lastName,
                        password: password,
                        id: userResponse.uid,
                        email: userResponse.email
                    });
                     newUser.save();
                });

            this.set('responseMessage', `Thank you! We have just saved your email address:
            ${this.get('email')}`);
            this.set('emailAddress', '');
        }
    }
});
