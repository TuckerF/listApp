$(document).ready(function(){
	console.log("jquery");
	//var item = $(".enter-item-blank").val();
	$(".submit-button").on("click", function(event) {
		console.log("click");
		var item = $(".enter-item-blank").val();
		console.log("item");
		$("#items-ul").append("<li class='li-active'><span class='green-dot'></span>" + item + "<span class='trash-can fa fa-trash-o'></span></li>");
		event.preventDefault();
	});

});

$(document).ready(function() {
	console.log("jquery2");
	$("ul").on("click", ".fa-trash-o", function(){
		console.log("clicked");
		$(this).closest('li').remove();
	});
});