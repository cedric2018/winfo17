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

		$(".dropdown-content li a").click(function(){
			var time = $(this).html();
			console.log(time);
			var name = $(this).parent().parent().attr('id');
			console.log(name);
			$('*[data-activates="' + name + '"]').html(time);
		});
	}
})();
