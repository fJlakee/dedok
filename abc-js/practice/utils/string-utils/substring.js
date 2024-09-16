/** Возвращает копию text начиная с индекса start до индекса end.
 * Символ с индексом end не включается в выборку.
 * Если start не передано, то будет выборка начнется с первого символа.
 * Если end не передано, то будет возвращено text до последнего символа*/
export function substring(text, start, end) {
    if(typeof text !== 'string'){
        throw Error("argument must be type of string");
    }
    if(typeof start === "undefined"){
        start = 0;
    }
    if(typeof end === "undefined"){
        end = text.length;
    }
    if((typeof start !== "number" && typeof start !== "undefined") || start < 0 || start%1 !== 0){
        throw Error("invalid start index");
    }
    if((typeof end !== "number" && typeof end !== "undefined") || end < 0 || end%1 !== 0){
        throw Error("invalid end index");
    }
    if(start > end){
        throw new Error("invalid start and end index");
    }
    let stroke = "";
    if(end > text.length){
        throw Error("invalid end index");
    }
    else{
        for(let i = start; i < end; i+=1){
            stroke += text[i];
        }
        return stroke;
    }
}
