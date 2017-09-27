var septim_count = document.getElementById("septim_count");
var septim = document.getElementById("septim");

septim_count.innerHTML="-";
var count = 0;


function collect_septim(){
	++count;
	septim_count.innerHTML=count;
}



