import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sendLogin() {
            {
                let controller = this;
                this.get('session').open('firebase', {
                    provider: "password",
                    email: this.get('email') || '',
                    password: this.get('password') || '',
                }).then(() => {
                    controller.set('email', null);
                    controller.set('password', null);
                    console.log("sup")

                }, (error) => {
                    console.log(error);
                });
            }
        }
    }
});
