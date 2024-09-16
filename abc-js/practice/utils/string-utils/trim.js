const TRIM_SYMBOLS = ' \n\t\v'; 
// \n\t\v
//  HI
/** Возвращает копию строки с удаленными символами со строки trimSymbols в начале строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
function throwErr(text, trimSymbols){
    if(typeof trimSymbols !== "string"){
        throw Error("argument trimSymbols must be type of string")
    }
    if(typeof text !== "string"){
        throw Error("argument text must be type of string")
    }
}

export function trimStart(text, trimSymbols=TRIM_SYMBOLS) {
    throwErr(text, trimSymbols);
    let index = 0;
    let newstr = "";
    let counter = 0;
    let endpoint = 0;
    for(let i = 0; i < text.length; i+=1){
        let accordance = 0;
        for(let j = 0; j < trimSymbols.length; j+=1){
            if(text[i] === trimSymbols[j]){
                accordance +=1;
                counter+=1;
            }
        }
        if(accordance === 0){
            index = i;
            endpoint = text.length;
            break;
        }
        if(counter === text.length){
            endpoint = index;
            break;
        }
    }
    for(let a = index; a < endpoint; a+=1){
        newstr +=text[a];
    }
    return newstr;
    
}

/** Возвращает копию строки с удаленными символами со строки trimSymbols в конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trimEnd(text, trimSymbols=TRIM_SYMBOLS) {
    throwErr(text, trimSymbols);
    let index = 0;
    let newstr = "";
    let counter = 0;
    let endpoint = 0;
    for(let i = text.length - 1; i > 0; i-=1){
        let accordance = 0;
        for(let j = 0; j < trimSymbols.length; j+=1){
            if(text[i] === trimSymbols[j]){
                accordance +=1;
                counter+=1;
            }
        }
        if(accordance === 0){
            index = i + 1;
            endpoint = 0;
            break;
        }
        if(counter === text.length){
            endpoint = index;
            break;
        }
    }
    for(let a = endpoint; a < index; a+=1){
        newstr +=text[a];
    }
    return newstr;
}

/** Возвращает копию строки с удаленными символами
 * со строки trimSymbols в начале и конце строки.
 * По умолчанию удаляются символы пробела, табуляции и перевода строки.*/
export function trim(text, trimSymbols=TRIM_SYMBOLS) {
    if(typeof trimSymbols !== "string"){
        throw Error("argument trimSymbols must be type of string")
    }
    if(typeof text !== "string"){
        throw Error("argument text must be type of string")
    }
    let newstr = "";
    let startid = 0;
    let counter = 0;
    for(let i = 0; i < text.length; i+=1){
        let accordance = 0;
        for(let j = 0; j < trimSymbols.length; j+=1){
            if(text[i] === trimSymbols[j]){
                accordance +=1;
            }
        }
        if(accordance === 0){
            startid = i;
            break;
        }
        else{
            counter+=1;
        }
    }
    if(counter === text.length){
        return newstr;
    }
    let endid = 0;
    for(let i = text.length - 1; i > 0; i-=1){
        let accordance = 0;
        for(let j = 0; j < trimSymbols.length; j+=1){
            if(text[i] === trimSymbols[j]){
                accordance +=1;
            }
        }
        if(accordance === 0){
            endid = i;
            break;
        }
    }

    for(let a = startid; a < endid + 1; a+=1){
        newstr += text[a];
    }
    return newstr;
}
