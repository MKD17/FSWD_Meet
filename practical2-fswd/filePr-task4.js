const fs = require("fs");

const students = [];

fs.readFile("student.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");
  for (const line of lines) {
    const student = line.split(" ");
    //console.log(student)
    const st=new String(student[3]);
    //console.log(st.substring(0,3) );
    if (student[0].includes("MA") && parseFloat(st.substring(0,3)) > 7) {
      students.push(student);
    }
  }
  console.log("Students whose name contains 'MA' and CGPA > 7:");
  for (const student of students) {
    console.log(student.join(","));
  }
});
