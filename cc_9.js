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


  //Task 2: Creating a Manager Class (Inheritance & Method Overriding)

  class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
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
  
  class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary); // Call Employee constructor
      this.teamSize = teamSize; // New property
    }
  
    // Override getDetails() to include team size
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate bonus (10% of annual salary)
    calculateBonus() {
      return this.calculateAnnualSalary() * 0.1;
    }
  }
  
  // Creating a Manager object
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  
  // Logging details
  console.log(mgr1.getDetails()); 
  // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
  
  console.log(mgr1.calculateBonus()); 
  //Expected output: 9600


  //Task 3: Creating a Company Class

  class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
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
  
  class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
    }
  
    // Override getDetails() to include team size
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate bonus (10% of annual salary)
    calculateBonus() {
      return this.calculateAnnualSalary() * 0.1;
    }
  }
  
  class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    // Method to add an employee
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    // Method to list all employees
    listEmployees() {
      this.employees.forEach(emp => console.log(emp.getDetails()));
    }
  }
  
  // Creating Employee and Manager objects
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  
  // Creating a Company object
  const company = new Company("TechCorp");
  
  // Adding employees to the company
  company.addEmployee(emp1);
  company.addEmployee(mgr1);
  
  // Listing employees
  company.listEmployees();


  //Task 4: Implementing a Payroll System

// Employee Class
class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
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
  
  // Manager Class (inherits from Employee)
  class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
    }
  
    // Override getDetails() to include team size
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate annual salary (including bonus)
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary(); // Get salary from Employee
      const bonus = baseSalary * 0.1; // 10% bonus
      return baseSalary + bonus;
    }
  }
  
  // Company Class
  class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    // Method to add an employee
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    // Method to list all employees
    listEmployees() {
      this.employees.forEach(emp => console.log(emp.getDetails()));
    }
  
    // Method to calculate total payroll (sum of all annual salaries)
    calculateTotalPayroll() {
      return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    }
  }
  
  // Create Employees
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  
  // Create Company
  const company = new Company("TechCorp");
  
  // Add Employees to Company
  company.addEmployee(emp1);
  company.addEmployee(mgr1);
  
  // List Employees
  company.listEmployees();
  
  // Calculate Total Payroll
  console.log("Total Payroll:", company.calculateTotalPayroll());



  //Task 5: Implementing Promotions

  // Employee Class
class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department = department;
      this.salary = salary;
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
  
  // Manager Class (inherits from Employee)
  class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
    }
  
    // Override getDetails() to include team size
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
  
    // Method to calculate annual salary (including bonus)
    calculateAnnualSalary() {
      const baseSalary = super.calculateAnnualSalary(); // Get salary from Employee
      const bonus = baseSalary * 0.1; // 10% bonus
      return baseSalary + bonus;
    }
  }
  
  // Company Class
  class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    // Method to add an employee
    addEmployee(employee) {
      this.employees.push(employee);
    }
  
    // Method to list all employees
    listEmployees() {
      this.employees.forEach(emp => console.log(emp.getDetails()));
    }
  
    // Method to promote an employee to a manager
    promoteToManager(employee, teamSize) {
      // Find the employee index in the array
      const index = this.employees.indexOf(employee);
      
      if (index !== -1) {
        // Create a new Manager object using the employee's details
        const manager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        
        // Replace the employee with the new manager in the array
        this.employees[index] = manager;
  
        console.log(`${employee.name} has been promoted to a Manager!`);
      } else {
        console.log("Employee not found in company records.");
      }
    }
  
    // Method to calculate total payroll (sum of all annual salaries)
    calculateTotalPayroll() {
      return this.employees.reduce((total, emp) => total + emp.calculateAnnualSalary(), 0);
    }
  }
  
  // Create Employees
  const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
  const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
  
  // Create Company
  const company = new Company("TechCorp");
  
  // Add Employees to Company
  company.addEmployee(emp1);
  company.addEmployee(mgr1);
  
  // List Employees Before Promotion
  console.log("Before Promotion:");
  company.listEmployees();
  
  // Promote Employee to Manager
  company.promoteToManager(emp1, 3);
  
  // List Employees After Promotion
  console.log("After Promotion:");
  company.listEmployees();

  
  