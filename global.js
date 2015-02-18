/**
 * Pomáhá pro popup menu
 */
Popup = function(controllerElement, menuElement) {
	var me = this;

	this.controllerElement = controllerElement;
	this.menuElement = menuElement;

	this.status = 0; // 0 = close, 1 = open

	
	this.hideMenu = function() {
		$(me.menuElement).hide();
		me.status = 0;
	};

	this.showMenu = function() {
		$(me.menuElement).show();
		me.status = 1;
	};


	this.toogleMenuEvent = function() {
		(me.status === 0) ? me.showMenu() : me.hideMenu();
		return false;
	};

	this.handleDefaultEvents = function() {
		$(me.controllerElement).click(me.toogleMenuEvent);
	};

	init = function() {
		me.hideMenu();
		me.handleDefaultEvents();
	}();

}