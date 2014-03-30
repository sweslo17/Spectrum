###議題光譜

>  徵求網頁及給分
>	+ https://docs.google.com/spreadsheets/d/1AOSRnb8FmR3V2fUWsx69j5fUjR5N88J2xXvHBgy1sfw/edit?usp=sharing

=================

+ IDEA
	+ 將網頁以議題做分類
	+ 提供使用者與此論述強度相近的反面論述網頁
	+ 分類網頁對特定議題之言論傾向
+ 安裝
	+ 下載 build/版號(1.x...)/Spectrum.crx
	+ 開啟chrome，在網址列打chrome://extensions/
	+ 開啟資料夾，將Spectrum.crx拖曳到chrome視窗內
		+ 參考 http://tech.fanpiece.com/3brostudio/chrome-crx%E6%AA%94%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8-c1093325.html
	+ 完成安裝
+ 資料來源
	+ expert
		+ 專家定特定網頁議題/分數
		+ 如果已經被定義分數，使用者只能給評分建議
	+ user generate
		+ 不同意目前給分/分類 => 提供評分建議
		+ 對尚未被專家評分支網頁提供評分/分類 => 所有網友評分之平均
+ 以google spreadsheet儲存資料
	+ https://docs.google.com/spreadsheet/pub?key=0AmNbDWfyHFBMdENXT1hfVl9BN1BuSUl3Q2NkelIwZmc&output=html


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
	
**key: url
