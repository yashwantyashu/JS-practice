/**
 * @param {Function} fn
 * @return {Object}
 */

//algorithm
//use this because we are defining/extending for array prototype which already contains the array
//so using this will refer to the array
//groupby will return an object
//looking at the output- we need to return an object..so we start with an empty one
//using for loop for looking up the array which is referred as 'this'
//assigning the element const by this[i] which takes the element from the array in the i th index
//assigning const key from the element 
//if the result object's key is empty we are checking and only then giving the key an empty array
//then push the element to the key array
//return result

Array.prototype.groupBy = function(fn) {
    let result = {};

    for(let i = 0; i < this.length; i++){
        const element = this[i];
        const key = fn(element);
        if(!result[key]){
            result[key]=[]
        }
        result[key].push(element);
    }
    return result;
};


console.log([1,3,3].groupBy(String)) // {"1":[1],"2":[3],"3":[3]}

//better version of algo from chatgpt algo for the looping
// Compute a key using the callback.

// If that key doesn’t exist in result, create an empty array.

// Push the original element into result[key].

// Return result.

