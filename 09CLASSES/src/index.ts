
// bydefault everything is assign as public in javascript world
class user{

    private _clickCount=1;

    email:string // publuc can be accessable outside the class
    private name:string // private can't be accessable outside the class
    readonly city:string="banglore"
    constructor(email : string, name:string){
        this.email=email;
        this.name=name;
    }

    getter() {
        // console.log("email", this.email);
        console.log("name", this.name);
    }
    setter(email:string,name:string){
        this.email=email;
        this.name=name;
    }

    get nameOfUser():string{  // one more way to set and get the values
        return `${this.name}`;
    }

    set nameOfUser(namex){
        this.name=namex;
    }
    
    get clickCount():number{
        return this.clickCount;
    }


    

}

const ashish = new user("ashish@google.com","ashishChauhan");
console.log(ashish.email);

ashish.getter();
console.log(ashish.city);
// ashish.city="dehradhun"  can't assign new value bcz its in read only
