//EXERCISE: Design an experiment to demonstrate the difference between returning a value in a function and console.logging it.
// Create a new repo for this called "function-return-vs-console-log".
//(Make sure you have the following files - README.md, index.html, main.js)
function logDatShit(){console.log("DatShit");}
function notGonnaLog(){
  return "DatShit";
  console.log("DatShit");
}

logDatShit();
notGonnaLog();
console.log("not" + notGonnaLog());
