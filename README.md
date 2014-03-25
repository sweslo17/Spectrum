###議題光譜

=================

+ 將網頁以議題做分類
+ 分類網頁對特定議題之言論傾向
+ 資料來源
	+ expert
		+ 專家定特定網頁議題/分數
		+ 如果已經被定義分數，使用者只能給評分建議
	+ user generate
		+ 不同意目前給分/分類 => 提供評分建議
		+ 對尚未被專家評分支網頁提供評分/分類 => 所有網友評分之平均
+ 以google spreadsheet儲存資料

---------------------------

####DB Schema

+ title
+ url
+ score
+ category
+ viewcount
+ type
	+ user generate => 0
	+ expert => 1
	+ viewed but no comment => 2
	
**key: title + url