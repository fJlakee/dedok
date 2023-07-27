/** возвращает копию строки text в верхнем регистре */
export function upperCase(text) {
    if(typeof text !== "string"){
        throw Error("argument must be type of string");
    }
    let newtext = "";
    for(let i = 0; i < text.length; i+=1){
        if(text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122){
            newtext+=String.fromCharCode(text[i].charCodeAt() - 32);
        }
        else{
            newtext+=text[i];
        }
    }
    console.log(newtext);
    return newtext;
}

/** возвращает копию строки text в нижнем регистре */
export function lowerCase(text) {
    if(typeof text !== "string"){
        throw Error("argument must be type of string");
    }
    let newtext = "";
    for(let i = 0; i < text.length; i+=1){
        if(text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90){
            newtext+=String.fromCharCode(text[i].charCodeAt() + 32);
        }
        else{
            newtext+=text[i];
        }
    }
    console.log(newtext);
    return newtext;
}
