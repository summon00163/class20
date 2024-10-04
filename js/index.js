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
function calculateDays() {
        var startDate = document.getElementById("start-date").value;
        var endDate = document.getElementById("end-date").value;

        var oneDay = 24 * 60 * 60 * 1000; // 每天的毫秒数
        var days = Math.round(Math.abs((new Date().now() - new Date('2025-06-30')) / oneDay));

        return days;
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
if (marTyp===3){
	marin='距离中考还剩'+calculateDays()+'天'
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