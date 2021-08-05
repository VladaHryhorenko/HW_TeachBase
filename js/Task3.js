const Person = function(name = "John", lastName = "Smith", location = "USA", phoneNumber = "+234-45-45") {
    this.name = name;
    this.lastName = lastName;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.eat = function() {
        console.log(this.name +' is eating');
    }
    this.sleep = function() {
        console.log(this.name +' is sleeping');
    }
    this.retire = function() {
        console.log(this.name +' is retired');
    }
    this.callFrind = function() {
        console.log(this.name +' is calling his friend');
    }
    this.setName = function(name) {
        this.name = name;
    }
    this.getName = function() {
        return console.log(this.name);
    }
    this.setLastName = function(lastName) {
        this.lastName = lastName;
    }
    this.getLastName = function() {
        return console.log(this.lastName);
    }
    this.setLocation = function(location) {
        this.location = location;
    }
    this.getLocation = function() {
        return console.log(this.phoneNumber);
    }
    this.setPhoneNumber = function(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    this.getPhoneNumber = function() {
        return console.log(this.phoneNumber);
    }
    this.getFullInfo = function() {
        console.log("Name: " + this.name);
        console.log("Last Name: " + this.lastName);
        console.log("Phone number: " + this.phoneNumber);
        console.log("Location: " + this.location);
    }
}
const Employee = function(position = "Middle FE Developer", startDate = "12.12.2018", department = "IT") {
    this.position = position;
    this.startDate = startDate;
    this.department = department;
    this.setPosition = function(position) {
        this.position = position;
    }
    this.getPosition = function() {
        return console.log(this.position);
    }
    this.setStartDate = function(startDate) {
        this.startDate = startDate;
    }
    this.getStartDate = function() {
        return console.log(this.startDate);
    }
    this.setDepartment = function(department) {
        this.department = department;
    }
    this.getDepartment = function() {
        return console.log(this.department);
    }
    this.getFullInfo = function() {
        Object.getPrototypeOf(this).getFullInfo.bind(this)();
        console.log("Department: " + this.department);
        console.log("Date of start: " + this.startDate);
        console.log("Position: " + this.position);
    }

}

const CurrentEmployee = function(baseSalary = "2000", salaryCurrancy = "$") {
    this.baseSalary = baseSalary;
    this.salaryCurrancy = salaryCurrancy;
    this.writeReport = function() {
        console.log(this.name +' is writing a report');
    }
    this.organizeMeeting = function() {
        console.log(this.name +' is an orginazer of the meeting');
    }
    this.startVacation = function() {
        console.log(this.name +' is on the vacation');
    }
    this.setBaseSalary = function(baseSalary) {
        this.baseSalary = baseSalary;
    }
    this.getBaseSalary = function() {
        return console.log(this.baseSalary);
    }
    this.setSalaryCurrancy = function(salaryCurrancy) {
        this.salaryCurrancy = salaryCurrancy;
    }
    this.getSalaryCurrancy = function() {
        return console.log(this.baseSalary);
    }
    this.getFullInfo = function() {
        Object.getPrototypeOf(this).getFullInfo.bind(this)();
        console.log("Base salary: " + this.baseSalary);
        console.log("Salary currancy: " + this.salaryCurrancy);
    }

}

const FormerEmployee = function (endDate = "20.09.2020") {
    this.endDate = endDate;
    this.setEndDate = function(endDate) {
        this.endDate = endDate;
    }
    this.getEndDate = function() {
        return console.log(this.endDate);
    }
    this.getFullInfo = function() {
        Object.getPrototypeOf(this).getFullInfo.bind(this)();
        console.log("End date: " + this.endDate);
    }
}


Employee.prototype = new Person();
CurrentEmployee.prototype = new Employee();
FormerEmployee.prototype = new Employee();
let john = new CurrentEmployee();
//john.getFullInfo();

let kate = new FormerEmployee();
kate.getFullInfo();

let alex = new Employee();
alex.setName('Alex');
alex.setLastName('Dou');
alex.setPosition('Senior FE Dev');
alex.setStartDate('30.04.2019');
//alex.getFullInfo();
