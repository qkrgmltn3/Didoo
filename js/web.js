$(function() {
	
	$(".popup-cover, .popup-cover>section").hide();
	
	$(".web-cover>ul>li").click(function() {
		window.scrollTo({top:0});
		var number = $(this).index();
		$(".popup-cover").show();
		$(".popup-cover>section").eq(number).show();
	});
	
	$(".close-icon").click(function() {
		$(".popup-cover, .popup-cover>section").hide();
		window.scrollTo({top:0});
	});
	
	function next() {
		if( $(this).parent().index() == 1 ) {
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