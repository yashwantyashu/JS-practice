function reverseString(str){
    return str.
    split('')  //returns an array where every character is separated as an element
    .reverse() //reverses the array as it is an array method and will throw undefined for strings
    .join(''); //returns a string that will join based on the limitted value given. so join('') means no separator
    // split by each char as an element -> reverse the array -> join them and return as string
}
console.log(reverseString('yashwant'));