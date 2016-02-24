'use strict';

function send() {
    var email = validate('email').emailField(),
	    name = validate('name').nameField(),
		text = validate('particulars').textField();

    if (!email || !name) { return false; }

    $.post("/application/php/note.php", {
        e: email,
		n: name,
		t: text
	}); 
}
