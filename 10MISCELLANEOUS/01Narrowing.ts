
// topic 1  The in operator narrowing

interface user{
    name:string,
    email:string
}

interface admin{
    name:string,
    email:string,
    isAdmin:boolean
}


function isAdminAccount(account:user|admin){
    if("isAdnin" in account){
        return account.isAdnin;
    }
}



// topic 2

function checkData(data: string|Date){
  if(data instanceof Date){
    // Perform DateWise Operations
    console.log("It is a Date");
  }
  else{
    // For String
    console.log("It is a String");
    
  }
}



// Topic 3  Instanceof and Type Predicates

type Fish ={swim:()=>void};
type Bird ={fly:()=>void};

// this is type gaurd function to find is this a fish or bird
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food" // TypeScript now knows pet is a Fish here
    }else{
        pet
        return "bird Food" // TypeScript now knows pet is a bird here
    }
}

// topic 4  ---> Discriminated Union and Exhaustiveness Checking with never

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}


function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

export {}