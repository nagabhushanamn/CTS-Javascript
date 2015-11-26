// A. Primitives Types
// ----------------------------------------

// String

// var name = "naga";
// var selection = 'a';
//
// console.log(typeof name);

// ------------------------------------------

// Number
//
// var count=12;
// var cost=12.12;
//
// console.log(typeof cost);

// -------------------------------------------

// var found=false;
//
// console.log(typeof found);
//

// ----------------------------------------------

// var v;
// console.log(typeof v);

// ----------------------------------------------

// var obj=null;
// console.log(typeof obj);

// ----------------------------------------------

// var v=null;
//
// console.log(v===null);

// ----------------------------------------------

// console.log(undefined===null);

// console.log("5"===5);

// --------------------------------------------------------------------------------

// B. Reference Types

//var o = new Object();
//o.name = "Naga";
//o.age = 31;
//o.salary = 10000.00;
//o.doWork=function(){
//	console.log('Teaching JS');
//};
//
//console.log(o.name);
//o.doWork();
//
//delete o.salary;
//
//console.log(o.salary);
//
//var newO=o;
//
//newO.name='New Naga';
//
//console.log(newO.name);
//console.log(o.name);

//----------------------------------------------------------------------------------

//How to access JS Object Properties ?

/*
 *  2 -ways
 *  
 *   1. '.' Notation
 *   2. '[]' notation
 * 
 */

//var person=new Object();
//person.name='Naga';
//person['full-name']='Naga N';
//
//
//console.log(person.name);
//console.log(person['name']);
//console.log(person['full-name']);


//------------------------------------------------------------------------------------


/*
 *  JS - Built-In Types
 *  
 *  a. Object , b. Array , d. RegEx e. Function 
 * 
 */


// a. Object

//var person=new Object();
//person.name='Naga';
//person.age=31;
//person.doWork=function(){
//	console.log('Teaching JS');
//};
//
//// or ( Literal style )
//
//var newPerson={
//		name:'Naga',
//		age:31,
//		doWork:function(){
//			console.log('Teaching JS');
//		}
//};


//------------------------------------------------------------



// var colors=new Array();
// colors[0]='red';
// colors[1]='green';
// colors[2]='blue';
// 
// // or
// 
// // Literal style
// 
// var newColors=["red","green","blue"];
// 
// 
 //-----------------------------------------------------------------
// 
// 
// var re=new RegExp("\\d");
// console.log(re.test("234234"));
// 
 
 // Or
// 
// var newRe=/\d/;
// console.log(newRe.test("234234"));
 

 //-------------------------------------------------------------------



var add=new Function('n1','n2',"var r=n1+n2;return r");
console.log(add(12,13));
 
 
// OR

function newAdd(n1,n2){
	var r=n1+n2;
	return r;
}
console.log(newAdd(12, 13));
 
 
 
 
 
 
 









