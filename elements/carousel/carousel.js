$(document).ready(function() {
	if ($(window).width() >= 1320) {
		 $(".cycle-carousel").cycle({
				 speed: 2000,
				 slides: "> div.carousel-item",
				 carouselVisible: 1,
				 pauseOnHover: true
		});

	}
});
