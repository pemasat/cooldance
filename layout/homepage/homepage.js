Page = function(bodyElement) {
	var
		me = this;

	this.bodyElement = bodyElement;

	this.setMinHeight = function() {
		$(me.body).css('min-height', $(document).height());
	};

	init = function() {
		me.setMinHeight();
		$(window).resize(me.setMinHeight);
	}();


};

$().ready(function() {
	var page = new Page(document.querySelector('body'));
});