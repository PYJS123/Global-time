let countries;
let timeUrl = 'https://worldtimeapi.org/api/timezone/';
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

window.onload = async function() {
  console.log('Elements loaded.');
  countries = await fetch('https://worldtimeapi.org/api/timezone/');
  countries = await countries.json();
  console.log('Initial data retrieved.');

  updateElems();
  setInterval(()=>{updateElems();}, 30000);
}

async function updateElems() {
  let elems = document.getElementsByClassName('main')[0].children;
  for (let i = 0; i < elems.length; i++) {
    try {
      let city = elems[i].children[0].innerText;
      let fetched = await fetch(timeUrl+city);
      let parsedFetch = await fetched.json();
      let time = parsedFetch.datetime.substr(11, 5);
      // Changing time
      elems[i].children[1].innerText = time;
      // Changing Day of week
      dayNum = parsedFetch["day_of_week"];
      elems[i].children[2].innerText = days[dayNum];
    } catch(e) {}
  }
  console.log('Elements updated.');
}
