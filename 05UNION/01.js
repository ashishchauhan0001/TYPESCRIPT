var score = 33;
score = 44;
score = "54";
var newUser = { name: "ashish", id: 123 }; // for diff diff roles we can use them
newUser = { username: "ashish", id: 321 };
function getDbId(id) {
    console.log("Db id is : ".concat(id));
}
function BlackBox(x) {
    if (typeof (x) === "string") { // before applying any operation we need to verify type of that variable first.
        x.toLowerCase();
    }
    else {
        x + 5;
    }
}
getDbId(3);
getDbId("4");
// Arrays
var data0 = ["7", "8", "6"]; // it will work fine bcz ek hi hai
var data1 = [1, 2, 3, 4, 5]; // ek hi h
// const data2: number[] | string[]=[1,2,3,4,5,"7"]   its means ya to saare number arrays of ya strings
var data3 = [1, 2, 3, 4, 5, "7"]; // for diff data types
var data4 = [1, 2, 3, 4, 5, "7"]; // we also can use this but not recommended
var shopItems;
// shopItems="chawal"  it will not allowed bcz ye present hi nahi h
