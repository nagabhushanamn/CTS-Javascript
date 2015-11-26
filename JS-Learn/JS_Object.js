//var person = new Object();
//person.name = "Naga";

//var person = {
//	name : 'Naga'
//};

/*
 * IN JS
 * 
 * falsy values
 * 
 * null,undefined,"",0,false
 * 
 * 
 */

// To know property existence
//if (person.name) {
//	console.log('Name property exixt');
//}
//
//if("name" in person){
//	console.log('Name property exixt');
//}
//--------------------------------------------------------
// Enumerate obj properties
//var person = {
//	name : 'Naga',
//	age : 31,
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
//
//for (var prop in person) {
//	console.log(typeof prop);
//	console.log(person[prop]);
//}
//----------------------------------------------------------------
/*
 *   2 types of properties
 *   
 *    a. data properties
 *    b. accessor properties
 * 
 */

//var person = {
//	_name : 'Naga',
//	set name(newName){
//		console.log('setting New Name');
//		this._name=newName;
//	},
//	get name(){
//		console.log('getting Name');
//		return this._name;
//	}
//};
//
////console.log(person._name);  // READ
////person._name='New Naga';    // WRITE
////console.log(person._name);
////
//
//console.log(person.name);   // READ
//
//person.name='New Naga';     // WRITE
//
//console.log(person.name);   // READ
//
//-------------------------------------------------------
//
//var person = {
//	name : 'Naga',
//	salary : 20000
//};
//Object.defineProperty(person, 'name', {configurable:false,writable:false});

//Object.defineProperty(person, 'name', {configurable:true});
//delete person.name;
//person.name='No Name';
//console.log(person.name);
//------------------------------------------------------------------------
var person = {
	name : 'Naga',
	salary : 2000
};

//Object.preventExtensions(person);
//Object.seal(person);

Object.freeze(person);

person.someProperty = 'some-value';
console.log(person.someProperty);

delete person.salary;

console.log(person.salary);
