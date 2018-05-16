import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | navbar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:navbar');
    assert.ok(route);
  });
});
