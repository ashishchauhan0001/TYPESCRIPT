function addNumber(num:number) : number{   // for the output type
    return num+5;
    // return "ashish";
}

// function getResponse(num:number):boolean{
//     if(num>5){
//         return true;
//     }
//     return "200 OK"; // this will create problem while returing string inplace of boolean then how can we handel it their is unions to do it
// }

const getHello=(s:string):string=>{
   return "login successfully";
}

// const heros=["ironman","captainamerica","spiderman",'thor'];
const heros=[1,2,3,4,5];


// map can impilicitly take the datatype from the heros just hover on the hero in map
heros.map((hero):string=>{ // we can skip to give the datatype to return but its a good practice and good code readability
    return `My superhero is ${hero}`
})

function consoleError(errmsg:string) : void{ // here we need to give the void type in the function for a better practice either we can skip it also
    console.log("Error is in this function");
}


function handelError(error:string):never{
    throw new Error(`error 404 NOT FOUND",${error}`);
}


addNumber(10);
getHello("peter@gmail.com")
export{}