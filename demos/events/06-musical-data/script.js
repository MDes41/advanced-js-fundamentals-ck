// Write an event listener for each key that looks at the data-piano-key of the

var pianoKeys = document.querySelectorAll('.piano-key');

for (var i = 0; i < pianoKeys.length; i++) {

  pianoKeys[i].addEventListener('click', function (event) {
    var note = this.getAttribute('data-piano-key');
    playNote(note);
  });

}

document.addEventListener('keydown', function (event) {
	switch(event.keyCode) {
    case 65:
        playNote('C3');
        break;
    case 87:
        playNote('C#3');
        break;
    case 83:
        playNote('D3');
        break;
    case 69:
        playNote('C#3');
        break;
    case 68:
    		playNote('E3');
    		break;
    case 70:
        playNote('F3');
        break;
    case 84:
        playNote('F#3');
        break;
    case 71:
        playNote('G3');
        break;
    case 89:
    		playNote('G#3');
    		break;
    case 72:
        playNote('A3');
        break;
    case 85:
        playNote('A#3');
        break;
    case 74:
        playNote('B3');
        break;
	}

  console.log(event.keyCode);
});
