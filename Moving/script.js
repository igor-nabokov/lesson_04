window.onload = function (){
	var div = document.getElementById("semargl");
	function move() {
		div.style.left = div.offsetLeft + 1 + "px";
		if (div.offsetLeft < window.innerWidth - 200) {
			setTimeout(move, 10);
		}
	}
	setTimeout(move, 10);
};