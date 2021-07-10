let countries;
let url = 'https://worldtimeapi.org/api/timezone/';

window.onload = async function() {
  console.log('Elements loaded.');
  countries = await fetch('https://worldtimeapi.org/api/timezone/');
  countries = await countries.json();
  console.log('Initial data retrieved.');

  let elems = document.getElementsByClassName('main')[0].children;
  for (let block in elems) {
    city = block.children[0];
    time = (await fetch(url+city.innerText)).substr(11, 5);
    console.log(time);
  }
  console.log('Elements updated.');
}
