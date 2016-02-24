'use strict';

function send() {
    var email = validate('email').emailField(),
	    name = validate('name').nameField(),
		text = validate('particulars').textField(),
        num = $("#number").val();

    if (!email || !name) { return false; }

    $.post("/mail/lead", {
        email: email,
		name: name,
		particulars: text,
        number: num
	})
    .success(function() {
        alert('Thank you for your interest in Homestead Roofs. A representative will be contacting you shortly.')
        // do modal triggering here with json return later
    });
}
