var url = "https://spreadsheets.google.com/feeds/cells/1yapaaaFn0mtJF0CMiIil4Y1uYCqS97jIWL4iBZMPAKo/od6/public/values?alt=json-in-script&callback=myCallback";
//alert('test');
$.get(url,{}, function (d) { alert(d);}).done(function() {
    alert( "second success" );
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log( textStatus );
  })
  .always(function() {
    alert( "finished" );
  });;