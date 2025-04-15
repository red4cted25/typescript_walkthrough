class Person {
    constructor(id:number, name:string, ssn:string, email:string) {
        this.id = id;
        this._ssn = ssn;
        this.email = email;
    }
    // readonly property can be accessed but not modfied
    public readonly id: number;

    // private property can only be accessed within the class
    private _ssn: string; 
    
    // protected property can be accessed within the class and its subclasses
    protected email: string; 
}

let Alan = new Person(1, "Alan Sanchez", "348-93-2841", "alanthekingsanchez@gmail.com")

