/** возвращает целую часть числа увеличенную в большую сторону */
export function ceil(value) {
    if(typeof value !== "number"){
        throw Error("value must be only number type");
    }
    if(value%1 === 0){
        return value;
    }
    if(value >=0){
        return (value-value%1) + 1;
    }
    else{
        return (value-value%1);
    }


    // if(typeof value !== "number"){
    //     throw Error("value must be only number type");
    // }
    // if(value%1 === 0){
    //     return value;
    // }
    // if(value%1 < 0.5){
    //     return (value - value%1);
    // }
    // else{
    //     if(value >= 1){
    //         return (value - value%1);
    //     }
    //     else if (value >= 0 && value < 1){
    //         return 0;
    //     }
    //     else{
    //         return (value - value%1) + 1;
    //     }
    // }
}
