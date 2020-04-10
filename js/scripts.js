$(function(){
	var current_li; //variable used to program arrows
	$("#portfolio img").click(function(){
		//select an image selected, use this selector
		var src = $(this).attr("src"); //src from frame img
		current_li = $(this).parent();
 		$("#main").attr("src", src);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});

	//overlay  2 disappear when clicked & frame
	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});

	//programming arrows
	$("#right").click(function(){

		//to enable right arrow on last image to go forward, 
		if(current_li.is(":last-child")){
			var next_li = $("#portfolio li").first();
		} else{
			var next_li = current_li.next();	
		}

		
		var next_src = next_li.children("img").attr("src");
		$("#main").attr("src", next_src);
		current_li = next_li; 
	});

	$("#left").click(function(){

		//to enable left arrow on first image to go backward, 
		if(current_li.is(":first-child")){
			var prev_li = $("#portfolio li").last();
		} else{
			var prev_li = current_li.prev();	
		}

		
		var prev_src = prev_li.children("img").attr("src");
		$("#main").attr("src", prev_src);
		current_li = prev_li;
	});

	$("#right, #left").mouseover(function(){
		$(this).css("opacity", "0.75");
	});

	$("#right, #left").mouseleave(function(){
		$(this).css("opacity", "0.5");
	});

});