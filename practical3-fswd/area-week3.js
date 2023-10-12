const help=()=>{
    console.log('This module contains the follwing functions:\n1. For calculating the area of trinagle (height and base length)\n2. For Square Area calculation\n3.Rectangle  Area calculation');
}
const rectangleArea=(ht,brth)=>{
    return (parseFloat(ht)*parseFloat(brth));
}
const squareArea=(side)=>{
    return (parseFloat(side)*parseFloat(side))
}
const trinagleArea=(ht,base)=>{
    return (parseFloat(ht)*parseFloat(base));
}
module.exports={
    rectangleArea,
    trinagleArea,
    squareArea
}