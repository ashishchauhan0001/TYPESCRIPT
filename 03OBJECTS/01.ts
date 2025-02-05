
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


// we can use type keyword in place of a big objects or in can be used in functions as a type which increases code readability.
type User={
  name:string;
  age:number;
  logIn:boolean
}

function createUser2(user:User):User{
  return {name:"ashish",age:20,logIn:true};
}

createUser2({name:"ashish",age:20,logIn:true})


// readonly and optional (?) keywords useage suppose we are working in MONGODB and storing the data and don't want to change the _id which is given by mongo bydefault.


type USER={
  readonly _id:string // means we only can read it but can't change it
  name:string,
  age:number,
  email:string,
  isCreditCard?:boolean // for the optional

}

let data:USER={
  _id:"1234",
  name:"ashish",
  age:21,
  email:"1kjbd",
}

data.name="chauhan"
data.email="ashish@google.com"
// data._id="123";  this will produce error bcz it is a readonly value.

console.log(data);







export{}