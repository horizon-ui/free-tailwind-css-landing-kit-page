var mymap = L.map('mapid').setView([37.69796209236426, -122.45651365818362], 15);
var Jawg_Light = L.tileLayer('https://{s}.tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token={uUK7PN96j6Ixq3Jo6AhUul0Utvv5UJSgzbK3pr0xYIwLeh8QN9mOwG4gBuEPuFXl}', {
	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 0,
	maxZoom: 22,
	subdomains: 'abcd',
	accessToken: 'uUK7PN96j6Ixq3Jo6AhUul0Utvv5UJSgzbK3pr0xYIwLeh8QN9mOwG4gBuEPuFXl'
});
L.tileLayer('https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=ZpC8JXnSh7IVbHpOrZf5HywKIqd65v6CIpUuLpRkYPqy1vOSSxymrQBMdL0tQU3G', {}).addTo(mymap);
mymap.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")
    