/** Возвращает строку text, где первое вхождение search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replace(text, search, target) {
    if(typeof text !== "string"){
        throw Error("argument text must be type of string");
    }
    if(typeof search !== "string"){
        throw Error("argument search must be type of string");
    }
    if(typeof target !== "string"){
        throw Error("argument target must be type of string");
    }
    let newstr = "";
    let startid = 0;
    let endid = 0;
    let length_difference = target.length - search.length;
    function check(id){
        let counter = 0;
        let arr = "";
        for(let i = id; i < search.length + id; i+=1){
            arr+= text[i];
        }
        for(let j = 0; j < search.length; j+=1){
            if(arr[j] === search[j]){
                counter+=1;
            }
        }
        if(counter === search.length){
            return true;
        }
        else{
            return false;
        }
    }
    let incongruity = 0;
    let trueorfalse = 0;
    for(let i = 0; i < text.length; i+=1){
        if(text[i] === search[0]){
            incongruity +=1;
            if(check(i) === true){
                startid = i;
                trueorfalse = true;
                break;
            }
        }
    }
    if(incongruity === 0 || trueorfalse === 0){
        return text;
    }
    for(let a = 0; a < startid; a+=1){
        newstr += text[a];
    }
    newstr += target;
    for(let b = startid + search.length; b < text.length; b+=1){
        newstr += text[b];
    }
    return newstr;
}

/** Возвращает строку text, где все вхождения search поменяно на target.
 * text: строка, копию которой нужно получить.
 * search: строка которое нужно поменять.
 * target: строка, на которую нужно поменять. */
export function replaceAll(text, search, target) {
    if(typeof text !== "string"){
        throw Error("argument text must be type of string");
    }
    if(typeof search !== "string"){
        throw Error("argument search must be type of string");
    }
    if(typeof target !== "string"){
        throw Error("argument target must be type of string");
    }

    let newtext = "";
    function addtext(){
        newtext += target;
        console.log("added target text: " + newtext)
    }
    function check(index){
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

    let a = 0;
    while (a < text.length) {
      if (text[a] !== search[0]) {
        newtext = newtext + text[a];
        a += 1;
      } else {
        if (check(a) === 1) {
          addtext();
          a += search.length;
        } else {
          newtext += text[a];
          a += 1;
        }
      }
    }
  return newtext;
}
