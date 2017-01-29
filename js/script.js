"use strict";

(function(){
	window.onload = function() {
		$('.collapsible').collapsible();
		listeners();
	}

	function listeners() {
		$(".switch").click(function(){
			console.log("testing");
			if ($('.switch_button').prop("checked")) {
				console.log("yes");

				$(".dropdown-button").addClass("disabled");
				$('.switch_button').prop("checked", true);
			}
			else {
				console.log("no");

				$(".dropdown-button").removeClass("disabled");
				$('.switch_button').prop("checked", false);
			}
		});

		$(".dropdown-button").click(function(){
			var activates = $(this).data("dropdown1");
			//$("#"+activates+" ")
		});
	}
})();
