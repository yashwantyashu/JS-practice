/**
 * Splits an array into chunks of given size.
 *
 * @param {Array} arr - The input array
 * @param {number} size - The chunk size
 * @return {Array[]} - A new array containing chunked subarrays
 */
var chunk = function(arr, size) {
    // Result array to store chunks
    const result = [];

    // Move through the array in strides of 'size'
    for (let i = 0; i < arr.length; i += size) {
        // Take a slice from current index to i + size
        // slice automatically handles boundary overflow
        result.push(arr.slice(i, i + size));
    }

    return result;
};

console.log(chunk([1,2,3,4,5,6,7], 2));