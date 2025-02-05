interface User{  // similar like type in ts
    readonly dbID: number,
    email:string,
    userUD : number
    isGoogleAuth?: boolean,
    // isCheck:()=>boolean, // method which return the boolean value -- > ye be shi hai
    isCheck(): string,
    getDiscount(dicountCode : string) : number
}

// Reopening Of the Interface --> Interview Based Question.

interface User{
    isFacebookAuth?:boolean
}

interface Admin extends User{ // it will inherit all the properties of User interface
    role:"admin" | "manager" | "PA" | " teacher",
}


// const ashish : User = {dbID:1234,email: "ashish@gmail.com", userUD:2231,isFacebookAuth:true,
//     isCheck:()=>{
//         return "ashish";
//     },
//     getDiscount:(code : "DEEPSEEK46")=>{
//         return 756;
//     }
// }

const ashish : Admin = {dbID:1234,email: "ashish@gmail.com", userUD:2231,isFacebookAuth:true,
    role:"admin", // it should be same as the literal in the interface
    isCheck:()=>{
        return "ashish";
    },
    getDiscount:(code : "DEEPSEEK46")=>{
        return 756;
    }
}



// READ ABOUT type vs interface 
// 1.interface can be extended using extends.
// 1.type can be extended using intersection (&), but it is less readable for large-scale projects.


// 2.Interfaces automatically merge if declared multiple times.
// 2.Types do not merge—redeclaring them causes an error.

// 3.Use interface when defining objects and classes → Preferred for OOP.
// 3.Use type for unions, intersections, or more complex types.













