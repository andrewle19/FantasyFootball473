import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
  return this.get('session').fetch().catch(function() {});
  },
  model: async function() {
    return this.store.findAll('post');
  }
});
