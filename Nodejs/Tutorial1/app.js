//********************************************
var a =1;
var b = 2;
var c = a + b;

console.log(c);

console.log('This is the end of the first example');
//End of the first example
//*******************************************
//function statement
function greet(){
	console.log("hi");
}

greet();

//functions are first class
function logGreeting(fn){
	fn();
}
logGreeting(greet);

//function expression
var greetMe = function(){
	console.log('Hi Nam');
}

greetMe();

//its first class
logGreeting(greetMe);

//use a functions expression on the fly
logGreeting(function(){
	console.log('Hello Nam');
});

console.log("This is the end of the second example");
//End of second example, first class functions and function expresssions
//*******************************************
var greet1 = require('./greet');
greet1();
console.log('End of third example');
//End of third example, building our first module
//*******************************************
var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function(){
		console.log('Hello, ' + this.firstname + ' ' +
		this.lastname);
	}
};
person.greet();

console.log(person['firstname']);
console.log("This is the end of the fourth example");
//End of fourth example
//*******************************************
function Person(firstname, lastname){
	
	this.firstname = firstname;
	this.lastname = lastname;
}

Person.prototype.greet = function(){
	console.log('Hello, ' + this.firstname + ' '+
	this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
console.log("This is the end of the fifth example");
//End of fifth example
//*******************************************
//pass by value
function change(b){
	b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d){
	d.prop1 = function(){};
	d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
console.log("This is the end of the sixth example");
//End of sixth example
//*******************************************
var firstname = 'Jane';
(function (lastname){
	
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
	
}('Doe'));
console.log(firstname);
console.log("This is the end of the 7th example");
//End of 7th example
//Immediatley invoked function exception
//*******************************************
var modulesTesting = require('./modules');
modulesTesting.english();
modulesTesting.spanish();