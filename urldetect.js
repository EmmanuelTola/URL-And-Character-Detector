var text = document.getElementById("your-div").innerHTML;  

 let rep = text.match(/(?:^|[ ])http([^\s]+)/gi);
for(let i = 0; i < rep.length;  
i++) { 
console.log(rep[i]); 
let pos = rep[i]; 
var check = pos.slice(-1); 
console.log(check); 
if(check == ".") { 
var lastIndex = pos.lastIndexOf('.');
var replacement = "";
var link =  pos.slice(0, lastIndex) + replacement + pos.slice(lastIndex + 1);
console.log(link); 
} else { 
var link = rep[i];
console.log(link); 
}
 

var re = document.getElementById("your-div");
re.innerHTML = re.innerHTML.replace(rep[i], "<a style='text-decoration: none; color: teal; font-weight: bold;' href='"+link+"'>"+link+"</a>"); 
 }
