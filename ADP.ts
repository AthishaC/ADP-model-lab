class Student {
    name : string;
    age : number;
    dept : string;
    constructor(n:string,a:number,d:string){
        this.name=n;
        this.age=a;
        this.dept=d;
    }
    display():void {
        console.log("Name: "+this.name);
        console.log("Age : "+this.age);
        console.log("Department : "+this.dept);

    }
}
   var S1=new Student("Athisha",18,"BE CSE");
   S1.display();
