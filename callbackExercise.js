var myNums = [1, 2, 3, 4, 5];

function modifyArray(array, callback) {
	var i, j;
	var myString = ""
	var counter = 0;
	if (typeof callback !== "function"){
		console.log("callback argument is not function!");
	}
	for(i = 0; j = array.length, i < j; i++){
		myString += callback(array[i]);
	}
	return myString;
}

function addOne(item) {
	return item++;
}
function favNumber(item) {
	item = "My favorite number is " + item + "| ";
	return item;
}

modifyArray(myNums, favNumber);

