var picCountA=125;
var picCountP=83;
var picCountT=27;

var together = document.getElementById('idT');
for(var k = 1 ; k <= picCountT; k++){
	var loadT = document.createElement('img');
	loadT.src = 'images/3-'+k+'.jpg';
	together.append(loadT);
}