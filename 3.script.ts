//tuple = is nothing but named array.

// var customerDetails: [string, number, number, boolean] = ["raju", 1999, 25, false];

// console.log(customerDetails);
// console.log(customerDetails[0]);
// console.log(customerDetails[2]);
// console.log(customerDetails[1]);
// console.log(customerDetails[3]);


// var customerDetails_2 :[any, number, any, boolean] = ["raju", 1999, 25, false];
// console.log(customerDetails_2);
// console.log(customerDetails_2[0]);
// console.log(customerDetails_2[2]);
// console.log(customerDetails_2[1]);
// console.log(customerDetails_2[3]);

//---------------------------------------------------------------------

//destructuring.//////
// Extract the values from array or object to the variables

// extract from array (destructuring)..................
var [cusotmerids, cusotmername, cusotmerage] = [5241, "Raju", 25];

console.log(cusotmerids);
console.log(cusotmername);
//    console.log(cusotmerage);


//object destructuring----------------

// example 1
var person = { cusotmarname: 'raju', age: 25 };
// console.log(person.cusotmarname);
// console.log(person.age);


var { cusotmarname, age } = person;
console.log(cusotmarname);
console.log(age);

var person1 = { cusname1: "venky", age1: 29, loc1: "kadiri" };
var { cusname1, age1, loc1 } = person1
console.log(cusname1);
console.log(age1);
console.log(loc1);
//example 2
var mydetailes : {myname:string , myage:number,mylocation:string,marageststus:boolean} = {myname:'RAJU',myage:25,mylocation:'kadiri',marageststus:false};
// console.log(mydetailes.myname);
// console.log(mydetailes.myage);
// console.log(mydetailes.mylocation);
// console.log(mydetailes.marageststus);

//or we can destructuring 
var {myname,mylocation,myage,marageststus} =  mydetailes;
console.log(myname);
console.log(marageststus);
console.log(mylocation);
console.log(myage);


// we can declare a obbject like some ways 

//one 
var obj1:{myname2:string} ={
    myname2 : "venky"
}
console.log(obj1.myname2);

//or we can declare key value like a string declaration using "",'' s.
//two

var obj2 :{myname:string,myloc:string,myage:number} = {
"myname" : "power",
'myage'  : 25,
"myloc"  : "kadiri"
} 
 
console.log(obj2.myname);
console.log(obj2.myage);
console.log(obj2.myloc);

