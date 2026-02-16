function capitalize(str){
    //return str[0].toUpperCase + str.slice(1);
    let length = str.length; //tryout for me- in case i forget how o use delimitter and limitter..
    return str[0].toUpperCase() + str.slice(1,length); // or just str.slice(1) => ashwant as it starts from 1 st index
}

console.log(capitalize('yashwant'));

function titlecase(str){
    //splitting sentence into array of words
    /**if used empty - returns an array of single element - like ['hi how are you']
    ' ' means one space between - like ["hi","how",...]
    '' means returns every character as an element  like ['h','i', ' ', ...]
    */
    const sentenceArr = str.split(' '); 

    //now we want to turn every element's starting letter as uppercase- so we can use the capitalize funtion above with map which will apply
    //the transform on every element in the array
    //the str used inside map is not as same as the str like the argument-it is not dependent-it is only a naming convention 
    //can be word or sentence as long as the name passed is same as the arg inside capitalize

    const caseArr = sentenceArr.map(str => capitalize(str));

    //after turning the sentenceArr to capitalize every element - have to join to return as string
    //using .join - returns a string from an array
    //using ' ' => give a space between each element.
    //if used ''=> no space returns as HiHowAreYou
    //if used empty => by default will add comma=> Hi,How,Are,You
    //if added a number or another word=it is inserted between every element
    //if join(1)=>Hi1How1Are... if join(!)=> returns Hi!How!Are!You 
    //never adds at the front or at the back only in between
    //never cahnges original array-return a new string
    const titleCase = caseArr.join('!');
    
    return titleCase;
}

console.log(titlecase("hi how are you"));