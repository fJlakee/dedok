export function isString(text){
    if(typeof text !== "string"){
        throw Error("argument must be type of string");
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