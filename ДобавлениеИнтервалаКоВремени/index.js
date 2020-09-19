module.exports = function (hours, minutes, interval) {
	hours = Number(hours);
	minutes = Number(minutes);
	interval = Number(interval);

	let minutesSum = minutes + interval;
	let addHours;

	addHours = Math.floor(minutesSum / 60);
	hours += addHours;
	minutes = minutesSum - (60 * addHours);

	if (hours > 23) {
		while (hours > 24) {
			hours -= 24;
		}
		if (hours == 24) {
			hours = 0;
		}
	}

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	return hours + ':' + minutes;
};