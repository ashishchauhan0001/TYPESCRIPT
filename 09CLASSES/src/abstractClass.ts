abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getData():void
    getAlbumPhotos ():void{
        console.log("Photos are 1728 in count and are stored in SD card.");
        
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
    ){
        super(cameraMode,filter) // must call super with the parent classes properties.
    }

    getData():void{
        console.log("This is bcz of the abstract function implementation in the parent class");
        
    }
    
}

// can't create the object for the abstract class but after inherting it we can  access it from other class. 
// const ashish=new TakePhoto("Sony","BW"); 
const ashish=new Instagram("Sony","BW",23); 

export{}