$( document ).ready(function() {
 


// Convert Standard Hours to Military
var d = new Date();
// console.log(localdate); *debugging
var h = JSON.stringify(d.getHours());
// console.log(h); *debugging
switch (h) {
  case '1':
    h = '01';
    break;
  case '2':
    h = '02';
    break;
  case '3':
    h = '03';
    break;
  case '4':
    h = '04';
    break;
  case '5':
    h = '05';
    break;
  case '6':
    h = '06';
    break;
  case '7':
    h = '07';
    break;
  case '8':
    h = '08';
    break;
  case '9':
    h = '09';
    break;
  case '0':
    h='24';
    break;
}

//Convert Month to String Reference
//console.log(h); * debugging
var m = d.getMonth() + 1;
//console.log(m); *debugging
var sMonth;
switch (m) {
  case 1:
    sMonth = 'Jan';
    break;
  case 2:
    sMonth = 'Feb';
    break;
  case 3:
    sMonth = 'Mar';
    break;
  case 4:
    sMonth = 'Apr';
    break;
  case 5:
    sMonth = 'May';
    break;
  case 6:
    sMonth = 'Jun';
    break;
  case 7:
    sMonth = 'July';
    break;
  case 8:
    sMonth = 'Aug';
    break;
  case 9:
    sMonth = 'Sept';
    break;
  case 10:
    sMonth = 'Oct';
    break;
  case 11:
    sMonth = 'Nov';
    break;
  case 12:
    sMonth = 'Dec';
    break;
}




//AJAX JSON call fish northern

$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var fishCounter = 0;
    $(data.fish).each(function (_index, fish) {

      if (fish.time.indexOf(h) > -1 && fish.month.indexOf(sMonth) > -1) {
        
        fishCounter++;
        
       var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        var tableRow =
          '<tr><td id="fName"><b>' +
          (fish.name).toUpperCase() + '</b><br /><img src=' +
          fish.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (fish.name) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
          (fish.rarity).toUpperCase() +
          '</td><td>' +
          fish.price +
          '</td><td>' +
          (fish.location).toUpperCase() +
          '</td><td>' +
          (fish.shadowsize).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatafish_nh tbody');

      }
      $('#fishCounter').text(fishCounter); 
    });
  },
});
//







//AJAX JSON call fish southern


$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var fishCounter = 0;
    $(data.fish).each(function (_index, fish) {

      if (fish.time.indexOf(h) > -1 && fish.month.indexOf(sMonth) > -1) {
        
        fishCounter++;
        
       var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        var tableRow =
          '<tr><td id="fName"><b>' +
          (fish.name).toUpperCase() + '</b><br /><img src=' +
          fish.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (fish.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
          (fish.rarity).toUpperCase() +
          '</td><td>' +
          fish.price +
          '</td><td>' +
          (fish.location).toUpperCase() +
          '</td><td>' +
          (fish.shadowsize).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatafish_sh tbody');

      }
      $('#fishCounter').text(fishCounter); 
    });
  },
});
//



//AJAX JSON call bugs northern
$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var bugCounter = 0;
    $(data.bugs).each(function (_index, bug) {

      if (bug.time.indexOf(h) > -1 && bug.month.indexOf(sMonth) > -1) {
        
        bugCounter++;
        
       var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        var tableRow =
          '<tr><td id="bName"><b>' +
          (bug.name).toUpperCase() + '</b><br /><img src=' +
          bug.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
          (bug.rarity).toUpperCase() +
          '</td><td>' +
          bug.price +
          '</td><td>' +
          (bug.location).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatabugs_nh tbody');

      }
      $('#bugCounter').text(bugCounter); 
    });
  },
});


//AJAX JSON call bugs southern

$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var bugCounter = 0;
    $(data.bugs).each(function (_index, bug) {

      if (bug.time.indexOf(h) > -1 && bug.month.indexOf(sMonth) > -1) {
        
        bugCounter++;
        
       var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        var tableRow =
          '<tr><td id="bName"><b>' +
          (bug.name).toUpperCase() + '</b><br /><img src=' +
          bug.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
          (bug.rarity).toUpperCase() +
          '</td><td>' +
          bug.price +
          '</td><td>' +
          (bug.location).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatabugs_sh tbody');

      }
      $('#bugCounter').text(bugCounter); 
    });
  },
});



//Filter Functions Fish
$('#showPier').click(function(){
  $('td:contains("PIER")').parent().toggle("slow");
}); 

$('#showPond').click(function(){
  $('td:contains("POND")').parent().toggle("slow");
}); 

$('#showRiver').click(function(){
  $('td:contains("RIVER")').parent().toggle("slow");
}); 

$('#showSea').click(function(){
  $('td:contains("SEA")').parent().toggle("slow");
}); 


//Filter Functions Bugs
$('#showFly').click(function(){
  $('td:contains("FLYING")').parent().toggle("slow");
}); 

$('#showGround').click(function(){
  $('td:contains("GROUND")').parent().toggle("slow");
}); 

$('#showTree').click(function(){
  $('td:contains("TREE")').parent().toggle("slow");
}); 









//Sort Table Head Click Function

$('th').click(function () {
  var table = $(this).parents('table').eq(0);
  var rows = table
    .find('tr:gt(0)')
    .toArray()
    .sort(comparer($(this).index()));
  this.asc = !this.asc;
  if (!this.asc) {
    rows = rows.reverse();
  }
  for (var i = 0; i < rows.length; i++) {
    table.append(rows[i]);
  }
});
function comparer(index) {
  return function (a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB)
      ? valA - valB
      : valA.toString().localeCompare(valB);
  };
}
function getCellValue(row, index) {
  return $(row).children('td').eq(index).text();
}

// Military to Standard Time and Output to Page
function convert(input) {
  return moment(input, 'HH:mm:ss').format('h:mm A');
}

var d = new Date();
var mTime = d.getHours() + ':' + d.getMinutes();
var cTime = convert(mTime);
$('#currenttime').text(cTime);
var cDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
$('#currentdate').text(cDate);





//debugging

console.log(sMonth);
console.log(h);

});

