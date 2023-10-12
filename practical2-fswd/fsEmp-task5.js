const readline = require('readline');
const fs = require('fs');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create an empty employee object
const employee = {};

// Read employee information from the user
rl.question('Enter employee name: ', (name) => {
  employee.name = name;

  rl.question('Enter employee age: ', (age) => {
    employee.age = age;

    rl.question('Enter employee department: ', (department) => {
      employee.department = department;

      rl.close();

      // Convert the object to JSON format
      const jsonData = JSON.stringify(employee);

      // Write the JSON data to a file
      fs.writeFileSync('employee-data.json', jsonData);

      console.log('Employee data has been written to employee-data.json');
    });
  });
});
