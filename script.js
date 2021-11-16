var button = document.getElementById("button"); 

button.addEventListener('click', changeColor); 



function changeColor(colors){
    colors = [ "blue", "green", "orange", "black", "pink" , "purple"]


  for (let i = 0;  i<colors.length; i++)  {
   
    console.log(colors[i])

    changeColor(); 
  }
  
 
  
}; 
