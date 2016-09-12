$(document).ready(function(){
	$(".submit-button").on("click", function(event) {
		console.log("click");
		var item = $(".enter-item-blank").val();
		console.log("item");
		$("#items-ul").append("<li class='li-active'><span id='green' class='green-dot'></span>" + item + "<span class='trash-can fa fa-trash-o'></span></li>");
		event.preventDefault();
		$(".enter-item-blank").val('Enter List Item :)');	
	});

	$(".enter-item-blank").keypress(function(e) {
		if(e.which == 13) {
		console.log("enter");
		var item = $(".enter-item-blank").val();
		console.log("item");
		$("#items-ul").append("<li class='li-active'><span id='green' class='green-dot'></span>" + item + "<span class='trash-can fa fa-trash-o'></span></li>");
		this.value = '';
		}
	});

	$(".enter-item-blank").on('click focusin', function() {
		this.value = '';
	});

	$("ul").on("click", ".fa-trash-o", function(){
		console.log("clicked");
		$(this).closest("li").addClass("li-inactive");
		$(this).closest(".fa-trash-o").removeClass("fa-trash-o trash-can").addClass('fa fa-plus plus-sign');
	});

	$("ul").on("click", ".fa-plus", function(){
		console.log("clicked");
		$(this).closest("li").removeClass("li-inactive");
		$(this).closest(".fa-plus").removeClass("fa-plus").addClass('fa fa-trash-o trash-can');
	});

});