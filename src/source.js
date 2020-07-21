$( document ).ready(function() {
  console.log( "ready!" );
 
/// global icon variables
var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'
///

///Get Date
var d = new Date();

console.log("Date/Time: " + d + " | type: " + typeof(d)); //debugging Date

var hour = String(d.getHours()); // hour num to string
if (hour == '00'){
  hour =='24';
}
console.log("Hour: " + hour + " | type: " + typeof(hour)); //debugging Hour
///

///Get Month
var m = d.getMonth() + 1; // start from 1, not 0
console.log("Month #: " + m + " | type: " + typeof(m)); //debugging Month
var month; // instantiate new month var for switch to string abreviation
switch (m) {
  case 1:
    month = "Jan";
    break;
  case 2:
    month = "Feb";
    break;
  case 3:
    month = "Mar";
    break;
  case 4:
    month = "Apr";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "Jun";
    break;
  case 7:
    month = "Jul";
    break;
  case 8:
    month = "Aug";
    break;
  case 9:
    month = "Sept";
    break;
  case 10:
    month = "Oct";
    break;
  case 11:
    month = "Nov";
    break;
  case 12:
    month = "Dec";
    break;
}
console.log("Month #: " + month + " | type: " + typeof(month)); // debugging month after switch
///

///AJAX JSON call fish northern to table append
$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
      $(data.fish).each(function (_index, fish) {
       

        if (fish.time.indexOf(hour) > -1 && fish.month.indexOf(month) > -1){
           
          //console.log(`Fish name: ${fish.name} | Fish time: ${fish.time} | Fish months: ${fish.month}`); debug
          var tableRow = '<tr><td id="fName"><b>' +
          (fish.name).toUpperCase() + '</b><br /><img src=' +
          fish.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + 
          (fish.name) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+
          infoIcon+'</a><hr />' +
          (fish.rarity).toUpperCase() +
          '</td><td>' +
          fish.price +
          '</td><td>' +
          (fish.location).toUpperCase() +
          '</td><td>' +
          (fish.shadowsize).toUpperCase() +
          '</td></tr>';
          $(tableRow).appendTo('#userdatafish_nh tbody');
        
        var rowCountNF = $("#userdatafish_nh td").closest("tr").length; // counts number of rows in northern hemisphere fish table, excluding table headers
        $('#fishCounterNF').text(rowCountNF); // displays number of rows as fish available in northern hemisphere
        }
        
    }); 
    
  },
  error : function (data){
    console.log(data);
  }
  
});

///

///AJAX JSON call fish southern to table append
$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
    var shfishCounter = 0;
    $(data.fish).each(function (_index, fish) {

      if (fish.time.indexOf(hour) > -1 && fish.month.indexOf(month) > -1) {

          var tableRow =
          '<tr><td id="fName"><b>' +
          (fish.name).toUpperCase() + '</b><br /><img src=' +
          fish.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + 
          (fish.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+
          infoIcon+'</a><hr />' +
          (fish.rarity).toUpperCase() +
          '</td><td>' +
          fish.price +
          '</td><td>' +
          (fish.location).toUpperCase() +
          '</td><td>' +
          (fish.shadowsize).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatafish_sh tbody'); 
        
        var rowCountSF = $("#userdatafish_sh td").closest("tr").length; // counts number of rows, excluding header, in southern hemisphere fish table
        $('#fishCounterSF').text(rowCountSF); //displays number of rows as number of fish available in southern hemisphere
      }
    });
  },
  error : function (data){
    console.log(data);
  }
});
///

///AJAX JSON call bugs northern to table append
$.ajax({
  url: 'src/critters_nh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {
  
    $(data.bugs).each(function (_index, bug) {

      if (bug.time.indexOf(hour) > -1 && bug.month.indexOf(month) > -1) {
        
        var tableRow =
          '<tr><td id="bName"><b>' +
          (bug.name).toUpperCase() + '</b><br /><img src=' +
          bug.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + 
          (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+
          infoIcon+'</a><hr />' +
          (bug.rarity).toUpperCase() +
          '</td><td>' +
          bug.price +
          '</td><td>' +
          (bug.location).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatabugs_nh tbody');
        
    var rowCountNB = $("#userdatabugs_nh td").closest("tr").length; //counts number of rows (excluding header) in northern hemisphere bug table
    $('#bugCounterNB').text(rowCountNB); //displays number of rows in table as number of bugs available in Northern Hemisphere
      }  
    });
  },
  error : function (data){
    console.log(data);
  }
});
///

///AJAX JSON call bugs southern to table append

$.ajax({
  url: 'src/critters_sh.json',
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) {

    $(data.bugs).each(function (_index, bug) {

      if (bug.time.indexOf(hour) > -1 && bug.month.indexOf(month) > -1) {
       
        
        var tableRow =
          '<tr><td id="bName"><b>' +
          (bug.name).toUpperCase() + '</b><br /><img src=' +
          bug.image +
          ' class="img-fluid" alt="Responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + 
          (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+
          infoIcon+'</a><hr />' +
          (bug.rarity).toUpperCase() +
          '</td><td>' +
          bug.price +
          '</td><td>' +
          (bug.location).toUpperCase() +
          '</td></tr>';

        $(tableRow).appendTo('#userdatabugs_sh tbody');
        
        var rowCountSB = $("#userdatabugs_sh td").closest("tr").length; //counts number of rows of southern bugs table
        $('#bugCounterSB').text(rowCountSB); //sends number of rows to display as number of fish available
      } 
    });
  },
  error : function (data){
    console.log(data);
  }
});
///

///FILTERS
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
///

///Sort Table Head Click Function
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
///
/// Military to Standard Time and Output to Page
function convert(input) {
  return moment(input, 'HH:mm:ss').format('h:mm A');
}

var d = new Date();
var mTime = d.getHours() + ':' + d.getMinutes();
var cTime = convert(mTime);
$('#currenttime').text(cTime);
var cDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
$('#currentdate').text(cDate);


///DEBUGGING



});

