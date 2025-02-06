const score: Array<number> = []
const names: Array<string> = []

function identityOne(val:boolean | number):boolean | number{
    return val;
}


function identityTwo(val:any):any{  // problem is take any datatype's input and then it can provide output of diff datatype.
    return val;
}


function identityThree<Type>(val:Type):Type{
    return val;
}

identityThree(23);
identityThree("ashish"); // it will a generic function

function identityFour<ashish>(value:ashish):ashish{ // this can be anything but should be same for generic
    return value;
}

// we can give the interface into these function's dataType

identityFour(34)
identityFour("chuahan")