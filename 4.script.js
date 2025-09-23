//Enum
//Enumis a one kind of special class which represents the group of constant values.
//by defalt enum start  the vaarible with the 0 and  it will icrrese the count.
var Customer_Group_1;
(function (Customer_Group_1) {
    Customer_Group_1[Customer_Group_1["raju"] = 0] = "raju";
    Customer_Group_1[Customer_Group_1["venky"] = 1] = "venky";
    Customer_Group_1[Customer_Group_1["adarsh"] = 2] = "adarsh";
    Customer_Group_1[Customer_Group_1["ravi"] = 3] = "ravi"; //3
})(Customer_Group_1 || (Customer_Group_1 = {}));
console.log("cusomer name is raju");
console.log("cusomer numberis:" + Customer_Group_1.raju); //0
console.log("cusomer name is venky");
console.log("cusomer numberis:" + Customer_Group_1.venky); //1
console.log("cusomer name is ravi");
console.log("cusomer numberis:" + Customer_Group_1.ravi); //2
// we can give nuber also 
// by using enum we can declare constent values to varible
var Customer_Group_2;
(function (Customer_Group_2) {
    Customer_Group_2[Customer_Group_2["raju"] = 25] = "raju";
    Customer_Group_2[Customer_Group_2["venky"] = 28] = "venky";
    Customer_Group_2[Customer_Group_2["adarsh"] = 23] = "adarsh";
    Customer_Group_2[Customer_Group_2["ravi"] = 48] = "ravi";
})(Customer_Group_2 || (Customer_Group_2 = {}));
console.log("cusomer1 name:raju. age:" + Customer_Group_2.raju);
console.log("cusomer2 name:venky. age:" + Customer_Group_2.venky);
console.log("cusomer3 name:adarsh. age:" + Customer_Group_2.adarsh);
console.log("cusomer4 name:ravi. age:" + Customer_Group_2.raju);
// we can set sring values also
var Customers_ditailes;
(function (Customers_ditailes) {
    Customers_ditailes["customername"] = "Raju";
    Customers_ditailes["customerloc"] = "AP";
    Customers_ditailes["Language"] = "Telugu";
})(Customers_ditailes || (Customers_ditailes = {}));
console.log("cusomer name is :" + Customers_ditailes.customername);
console.log("cusomer Location is :" + Customers_ditailes.customerloc);
console.log("cusomer Language is :" + Customers_ditailes.Language);
// -------------
var AlertMessages;
(function (AlertMessages) {
    AlertMessages["Success"] = "Operation completed successfully.";
    AlertMessages["Error"] = "An error occurred during the operation.";
    AlertMessages["Warning"] = "Please check your input.";
    AlertMessages["Info"] = "This is an informational message";
})(AlertMessages || (AlertMessages = {}));
var apiMessage = "Operation completed successfully"; //think you are getting one message from api
if (apiMessage == AlertMessages.Success) {
}
window.alert(apiMessage);
