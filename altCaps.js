function altCaps(str){
    let newStr = '';
    for(let i = 0; i<str.length; i++){
        if(i%2===0){
            newStr += str[i].toUpperCase();
        }else{
            newStr+=str[i]
        }
        console.log(str, newStr);
    }
    return newStr;
}

console.log(altCaps('Hi how re you'))