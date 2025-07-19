// Wind Chill Factor Function
//(ºF) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
const calculateWindChill = (temperature, windSpeed) => {
  const windchill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return Math.round(windchill);
};

// Get the essential elements from the document.
const title = document.querySelector("#title");
const dataBox = document.querySelector(".place-data_content");
const weatherBox = document.querySelector(".place-weather_content");

// Initialize the place that will be in the title.
const place = "Wales";

// Insert the place into the title.
title.textContent = place;

// Initialize labels
const dataLabels = ["Area: ", "Population: ", "Capital: ", "Languages: ", "Currency: ", "TimeZone: ", "Calling Code: ", "Internet TLD: "];
const weatherLabels = ["Temperature: ", "Conditions: ", "Wind: ", "Wind Chill: "];

// Initialize Data
const placeData = ["20,782 sq km", "3.16 million", "Cardiff", "Welsh, English", "Pound sterling", "British Summer Time", "+44", ".wales | .cymru"];
const weatherData = [8, "Rainy", 15, "N/A"];

// Iterate through each label array to create and add elements to the page where they should go.
dataLabels.forEach((label, index) => {
  // Create Essential Elements
  const labelEl = document.createElement("label");
  const p = document.createElement("p");

  // Add Essential Attributes
  labelEl.classList.add("data-label");

  // Add Text To Label
  labelEl.textContent = label;

  // Add Inline Styles Dynamically
  // Labels
  labelEl.style.gridColumn = `1 / span 1`;
  labelEl.style.gridRow = `${index + 1} / span 1`;

  // Paragraphs
  p.style.gridColumn = `2 / span 1`;
  p.style.gridRow = `${index + 1} / span 1`;

  // Add Data To Paragraph
  p.append(placeData[index]);

  // Add Paragraph To Correct Box
  dataBox.appendChild(labelEl);
  dataBox.appendChild(p);
});

weatherLabels.forEach((label, index) => {
  // Create Essential Elements
  const labelEl = document.createElement("label");
  const p = document.createElement("p");

  // Getting Essential Information For The Paragraph

  // Add Essential Attributes
  labelEl.classList.add("weather-label");

  // Add Text To Label
  labelEl.textContent = label;

  // Add Inline Styles Dynamically
  // Labels
  labelEl.style.gridColumn = `1 / span 1`;
  labelEl.style.gridRow = `${index + 1} / span 1`;

  // Paragraphs
  p.style.gridColumn = `2 / span 1`;
  p.style.gridRow = `${index + 1} / span 1`;

  // Adding Information To The Paragraph
  if (label !== "Wind Chill: ") {
    p.append(` ${weatherData[index]}`);
  } else {
    const temperature = weatherData[0];
    const windSpeed = weatherData[2];
    let windchill;

    // Calculate Wind Chill Under Certain Circumstances
    if (temperature < 10 && windSpeed > 4.8) {
      windchill = calculateWindChill(temperature, windSpeed);
    } else {
      windchill = weatherData[3];
    }
    p.append(` ${windchill}${windchill !== "N/A" ? "°C" : ""}`);
  }

  // Add Paragraph To Correct Box
  weatherBox.appendChild(labelEl);
  weatherBox.appendChild(p);
});
