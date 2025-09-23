//interface --> contract

/* Interface
  intrfIace is nothing but a  contract | Service .. where we are going to provide the methods into it.
*/


interface IEmpService{
    getEmployee():string;   //method

    getMyname    :string;   //kind of field

    getEmployees():string[];

}

class Employee implements  IEmpService{

    getMyname: string = "Raju";

    getEmployee():string{
        return "Venky"
    }

    getEmployees(): string[] {
        return ["Raju" , "Venky"];
    }
}

var emp = new Employee();
console.log(emp.getMyname);

let result = emp.getEmployee();
console.log(result);

let result1 = emp.getEmployees();
console.log(result1);
