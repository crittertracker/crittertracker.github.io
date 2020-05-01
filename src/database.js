$( document ).ready(function() {
  console.log( "ready!" );

  //northern bugs

$.ajax({
    url: 'src/critters_nh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {
        
        
       //bug month display conversions
  
        if (bug.month.length==12){
          bug.month="All Year";
        }
        
        bug.month = (bug.month.toString()).replace(/,/g, ", ");
        
        //bug time display conversions
        
        
        if(bug.time.length==24){
          bug.time="All Day";
        }

        if((bug.time.length==10) && (bug.time[0]=="08")){
          bug.time="8AM-5PM"
        }

        if((bug.time.length==10) && (bug.time[0]=="19")){
          bug.time="7PM-4AM"
        }

        if((bug.time.length==16) && (bug.time[0]=="17")){
          bug.time="5PM-8AM"
        }

        if((bug.time.length==8) && (bug.time[0]=="16")){
          bug.time="4PM-11PM"
        }

        if((bug.time.length==16) && (bug.time[0]=="04")){
          bug.time="4AM-7PM"
        }

        if((bug.time.length==12) && (bug.time[0]=="08")){
          bug.time="8AM-7PM"
        }

        if((bug.time.length==9) && (bug.time[0]=="04")){
          bug.time="4AM-8AM / 4PM-7PM"
        }

        if((bug.time.length==10) && (bug.time[0]=="23")){
          bug.time="11PM-8AM"
        }

        if((bug.time.length==14) && (bug.time[0]=="19")){
          bug.time="7PM-8AM"
        }

        if((bug.time.length==9) && (bug.time[0]=="08")){
          bug.time="8AM-4PM"
        }

        if((bug.time.length==14) && (bug.time[0]=="04")){
          bug.time="4AM-5PM"
        }

        if((bug.time.length==12) && (bug.time[0]=="17")){
          bug.time="5PM-4AM"
        }

        if((bug.time.length==18) && (bug.time[0]=="23")){
          bug.time="11PM-4PM"
        }

        if((bug.time.length==8) && (bug.time[0]=="04")){
          bug.time="4AM-8AM / 5PM-7PM"
        }
        



        var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        
        
          var tableRow =
            '<tr><td id="bName">' +
            bug.name.toUpperCase() +
            '<br /><img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"><hr /><a href="https://animalcrossing.fandom.com/wiki/' + (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr /></td><td>' +
            bug.price +
            '</td><td>' +
            bug.location.toUpperCase() +
            '</td><td>' +
              bug.rarity.toUpperCase() +
              '</td><td>'+
              bug.month.toUpperCase()+
              '</td><td>'+
              bug.time.toUpperCase()+
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullbugs_nh tbody');
          
        
  
      }); 
    },
  });

  //----------------northern fish
  
  $.ajax({
    url: 'src/critters_nh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        if ((fish.month).length==12){
          fish.month="All Year"
        }
        

        fish.month = (fish.month.toString()).replace(/,/g, ", ");

        if((fish.time).length==24){
          fish.time="All Day"
        }
        
        if((fish.time).length==18 && fish.time[0]==04){
          fish.time="4AM-9PM"
        }

        if((fish.time).length==18 && fish.time[0]==16){
          fish.time="4PM-9AM"
        }

        if((fish.time).length==8 && fish.time[0]==21){
          fish.time="9PM-4AM"
        }

        if((fish.time).length==8 && fish.time[0]==09){
          fish.time="9AM-4PM"
        }

        if((fish.time).length==16 && fish.time[0]==21){
          fish.time="9PM-4PM"
        }
        var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

       
          var tableRow =
            '<tr><td id="fName">' +
            fish.name.toUpperCase() +
            '<br /><img src=' +
            fish.image +
            ' class="img-fluid" alt="responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (fish.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr /></td><td>' +
            fish.price +
            '</td><td>' +
            fish.location.toUpperCase() +
            '</td><td>' +
            fish.rarity.toUpperCase() +
            '</td><td>'+
              fish.month.toUpperCase() + 
              '</td><td>'+
              fish.time.toUpperCase() +
              '</td><td>'+
              
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullfish_nh tbody');
          
        
  
      }); 
    },
  });
  

  //---------------------------southern bugs
  
  $.ajax({
    url: 'src/critters_sh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.bugs).each(function (index, bug) {

        //bug month display conversions
  
        if (bug.month.length==12){
          bug.month="All Year";
        }
        
        bug.month = (bug.month.toString()).replace(/,/g, ", ");
        
        //bug time display conversions
        
        
        if(bug.time.length==24){
          bug.time="All Day";
        }

        if((bug.time.length==10) && (bug.time[0]=="08")){
          bug.time="8AM-5PM"
        }

        if((bug.time.length==10) && (bug.time[0]=="19")){
          bug.time="7PM-4AM"
        }

        if((bug.time.length==16) && (bug.time[0]=="17")){
          bug.time="5PM-8AM"
        }

        if((bug.time.length==8) && (bug.time[0]=="16")){
          bug.time="4PM-11PM"
        }

        if((bug.time.length==16) && (bug.time[0]=="04")){
          bug.time="4AM-7PM"
        }

        if((bug.time.length==12) && (bug.time[0]=="08")){
          bug.time="8AM-7PM"
        }

        if((bug.time.length==9) && (bug.time[0]=="04")){
          bug.time="4AM-8AM / 4PM-7PM"
        }

        if((bug.time.length==10) && (bug.time[0]=="23")){
          bug.time="11PM-8AM"
        }

        if((bug.time.length==14) && (bug.time[0]=="19")){
          bug.time="7PM-8AM"
        }

        if((bug.time.length==9) && (bug.time[0]=="08")){
          bug.time="8AM-4PM"
        }

        if((bug.time.length==14) && (bug.time[0]=="04")){
          bug.time="4AM-5PM"
        }

        if((bug.time.length==12) && (bug.time[0]=="17")){
          bug.time="5PM-4AM"
        }

        if((bug.time.length==18) && (bug.time[0]=="23")){
          bug.time="11PM-4PM"
        }

        if((bug.time.length==8) && (bug.time[0]=="04")){
          bug.time="4AM-8AM / 5PM-7PM"
        }
        
        var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

  
          var tableRow =
            '<tr><td id="bName">' +
            bug.name.toUpperCase() +
            '<br /><img src=' +
            bug.image +
            ' class="img-fluid" alt="responsive image"><hr /><a href="https://animalcrossing.fandom.com/wiki/' + (bug.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr /></td><td>' +
            bug.price +
            '</td><td>' +
            bug.location.toUpperCase() +
            '</td><td>' +
              bug.rarity.toUpperCase() +
              '</td><td>'+
                bug.month.toUpperCase() +
                '</td><td>'+
                bug.time.toUpperCase() +  
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullbugs_sh tbody');
          
        
  
      }); 
    },
  });

  // southern fish
  
  $.ajax({
    url: 'src/critters_sh.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {
      $(data.fish).each(function (index, fish) {
        
        if ((fish.month).length==12){
          fish.month="All Year"
        }
        

        fish.month = (fish.month.toString()).replace(/,/g, ", ");

        if((fish.time).length==24){
          fish.time="All Day"
        }
        
        if((fish.time).length==18 && fish.time[0]==04){
          fish.time="4AM-9PM"
        }

        if((fish.time).length==18 && fish.time[0]==16){
          fish.time="4PM-9AM"
        }

        if((fish.time).length==8 && fish.time[0]==21){
          fish.time="9PM-4AM"
        }

        if((fish.time).length==8 && fish.time[0]==09){
          fish.time="9AM-4PM"
        }

        if((fish.time).length==16 && fish.time[0]==21){
          fish.time="9PM-4PM"
        }

        var infoIcon = '<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/><circle cx="8" cy="4.5" r="1"/></svg>'

        
        
          var tableRow =
            '<tr><td id="fName">' +
            fish.name +
            '<br /><img src=' +
            fish.image +
            ' class="img-fluid" alt="responsive image"><br /><a href="https://animalcrossing.fandom.com/wiki/' + (fish.name.toLowerCase()) +'" target="_blank" class="btn btn-info my-1" role="button"> Wiki '+infoIcon+'</a><hr /></td><td>' +
            fish.price +
            '</td><td>' +
            fish.location +
            '</td><td>' +
            fish.rarity +
            '</td><td>'+
              fish.month + 
              '</td><td>'+
              fish.time +
              '</td><td>'+
              
            fish.shadowsize +
            '</td></tr>';
          $(tableRow).appendTo('#userdatafullfish_sh tbody');
          
        
  
      }); 
    },
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


  //---


  
});