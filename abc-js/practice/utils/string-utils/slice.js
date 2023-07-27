/** Возвращает часть строки указанной между индексами startIndex, finishIndex.
  Отличается от substring тем, что позволяет указывать отрицательные индексы
  которые отсчитываются с конца строки. */
export function slice(text, startIndex, finishIndex) {
  //Hello world!!! It's terminator
  if(typeof text !== "string"){
    throw Error("argument must be type of string");
  }
  if((typeof startIndex !== "number" && typeof startIndex !== "undefined") || (0 - startIndex > text.length) || (typeof startIndex !=="undefined" && (0 + startIndex)%1!== 0)){
    throw Error("invalid start index");
  }
  if((typeof finishIndex !== "number" && typeof finishIndex !== "undefined") || (typeof finishIndex !=="undefined" && finishIndex%1!==0)){
    throw Error("invalid end index");
  }


  let newtext = "";
  if(startIndex < 0 && finishIndex >= 0){
    throw Error("indexes must be only positive or negative");
  }
  if(startIndex >= 0 && finishIndex < 0){
    throw Error("indexes must be only positive or negative");
  }


  if(startIndex < 0 ){
    startIndex = text.length + startIndex;
  }
  if(finishIndex < 0){  
    finishIndex = text.length + finishIndex;
  }

  if(finishIndex > text.length){
    throw Error("invalid end index");
  }

  if(finishIndex < startIndex){
    throw Error("invalid start and end index")
  }
  if(typeof startIndex === "undefined"){
    startIndex = 0;
  }
  if(typeof finishIndex === "undefined"){
    finishIndex = text.length;
  }
  for(let i = startIndex; i < finishIndex; i+=1){
    newtext+=text[i];
  }
  return newtext;
}
