//interface --> contract
class Employee {
    constructor() {
        this.getMyname = "Raju";
    }
    getEmployee() {
        return "Venky";
    }
    getEmployees() {
        return ["Raju", "Venky"];
    }
}
var emp = new Employee();
console.log(emp.getMyname);
let result = emp.getEmployee();
console.log(result);
let result1 = emp.getEmployees();
console.log(result1);
