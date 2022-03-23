$(function() {
	
	var ww = $(window).width();
	var hh = $(window).height();
	
	$(".index>h1").css("right", "-40%");
	$(".index>h2").css("right", "-40%");
	$(".index>h1").animate({right: "5%"}, 1000, function() {
		$(".index>h2").animate({right: "5%"}, 800);
	});
	/*
	$(".index>p").css("top", hh+"px");
	$(".index>p").animate({top: "0"}, 1500);
	*/
	$(".index>p").hide();
	$(".index>p").fadeIn(1000);
});