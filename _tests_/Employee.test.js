const Employee = require("../assets/js/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Anna";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 16;
    const employeeInstance = new Employee("Anna", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "annabarrowtech@gmail.com";
    const employeeInstance = new Employee("Anna", 16, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Anna";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("James", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "annabarrowtech@gmail.com";
    const employeeInstance = new Employee("Anna", 16, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Anna", 16, "annabarrowtech@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
});