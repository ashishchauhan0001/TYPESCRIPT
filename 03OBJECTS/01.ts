
const user={
    name:"ashish",
    email:"a@gmail.com",
    active:true
}

function createUser({name:string,email:boolean}){}

createUser({name:"ashish",email:true})



// while returing an object from a function
function createCourse():{type:string,price:number}{
  return {type:"fullStack",price:3999}
}


// we can use type keyword in place of a big objects as a type which increases code readability.
type User={
  name:string;
  age:number;
  logIn:boolean
}

function createUser2(user:User):User{
  return {name:"ashish",age:20,logIn:true};
}

createUser2({name:"ashish",age:20,logIn:true})

export{}