function checkMail(mail) {
	var regExp = /^[\w\.]+@[\w\.]+\.[a-z]{2,5}$/;
	return regExp.test(mail);
}

console.log(checkMail("baldur.hermod@gmail.com"));
console.log(checkMail("Олямс Беруша"));