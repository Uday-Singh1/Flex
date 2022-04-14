const cursor = document.getElementById("js--cursor");

//Boxes
const boxes = document.getElementsByClassName("js--box");
//laat de variabele i bij de 0 beginnen
for(let i = 0; i < boxes.length; i++){
   boxes[i].onmouseenter = function(){
    boxes[i].setAttribute("color",cursor.getAttribute("color"));
   }
}

const spheres = document.getElementsByClassName("js--sphere");
//laat de variabele i bij de 0 beginnen
for(let i = 0; i < spheres.length; i++){
    spheres[i].onmouseenter = function(){
        cursor.setAttribute("color",spheres[i].getAttribute("color"));
    }
}

