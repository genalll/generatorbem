result.onclick = function(){
   let block = document.getElementById("block").value;
   let value_blick = document.getElementById("value_blick");
   value_blick.innerHTML = " class="+'"'+block+'"';
   let element=document.getElementById("element").value;
   let value_element =document.getElementById("value_element");
   let modifikator=document.getElementById("modifikator").value;
   let modif=document.getElementById("modif").value;
   value_element.innerHTML = " class="+'"'+block+'__'+ element + " " +block+'__'+ element + "_" + modifikator + "_" + modif +'"';
}