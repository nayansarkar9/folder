$(document).ready(function() {
	$("#click2").click(function() {
		$(".divpic2").hide();
		$(".divpic3").hide();
		$(".divpic1").show();
	});
	$("#click3").click(function() {
		$(".divpic1").hide();
		$(".divpic3").hide();
		$(".divpic2").show();
	});
	$("#click4").click(function() {
		$(".divpic1").hide();
		$(".divpic2").hide();
		$(".divpic3").show();
	});
	$("#click1").click(function() {
		$(".divpic1").show();
		$(".divpic2").show();
		$(".divpic3").show();
	});
	$("#logo1").click(function() {
		$(window).scrollTop(0);
	});
	$("#paper").click(function() {
		if($("#mail").val() == '')
			$(".error").show();
			
		
	});
	$("#l").click(function () {
     $("#submenu").toggle();
	});
	$("#s").click(function () {
     $(".srch").toggle();
	});
	$("#arr").click(function() {
		$("html , body").animate({scrollTop: 0},600);
		return false;
	});
});