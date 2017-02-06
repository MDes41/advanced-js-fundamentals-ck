document.querySelector('.grandparent').addEventListener('click', function (event) {
  console.log(event);
});

document.querySelector('.parent').addEventListener('click', function (event) {
  console.log(event);
});

document.querySelector('#click-me').addEventListener('click', function (event) {
  console.log(event);
});