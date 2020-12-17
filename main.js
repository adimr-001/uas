var API_URL = 'https://358wt7ug67.execute-api.us-east-1.amazonaws.com/cors1/authors/';
// var $pengajars = $ ('$pengajars');

// TEMPLATE
// $(function (){
//   $.ajax({
//     type:  'GET',
//     url: API_URL,
//     success: function(data) {
//       console.log('success', data)
//     }
//   });
// });
//
// $(function (ss){
//   var $pengajars = $('#pengajars');
//
//   $.ajax({
//     type:  'GET',
//     url: API_URL,
//     success: function(pengajars) {
//       $.each(pengajars, function(i, authors) {
//         $pengajars.append('<li>Name: '+ authors.lastName +', '+ authors.firstName +'</li>');
//       });
//     },
//     error: function(){
//       alert('error fetching');
//     }
//   });
// });


$(function (){
  var $table_data = $('#table_data');
  var $first = $('#first');
  var $last = $('#last');

  $.ajax({
    type:  'GET',
    url: API_URL,
    dataType: 'json',
    success: function(table_data) {
      var event_data='';
      $.each(table_data, function(i, authors) {
                 event_data += '<tr>';
                 event_data += '<td>'+authors.lastName+'</td>';
                 event_data += '<td>'+authors.firstName+'</td>';
                 event_data += '</tr>';
      });
      $("#table_pengajar").append(event_data);
    },
    error: function(){
      alert('error fetching');
    }
  });
});




//
// $(function (ss){
//   var $add-pengajar = $('#add-pengajar');
//
//   $.ajax({
//     type:  'POST',
//     url: 'https://358wt7ug67.execute-api.us-east-1.amazonaws.com/cors1/authors/',
//     success: function(add-pengajars) {
//       $.each(add-pengajars, function(i, authors) {
//         $pengajars.append('<li>firstName: '+ authors.lastName +', lastName: '+ authors.firstName +'</li>');
//       });
//     },
//     error: function(){
//       alert('error fetching');
//     }
//   });
// });
//
//
//
//




//
// $('#add-pengajar').on('click', function(){
//   //
//   // var order = {
//   //   first: $first.val();
//   //   last: $last.val();
//   // };
//   $.ajax({
//       type: 'POST',
//       url: API_URL,
//       dataType: 'json',
//       data : authors,
//       success: function() {
//         // $table_data.append('<li>Name: '+ authors.lastName +', '+ authors.firstName +'</li>');
//       },
//
//   });
