var picCountA=125;
var picCountP=86;
var picCountT=26;
var vidCountA=0;
var vidCountP=1;
var vidCountT=1;

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