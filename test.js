$().ready(function(){
    var search_url;
    chrome.tabs.getSelected(null,function(tab) {
        console.log(tab);
        search_url = tab.url;
        search_title = tab.title;
        console.log(encodeURIComponent(search_url));
        var url = 'https://spreadsheets.google.com/tq?tqx=&key=0AmNbDWfyHFBMdENXT1hfVl9BN1BuSUl3Q2NkelIwZmc&tq=';
        //(B='"+search_url+"') AND (
        var query = "SELECT C,D WHERE (B='"+search_url+"') AND (E=1)";
        console.log(url = url+encodeURIComponent(query));
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
            var str = '<p>此篇是「<b>' + result.table.rows[0].c[1].v + '」議題之<i>';
            if(result.table.rows[0].c[0].v > 0)
            {
                str += '<font color="green">贊同</font>';
            }
            else if(result.table.rows[0].c[0].v < 0)
            {
                str += '<font color="red">反對</font>';
            }
            else if(result.table.rows[0].c[0].v == 0)
            {
                str += '<font color="grey">中立</font>';
            }
            str += '</i>論述</p>';
            str += '<p>強度為'+result.table.rows[0].c[0].v+'分</p>';
            $('body').append(str);
                //console.log(tablink);
        }
        else
        {
            $('body').text('not found');
        }
    });
});
