
var bloghost="index.html";
var cookiespath="index.html";
var str00="index.html";
var str01="名称不能为空";
var str02="名称或邮箱,网址格式不对";
var str03="留言不能为空或过长";
var str06="显示UBB表情>>";
var intMaxLen="1000";
var strFaceName="neutral|grin|happy|slim|smile|tongue|wink|surprised|confuse|cool|cry|evilgrin|fat|mad|red|roll|unhappy|waii|yell";
var strFaceSize="16";
var strFaceType="png";
var strBatchView="";
var strBatchInculde="";
var strBatchCount="";

$(document).ready(function(){ 
	$("img[src*='zb_system/function/c_validcode.asp?name=commentvalid']").css("cursor","pointer").click( function(){$(this).attr("src","zb_system/function/c_validcode7aef.gif?name=commentvalid"+"&amp;random="+Math.random());});
	sidebarloaded.add(function(){
		if(GetCookie("username")!=""&&GetCookie("password")!=""){$.getScript("zb_system/function/c_html_jscd0b.js?act=autoinfo",function(){AutoinfoComplete();})}else{AutoinfoComplete();}
	});
	$.getScript("zb_system/function/c_html_js889f.js?act=batch"+unescape("%26")+"view=" + escape(strBatchView)+unescape("%26")+"inculde=" + escape(strBatchInculde)+unescape("%26")+"count=" + escape(strBatchCount),function(){BatchComplete();});
	
});

$(document).ready(function(){if(/Android|iOS|Windows Phone|IEMobile|BB10|ADR|iPhone|iPad|iPod|Symbian|BlackBerry/i.test(navigator.userAgent)){$('.cp-vrs').after("&nbsp;&nbsp;<span class='cp-pad'><a href='"+bloghost+"?mod=pad&act=editarticle'>[新建文章(PAD)]</a></span>")}});