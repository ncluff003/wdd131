const currentLocation = document.querySelector("#current-location");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentLocation) currentLocation.innerText = "Sandy, Utah";
currentYear.innerText = new Date().getFullYear();
lastModified.innerText = `Last Updated: ${new Date(document.lastModified).toLocaleString("en", {
  weekday: "long",
  month: "long",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "long",
})}`;
