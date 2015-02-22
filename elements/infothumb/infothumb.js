$(document).ready(function() {
	 $('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  infinite: false,
		  responsive: [
			{
		  		breakpoint: 1000,
				settings: "unslick"
			}
		  ]
	 });
});
