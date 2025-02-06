// generic with Arrays
function getSearchProduct<T>(products: T[]): T{
    // some database work to find the index
    const myIndex=3;
    return products[myIndex];
}

// Arrow Function
// <T,>  --> this is use to indicate that it is generic you can remove it also
const getSearchProduct2 = <T,> (products:T[]) : T =>{
    // some DB operations
    const myIndex=4;
    return products[myIndex];
}

