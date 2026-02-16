//only capitalise the first letter
//use slice and toUpperCase

function capitalize(str){
    //return str[0].toUpperCase + str.slice(1);
    let length = str.length; //tryout for me- in case i forget how o use delimitter and limitter..
    return str[0].toUpperCase() + str.slice(1,length); // or just str.slice(1) => ashwant as it starts from 1 st index
}

console.log(capitalize('yashwant'));