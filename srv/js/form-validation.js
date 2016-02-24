var validate = function (formid) {
    var _validate = {}, 
		input = document.getElementById(formid),
		sanitize = /^[A-Za-z0-9 ]{3,20}$/; 
    
    _validate.sanitizeString = function() {
	    input.value = input.value.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
	    return input.value.trim();
	};

	_validate.nameField = function() {
	    if (!sanitize.test(input.value)) {
		    return false;
		}
		if (input.value.length > 25 || input.value.length < 2) {
		    return false;
		}
		return true;
	};

	_validate.emailField = function() {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(input.value);
	};

	_validate.textField = function() {
		return input.value.length > 255;
	};

	return {
	    nameField: function() {
		    if (!_validate.nameField()) {
			    input.className = 'form-control  error';
				return false;
			}
			input.className = 'form-control  success';
			return input.value;
		},
		emailField: function() {
		    if (!_validate.emailField()) {
		        input.className = 'form-control error';
		        return false;		
			}
		    input.className = 'form-control success';
			return input.value;
		},
		textField: function() {
			if (input.value.length > 0) {
			    if (_validate.textField()) {
				    return false;
				}
			}
			return _validate.sanitizeString();
		},
	};
};
