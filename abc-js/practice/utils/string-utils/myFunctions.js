export function isString(text){
    if(typeof text !== "string"){
        throw Error("argument text must be type of string");
    }
}

export  function isElementsEqual(firstText, secondText){
    if(firstText.length === secondText.length){
        for(let i = 0; i < firstText.length; i+=1){
            if(firstText[i] !== secondText[i]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

export function isFirstTextMore(firstText, secondText){
    let counter = 0;
    for(let i = 0; i < firstText.length; i +=1){
        if(firstText[i] > secondText[i]){
            counter+=1;
        }
        else if(firstText[i] < secondText[i]){
            return false;
        }
    }
    if(counter > 0){
        return true;
    }
    if(counter === 0 && firstText.length > secondText.length){
        return true;
    }
    else if(counter === 0 && firstText.length < secondText.length){
        return false;
    }
    else if(counter === 0 && firstText.length === secondText.length){
        return false;
    }
}


export function isFirstTextLess(firstText, secondText){
    let counter = 0;
    for(let i = 0; i < firstText.length; i +=1){
        if(firstText[i] < secondText[i]){
            counter+=1;
        }
        else if(firstText[i] < secondText[i]){
            return false;
        }
    }
    if(counter > 0){
        return true;
    }
    if(counter === 0 && firstText.length > secondText.length){
        return false;
    }
    else if(counter === 0 && firstText.length < secondText.length){
        return true;
    }
    else if(counter === 0 && firstText.length === secondText.length){
        return false;
    }
}

export function CheckOut(index=0, search, text){
    let arr = "";
    let counter = 0;
    for(let i = index;i < index + search.length; i+=1){
        arr+=text[i];
    }
    for(let i = 0; i < search.length; i+=1){
        if(arr[i] === search[i]){
            counter+=1;
        }
    }
    if(counter===search.length){
        return 1;
    }
    return 0;
}