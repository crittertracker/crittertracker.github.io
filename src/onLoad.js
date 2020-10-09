
let hemisphereOpt = document.getElementById('hemisphere');
let monthOpt = document.getElementById('month');
let hourOpt = document.getElementById('hour');

let bugToggle = document.getElementById('showBugs');
let fishToggle = document.getElementById('showFish');
//let seaCreatureToggle = document.getElementById('showSeaCreatures');

let timeChoice = document.getElementById('currentTimeChoice');
let monthChoice = document.getElementById('currentMonthChoice');


window.addEventListener('load', () => {

  let loadPromise = new Promise((resolve) => {

    storeAllCritterData();

    setTimeout( function() {
      resolve("Successful load.") 
    }, 250) 
  }) 
  
  loadPromise.then((successMessage) => {
  
    fullRender();
    
    console.log(successMessage);

  });
  
});
  


hemisphereOpt.addEventListener('change', ()=>{
  fullRender();
});

monthOpt.addEventListener('change', ()=>{
  fullRender();
});

hourOpt.addEventListener('change', ()=>{
  fullRender();
});

fishToggle.addEventListener('click', ()=>{
  if(fishToggle.checked) show('fishTableArea');
  else hide('fishTableArea');
});

bugToggle.addEventListener('click', ()=>{
  if(bugToggle.checked) show('bugTableArea');
  else hide('bugTableArea');
});














