const obj = {
	first_name: 'Mafia',
	last_name: 'Code',
	printFullName: function () {
		console.log(this);
		//const _that = this;

		window.setTimeout(function () {
			//console.log(_that);
			console.log(this);
		}.bind(this));
	}
}

obj.printFullName();
