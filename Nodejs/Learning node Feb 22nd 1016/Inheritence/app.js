function Person(firstname, lastname){

    this.lastname = lastname;
    this.firstname = firstname;

}

Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var john = new Person('John', 'Doe');
john.greet();
