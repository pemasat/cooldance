$(document).ready(function() {
	 $('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  infinite: false,
		  responsive: [
			{
		  		breakpoint: 1224,
				settings: "unslick"
			}
		  ]
	 });
});



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


Menu = function(element) {
	"use strict";

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