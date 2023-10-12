import fs from "node:fs";
import chalk from 'chalk';
const eg='D:/Files/Semester 5/FSWD/Node js/Week 4/checkFilePathExist.js'
if(fs.existsSync(eg)){
    let a="The file path "+eg +" Exist!";
    console.log(chalk.green(a));
}
else{
    console.log(`It does not exist ..`);
}