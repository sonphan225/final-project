$(window).load(function () {
	// preloader
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(550).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("body").delay(550).css({
		overflow: "visible",
	});

	//  isotope
	var $container = $(".portfolio_container");
	$container.isotope({
		filter: "*",
	});

	$(".portfolio_filter a").click(function () {
		$(".portfolio_filter .active").removeClass("active");
		$(this).addClass("active");

		var selector = $(this).attr("data-filter");
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine: "jquery",
			},
		});
		return false;
	});

	// back to top
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $(".cd-top");

	//hide or show the "back to top" link
	$(window).scroll(function () {
		$(this).scrollTop() > offset
			? $back_to_top.addClass("cd-is-visible")
			: $back_to_top.removeClass("cd-is-visible cd-fade-out");
		if ($(this).scrollTop() > offset_opacity) {
			$back_to_top.addClass("cd-fade-out");
		}
	});

	//smooth scroll to top
	$back_to_top.on("click", function (event) {
		event.preventDefault();
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			scroll_top_duration
		);
	});

	// input
	$(".input-contact input, .textarea-contact textarea").focus(function () {
		$(this).next("span").addClass("active");
	});
	$(".input-contact input, .textarea-contact textarea").blur(function () {
		if ($(this).val() === "") {
			$(this).next("span").removeClass("active");
		}
	});
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
