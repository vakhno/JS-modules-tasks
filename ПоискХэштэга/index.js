module.exports = function (tweet) {
	let tags = tweet.split(' ');
	let result = [];

	for( let i = 0; i < tags.length; i++ ){
		let word = tags[i];
		if( word[0] == '#' ){
			result.push(word.slice(1));
		}
	}
 
	return result;
};