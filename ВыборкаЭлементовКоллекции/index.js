function collectionAfterSelect(collection, fields){
	let outputCollection = collection;

	for(let item in collection){
		for(let key in collection[item]){
			if( !(fields.includes(key)) ){
				delete collection[item][key];
			}
		}		
	}

	return outputCollection;
}

function collectionAfterFilter(collection, field, values){
	let outputCollection = [];

	for(let item in collection){
		for(let key of values){
			if(collection[item][field] == key){
				outputCollection.push(collection[item]);
			}
		}
	}

	return outputCollection;
}

function sort(collection, filterArray, selectArray){
	for(let key in filterArray){
		collection = collectionAfterFilter(collection, filterArray[key].field, filterArray[key].values);
	}
	for(let key in selectArray){
		collection = collectionAfterSelect(collection, selectArray[key].fields);
	}

	return collection;
}


function query(collection) {
	let newCollection = JSON.parse(JSON.stringify(collection));
	let operations = [].slice.call(arguments).slice(1);

	if( arguments[1] == undefined){ 
		return newCollection 
	}else{
		let toFilter = [];
		let toSelect = [];
		let i = 0;
		operations.forEach( (elem, i) =>  {
			if( elem['operation'] == 'filter' ){
				toFilter.push(elem);
			}else if( elem['operation'] == 'select' ){
				toSelect.push(elem);
			}
		});

		return sort(newCollection, toFilter, toSelect);
	}
}


function select() {
	let selectResult = {};
	selectResult.operation = 'select';
	selectResult.fields = Array.prototype.slice.call(arguments);

	return selectResult;
}

function filterIn(property, values) {
	let filterResult = {};
	filterResult.operation = 'filter';
	filterResult.field = property;
	filterResult.values = values;

	return filterResult;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};