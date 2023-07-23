/** Возвращает "перевернутую" копию text */
export function reverse(text) {
	if(typeof text !== "string"){
		throw Error("argument must be type of string");
	}
	let newtext = text.split("").reverse().join('');
	return newtext;
}
