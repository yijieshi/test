$(document).ready(function() {
	$("#add_bar").hover(function() {
		$("#add_input_button").show();
		$("#remove_input_button").hide();
		$("#empty_input_button").hide();
	});
});

$(document).ready(function() {
	$("#remove_bar").hover(function() {
		$("#add_input_button").hide();
		$("#remove_input_button").show();
		$("#empty_input_button").hide();
	});
});

$(document).ready(function() {
	$("#empty_bar").hover(function() {
		$("#add_input_button").hide();
		$("#remove_input_button").hide();
		$("#empty_input_button").show();
	});
});