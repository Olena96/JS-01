var login = prompt('What is your login?', 'Login');

if (login == 'Admin') {
	var password = prompt('What is your password?', 'Password');
	if (password == 'Dark Lord') { 
		alert('Welcome, my Lord!');
	} else if (password == null) { 
		alert('Cancelled');
	} else { 
		alert("Wrong password!");
	}

} else if (login == null || login == undefined) { 
	alert('Cancelled');
} else { 
	alert('I don\'t know you!');
}