$().ready(function(){
var url = "https://spreadsheets.google.com/feeds/cells/1yapaaaFn0mtJF0CMiIil4Y1uYCqS97jIWL4iBZMPAKo/od6/public/values?alt=json-in-script&callback=myCallback";
//alert('test');
/*$.ajax(url,dataType: jsonp).done(function() {
    console.log( "second success" );
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log( textStatus );
  })
  .always(function() {
    console.log( "finished" );
  });*/
  var url = 'https://spreadsheets.google.com/feeds/cells/1yapaaaFn0mtJF0CMiIil4Y1uYCqS97jIWL4iBZMPAKo/od6/public/values?alt=json-in-script&callback=?';
	jQuery.getJSON(url).success(function(data) {
		console.log(data); 
	}).error(function(message) {
		console.error('error' + message); 
	}).complete(function() {
		console.log('completed!'); 
	});
});