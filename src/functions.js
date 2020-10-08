
function getHour(){

    let hour = String(new Date().getHours());
    console.log(hour);
    if (hour === '0') hour === '24'; 
    return hour;

}

function getHourSelection(){
    let hour = document.getElementById('hour').value;
    if(hour==='Current') return getHour();
    else return hour;
}

function getMonth(){ 

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
    if(month==='Current') return getMonth();
    else return month;
}

function getHemisphereSelection(){

    let hemisphere = document.getElementById('hemisphere').value;
    return hemisphere; 

}


function storeLocally(key, object){

    localStorage.setItem(key, JSON.stringify(object));
}



function storeHemiSpecificData(hemisphere) {

const request = new Request(`src/json/critters_${hemisphere}.json`);

if(localStorage.getItem(`${hemisphere} data`) === null){ 

fetch(request)
  .then(response => response.json())
  .then(data => storeLocally(`${hemisphere} data`, data))

}
}

function storeAllCritterData() {

    const requestN = new Request(`src/json/critters_northern.json`);
    const requestS = new Request(`src/json/critters_southern.json`);
    
    if(localStorage.getItem(`northen data`) === null){ 
    
        fetch(requestN)
        .then(response => response.json())
        .then(data => storeLocally(`northern data`, data))
    
    }

    if(localStorage.getItem(`southern data`) === null){ 
    
        fetch(requestS)
        .then(response => response.json())
        .then(data => storeLocally(`southern data`, data))
        
        }

    }




function generateAvailableCritterList(hemisphere, hour, month){

    let critterData = JSON.parse(localStorage.getItem(`${hemisphere} data`));

    let availableBugs = [];
    let availableFish = [];

        
                    critterData.bugs.forEach((bug) => {
                      if (
                        bug.time.indexOf(hour) > -1 &&
                        bug.month.indexOf(month) > -1
                      )
                        availableBugs.push(bug);
                    });

                    critterData.fish.forEach((fish) => {
                      if (
                        fish.time.indexOf(hour) > -1 &&
                        fish.month.indexOf(month) > -1
                      )
                        availableFish.push(fish);
                    });

                    storeLocally('availableCritters', {
                      bugs: availableBugs,
                      fish: availableFish,
                    });

                    return { bugs: availableBugs, fish: availableFish };            
        }

        



function clearTable(tableName){
    let table = document.getElementById(tableName);
    let tableLength = (table.rows.length);
        
    for (i = 0; i < tableLength; i++ ){
        table.deleteRow(0)
    }

   resetHeaders(tableName, table);

}


function resetHeaders(tableName, table){

    let svgHTML = ``; //insert icon here later to indicate sortability

    switch(tableName){
        
        case 'fishTable':
            
            let fishHeader = table.createTHead();
            
            fishHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'fishTable')">Name ${svgHTML}</th><th onclick="sortTableNum(1, 'fishTable')">Price ${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'fishTable')">Location ${svgHTML}</th><th onclick="sortTableNum(3, 'fishTable')">Size ${svgHTML}</th>`;

            break;
        
        case 'bugTable':
            
            let bugHeader = table.createTHead();
            
            bugHeader.innerHTML = `<th onclick="sortTableAlpha(0, 'bugTable')">Name ${svgHTML}</th><th onclick="sortTableNum(1, 'bugTable')">Price ${svgHTML}</th>
            <th onclick="sortTableAlpha(2, 'bugTable')">Location ${svgHTML}</th>`;

            break;

    }
}

function hide(element){
    document.getElementById(element).style.display = 'none';
}

function show(element){
    document.getElementById(element).style.display = 'block';
}


function buildTables(availableCritters){

   clearTable('fishTable');
  

   clearTable('bugTable');
  
 
  
    if(!availableCritters.bugs === false){
         
   
     availableCritters.bugs.forEach((bug) =>{
        
        let bugRowTemplate = templateGenerator('bug', bug.name.toUpperCase(), bug.image, bug.name.toLowerCase(), 
                                                    bug.rarity.toLowerCase(), bug.price, bug.location.toUpperCase() ); 

        let bugTableRef = document.getElementById('bugTable').getElementsByTagName('tbody')[0];
        let newBugRow = bugTableRef.insertRow(bugTableRef.rows.length);

        newBugRow.innerHTML = bugRowTemplate;

     });
    };
    
    if(!availableCritters.fish === false){

       availableCritters.fish.forEach((fish) =>{

        let fishRowTemplate = templateGenerator('fish', fish.name.toUpperCase(), fish.image, fish.name.toLowerCase(), 
                                                    fish.rarity.toLowerCase(), fish.price, fish.location.toUpperCase(), fish.shadowsize.toUpperCase());
         
        let fishTableRef = document.getElementById('fishTable').getElementsByTagName('tbody')[0];
        let newFishRow = fishTableRef.insertRow(fishTableRef.rows.length);

        newFishRow.innerHTML = fishRowTemplate;
        });
    };

}

function templateGenerator(critter,name,image,link,rarity,price,location,shadow){
    
    let template = '';
    let infoIcon = `<img src="https://img.icons8.com/flat_round/24/000000/info.png"/>`;                      

    if(critter === 'fish'){
        template = `<tr><td><b> ${name} </b><br /><img src="${image}" class="img-fluid" alt="responsive image">
        <br /><a href="https://animalcrossing.fandom.com/wiki/${link}" target="_blank" class="btn btn-info my-1" role="button">
        Wiki ${infoIcon}</a><hr /> ${rarity} </td><td> ${price} </td><td> ${location} </td>
        <td> ${shadow} </td></tr>`;
    }
    else{
        template = `<tr><td><b> ${name} </b><br /><img src="${image}" class="img-fluid" alt="responsive image">
        <br /><a href="https://animalcrossing.fandom.com/wiki/${link}" target="_blank" class="btn btn-info my-1" role="button">
        Wiki ${infoIcon}</a><hr /> ${rarity} </td><td> ${price} </td><td> ${location} </td></tr>`;
    }

    return template;
    
}

function fullRender(){
        
    buildTables(generateAvailableCritterList(getHemisphereSelection(), getHourSelection(), getMonthSelection()));

}

function resetPage(){
    localStorage.clear();
    location.reload();
}












