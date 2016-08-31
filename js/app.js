$(document).ready(fucntion(){
	var something = $('.enter-item-blank').val();
	$('.submit-button').click(function(){
		if (something === '') {
			alert('please enter an item')
		}
		else {
			$('.items-ul').append('something');
		}
	});
});