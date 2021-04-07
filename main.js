'use strict';
var cowsay = require("cowsay");
//		 Work in progress




//       Formats the code and gets the last operator
let arg = process.argv.slice(2);
function last (array, i) {
	if (i == null)
	   return array[array.length - 1];
	return array.slice(Math.max(array.length - i, 0));
	}

let op=(last(arg));
if (arg == 0 || arg=="help") {
	console.log(cowsay.say({
		text : "Calculator, Author: Radu Nicolae-Eduard",
			e : "oO",
			T : "U "
		 }));
		
		console. log("Help" + '\n'+ "+" + '\n'+ "-" + '\n'+ "mul" + '\n'+ "div" + '\n'+ "mod" + '\n'+ "sq" + '\n'+ "abs" + '\n'+ "pwr" + '\n'+ "sort" + '\n'+ "rev" + '\n'+ "max" + '\n'+ "min" + '\n'+ "uniq" + '\n'+ "cos" + '\n'+ "sin" + '\n');
}

arg.pop();  // This pop pozition matters :(


//			Checks if the command exits
if (op != "+" && op != "-" && op != "help" && op != "mul" && op != "div" && arg != 0 && op != "mod" && op != "sq" && op != "abs" && op != "pwr") {
	console.log("ERROR: this command does not exist, use help to see available commands");
}

//			Addition
if (op == "+" && arg.length >= 2) {
	 let sum = 0;
	for (let i = 0; i< arg.length; i++){
	 sum += parseInt(arg[i]);
	}
	console.log(sum);
}
if (op == "+" && arg.length < 2){
	console.log("ERROR: addition command uses at least 2 parameters");
}

//			Substraction
if (op == "-" && arg.length >= 2) {
	let sum = 0;
   for (let i = 0; i< arg.length; i++){
	sum -= parseInt(arg[i]);
   }
   console.log(sum);
}
if (op == "-" && arg.length < 2){
	console.log("ERROR: substraction command uses at least 2 parameters");
}

//			Multiplication
if (op == "mul" && arg.length >= 2) {
	let sum = 1;
   for (let i = 0; i< arg.length; i++){
	sum = sum * parseInt(arg[i]);
   }
   console.log(sum);
}
if (op == "mul" && arg.length < 2){
	console.log("ERROR: multiplication command uses at least 2 parameters");
}

//			Division
if (op == "div" && arg.length >= 2) {
	let sum = parseInt(arg[0]);
   for (let i = 1; i< arg.length; i++){
	 sum = sum / parseInt(arg[i]);
   }
   console.log(sum);
}
if (op == "div" && arg.length < 2){
	console.log("ERROR: divide command uses at least 2 parameters");
}


//			Modulo
if (op == "mod" && arg.length == 2) {
	let sum = 0;
	sum = parseInt(arg[0]) % parseInt(arg[1]);

   console.log(sum);
}
if (op == "mod" && arg.length != 2){
	console.log("ERROR: Modulo command uses 2 parameters");
}

//			Square
if (op == "sq" && arg.length == 1) {
	let sum = 0;
	sum = Math.sqrt(parseInt(arg[0]));

   console.log(sum);
}
if (op == "sq" && arg.length != 1){
	console.log("ERROR: square command uses 1 parameter");
}

//			absolute
if (op == "abs" && arg.length == 1) {
	let sum = 0;
	sum = Math.abs(parseInt(arg[0]));

   console.log(sum);
}
if (op == "abs" && arg.length != 1){
	console.log("ERROR: absolute command uses 1 parameter");
}

//			power
if (op == "pwr" && arg.length == 2) {
	let sum = 0;
	sum = Math.pow(arg[0], arg[1]);
   	console.log(sum);
}
if (op == "pwr" && arg.length != 2){
	console.log("ERROR: power command uses 2 parameters");
}
