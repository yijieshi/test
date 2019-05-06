$(document).ready(function() {
	$("#add_input_button").click(function() {
		$("#input_board").append("<li id=\"input1\">123</li>");
	});
});

$(document).ready(function() {
	$("#remove_input_button").click(function() {
		$("#input1").remove();
	});
});

$(document).ready(function() {
	$("#empty_input_button").click(function() {
		$("#input_board").empty();
	});
});