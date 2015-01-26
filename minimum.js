//Phil Hofer
//Ch. 3 mimimum.js
//This program takes two arguments and returns the minimum value of the two.
//Updated 1/26/2015 with comments

//declare the variables needed for the min function
var x, y;

//This function returns the minimum value between two arguments
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }  
}

//Print out the minimum between 14 and 11
console.log("The mimimum is: " + min(14,11));
