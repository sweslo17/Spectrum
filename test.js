/*chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
	  alert(tabs[0].url);
   }
);*/
//console.log($('title').text());
//console.log(window.location.href);
var url = "https://spreadsheets.google.com/feeds/cells/1yapaaaFn0mtJF0CMiIil4Y1uYCqS97jIWL4iBZMPAKo/od6/public/values?alt=json-in-script&callback=?";
$.getJSON(url,{}, function (d) { $('body').append(d); });