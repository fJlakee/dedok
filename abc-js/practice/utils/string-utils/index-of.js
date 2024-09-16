/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
import { isString } from './myFunctions.js';

export function indexOf(text, searchString, index) {
    //Hello world!!! It's terminator
    //terminator
    isString(text);
    if(typeof index === "undefined"){
        index = 0;
    }
    if(typeof searchString !== "string"){
        throw Error("invalid searchString string");
    }
    if(index < 0 || index > text.length || index%1!== 0 || (typeof index !== "undefined" && typeof index !== "number")){
        throw Error("invalid index");
    }

    let return_index = -1;
    function substring(local_index){
        let count = 0;
        let newstr = "";
        for(let a = local_index; a < local_index + searchString.length; a+=1){
            newstr += text[a];
        }
        for(let b = 0; b < searchString.length; b+=1){
            if(newstr[b] === searchString[b]){
                count+=1;
            }
        }
        if(searchString.length === count){
            return_index = local_index;
            return true;
        }
    }
    for(let i = index; i < text.length; i+=1){
        if(searchString[0] === text[i]){
            if(substring(i) === true){
                break;
            }
        }
    }
    return return_index;
}
