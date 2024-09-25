const mapTilerApiKey = MAPTILER_API_KEY;
const map = L.map("map").setView([28.6139, 77.209], 13);
L.tileLayer(
  `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${mapTilerApiKey}`,
  {
    attribution:
      '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a>',
    maxZoom: 18,
  }
).addTo(map);
