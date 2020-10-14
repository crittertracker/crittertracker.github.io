
function getCurrentHour(){

    let hour = String(new Date().getHours());
    if (hour === '0') hour === '24'; 
    return hour;

}

function getHourSelection(){
    let hour = document.getElementById('hour').value;
    if(hour==='Current') return getCurrentHour();
    else return hour;
}

function getCurrentMonth(){ 

    let month = new Date().getMonth() + 1; 
    switch (month) {
    case 1:
        month = 'Jan';
        break;
    case 2:
        month = 'Feb';
        break;
    case 3:
        month = 'Mar';
        break;
    case 4:
        month = 'Apr';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'Jun';
        break;
    case 7:
        month = 'Jul';
        break;
    case 8:
        month = 'Aug';
        break;
    case 9:
        month = 'Sept';
        break;
    case 10:
        month = 'Oct';
        break;
    case 11:
        month = 'Nov';
        break;
    case 12:
        month = 'Dec';
        break;
}
    return month;

}

function getMonthSelection(){
    let month = document.getElementById('month').value;
    if(month==='Current') return getCurrentMonth();
    else return month;
}

function getHemisphereSelection(){

    let hemisphere = document.getElementById('hemisphere').value;
    return hemisphere; 

}

function time() {

    let tOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };

    let mOptions = {
        month: 'long',
        
      };

  let clock = new Date();
  timeChoice.textContent = `Current Time: ${clock.toLocaleString('en-US',tOptions)}`;
  monthChoice.textContent =  `Current Month: ${clock.toLocaleString('en-US',mOptions)}`;
  setInterval(time,1000);
}

function hide(element){
    document.getElementById(element).style.display = 'none';
}

function show(element){
    document.getElementById(element).style.display = 'block';
}




function render(){
        
    buildBugTable();
    buildCreatureTable();
    buildFishTable();
    time();
 

}

function resetPage(){
    localStorage.clear();
    location.reload();
}









