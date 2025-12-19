const https = require("https");

// Ort aus Kommandozeile lesen
const city = process.argv[2];

if (!city) {
  console.error("Usage: node currentTemp.js <city>");
  process.exit(1);
}

// wttr.in URL (JSON-Format)
const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;

https.get(url, (res) => {
  let data = "";

  // Daten stückweise einsammeln
  res.on("data", (chunk) => {
    data += chunk;
  });

  // Stream abgeschlossen
  res.on("end", () => {
    try {
      const json = JSON.parse(data);

      // Aktuelle Temperatur in °C
      const temp = json.current_condition[0].temp_C;

      console.log(`${temp}°`);
    } catch (err) {
      console.error("Error parsing response");
    }
  });
}).on("error", (err) => {
  console.error("Request failed:", err.message);
});
