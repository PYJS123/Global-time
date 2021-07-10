let currBG = '#FEFEFE';
let light = '#FEFEFE';
let dark = '#222222';

function switchMode() {
  currBG = (currBG == light) ? dark : light;
  document.body.style.backgroundColor = currBG;
}
