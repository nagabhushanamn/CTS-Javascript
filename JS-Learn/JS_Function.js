// 1. Function Declaration

// console.log(add(12,13));

// function add(n1,n2){
// return n1+n2;
// }
//
// console.log(add.name);

// console.log(add(12,13));

// 2. Function Expression

// console.log(add(12,13));
//
// var add = function(n1, n2) {
// return n1 + n2;
// };
// console.log(add(12, 13));

// ------------------------------------------------------------

// / Function as Values

// function sayHi(){
// console.log('Hi');
// }

// sayHi();
// var sayHello=sayHi;
// sayHello();

// --------------------------------------------------------------

// Function as Arguments

// var nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
// nums.sort(function(a, b) {
// return a - b;
// });
// console.log(nums);

// --------------------------------------------------------------

// Function as Return Values

// function tng() {
// console.log('Teaching JS');
// function learn() {
// console.log('Learing JS');
// }
// return learn;
// }
//
//
// var learnFunc=tng();
// learnFunc();
//

// ---------------------------------------------------------------------
//
// function reflect(n1,n2) {
// return n1+" "+n2+" "+arguments[2];
// }
//
//
// console.log(reflect(12,13,14));

// -----------------------------------------------------------------------
//
// function sum() {
//	
// var total = 0, i = 0, len = arguments.length;
//
// while (i < len) {
// total += arguments[i];
// i++;
// }
// return total;
// }
//
//
//
// console.log(sum(1,2));

// --------------------------------------------------------------------

// function f() {
// if (arguments.length === 0) {
// console.log('No Args');
// }
// if (arguments.length === 1) {
// console.log('One Args');
// }
// }
// var f=new Function('console.log()');

// function f(arg1){
// console.log('One Args');
// }
// var f=new Function('console.log()');

// f(22);

// ---------------------------------------------------------------------

// Hoisting --> lifting UP

// var i=100;
//
// function f(){
// var i; // Single Var desing Pattern
// console.log(i);
// //var i=200;
// }
//
// f();

// ----------------------------------------------------------------------

// How to invoke JS functions ?
// How to use 'this' keyword ?

// ----------------------------------------------------------------------

// why we need 'this' keyword?

// var person = {
// name : 'Naga',
// sayHello : function() {
// console.log('Hello im '+this.name);
// }
// };
//
// person.sayHello();
//
// var newPerson=person;
// person={};
//
// newPerson.sayHello();

// ---------------------------------------------------------------------------
//
// function sayNameForAll(){
// console.log('im '+this.name);
// }

//
// var p1={name:'Naga',sayName:function(){console.log('im '+this.name)}};
// var p2={name:'Riya',sayName:function(){console.log('im '+this.name)}};

// var p1={name:'Naga',sayName:sayNameForAll};
// var p2={name:'Riya',sayName:sayNameForAll};

// sayNameForAll(); // function invocation pattern ( this --> GLOBAL obj )
// p1.sayName(); // method invocation pattern ( this --> obj which invokes that
// method )
// p2.sayName();

// ---------------------------------------------------------------------------

// Team-A

// var personUtil = {
// sayName : function(message, status) {
// console.log(message + ' im ' + this.name + "! " + status);
// }
// };

// personUtil.sayName();

// Team-B
//
// var p1={name:'Naga'};
// var p2={name:'Riya'};

//
// personUtil.sayName.call(p1,"Hello",'im hungry'); // Function
// 'call/apply/bind' pattern ( this --> binding obj )
// personUtil.sayName.call(p2,"Hi",'me too hungry');

// personUtil.sayName.apply(p1,["Hello",'im hungry']); // Function
// 'call/apply/bind' pattern ( this --> binding obj )
// personUtil.sayName.apply(p2,["Hi"]);

// var newFunc=personUtil.sayName.bind(p1,"Hello",'im hungry');

// on p1, hungry-event
// newFunc();

// ----------------------------------------------------------------------

//
//
// function Person(name,age){
// this.name=name;
// this.age=age;
// this.sayName=function(){
// console.log('im '+this.name);
// };
// }
//
// var p1=new Person('Naga', 31);
// var p2=new Person('Riya', 0.6);

// ----------------------------------------------------------------------------

// Person('Abc', 100);

// ----------------------------------------------------------------------------

// var tnr = {
// name : 'Naga',
// doTeach : function() {
// console.log("Teaching " + this.name); // Naga
// var self=this;
// function learn() {
// console.log("Taught By " + self.name);
// }
// learn();
// }
//
// };
//
// tnr.doTeach();
//

// -------------------------------------------------------------------------------

// closure

//e.g
//
//function tng() {
//	var data = 'JS Notes';
//	function learn() {
//		console.log('learning..' + data);
//	}
//	return learn;
//}
//
//var learnFunc=tng();
//
//
//learnFunc();
//learnFunc();
//learnFunc();
//

//---------------------------------------------------------------



function f(){
	
	{
		var i=100;
	}
	
	console.log(i);
}


f();


























