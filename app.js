const map = L.map('map').setView([10.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);

marker.bindPopup("<b>!Hola </b><br>Estoy Aquí cabrones").openPopup();