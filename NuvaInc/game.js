/*
$("#food").click(function(){
	
	$("#food").prop('disabled', true);
	$("#food > img").css('opacity','0');
	console.log("fading");
	$("#food > img").fadeTo(1000,1);
	setTimeout(function(){
		$("#food").prop('disabled', false);
	}, 1000);
	
});
*/

var food = 0;
var wood = 0;
var metal = 0;

$("#food > p").text(food);
$("#wood > p").text(food);
$("#metal > p").text(food);

function collect(resource){
	//Simply a function to register collection has taken place, start a 1 second timer and animate. Will not effect resource amount.
	var res_img = resource + " > img";
	var res_status = resource + " > h4";
	
	$(resource).prop('disabled', true);
	$(res_img).css('opacity','0');
	$(res_status).css('visibility','visible');
	
	$(res_img).fadeTo(1000,1);
	setTimeout(function(){
		$(resource).prop('disabled', false);
		$(res_status).css('visibility','hidden');
	}, 1000);
	
};


//Functions which listen for clicks and update resource counts.

$(function(){
	$("#food").click(function(){
		collect("#food");
		++food;
		$("#food > p").text(food);
	});	
});

$(function(){
	$("#wood").click(function(){
		collect("#wood");
		++wood;
		$("#wood > p").text(wood);
	});	
});

$(function(){
	$("#metal").click(function(){
		collect("#metal");
		++metal;
		$("#metal > p").text(metal);
	});	
});

