var PigButton = document.getElementById("PigBut");
var PigPopCount = document.getElementById("PigPop");
var PigFreeButton = document.getElementById("FreePigs")


function fetchPigs(){
    if(!localStorage.getItem('LocalPigs')){
        var Pigs = 0;
    } else {
        var Pigs = localStorage.getItem('LocalPigs');
    }
    return Pigs;
}

var Pigs = fetchPigs();
var PigCount = document.createTextNode(Pigs);
PigPopCount.appendChild(PigCount);
delete PigCount;

PigButton.onclick = function(){
    ++Pigs;
    localStorage.setItem('LocalPigs',Pigs)
    PigPopCount.textContent = "Pigs: " + String(Pigs);
}

PigFreeButton.onclick = function(){
    if (Pigs>0){
        var hahaMessage = document.createTextNode("Haha, I told this dickhead to free his pigs and he actually did it, the absolute madman!");
        var haha = document.createElement('h4');
        haha.appendChild(hahaMessage);
         
        var laughing = document.createElement("img");
        laughing.src = "LaughEmoji.png";
        //img.style = "height: 20px";
        //haha.appendChild(laughing);
        document.body.appendChild(laughing);
        document.body.appendChild(haha);
    } else {
        alert("You haven't got any pigs!");
    }
    
    Pigs=0;
    localStorage.setItem('LocalPigs',Pigs)
    PigPopCount.textContent = "Pigs: " + String(Pigs);
}