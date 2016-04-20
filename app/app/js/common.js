$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	//Load SVG Symbol Definitions (icons)
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "../img/icons/icons-sprite.svg", true);
	ajax.send();
	ajax.onload = function(e) {
		var div = document.createElement("div");
		div.innerHTML = ajax.responseText;
		document.body.insertBefore(div, document.body.childNodes[0]);
	}
	// $.get("../img/icons/icons-sprite.svg", function(data) {
	// 	var div = document.createElement("div");
	// 	div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	// 	document.body.insertBefore(div, document.body.childNodes[0]);
	// });
	
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
