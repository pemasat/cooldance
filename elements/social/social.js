$(document).ready(function() {
	// Show form
	$(".soc-msg").on("click", function(){
		dialog = $("#mailMessageDialog");
		// Set form position
		if ($(window).width() > 768) {
			y = $(this).offset().top;
			dialog.css("top", -1 * (y - dialog.height() - $(this).height() - 40));
		}

		// Show/hide form
		dialog.toggle();
	});

	// Submit form
	$(".soc-msg a").on("click", function() {
		$(".soc-msg form").submit();
	});
});
