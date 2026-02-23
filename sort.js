/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b));
};

console.log(sortBy([5,4,3,2,1], fn = (x) => x))

//sort takes an array and a function
//the fn returns the computes values
//the computed values then used by the sort to compare and return the sorted array
//the sort itself is not a comparator but expects one like sort(), the fn passsed is the comparator.
//it uses JS V8 engine's timsort something to compare and not restricted to the index of an array
//or the order
//only compares the values and proceeds
//so if asked in ascending its about instructing to take two variables like a and b and subtaract them
//because lets say if a=5 and b=4, then 5-4 is 1 which is positive
//Positive means:b should come before a.
//fn can be anything to process that will process thenumber
//in leetcode 2724 its given as fn=(x)=>x..which should be interpreted as x is taken as a number and returned the same.
//nothing computed
//lets say its given as fn=(x)=>x+1 ..then the numbers returned are 6,5,4,3,2
//now these computed values are compared against its corresponding array values like
// 6 maps to 5, 5 maps to 4 and so on
//now these values are compared by the sort and the array changes
//for desc just change fn(b)-fn(a)

//gpt correction
// Sorting with a callback works like this:

// .sort() repeatedly selects two elements (a and b).

// It passes them to the comparator function.

// The comparator returns:

// Negative → a before b

// Positive → b before a

// Zero → keep order

// If we want to sort by a derived value, we compare fn(a) and fn(b) instead of a and b.