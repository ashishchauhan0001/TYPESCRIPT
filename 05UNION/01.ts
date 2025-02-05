let score:number | string = 33

score=44;
score="54"

type User={
    name:string;
    id: number;
}

type Admin = {
    username:string;
    id:number;
}

let newUser : User | Admin = {name : "ashish", id: 123} // for diff diff roles we can use them

newUser={username:"ashish" , id:321}

function getDbId(id: number | string){
    console.log(`Db id is : ${id}`);
}

function BlackBox( x : number | string){
  if(typeof(x)=== "string"){ // before applying any operation we need to verify type of that variable first.
    x.toLowerCase();
  }else{
    x+5;
  }
}

getDbId(3);
getDbId("4");

// Arrays

const data0: string[]=["7","8","6"]; // it will work fine bcz ek hi hai
const data1: number[]=[1,2,3,4,5]; // ek hi h
// const data2: number[] | string[]=[1,2,3,4,5,"7"]   its means ya to saare number arrays of ya strings
const data3: (number | string)[]=[1,2,3,4,5,"7"] // for diff data types
const data4:any[]=[1,2,3,4,5,"7"] // we also can use this but not recommended

let shopItems: "rodi" | "cement" | "badarpur"

// shopItems="chawal"  it will not allowed bcz ye present hi nahi h


export{}