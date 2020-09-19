let ifTimesSmallThen10 = function(date){
	return (date >= 0 && date < 10) ? `0${date}` : date;
}

module.exports = function (date) {
	let time = new Date(date);
	let checkPeriod = ['years', 'months', 'days', 'hours', 'minutes'];

	time.add = function(count, period){
		if(count >= 0 && checkPeriod.includes(period)){
			switch(period){
				case 'years':
					time = new Date(+time.getFullYear() + count, time.getMonth(), time.getDate(), time.getHours(), time.getMinutes());
					break;
				case 'months':
					time = new Date(time.getFullYear(), +time.getMonth() + count, time.getDate(), time.getHours(), time.getMinutes());
					break;
				case 'days':
					time = new Date(time.getFullYear(), time.getMonth(), +time.getDate() + count, time.getHours(), time.getMinutes());
					break;
				case 'hours':
					time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), +time.getHours() + count, time.getMinutes());
					break;
				case 'minutes':
					time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), +time.getMinutes() + count);
					break;
				default:
					throw new TypeError();
			}
		}else{
			throw new TypeError();
		}
		return this;
	};

	time.subtract = function(count, period){
		if(count >= 0 && checkPeriod.includes(period)){
			switch(period){
				case 'years':
					time = new Date(+time.getFullYear() - count, time.getMonth(), time.getDate(), time.getHours(), time.getMinutes());
					break;
				case 'months':
					time = new Date(time.getFullYear(), +time.getMonth() - count, time.getDate(), time.getHours(), time.getMinutes());
					break;
				case 'days':
					time = new Date(time.getFullYear(), time.getMonth(), +time.getDate() - count, time.getHours(), time.getMinutes());
					break;
				case 'hours':
					time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), +time.getHours() - count, time.getMinutes());
					break;
				case 'minutes':
					time = new Date(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), +time.getMinutes() - count);
					break;
				default:
					throw new TypeError();
			}
		}else{
			throw new TypeError();
		}		
		return this;
	};

	Object.defineProperty(time, "value", {
		get: function(){
			let timeToString = `${time.getFullYear()}-${ifTimesSmallThen10( time.getMonth() + 1 )}-${ifTimesSmallThen10( time.getDate() )} ${ifTimesSmallThen10( time.getHours() )}:${ifTimesSmallThen10( time.getMinutes() )}`;
			return timeToString;
		},
	});
	
	return time;
};