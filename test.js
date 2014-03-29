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
    var search_url;
    chrome.tabs.getSelected(null,function(tab) {
        search_url = tab.url;
        console.log(encodeURIComponent(search_url));
        var url = 'https://spreadsheets.google.com/tq?tqx=&key=0AmNbDWfyHFBMdENXT1hfVl9BN1BuSUl3Q2NkelIwZmc&tq=SELECT%20A%2CB%20WHERE%20B%3D%27'+encodeURIComponent(search_url)+'%27';
        console.log(url);
        var result;
        jQuery.ajax({
            url : url,
            type : 'GET',
            dataType : 'html',
            async : false,
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              alert(err.Message);
            },
            success: function(data){
                console.log(data.substring(data.indexOf("(")+1,data.lastIndexOf(")"))); 
                result = JSON.parse(data.substring(data.indexOf("(")+1,data.lastIndexOf(")")));
                console.log(result);
            }
        });
        
        if(result.table.rows.length!=0)
        {
            $('body').text(result.table.rows[0].c[0].v);
                //console.log(tablink);
        }
        else
        {
            $('body').text('not found');
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
