const contactForm = querySelector("#contact_form");
const full_Name = querySelector("#fullname");
const full_NameError = querySelector("#fullname-error");
const email = querySelector("#email");
const emailError = querySelector("#email-error");
const subject = querySelector("#subject");
const subjectError = querySelector("#subject-error");
const messange = querySelector("#message");
const messengeError = querySelector("#message-error");


function contactValidation(event) {
	event.preventDefault();

	if (formLength(full_Name.value, 4) === true) {
		full_NameError.style.display = "none";
	} else {
		full_NameError.style.display = "block";
	}

    if (emailValidation(email.value) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
	

	if (formLength(subject.value,14) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	

	if (formLength(message.value, 24) === true) {
		messengeError.style.display = "none";
	} else {
		messengeError.style.display = "block";
	}
}

contactForm.addEventListener("submit", contactValidation);

function formLength(value, lenght) {
	if (value.trim().length > lenght) {
		return true;
	} else {
		return false;
	}
}

function emailValidation(email) {
	const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const emailPattern = regEx.test(email);
	return emailPattern;
}
