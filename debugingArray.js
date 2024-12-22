//debugingArray.js
const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();  
//In this program a small issue in this array only three elements present 
// but you said to place the orange on 4th positon which is not possible...
fruits[2] = "Orange";  
console.log(fruits);  
