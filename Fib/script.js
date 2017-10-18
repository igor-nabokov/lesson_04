function fib(num) {
	var prev = 0;
	var result = 1;
	for (var i = 0; i < num-1; i++) {
		var tmp = prev;
		prev = result;
		result = tmp + result;
	}
	return result;
}

console.log(fib(6));