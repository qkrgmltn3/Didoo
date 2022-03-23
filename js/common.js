$(function() {
	
	$(".sub").hide();
	
	$(".works").click(function() {
		
		if($(".sub").css("display")=="none") {
			$(".sub").stop().slideDown();
		}
		
		else {
			$(".sub").stop().slideUp();
		}
	});
	
})