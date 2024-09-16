/** Возвращает text повторенный count раз. */
export function repeat(text, count) {
	if(typeof text !== "string"){
		throw Error("argument must be type of string");
	}
	if(typeof count === 'undefined') {
		return text;
	}
	if((typeof count === "number") && (count%1 === 0 && count >= 0)){
		let repeatedText = "";
		for(let i = 0; i < count; i+=1) {
			repeatedText += text;
		}
		return repeatedText;
	}
	else{
		throw Error("invalid count");
	}

}
