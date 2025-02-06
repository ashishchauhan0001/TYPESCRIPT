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

interface Degree{
    course: string,
    duration:string,
    years:number
}

function identityFive<Degree>(data: Degree): Degree {
    return data;
}

const degreeData: Degree = {
    course: "Computer Science",
    duration: "4 years",
    years: 4
};

identityFive(degreeData);


identityFour(34)
identityFour("chuahan")

// this is one type of declarying the function with more than one generic input params.
// function anotherFunction<T,U>(val1:T,val2:U):object{
//     console.log("value is : ",val1);
//     return {};
// }

interface DATABASE{
    connectionString: string,
    username: string,
    password: number
};

function anotherFunction<T,U extends DATABASE>(val:T,val2:U):object{
    return {report:"T"}
}

anotherFunction("projectX",{connectionString:"ashish",username:"ashish1111",password:123321});


interface Book{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}


export{}