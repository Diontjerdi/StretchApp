import Controller from '@ember/controller';
import computed from 'ember-computed';

export default Controller.extend({
    calendarSorting: ['name:desc'],
    sortedCalendars: computed.sort('model', 'calendarSorting')
});
