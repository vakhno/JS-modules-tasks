let phoneBook = {};

let addUser = function(name, phone) {
	phone = phone.split(',');

	(phoneBook.hasOwnProperty(name)) ? 0 : phoneBook[name] = [];
	
	for(let key of phone){
		if( !(phoneBook[name].includes(key)) )
			phoneBook[name].push(key);
	}
};

let removeUser = function(phone) {
	for(let item in phoneBook){
		for(let key of phoneBook[item]){
			if(phone == key){
				let index = phoneBook[item].indexOf(key);
				phoneBook[item].splice(index, 1);
				if(phoneBook[item].length < 1){
					delete phoneBook[item];
				}
				return true;	
			}

		}
	}
	return false;
};

let showUsers = function() {
	let show = '';
	let result = [];
	let amongSpace = 0;
	let names = Object.keys(phoneBook).sort();

	names.forEach(item => {
		show +=`${item}: `;
		let arrlen = phoneBook[item].length;

		for(let key of phoneBook[item]){
			if( arrlen > 1 ){
				show += `${key}, `;
			}else{
				show += key;
			}
			arrlen--;
		}
		amongSpace++;
		result.push(show);
		show = '';
	});
	return result;
};

module.exports = function (command) {
	let commands = command.split(' ');
	let name;
	let phone;

	if(commands[0] == 'ADD'){
		name = commands[1];
		phone = commands[2];
		return addUser(name, phone);
	}else if(commands[0] == 'REMOVE_PHONE'){
		phone = commands[1];
		return removeUser(phone);
	}else if(commands[0] == 'SHOW'){
		return showUsers();
	}else{
		return true;
	};
};



