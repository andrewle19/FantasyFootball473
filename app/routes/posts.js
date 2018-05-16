import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
  return this.get('session').fetch().catch(function() {});
  },
  model: function() {
    return this.store.findAll('post');
  }
});
