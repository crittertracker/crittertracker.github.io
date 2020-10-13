let hemisphereOpt = document.getElementById('hemisphere');
let monthOpt = document.getElementById('month');
let hourOpt = document.getElementById('hour');

let bugToggle = document.getElementById('showBugs');
let fishToggle = document.getElementById('showFish');
let seaCreatureToggle = document.getElementById('showSeaCreatures');

let timeChoice = document.getElementById('currentTimeChoice');
let monthChoice = document.getElementById('currentMonthChoice');

window.addEventListener('load', () => {
  let loadPromise = new Promise((resolve) => {
    storeAllCritterData();

    setTimeout(function () {
      resolve('Successful load.');
    }, 250);
  });

  loadPromise.then((successMessage) => {
    render();
    console.log(successMessage);
  });
});

hemisphereOpt.addEventListener('change', () => {
  render();
});

monthOpt.addEventListener('change', () => {
  render();
});

hourOpt.addEventListener('change', () => {
  render();
});

fishToggle.addEventListener('click', () => {
  if (fishToggle.checked) show('fishTableArea');
  else hide('fishTableArea');
});

bugToggle.addEventListener('click', () => {
  if (bugToggle.checked) show('bugTableArea');
  else hide('bugTableArea');
});

seaCreatureToggle.addEventListener('click', () => {
  if (seaCreatureToggle.checked) show('seaCreatureTableArea');
  else hide('seaCreatureTableArea');
});
