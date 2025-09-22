
//number

// var custermer_ID_one: number = 1;
//  let custermer_ID_TWO = 2;
// console.log(custermer_ID_one);
// console.log(custermer_ID_TWO);

// here we can only access number values only  we con't access other values like string,boolean ...
// ----------------------------------------------------------------

//string


// {
// var custermer_one_name: string = "Raju";
//  let custermer_two_name = "venky";

// console.log(custermer_one_name);
// console.log(custermer_two_name);


// here we can only access string values only  we con't access other values like numbers,boolean ...


//----------------------------------------------------------------------------

//boolean


// var custermer_TWO_status:boolean = false;
//    let custermer_one_status         = true;
// console.log(custermer_TWO_status);
// console.log(custermer_one_status);

// // here we can only access boolean values only  we con't access other values like string,numbers ...


//-----------------------------------------------------------------------------
// any value




// // here we can  access all values  like string,boolean,numbers also ...
// var custermer_name :any = "Raju"; // here we take string value
//     let custermer_DOB     =  1999; // here we take number value
//     let custermer_status     =  false;  // here we take boolean value

// console.log(custermer_name);
// console.log(custermer_DOB);
// console.log(custermer_status);

//------------------------------------------------------------------------------

//Arrays


// number in array

let custermer_IDs: number[] = [1, 2, 3, 4];
// we can push (add,update) value on to the array by using push() kye to the them.
custermer_IDs.push(5); // it can be add to the array .
console.log(custermer_IDs);
console.log(custermer_IDs[0]);
console.log(custermer_IDs[4]);
console.log(custermer_IDs[1]);

//---------------------------------------------------------------------
// string in array

let custemarName: string[] = ["raju", "venky", "adarsh"];
custemarName.push("sathish");
console.log(custemarName);
console.log(custemarName[2]);
console.log(custemarName[0]);
console.log(custemarName[3]);

//------------------------------------------------------------------------
//readonly

var Hadeofthefamily: readonly string[] = ["surayanarayana"];
console.log(Hadeofthefamily);

// Hadeofthefamily.push("raju"); // we con't do this it will show error.

// here readonly means that we con't modify the varible or we con't update(push()) the valyues.
//--------------------------------------------------------------------



