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
  