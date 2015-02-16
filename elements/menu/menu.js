Menu = function(element) {
	var
		me = this;
	
	this.element = element;
	this.phoneControl = null;
	this.mainMenu = document.getElementById('mainMenu');

	this.isPhoneView = false;

	this.menuToogleEvent = function() {
		($(me.mainMenu).is(":visible")) ? me.hideMenu() : me.showMenu();
		return false;
	};

	this.showMenu = function() {
		$(me.mainMenu).show();
	};

	this.hideMenu = function() {
		$(me.mainMenu).hide();
	};


	this.generateControlForPhone = function() {
		me.phoneControl = document.createElement('a');
		me.phoneControl.id = 'menuSwitcher';
		me.phoneControl.innerHTML = 'Menu';
		$(me.phoneControl).insertBefore(me.element);
		$(me.phoneControl).click(me.menuToogleEvent);

		me.isPhoneView = $(me.phoneControl).is(":visible");
	};

	this.checkVisibilityForPhoneControl = function() {
		if ( // jedu ze směru mobil -> desktop
			$(me.phoneControl).is(":visible") === false &&
			me.isPhoneView === true
		) {
			me.showMenu();
			me.isPhoneView = false;
		} else if ( // jedu ze směru desktop -> mobil
			$(me.phoneControl).is(":visible") === true &&
			me.isPhoneView === false
		) {
			me.hideMenu();
			me.isPhoneView = true;
		}
	};

	this.handleDefaultEvents = function() {
		$(window).resize(me.checkVisibilityForPhoneControl);
	};

	init = function() {
		me.generateControlForPhone();
		me.handleDefaultEvents();
		(me.isPhoneView) ? me.hideMenu : {};
	}();
};



$().ready(function() {
	var menu = new Menu($('nav#mainMenu').eq(0));
});