var num = prompt("Enter your name")
var num1 = prompt("Enter your number")
var num2 = prompt("Enter your email")
var num3 = prompt("Enter your pass")


var array =[]
array.push(num)
array.push(num1)
array.push(num2)
array.push(num3)


array.splice(2,4)
array.unshift( "mahi" , "wasay")
console.log(array)