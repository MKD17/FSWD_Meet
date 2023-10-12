import chalk from 'chalk'
const text = "Hello, Chalk!";
const newText = chalk.blue.bold(text);
console.log(newText);

let age=-12;

if(age>0){
    console.log(`Your age is ${chalk.green.bold(String(age))}`)
}
else{
    let err="Age cannot be Negative";
    let err_msg="Invalid Age!";
    console.log(chalk.red(err)+'\n'+chalk.red.bold(err_msg));
}