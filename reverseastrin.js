function reverseString(str){
    return str.
    split('')  //returns an array where every character is separated as an element
    .reverse() //reverses the array as it is an array method and will throw undefined for strings
    .join(''); //returns a string that will join based on the limitted value given. so join('') means no separator
    // split by each char as an element -> reverse the array -> join them and return as string
}
console.log(reverseString('yashwant'));


//without built in methods by only using for loop

function reverseStringWithLoop(str){
    let reversestring = '';
    for(let i = str.length -1; i >=0; i--){
        reversestring += str[i]
    }
    return reversestring;
}

console.log(reverseStringWithLoop('yashwant'));
// String "yashwant" has length 8
// Indexes go from 0 to 7 (because indexing starts at 0)
// So last character index is length - 1 → 8 - 1 = 7
// Loop logic:

// Start i = 7
// Condition i >= 0 means keep going until first character
// i-- moves backward: 7, 6, 5 ... 0
// Each step adds str[i] to reversed
// So first iteration:

// str[7] is 't'
// reversed = '' + 't' → "t"
// Then str[6] ('n'), then str[5] ('a'), etc., building the reversed string from back to front.

//using spread operator

function reverseusingspread(str){
    return [...str].reverse().join('');
}

console.log(reverseusingspread('yashwantkr'));


//recursion is not optimal solution
