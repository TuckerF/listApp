$(document).ready(function(){
	event.preventDefault();
	var item = $(".enter-item-blank").val();
	$('.submit-button').click(function() {
		$(".items-ul").append("<div class='green-dot'></div>" + " " + $('.enter-item-blank').val())
	});
});