function panic(message){
    return message.split(' ').join('  😱  ').toUpperCase() + "!";
}

console.log(panic("I am panicking"));

//tryouts

function splitTry(str){
    return str.join('=');
}
console.log(splitTry(['hello world how are you', 'fine','you']));