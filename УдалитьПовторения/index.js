module.exports = function (hashtags) {
	let newAr = hashtags.map( function (elem) {
   	return elem.toLowerCase();
	});

	for( let i = 0; i < newAr.length; i++ ){
		for( let k = i + 1; k < newAr.length; k++ ){
			if( newAr[k] == newAr[i] ){
				newAr.splice(k,1);
				k--;
			}
		}
	}

  return newAr.join(', '); 
};
