var firstName : string = "Nico";
var coolio : boolean = true;
var age : number = 17;

let greeting = "Welcome to Jurassic Park";

// age = "Month"
firstName = "Angie";

function add(n1:number, n2:number) {
    return n1 + n2;
}

console.log(add(152689, 524189))

function printResult(num: number) : number {
	console.log('Result: ' + num);
	return num
}

const addArrow = (n1: number, n2: number) => n1 + n2;

const printResultArrow = (num:number):void => {
    console.log('Result: ' + num);
    // return num
}

let person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} 

let product: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	}
}

enum Role {
	ADMIN = "ADMIN",
	READ_ONLY = 0,
	AUTHOR = 100,
}

let answer: string | number;
// answer = 452
// answer = "452"
// answer = false  /* Error: Type 'boolean' is not assignable to type 'string | number' */

type Combinable = number | string;

type User = { name: string; age: number };

function greet(user: User) {
	console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
	return checkAge > user.age;
}

class Employee {
	empName: string; // public by default
	protected empCode: number;
	constructor(empCode:number, empName:string){
		this.empCode = empCode;
		this.empName = empName;
	}
}
class SalesEmployee extends Employee {
	private department: string = "Sales";
	constructor(empCode:number, empName:string, department:string){
		super(empCode, empName);
		this.department = department;
	}
	public checkCode = () => console.log(this.empCode);
}

let emp = new Employee(123, "John Doe");

let empObj = new SalesEmployee(234, "Jane Doe", "Sales");
empObj.checkCode();
// empObj.empCode;


// ! Getters and Setters
/* get mostRecentReport() {
	if (this.lastReport) {
		return this.lastReport;
	}
	throw new Error("No report found.");
}

set mostRecentReport(value: string) {
	if (!value) {
		throw new Error("Please pass in a valid value!");
	}
	this.addReport(value);
} */

	