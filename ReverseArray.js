

// Katie Harold
// Feb 4, 2015
// Reversing an Array Exercise Ch. 4

// function that uses a new array to reverse elements
function reverseArray(input) {
	var newArray = new Array;
	// going through the array backwards
	for (var i = input.length-1; i >= 0; i--) {
		newArray.push(input[i]);
	}
	return newArray;
}

// function that swaps elements to reverse the array
function reverseArrayInPlace(arrayValue) {
	halfIndex = Math.floor(arrayValue.length / 2) - 1;
	// loop half the array
	for(var i = 0; i <= halfIndex; i++) {
	// swapping the elements	
	var temp = arrayValue[i];
		arrayValue [i] = arrayValue[arrayValue.length - 1 - i];
	       // this line got me! I had to look it up and it was the 
	       // only part that was wrong.. I kept setting it to [i]
		arrayValue[arrayValue.length - 1 - i] = temp;
	}
	return arrayValue;
}





console.log(reverseArray(["A", "B", "C"]));
// ["C", "B", "A"]

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
//[5, 4, 3, 2, 1]
