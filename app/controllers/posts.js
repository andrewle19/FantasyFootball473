import Controller from '@ember/controller';

export default Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        username: this.get('username'),
        body: this.get('body'),
        timestamp: new Date().getTime()
      });
      newPost.save();
    }
  }
});
