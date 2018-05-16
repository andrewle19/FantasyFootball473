import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        email: this.get("session.currentUser.email"),
        body: this.get('body'),
        timestamp: new Date().getTime()

      });
      newPost.save();
      this.set('body', '');
    },

  }
});
