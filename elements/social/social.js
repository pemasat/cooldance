$(document).ready(function() {
	// Show form
	$(".soc-msg").on("click", function(){
		dialog = $("#mailMessageDialog");
		// Set form position
		if ($(window).width() > 768) {
			dialog.css("margin-top", -1 * (dialog.height() + 40));
		}

		// Show/hide form
		dialog.toggle();
	});

	$(".soc-close").on("click", function(){
		$("#mailMessageDialog").hide();
	});

	// Submit form
	$(".soc-msg a").on("click", function() {
		$(".soc-msg form").submit();
	});
});
