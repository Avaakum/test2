let receiveBtn = document.getElementById('receive'),
		/*chooseBtn = document.getElementById('choose'),*/
		heading = document.getElementsByTagName('h2')[0],
		nameInput = document.getElementsByClassName('contactform_name')[0],
		// phoneInput = document.querySelector('.contactform_phone'),
		// mailInput = document.querySelectorAll('.contactform_mail')[0],
		modal = document.querySelector('.modal'),
		closeBtn = document.querySelector('.close'),
		text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Мы не шутим, правда ВСЁ!";
}

// function out() {
// 	heading.textContent = "Все включено даже сейчас!";
// }


heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function() {
	heading.textContent = "Все включено даже сейчас!";
});


receiveBtn.addEventListener("click", function() {
	modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
	modal.style.display = "none";
});

nameInput.addEventListener("input", function() {
	text.value = nameInput.value + ": ";

	if (nameInput.value == "") {
		text.value = "";
	}
});































