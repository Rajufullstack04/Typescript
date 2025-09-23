//Enum
//Enumis a one kind of special class which represents the group of constant values.
//by defalt enum start  the vaarible with the 0 and  it will icrrese the count.

enum Customer_Group_1{
    raju, // 0
    venky,  //1
    adarsh, //2
    ravi    //3
}
console.log("cusomer name is raju");
console.log("cusomer numberis:"+Customer_Group_1.raju); //0
console.log("cusomer name is venky");

console.log("cusomer numberis:"+Customer_Group_1.venky);//1
console.log("cusomer name is ravi");

console.log("cusomer numberis:"+Customer_Group_1.ravi);//2


// we can give nuber also 
// by using enum we can declare constent values to varible
enum Customer_Group_2{
    raju = 25,
    venky = 28,
    adarsh = 23,
    ravi   = 48
}
console.log("cusomer1 name:raju. age:"+Customer_Group_2.raju);
console.log("cusomer2 name:venky. age:"+Customer_Group_2.venky);

console.log("cusomer3 name:adarsh. age:"+Customer_Group_2.adarsh);
console.log("cusomer4 name:ravi. age:"+Customer_Group_2.raju);

// we can set sring values also
enum Customers_ditailes{
customername = "Raju",
customerloc = "AP",
Language    = "Telugu"

}

console.log("cusomer name is :"+Customers_ditailes.customername);
console.log("cusomer Location is :"+Customers_ditailes.customerloc);
console.log("cusomer Language is :"+Customers_ditailes.Language);


// -------------

enum AlertMessages{
     Success = "Operation completed successfully.",
    Error   = "An error occurred during the operation.",
    Warning = "Please check your input.",
    Info    = "This is an informational message"
}
   
var apiMessage = "Operation completed successfully";  //think you are getting one message from api

if(apiMessage == AlertMessages.Success){

}

    window.alert(apiMessage);
