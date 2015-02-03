

// Katie Harold
// Feb 4, 2015
// Reversing an Array Exercise Ch. 4


function reverseArray(input) {
	var newArray = new Array;
	for (var i = input.length-1; i >= 0; i--) {
		newArray.push(input[i]);
	}
	return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"]

//var arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
//[5, 4, 3, 2, 1]
