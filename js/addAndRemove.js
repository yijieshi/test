var board = document.getElementById("inputBoard");
var element = {};

function addInput() {
	element = document.createElement("input");
	element.id = "input";
	board.appendChild(element);
}

function removeInput() {
	element = document.getElementById("input");
	board.removeChild(element);
}