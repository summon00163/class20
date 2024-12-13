var picCountA=217;
var picCountP=169;
var picCountT=54;
var vidCountA=14;
var vidCountP=6;
var vidCountT=2;

var together = document.getElementById('idT');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'images/3-'+k+'.jpg';
	together.append(loadT);
}
for(var k = 1 ; k <= vidCountT; k++){
	var loadVT = document.createElement('video');
	loadVT.src = 'images/3-'+k+'.mp4';
	loadVT.controls=true;
	together.append(loadVT);
}