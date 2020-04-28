

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
  
          var tableRow =
            '<tr><td><b>' +
            bug.name.toUpperCase() +
            '</b><br /><img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"><hr />' +
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
  
          var tableRow =
            '<tr><td><b>' +
            fish.name.toUpperCase() +
            '</b><br /><img src=' +
            fish.image +
            ' class="img-fluid" alt="responsive image"><hr />' +
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


 
