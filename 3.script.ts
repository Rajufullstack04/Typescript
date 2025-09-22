//tuple = is nothing but named array.

var customerDetails: [string, number, number, boolean] = ["raju", 1999, 25, false];

console.log(customerDetails);
console.log(customerDetails[0]);
console.log(customerDetails[2]);
console.log(customerDetails[1]);
console.log(customerDetails[3]);


var customerDetails_2 :[any, number, any, boolean] = ["raju", 1999, 25, false];
console.log(customerDetails_2);
console.log(customerDetails_2[0]);
console.log(customerDetails_2[2]);
console.log(customerDetails_2[1]);
console.log(customerDetails_2[3]);

//---------------------------------------------------------------------

//destructuring.//////
// Extract the values from array or object to the variables

// extract from array (destructuring)..................
 var [cusotmerids , cusotmername ,cusotmerage ] = [5241 ,"Raju",[25]];

 console.log(cusotmerids);
  console.log(cusotmername);
   console.log(cusotmerage);


   //object destructuring------------

   