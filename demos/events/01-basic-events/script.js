var dontClickMeButton = document.getElementById('dont-click-me');
var pleaseClickMeButton = document.querySelector('#please-click-me');
var buttons = document.querySelectorAll('button');

// dontClickMeButton.addEventListener('click', function fireAlert() {
//   alert('I asked you very nicely not to click the button.');
// });

// pleaseClickMeButton.addEventListener('click', function fireAlert() {
// 	alert('Please Click Me')
// })


for(i=0; i<buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		alert('Clicked button')
	})
}



// var pleaseClickMe = document.getElementById('please-click-me')
// var pleaseClickMe = document.querySelector('#please-click-me')
// var pleaseClickMe = document.querySelector('#please-click-me')
// var buttons = document.getElementyByTagName('button')
// var buttons = document.querySelectorAll(('button')



// buttons.addEventListener('click', function() {
// 	console.log(this)
// }) 