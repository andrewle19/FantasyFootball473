import Controller from '@ember/controller';

let gifs;

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
    publishGIF: function() {
      let queryText = this.get('body');
      let API_KEY = 'Xvt8ckTaWl0nl5WTPlq7cUcjSCHKZ4py';
      let limit = '50';
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${queryText}&limit=${limit}&offset=0&rating=G&lang=en`;
      fetch(url)
        .then((response) => response.json())
        .then((res) => {
          if (res.data.length <= 0 ) {
            this.set('errorMessage', `GIF does not exist.`);
            this.set('gifs', '');
            return;
          }
          this.set('errorMessage', ``);
          this.set('gifs', 'true');
          gifs = res.data;
          this.set('giffy', gifs)
        });
    },
    selectGIF: function (num) {
      let newPost = this.store.createRecord('post', {
        email: this.get("session.currentUser.email"),
        body: `${num.images.original.url}`,
        timestamp: new Date().getTime(),
        image: true
      });
      this.set('gifs','');
      this.set('giffy', '');
      newPost.save();
      this.set('body', '');
    }
  }
});
