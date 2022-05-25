var elForm = document.querySelector('#form');
var elInput = document.querySelector('#input');
var elButton = document.querySelector('#button');
var elScreen = document.querySelector('#screen');
var elBody = document.querySelector('body')

var computerNumber = parseInt(Math.random() * 100 + 1);	

elForm.addEventListener('submit', function(evt){
	evt.preventDefault();

	var userNumber = Number(elInput.value);

	if(userNumber > 100 || userNumber < 1){
		elScreen.style.color = 'red';
		elScreen.textContent = '[1, 100] oralig\'ida son kiritilmadi!';
		elBody.style.backgroundColor = 'darkred';
		elInput.style.color = 'white';
		elInput.style.borderColor = 'red';
		elButton.style.backgroundColor = 'red';
		alert("[1, 100] oralig'ida son kiritilmadi!");
	} else if (userNumber > computerNumber) {
		elScreen.textContent = 'Kichiqroq son kiriting';
		elScreen.style.color = 'aqua';
		elBody.style.backgroundColor = 'darkblue';
		elInput.style.color = 'white';
		elInput.style.borderColor = 'aqua';
		elButton.style.backgroundColor = 'aqua';
	} else if (userNumber < computerNumber) {
		elScreen.textContent = 'Kataroq son kiriting';
		elScreen.style.color = 'yellow';
		elScreen.style.color = 'yellow';
		elBody.style.backgroundColor = 'gold';
		elInput.style.color = 'white';
		elInput.style.borderColor = 'yellow';
		elButton.style.backgroundColor = 'yellow';
	} else {
		elScreen.textContent = 'Topdingiz! ureee';
		elScreen.style.color = 'lime';
		elBody.style.backgroundColor = 'darkgreen';
		elInput.style.color = 'white';
		elInput.style.borderColor = 'lime';
		elButton.style.backgroundColor = 'lime';
	}
})

var sonlar = [5, 16, 20, 7, 90, 3];

	for (var i = 0; i < sonlar.length; i++){
		if (sonlar[i] % 5 === 0){
		console.log(sonlar[i]);
	}
}