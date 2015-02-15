Menu = function(element) {
	var
		me = this;
	
	this.element = element;
	this.phoneControl = null;

	this.generateControlForPhone = function() {
		me.phoneControl = document.createElement('a');
		me.phoneControl.id = 'menuSwitcher';
		me.phoneControl.innerHTML = 'Menu';
		$(me.phoneControl).insertBefore(me.element);
	};

	init = function() {
		me.generateControlForPhone();
	}();
};



$().ready(function() {
	var menu = new Menu($('nav#mainMenu').eq(0));
});