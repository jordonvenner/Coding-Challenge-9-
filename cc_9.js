//Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
      this.name = name;  //Assign name
      this.id = id;  //Assign id
      this.department = department;  //Assign department
      this.salary = salary;  //Assign salary
    }
  
    // Method to return employee details
    getDetails() {
      return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
  
    // Method to calculate annual salary
    calculateAnnualSalary() {
      return this.salary * 12;
    }
  }
  
  // Creating an Employee object
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  
  // Logging details
  console.log(emp1.getDetails()); 
  // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
  
  console.log(emp1.calculateAnnualSalary()); 
  // Expected output: 60000