const marvels: string[] =[];
// const marvels: Array<string> =[];  two ways to use it.

const powers : number[]=[];

powers.push(1);
powers.push(4);

marvels.push("ironman")
marvels.push("spiderman")


type USER={
    name:string;
    age:number;
    email:string;
}

// there is also readonlyArrays existed which is can't we updated after writing into them once.

const data : USER[]=[];

data.push({ name:"ashish",age:12,email:"as@gmail.com"});
