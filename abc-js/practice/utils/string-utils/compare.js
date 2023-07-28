/** возвращает булевый ответ равны ли параметры firstText и secondText. */
import{ isFirstTextLess, isFirstTextMore, isString } from './myFunctions.js';
import { isElementsEqual } from './myFunctions.js';

export function isEqual(firstText, secondText) {
    isString(firstText); isString(secondText);
    return isElementsEqual(firstText, secondText);
}

/** возвращает true если аргументы не равны, и false в иных случаях. */
export function isNotEqual(firstText, secondText) {
    return !isEqual(firstText, secondText);
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
    isString(firstText); isString(secondText);
    return isFirstTextMore(firstText, secondText);
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
    isString(firstText); isString(secondText);
    return isFirstTextLess(firstText, secondText);
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
    isString(firstText); isString(secondText);

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
        return true;
    }
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
    isString(firstText); isString(secondText);
    let counter = 0;
    for(let i = 0; i < firstText.length; i +=1){
        if(firstText[i] < secondText[i]){
            counter+=1;
        }
        else if(firstText[i] > secondText[i]){
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
        return true;
    }
}

console.log("nothing")