$(function() {

	$(".logo-hover").hide();
	
	$(".logos>li").mouseover(function() {
		$(".logo-hover", this).stop().slideDown(300);
	});
	
	$(".logos>li").mouseout(function() {
		$(".logo-hover", this).stop().slideUp(300);
	});
	
	$(".popup-cover, .popup-cover>section").hide();
	
	$(".close-icon").click(function() {
		$(".popup-cover, .popup-cover>section").hide();
	});
	
	$(".logos>li").click(function() {
		var number = $(this).index();
		$(".popup-cover").show();
		$(".popup-cover>section").eq(number).show();
	});
	
	
	function next() {
		if( $(this).parent().index() == 11 ) {
			return false
		}
		else {
			$(this).parent().hide();
			window.scrollTo({top:0});
			$(this).parent().next().show();
		}
	}
	
	function prev() {
		if( $(this).parent().index() == 0 ) {
			return false
		}
		else {
			$(this).parent().hide();
			window.scrollTo({top:0});
			$(this).parent().prev().show();
		}
	}
	$(".next").click(next);
	$(".prev").click(prev);
});