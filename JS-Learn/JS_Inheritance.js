function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function() {
	console.log('im ' + this.name);
};

var p1 = new Person('Naga', 31);

// var p11 = Object.create(p1);
var p11 = {
	__proto__ : p1
};

//p11.age = 10;

console.log(p11.age);

// console.log(p11.name);
// console.log(p11.age);
// 
// -----------------------------------------------

