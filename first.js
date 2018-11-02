var listitem = 0;
function addToList(){
     if(listitem>=4){
         listitem=0;
     }
}

if(listitem==0){
    var travelmode="planes";
}
if(listitem==1){
    var travelmode="Trains";
}
if(listitem==2){
    var travelmode="Bus";
}
if(listitem==3){
    var travelmode="Auto";
}
listitem++;
var newnode = document.createElement("LI");
var textnode = document.createTextNode(travelmode);
newnode.appendChild(textnode);
document.getElementById("transpotation").appendChild(newnode);
}


