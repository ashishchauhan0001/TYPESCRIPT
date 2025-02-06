// this way we can write the same thing in less LOC
class user{


    // private clickCount:number=1;
    protected clickCount:number=1; // after making it protected it can be inherited

    constructor(  public email : string, public name:string){
        this.email=email;
        this.name=name;
    }
    getter() {
        // console.log("email", this.email);
        console.log("name", this.name);
        console.log("CLickCount", this.clickCount);
    }
    setter(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

class SubUser extends user{
   isFamily:boolean=true;
   changeClick(){
    this.clickCount=2;
   }
}

const ashish = new user("ashish@google.com","ashishChauhan");
console.log(ashish.email);

ashish.getter();

export{}