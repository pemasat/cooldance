
Logo = function(element) {
	var me = this;

	this.element = element;
	this.popup = new Popup(document.querySelector('#logo_main'), document.querySelector('#logo_popup'));

	init = function() {
	}();

};

$().ready(function(){
	var logo = new Logo(document.getElementById('logo'));
});

