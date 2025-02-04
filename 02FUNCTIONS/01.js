"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(num) {
  return num + 5;
}
addNumber(10);
function UC(val) {
  return val.toUpperCase();
}
UC("ashish");
function SignIn(name, email, isPaid) {}
var rslt = SignIn("Ashish", "ashish@google.com", true); // let rslt=SignIn(1,2,3); TS gives error once at a time
console.log(rslt);
var login = function (username, password, isPaid) {
  if (isPaid === void 0) {   // here js write some xtra code for us wrt to ts
    isPaid = true;
  }
  return "how can we return values in string or any other parameter in the function lets read out it ";
};
console.log(login("ashish", 12345));
