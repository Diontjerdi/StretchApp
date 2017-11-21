import Component from '@ember/component';
import computed from 'ember-computed';

export default Component.extend({
	tagName: 'td',
	// classNames: ['not-current']
	classNameBindings: ['notCurrent', 'hasValue'],
	notCurrent: computed('day.currMonth', function () {
		return !this.get('day.currMonth')

	}),
	hasValue: computed('day.value', function () {
		return this.get('day.value');
	}),
	click() {
		var date = this.get('day.date');  // YYYY-MM-DD

		if (this.get('day.currMonth') && moment().isSameOrAfter(date)) {
			var prevValue = this.get('day.value');
			this.set('day.value', !prevValue);
		}
	}
});
