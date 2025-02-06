
interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}

interface Story{
    createStory():void;
}

// bareminimum itne prop. to hone hi chiye jitne Interface me given hai baki you can add some acc. to the need
class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number,
    ){ }
}

class Youtube implements TakePhoto,Story{ // means we need to add all the functions with their implementation either we'll get the errors 
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number,
        public income:string,
        public comments: number
    ){ }
    createStory():void{
        console.log("this is from the Youtube Class and from the createStory Function");
    }
}