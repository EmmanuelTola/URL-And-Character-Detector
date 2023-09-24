// @ Detect
var text = document.getElementById("your-div").innerHTML;  
// Select every word that begins with an @. Can be used for # too 
let rel = text.match(/(?:^|[ ])@([a-zA-Z0-9]+)/gi);
// Check if there is a match 
if(rel) {
for(let i = 0; i < rel.length;  
i++) { 
console.log(rel[i]); 
var url = "https://www.your-base-url/"; 
// Remove the space and @ selector for the url 
let post = rel[i].split(" @").join(""); 

var re = document.getElementById("your-div");
re.innerHTML = re.innerHTML.replace(rel[i], "<a style='text-decoration: none; color: purple; font-weight: bold;' href='"+url+post+"'>"+rel[i]+"</a>"); 
 } 
 }

 // Hashtag Detect 
  let bel = text.match(/(?:^|[ ])#([a-zA-Z0-9]+)/gi); 
   
  if(bel) {
for(let i = 0; i < bel.length;  
i++) { 
console.log(bel[i]); 
var urls = "https://";
let posts = bel[i].split(" @").join(""); 

var re = document.getElementById("text");
re.innerHTML = re.innerHTML.replace(bel[i], "<a style='text-decoration: none; color: purple; font-weight: bold;' href='"+urls+posts+"'>"+bel[i]+"</a>"); 
 } 
 } 
  
