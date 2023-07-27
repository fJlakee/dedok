import { DIGIT_FINISH, DIGIT_START, ENG_CHAR_SHIFT, ENG_LOWER_FINISH, ENG_LOWER_START, ENG_UPPER_FINISH, ENG_UPPER_START, RUS_CHAR_SHIFT, RUS_LOWER_FINISH, RUS_LOWER_START, RUS_UPPER_FINISH, RUS_UPPER_START } from "./common.js";

/** возвращает булевый ответ, является ли символ в нижнем регистре. */
export function isLower(char) {
  if(typeof char !== "string"){
    throw Error("parameter is required and must be string type");
  }
  if(char.length > 1){
    throw Error("char must be only one symbol char");
  }
  let newtext = char.charCodeAt();
  if(newtext >= 97 && newtext<=122 || newtext >= 1072 && newtext <= 1103){
    return true;
  }
  else{
    return false;
  }
}

/** возвращает булевый ответ, является ли символ в верхнем регистре. */
export function isUpper(char) {
  if(typeof char !== "string"){
    throw Error("parameter is required and must be string type");
  }
  if(char.length > 1){
    throw Error("char must be only one symbol char");
  }
  let newtext = char.charCodeAt();
  if(newtext >= 65 && newtext<=90 || newtext >= 1040 && newtext <= 1071){
    return true;
  }
  else{
    return false;
  }
}

/** переводит символ в нижний регистр,
  если символ окажется символом верхнего регистра,
  иначе вернет старое значение. 'A' --> 'a' */
export function toLower(char) {
  if(typeof char !== "string"){
    throw Error("parameter is required and must be string type");
  }
  if(char.length > 1){
    throw Error("char must be only one symbol char");
  }
  let newtext = char.charCodeAt();
  console.log(typeof newtext);
  if(newtext >= 65 && newtext<=90 || newtext >= 1040 && newtext <= 1071){
    newtext = newtext + 32;
  }
  return String.fromCharCode(newtext);
}

/** переводит символ в верхний регистр,
  если символ окажется символом нижнего регистра,
  иначе вернет старое значение.s 'a' --> 'A'*/
export function toUpper(char) {
  if(typeof char !== "string"){
    throw Error("parameter is required and must be string type");
  }
  if(char.length > 1){
    throw Error("char must be only one symbol char");
  }
  let newtext = char.charCodeAt();
  console.log(typeof newtext);
  if(newtext >= 97 && newtext<=122 || newtext >= 1072 && newtext <= 1103){
    newtext = newtext - 32;
  }
  return String.fromCharCode(newtext);
}

/** возвращает булево значения, является ли символ цифрой '1' --> true */
export function isDigit(char) {
  if(typeof char !== "string"){
    throw Error("parameter is required and must be string type");
  }
  if(char.length > 1){
    throw Error("char must be only one symbol char");
  }
  let num = char.charCodeAt();
  if(num < 48 || num > 57){
    return false;
  }
  if(typeof num === "number"){
    return true;
  }
  else{
    return false;
  }
}

/** возвращает число из цифрового символа '1' --> 1 */
export function toDigit(char) {
  let num = char.charCodeAt();
  if(num < 48 || num > 57){
    throw Error("invalid char");
  }
  else if(num >= 48 && num <= 57){
    num = num - 48;
  }
  return num;
}

/** возвращает символ цифры из цифры 1 --> '1' */
export function fromDigit(digit) {
  if(typeof digit !== "number"){
    throw Error("parameter is required and must be number type");
  }
  if(digit < 0 || digit > 9){
    throw Error("invalid digit");
  }
  digit = digit + 48;
  let str = String.fromCharCode(digit);
  return str;
}
