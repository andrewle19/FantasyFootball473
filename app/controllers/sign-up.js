import Controller from '@ember/controller';
import {inject as injectService} from '@ember/service';

export default Controller.extend({

    firebaseApp: injectService(),
    actions: {
        registerToDB() {

            const auth = this.get('firebaseApp').auth();
            const password = this.get('password');
          auth.createUserWithEmailAndPassword(this.get('email'), this.get('password')).then((userResponse) => {
                    const newUser = this.store.createRecord('user', {
                        password: password,
                        id: userResponse.uid,
                        email: userResponse.email

                    });
                     newUser.save();
                     this.set('responseMessage', `We have registered your email address: ${this.get('email')}`);
                     this.set('email','')
                     this.set('password','')

                },(error) => {
                  this.set('responseMessage',error);
                })


        }
    }
});
