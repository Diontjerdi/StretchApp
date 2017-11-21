import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'), // YYYY-MM-DD
  value: DS.attr('boolean', { defaultValue: false }),
  calendar: DS.belongsTo('calendar')
});
