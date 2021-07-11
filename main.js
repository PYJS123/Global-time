let countries;
let timeUrl = 'https://worldtimeapi.org/api/timezone/';
let latlonUrl = 'https://www.metaweather.com/api/location/search/?query=';

window.onload = async function() {
  console.log('Elements loaded.');
  countries = await fetch('https://worldtimeapi.org/api/timezone/');
  countries = await countries.json();
  console.log('Initial data retrieved.');

  let elems = document.getElementsByClassName('main')[0].children;
  for (let i = 0; i < elems.length; i++) {
    try {
      let city = elems[i].children[0].innerText;
      let fetched = await fetch(timeUrl+city);
      let parsedFetch = await fetched.json();
      let time = parsedFetch.datetime.substr(11, 5);
      // Changing time
      elems[i].children[1].innerText = time;
      // Changing Sun up/down
      cityName = elems[i].children[0].innerText.split('/')[1];
      let possibilities = await fetch(latlonUrl+cityName);
      possibilities = possibilities.json();
      let latlon = possibilities[0]["latt_long"];
      console.log(latlon);
    } catch(e) {}
  }
  console.log('Elements updated.');
}
