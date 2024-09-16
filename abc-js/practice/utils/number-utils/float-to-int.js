/** возвращает целую часть дробного числа. -56.78 -> -56*/
export function floatToInt(value) {
    if(typeof value !== "number"){
        throw Error("value must be only number type");
    }
    return (value - (value%1));
}
