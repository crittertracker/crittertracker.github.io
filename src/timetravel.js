

$( document ).ready(function() {
    console.log( "ready!" );
    
    //set global variables for ajax json calls
    var month;
    var hour;
    var hemi;

    



$("#month").on('change',function(){
        month = $(this).val();
      });

    $("#hour").on('change',function(){
        hour = $(this).val();  
      });

    $("#hemisphere").on('change',function(){
        hemi = $(this).val();   
      });



//bug time button ajax table load function      

$('#crittertimeload').click(function(){

/*    console.log(month);
console.log(hour);
console.log(hemi);*/
$("#timeloadbug tbody").empty();


$.ajax({
    url: hemi,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {
        if (bug.time.indexOf(hour) > -1 && bug.month.indexOf(month) > -1) {

          var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'
  
          var tableRow =
            '<tr><td><b>' +
            bug.name.toUpperCase() +
            '</b><br /><img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
            bug.rarity.toLowerCase() +
            '</td><td>' +
            bug.price +
            '</td><td>' +
            bug.location.toUpperCase() +
            '</td></tr>';
          $(tableRow).appendTo('#timeloadbug tbody');
          
        }
  
      }); 
    },
  });


  $("#timeloadfish tbody").empty();
   
  $.ajax({
    url: hemi,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        if (fish.time.indexOf(hour) > -1 && fish.month.indexOf(month) > -1) {
  
          var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

          var tableRow =
            '<tr><td><b>' +
            fish.name.toUpperCase() +
            '</b><br /><img src=' +
            fish.image +
            ' class="img-fluid" alt="responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (fish.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr />' +
            fish.rarity.toLowerCase() +
            '</td><td>' +
            fish.price +
            '</td><td>' +
            fish.location.toUpperCase() +
            '</td><td>' +
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#timeloadfish tbody');
          
        }
  
      }); 
    },
  });



//
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




});







}); //document ready end tag


 
