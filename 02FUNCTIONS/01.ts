function addNumber(num:number){  
    return num+5;
}

addNumber(10);

function UC(val:string){
return val.toUpperCase();
}

UC("ashish")

function SignIn(name:string,email:string,isPaid:boolean){}

let rslt=SignIn("Ashish","ashish@google.com",true); // let rslt=SignIn(1,2,3); TS gives error once at a time

console.log(rslt);

let login=(username:string,password:number,isPaid:boolean=true)=>{
 return "how can we return values in string or any other parameter in the function lets read out it "
}

console.log(login("ashish",12345));
 

export {}