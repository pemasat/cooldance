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





$(document).ready(function() {
	 $('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  infinite: false,
		  responsive: [
			{
		  		breakpoint: 1000,
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
	this.searchControl = null;

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

	this.addSearchControl = function() {
		me.searchControl = $().html('<form action="#" method="get" id="searchControl"></form>');
		$(me.searchControl).append($().html('<input type="search" name="search" />'));
		$(me.searchControl).append($().html('<input type="submit" value="hledej" />'));
		$(me.mainMenu).append(me.searchControl);
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
		me.addSearchControl();
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