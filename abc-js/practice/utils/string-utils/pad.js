/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
import { isString } from './myFunctions.js';
function typecheck(text, maxLength, fillString){
    if(typeof maxLength === "undefined" || maxLength === null){
        return text;
    }
    if(typeof maxLength !== "number"){
        throw Error("invalid type of maxLength");
    }
    if(typeof fillString !== "string"){
        throw Error("argument fillString must be type of string");
    }
}
export function padStart(text, maxLength, fillString = ' ') {
    isString(text);
    typecheck(text, maxLength, fillString);

    let newtext = "";
    if(maxLength >= text.length){
        let untilparam = maxLength - text.length;
        if(fillString.length > 1){
            for(let j = 0;j < untilparam; j+=1){
                if((maxLength !== text.length + fillString.length) && (j === fillString.length)){
                    j = 0;
                    untilparam = maxLength - (text.length + fillString.length);
                }
                newtext+=fillString[j];
            }
        }
        else{
            for(let j = 0;j < maxLength - text.length; j+=1){
                newtext+=fillString;
            }
        }

        for(let i = 0; i < text.length; i+=1){
            newtext+=text[i];
        }
    }
    else{
        return text;
    }
    return newtext;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function padEnd(text, maxLength, fillString = ' ') {
    isString(text);
    typecheck(text, maxLength, fillString);


    let newtext = "";
    if(maxLength >= text.length){
        for(let i = 0; i < text.length; i+=1){
            newtext+=text[i];
        }
        let untilparam = maxLength - text.length;
        if(fillString.length > 1){
            for(let j = 0;j < untilparam; j+=1){
                if((maxLength !== text.length + fillString.length) && (j === fillString.length)){
                    j = 0;
                    untilparam = maxLength - (text.length + fillString.length);
                }
                newtext+=fillString[j];
            }
        }
        else{
            for(let j = 0;j < maxLength - text.length; j+=1){
                newtext+=fillString;
            }
        }
    }
    else{
        return text;
    }
    return newtext;
}

/** Возвращает копию text увеличенный до длины maxLength
 * заполненный в начале и конце символами fillString.
 * Допускается в fillString передавать строку из нескольких символов. */
export function pad(text, maxLength, fillString = ' ') {
    isString(text);
    typecheck(text, maxLength, fillString);


    let maxparam = maxLength - text.length;
    let leftmaxparam = maxparam/2;
    let rightmaxparam = maxparam/2;
    if(maxLength%2!== 0){
        leftmaxparam = (maxparam + 1)/2;
        rightmaxparam = (maxparam -1)/2;
    }
    let newtext = "";

    function filltext(max){
        let a = 0;
        let b = 0;
        do{
            newtext+=fillString[a];
            a+=1;
            if(fillString[a] === undefined){
                a = 0;
            }
            b+=1;
        }while(b < max);
    }
    if(fillString.length > 1){
        filltext(leftmaxparam);
        for(let i = 0; i < text.length; i+=1){
            newtext+=text[i];
        }
        filltext(rightmaxparam);
    }
    else{
        for(let i = 0;i < leftmaxparam; i+=1){
            newtext += fillString;
        }
        for(let i = 0; i < text.length; i+=1){
            newtext+=text[i];
        }
        for(let i = 0;i < rightmaxparam; i+=1){
            newtext += fillString;
        }
    }
    return newtext;
}
