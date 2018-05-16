import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('date', { defaultValue() {return new Date()}}),
  image: DS.attr('boolean')
});
