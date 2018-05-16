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
    publishGIF: async function() {
      let queryText = this.get('body');
      let API_KEY = 'Xvt8ckTaWl0nl5WTPlq7cUcjSCHKZ4py';
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${queryText}&limit=25&offset=0&rating=G&lang=en`
      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          let newPost = this.store.createRecord('post', {
            email: this.get("session.currentUser.email"),
            body: `${res.data[0].images.original.url}`,
            timestamp: new Date().getTime(),
            image: true
          });
          newPost.save();
        });
    }
  }
});
