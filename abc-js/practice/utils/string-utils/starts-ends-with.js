/** Возвращает булевый результат начинается ли text на search.
  startPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за начало текста.*/
import {CheckOut} from './myFunctions.js';
export function startsWith(text, search, startPosition = 0) {
  if(typeof startPosition !== "number"){
    throw Error("invalid position type")
  }
    if(typeof search !== "string"){
    throw Error("argument search must be type of string")
  }
    if(typeof text !== "string"){
    throw Error("argument text must be type of string")
  }
    if(search === ""){
      return true;
    }
    if(startPosition > text.length || startPosition < 0){
      throw Error("invalid position");
    }
    if(text.length < search.length + startPosition){
      throw Error("invalid start position or search length");
    }
    let counter = 0;

    if(search[0] === text[startPosition]){
        if(CheckOut(startPosition, search, text) === 1){
          return true;
        }
        else{
          return false;
        }
    }
    else{
      return false;
    }
}

/** Возвращает булевый результат заканчивается ли text на search.
  endPosition - необязательный параметр позволяющий указать позицию
  (не индекс) символа который необходимо считать за конец текста.*/
  export function endsWith(text, search, endPosition) {

    if(endPosition > text.length || endPosition < 0){
      throw Error("invalid position");
    }    
    if(typeof endPosition === "undefined"){
        endPosition = text.length - 1;
    }
    else if(typeof endPosition === "number"){
      endPosition = endPosition - 1;
    }
    else{
      throw Error("invalid position type");
    }
    if(endPosition - search.length < 0){
      throw Error("invalid end position or search length");
    }
    if(typeof text !== "string"){
      throw Error("argument text must be type of string")
    }
      if(typeof search !== "string"){
      throw Error("argument search must be type of string")
    }
    if(search === ""){
        return true;
    }

    function check(){
      let counter = 0;
      let arr = "";
      for(let a = endPosition; a > endPosition - search.length; a-=1){
        arr+=text[a];
      }
      arr = arr.split("").reverse().join("");
      for(let i = 0; i < search.length ; i+=1){
        if(arr[i] === search[i]){
          counter+=1;
        }
      }
      if(counter === search.length){
        return 1;
      }
      else if(counter !== search.length){
        return 0;
      }
    }
    if(search[search.length - 1] === text[endPosition]){
        if(check() === 1){
          return true;
        }
        else{
          return false;
        }
    }
    else{
      return false;
    }
  }

  