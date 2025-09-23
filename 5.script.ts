//type key word in typescript.
//  type is the  keyword in Typescript useful for creates the custom name.
//  * type can used in any data type like string , number , boolean , undefined , null 
//  * ( these 3 are primitives means once you declared you cannot change)
//  * and also used in complex data types like array, objects also
 

// var customername : string = "Raju";// or 
//----------
  
type name = string;
var customername_1 : name = " Raju"

// var Rajuage1 : number = 25;
type age =  number;
// var Rajuage:age =25;

type salary = number;
type status = boolean;

var customer_1_name : name = "raju";
var customerage : number = 25;
var customersalary: number = 500000;
var  customerstatus : boolean = true;

console.log("customer name is :"+customer_1_name);
console.log("customer age is:" +customerage);
console.log("customersalary is :" +customersalary);
console.log("customerstatus is :" +customerstatus);

// anther exapule--------------------------------------------------
 
var customer_2_ditales : {myname:string , age:number,salary:number,loc:string,isadmin:status} = {
myname :  "Venky",
age  : 28,
salary  : 1000000,
loc     : "kadri",
isadmin : true 

}

console.log("customer name is :" +customer_2_ditales.myname);

//---------------------------------------------------------------------

// or we can write anther way like 

type customrsinfo = {
    myname:string ,
     age:number,
     salary:number,
     loc:string,
     isadmin:status

}
var customer_3_ditales : customrsinfo = {
myname :  "Ravi",
age  : 38,
salary  : 1000000,
loc     : "kadri",
isadmin : true 

}
console.log("customer name is :" +customer_3_ditales.myname)


//note : we can give a type as refereens to the varible but we con't give it into class 


