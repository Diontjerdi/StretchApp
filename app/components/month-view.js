import Component from '@ember/component';
import computed from 'ember-computed';
import DS from 'ember-data';

function getValue(days, dayObj) {
	var day = days.filter(day => day.get('date') === dayObj.date)[0];

	if (day) {
		dayObj.value = day.get('value');
	}
}


export default Component.extend({
	weeks: computed('days', function() {
		return DS.PromiseArray.create({
			promise: this.get('days').then(function (days) {
				var day = moment().date(1);
				var currMonth = day.month();
				
				if (day.day() !== 0) {
					day.day(0);
				}

				var weeks = [];

				while (day.month() <= currMonth) {
					var week = [];

					for (var i = 0; i < 7; i++) {
						var dayObj = {
							date: day.format('YYYY-MM-DD'),
							num: day.format('D'),
							currMonth: currMonth === day.month()
						};
						getValue(days, dayObj);

						week.push(dayObj);
						day.add(1, 'd');
					}
					weeks.push(week);
				}

				return weeks;

			})
		});
	})
});
