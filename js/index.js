// JavaScript Document
$.get("news.html",function(data){
	$(".newscontent").load("news.html #container");
});
$.get("story/say.html",function(data){
	$(".saycontent").load("story/say.html .saying");
});
function randint(min, max) {
  var minCeiled = Math.ceil(min);
  var maxFloored = Math.floor(max)+1;
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 不包含最大值，包含最小值
}
var marquee=document.getElementsByTagName('marquee')[0];
var marTyp=randint(1,2);
var marin='';
if(marTyp===1){
	marin='您好！欢迎来到20班班级网站！'
}
if(marTyp===2){
	var newsTyp = $.ajax({
				url: "https://summon00163.github.io/json/news.json",//json文件位置，文件名
				type: "GET",//请求方式为get
				dataType: "json", //返回数据格式为json
				async: false,
				success: function(data) {/*请求成功完成后要执行的方法*/}
			}); 
	newTsub=eval("("+newsTyp.responseText+")");
	marin=newTsub[newTsub.length-1]['content'];
}
marquee.innerHTML=marin;
var max=0;
var typ=randint(1,3);
var show=document.getElementById('show');
if(typ===1){
	max=picCountA;
}
else if(typ===2){
	max=picCountP;
}
else{
	max=picCountT;
}
var picCount=randint(1,max);
var load = document.createElement('img');
function isMobile(){
	if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|WebOS|Symbian|Windows Phone)/i)){
		return true;
	}
	else{
		return false;
	}
}