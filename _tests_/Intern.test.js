const Intern = require("../assets/js/Intern");

test("Can create school.", () => {
    const testSchool = "Volunteer State";
    const employeeInstance = new Intern("Anna", 16, "annabarrowtech@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "Volunteer State";
    const employeeInstance = new Intern("Anna", 16, "annabarrowtech@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Anna", 16, "annabarrowtech@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});