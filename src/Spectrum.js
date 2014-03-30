$().ready(function(){
    var search_url;
    chrome.tabs.getSelected(null,function(tab) {
        console.log(tab);
        search_url = tab.url;
        search_title = tab.title;
        console.log(encodeURIComponent(search_url));
        var url = 'https://spreadsheets.google.com/tq?tqx=&key=0AmNbDWfyHFBMdENXT1hfVl9BN1BuSUl3Q2NkelIwZmc&tq=';
        var query = "SELECT C,D WHERE B='"+search_url+"'";
        console.log(url+encodeURIComponent(query));
        var result;
        jQuery.ajax({
            url : url+encodeURIComponent(query),
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
			var score = result.table.rows[0].c[0].v;
			var category = result.table.rows[0].c[1].v;
            var str = '<p>此篇是「<b>' + result.table.rows[0].c[1].v + '」議題之<i>';
            if(score > 0)
            {
                str += '<font color="green">贊同</font>';
				query = "SELECT A,B,C WHERE (D='"+category+"') AND (C<=0) ORDER BY C DESC";

            }
            else if(score < 0)
            {
                str += '<font color="red">反對</font>';
				query = "SELECT A,B,C WHERE (D='"+category+"') AND (C>=0) ORDER BY C";
            }
            else if(score == 0)
            {
                str += '<font color="grey">中立</font>';
				query = "SELECT A,B,C WHERE D='"+category+"' ORDER BY C DESC";
            }
			jQuery.ajax({
				url : url+encodeURIComponent(query),
				type : 'GET',
				dataType : 'html',
				async : false,
				error: function(xhr, status, error) {
				  var err = eval("(" + xhr.responseText + ")");
				  alert(err.Message);
				},
				success: function(data){
					console.log(data.substring(data.indexOf("(")+1,data.lastIndexOf(")"))); 
					temp_result = JSON.parse(data.substring(data.indexOf("(")+1,data.lastIndexOf(")")));
					console.log(temp_result);
				}
			});
			recommand_list = [];
			$.each(temp_result.table.rows,function(key,val){
				console.log(val);
				query_score = val.c[2].v;
				// console.log(query_score);
				// console.log((Math.abs(score)+1)+'>= '+ Math.abs(val.c[2].v));
				// console.log((Math.abs(score)-1) +'<='+ Math.abs(val.c[2].v));
				if((Math.abs(score)+1) >= Math.abs(val.c[2].v) && (Math.abs(score)-1) <= Math.abs(val.c[2].v))
				{
					recommand_list.push(val);
				}
			});
			console.log(recommand_list);
            str += '</i>論述</p>';
            str += '<p>強度為'+result.table.rows[0].c[0].v+'分</p>';
            $('body').append(str);
			$('body').append('<p>推薦網頁:</p>');
			$.each(recommand_list,function(key,val){
				$('body').append('<a target="_blank" href="'+val.c[1].v+'">'+val.c[0].v+'</a>&nbsp;&nbsp;&nbsp;'+val.c[2].v+'分<br />');
			});
                //console.log(tablink);
        }
        else
        {
            $('body').text('not found');
        }
    });
});
