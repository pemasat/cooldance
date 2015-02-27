$(document).ready(function() {
	if ($(window).width() >= 1320) {
		 $(".cycle-carousel").cycle({
				 speed: 1000,
				 slides: "> div.carousel-item",
				 carouselVisible: 1,
				 pauseOnHover: true,
				 pager: ".cycle-pager",
				 prev: ".cycle-prev",
				 next: ".cycle-next"
		});

	}
});
