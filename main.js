$(window).resize(function(){
	if($(window).width()<= 800){
		$('.images').hide()
	};

	if($(window).width()>= 800){
		$('.images').show()
	}
});