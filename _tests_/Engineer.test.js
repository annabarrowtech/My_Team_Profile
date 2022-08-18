const Engineer = require("../assets/js/Engineer");

test("Can create a github.", () => {
    const testGithub = "annabarrowtech";
    const employeeInstance = new Engineer("Anna", 16, "annabarrowtech@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "annabarrowtech";
    const employeeInstance = new Engineer("Anna", 16, "annabarrowtech@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Anna", 16, "annabarrowtech@gmail.com", "JamesLJenks");
    expect(employeeInstance.getRole()).toBe(returnValue);
});