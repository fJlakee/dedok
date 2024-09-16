export function isInteger(value) {
	if(typeof value !== "number"){
		throw new Error("value must be only number type");
	}
	if(value%1 === 0){
		return true
	}
	return false;
}
