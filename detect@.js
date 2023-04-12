var text = document.getElementById("your-div").innerHTML;  
// Select every word that begins with an @. Can be used for # too 
let rel = text.match(/(?:^|[ ])@([a-zA-Z0-9]+)/gi);
for(let i = 0; i < rel.length;  
i++) { 
console.log(rel[i]); 
var url = "https://www.your-base-url/"; 
// Remove the space and @ selector for the url 
let post = rel[i].split(" @").join(""); 

var re = document.getElementById("your-div");
re.innerHTML = re.innerHTML.replace(rel[i], "<a style='text-decoration: none; color: purple; font-weight: bold;' href='"+url+post+"'>"+rel[i]+"</a>"); 
 } 
 
