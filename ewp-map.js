// JavaScript Document
var map = L.map('map').setView([40.27650, -74.54265], 10);
var before = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
var marker0 = L.marker([40.12623, -74.04930]).addTo(map); 
var marker1 = L.marker([40.52361, -74.43722]).addTo(map); 
var marker2 = L.marker([40.18761, -74.01014]).addTo(map);
var marker3=L.marker([40.81093,-74.24042]).addTo(map); 
var marker4=L.marker([40.34320,-74.63643]).addTo(map);
var marker5=L.marker([40.34320,-74.65905]).addTo(map); 
var marker6=L.marker([40.32236,-74.60058]).addTo(map); 
var marker7=L.marker([39.65980,-74.17080]).addTo(map); 
var marker8=L.marker([40.49177,-74.27320]).addTo(map);
var marker9=L.marker([40.257193, -74.536734]).addTo(map); 
var marker10=L.marker([40.255431, -74.534184]).addTo(map); 
var marker11=L.marker([40.255630, -74.533671]).addTo(map); 
marker0.bindPopup("<h4>Manasquan Resovoir</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Manasquan264.jpg' alt='Manasquan Resovoir' />",{minWidth:266});
marker1.bindPopup("<h4>Livingston Campus</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Livi264.jpg' alt='Livingston Campus' />",{minWidth:266});
marker2.bindPopup("<h4>Shark River Bay</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Bog_264.jpg' alt='Shark River' />",{minWidth:266});
marker3.bindPopup("<h4>Eagle Rock Reservation</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Eagle_Rock264.jpg' alt='Eagle Rock Reservation' />",{minWidth:266});
marker4.bindPopup("<h4>Carniegie Lake</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Carnegie_Lake264.jpg' alt='Carnegie Lake' />",{minWidth:266});
marker5.bindPopup("<h4>Princeton</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Princeton264.jpg' alt='Chapel' />",{minWidth:266});
marker6.bindPopup("<h4>High School North</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Art_District_264.jpg' alt='WW-P High School North' />",{minWidth:266});
marker10.bindPopup("<h4>Into the Woods</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Our_Town.png' alt='East Windsor, NJ' />",{minWidth:266});
marker11.bindPopup("<h4>Into the Woods</h4><img src='http://eden.rutgers.edu/~hc525/425/ewp/images/Into_the_Woods.JPG' alt='East Windsor, NJ' />",{minWidth:266});
<path d="M17.932,381.487c5.031-5.904, [...] 305.273,468.456z" fill="#ff33bb" />
var waterDangerIcon = L.icon({
    iconUrl: 'http://eden.rutgers.edu/~hc525/425/ewp/images/water_danger.svg',
    iconSize:     [60], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

var dangerPin = L.icon({
    iconUrl: 'http://eden.rutgers.edu/~hc525/425/ewp/images/danger_pin.svg',
    iconSize:     [60], 
    iconAnchor:   [22, 94], 
    popupAnchor:  [-3, -76] 
});

var toxic= L.marker([40.41538,-74.62960], {icon: waterDangerIcon}).addTo(map);
var stampede=L.marker([40.31122,-74.86350], {icon: dangerPin}).addTo(map);
toxic.bindPopup("<h4>Sharks</h4> <p>There are sharks here. </p>");
stampede1.bindPopup("<h4>Delaware River</h4> <p>The biggest danger here is drowning. Row a boat across the river and never swim.</p>");
