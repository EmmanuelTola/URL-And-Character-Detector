var text = document.getElementById("your-div").innerHTML;  
// Check if it starts with an http. Stop on a space bar 
 let rep = text.match(/(?:^|[ ])http([^\s]+)/gi);
// Check if there is a match
if(rep) {
for(let i = 0; i < rep.length;  
i++) { 
console.log(rep[i]);  
let pos = rep[i]; 
// Check the last character of the detected strings
var check = pos.slice(-1); 
console.log(check); 
// Check if the last character is a period (.)  
if(check == ".") { 
var lastIndex = pos.lastIndexOf('.');
var replacement = ""; 
// Get rid of the period 
var link =  pos.slice(0, lastIndex) + replacement + pos.slice(lastIndex + 1);
console.log(link); 
} else { 
var link = rep[i];
console.log(link); 
}
 

var re = document.getElementById("your-div");
re.innerHTML = re.innerHTML.replace(rep[i], "<a style='text-decoration: none; color: teal; font-weight: bold;' href='"+link+"'>"+link+"</a>"); 
 } 
}
