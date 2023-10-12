const os= require('os')
console.log(`The current User Name is ${os.hostname}`);
console.log(`The home directory is ${os.homedir}`);
console.log(`The OS platform is ${os.platform}`);
function memoryDetails()
{
    let fm=`Free memory is ${os.freemem} byts.`;
    let tm=`Total memory is ${os.totalmem} byts.`
    let per=`Percentage of free memory is ${(parseFloat(os.freemem)*100)/(parseFloat(os.totalmem))}`
    return fm+'\n'+tm+'\n'+per;
}
console.log("The memory Details are:\n"+memoryDetails());