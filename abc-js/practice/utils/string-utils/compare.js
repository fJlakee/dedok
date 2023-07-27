/** возвращает булевый ответ равны ли параметры firstText и secondText. */
export function isEqual(firstText, secondText) {
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string");
	}

	if(secondText.length >  firstText.length) {
		[firstText, secondText] = [secondText, firstText];
	}
	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] !== secondText[i]){
			return false;
		}
	}
	return true;
}

/** возвращает true если аргументы не равны, и false в иных случаях. */
export function isNotEqual(firstText, secondText) {
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string");
	}

	if(secondText.length >  firstText.length) {
		[firstText, secondText] = [secondText, firstText];
	}
	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] !== secondText[i]){
			return true;
		}
	}
	return false;
}

/** возвращает булевый ответ больше ли параметр firstText чем secondText. */
export function isMore(firstText, secondText) {
	if((typeof secondText === "string") && (secondText.length < 1 && firstText.length !== 0)){
		return true;
	}
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string")
	}
	if(secondText.length < firstText.length && secondText.length !== 0){
		secondText = secondText + " ";
	}
	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] > secondText[i]){
			return true;
		}
		else if(firstText[i] < secondText[i]){
			break;
		}
	}
	return false;
}

/** возвращает булевый ответ меньше ли параметр firstText чем secondText. */
export function isLess(firstText, secondText) {
	let count = 0;
	[firstText, secondText] = [secondText, firstText];
	if((typeof secondText === "string") && (secondText.length < 1 && firstText.length !== 0)){
		return true;
	}
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string")
	}
	
	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] === secondText[i]){
			count +=1;
		}
		if(firstText[i] > secondText[i]){			
			return true;
		}
		else if(firstText[i] < secondText[i]){
			break;
		}
	}
	if(firstText.length > secondText.length && count === secondText.length){
		return true;
	}
	return false;
}

/** возвращает булевый ответ больше или равно ли параметр firstText чем secondText. */
export function isMoreOrEqual(firstText, secondText) {
	let count = 0;
    if((typeof secondText === "string") && (secondText.length < 1 && firstText.length !== 0)){
		return true;
	}
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string")
	}

	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] === secondText[i]){
			count+=1;
		}
		if(firstText[i] > secondText[i]){
			return true;
		}
	}
	if(count === firstText.length && firstText.length === secondText.length){
		return true;
	}
	if(firstText.length > secondText.length && count === secondText.length){
		return true;
	}
	return false;
}

/** возвращает булевый ответ меньше или равно ли параметр firstText чем secondText. */
export function isLessOrEqual(firstText, secondText) {
	[firstText, secondText] = [secondText, firstText];
    let count = 0;
    if((typeof secondText === "string") && (secondText.length < 1 && firstText.length !== 0)){
		return true;
	}
	if(typeof firstText !== "string" || typeof secondText !== "string"){
		throw Error("argument must be type of string")
	}

	for(let i = 0; i < firstText.length; i+=1){
		if(firstText[i] === secondText[i]){
			count+=1;
		}
		if(firstText[i] > secondText[i]){
			return true;
		}
	}
	if(count === firstText.length && firstText.length === secondText.length){
		return true;
	}
	if(firstText.length > secondText.length && count === secondText.length){
		return true;
	}
	return false;
}