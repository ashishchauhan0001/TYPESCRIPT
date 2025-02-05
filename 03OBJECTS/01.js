"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "ashish",
    email: "a@gmail.com",
    active: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.email;
}
createUser({ name: "ashish", email: true });
// while returing an object from a function
function createCourse() {
    return { type: "fullStack", price: 3999 };
}
function createUser2(user) {
    return { name: "ashish", age: 20, logIn: true };
}
createUser2({ name: "ashish", age: 20, logIn: true });
var data = {
    _id: "1234",
    name: "ashish",
    age: 21,
    email: "1kjbd",
};
data.name = "chauhan";
data.email = "ashish@google.com";
// data._id="123";  this will produce error bcz it is a readonly value.
console.log(data);
