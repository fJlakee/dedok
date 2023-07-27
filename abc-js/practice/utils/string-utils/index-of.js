/** Выполняет поиск строки searchString в строке text
 * и возвращает первую найденную позицию.
 * Если в вхождение не найдено, то возвращает значение -1.
 * Параметр index задает начальную индекс с которой необходимо
 * начать поиск.*/
export function indexOf(text, searchString, index) {
    //Hello world!!! It's terminator
    //terminator
    if(typeof text !== "string"){
        throw Error("argument must be type of string");
    }
    if(typeof index === "undefined"){
        index = 0;
    }

    if(index < 0 || index > text.length || index%1!== 0 || (typeof index !== "undefined" && typeof index !== "number")){
        throw Error("invalid index");
    }
    if(typeof searchString !== "string"){
        throw Error("invalid searchString string");
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
