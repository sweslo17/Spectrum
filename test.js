$().ready(function(){
//var url = "https://spreadsheets.google.com/feeds/cells/1yapaaaFn0mtJF0CMiIil4Y1uYCqS97jIWL4iBZMPAKo/od6/public/values?alt=json-in-script&callback=myCallback";
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
  var url = 'https://spreadsheets.google.com/tq?tqx=&tq=SELECT%20A%2CB%20WHERE%20B%3D%27http%3A%2F%2Fwww.ettoday.net%2Fnews%2F20140327%2F339912.htm%27&key=0AmNbDWfyHFBMdENXT1hfVl9BN1BuSUl3Q2NkelIwZmc&callback=myCallback';
	jQuery.ajax({
        url : url,
        type : 'GET',
        dataType : 'html',
        error: function(xhr, status, error) {
          var err = eval("(" + xhr.responseText + ")");
          alert(err.Message);
        },
        success: function(data){
            console.log(JSON.parse(data.split("(").pop().split(")")[0])); 
        }
    });
    /*.success(function(data) {
		console.log(data); 
	}).error(function(message) {
		console.log('errorrrr' + message); 
	}).complete(function() {
		console.log('completed!'); 
	});*/
});
