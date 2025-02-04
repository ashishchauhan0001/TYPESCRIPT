let greetings:Array<string> = ["Good Morning","Good Night"]
console.log(greetings[0]);
console.log(greetings[1]);
console.log(greetings[2]);

let name :string = "ashish";

console.log(name.length);
 // by using '.' dot we can see what are the function that are associated with string same as for the other datatypes only for those datatypes functions will be shown to us

let age: number=21;

// agr hum immediately value assign krde to we dont need to write the type of that variable

console.log(age.toExponential);
 

let isLoggedIn: boolean =false;

console.log(isLoggedIn.valueOf);

// any : TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors

let token:any;

token=231;
// token="Ashish"; it will also work bcz of any keyword

console.log(token);






export {} // helps us to get the error of redefine the block