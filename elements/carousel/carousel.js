$(document).ready(function() {
	if ($(window).width() >= 1320) {
		 $(".cycle-carousel").cycle({
				 speed: 2000,
				 slides: "> div.carousel-item",
				 carouselVisible: 1,
				 pauseOnHover: true
		});
	} else {
		 $(".carousel").cycle({
				 speed: 2000,
				 slides: "div.carousel-item",
				 carouselVisible: 1,
				 pauseOnHover: false,
				 pager: ".carousel-pager",
				 pagerTemplate: '<span class="slide-links">■</span>',
				 prev: ".carousel-nav .cycle-prev",
				 next: ".carousel-nav .cycle-next"
		});

	}
});
