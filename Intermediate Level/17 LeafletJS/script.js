const map = L.map('map').setView([39.9334, 32.8597], 13); // Ankara koordinatları

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([39.9334, 32.8597]).addTo(map)
    .bindPopup('Merhaba! Burası Ankara.')
    .openPopup();