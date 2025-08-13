const navigation = document.querySelector("#navigation");
const hamburgerMenu = document.querySelector("#menu");

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    navigation.classList.toggle("show");
  });
}

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) currentYear.textContent = new Date().getFullYear();
if (lastModified)
  lastModified.textContent = `Last Updated: ${new Date(document.lastModified).toLocaleString("en", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
  })}`;

const regexInput = document.querySelector("#regex");
const regexConvert = document.querySelector("#convert");

if (regexConvert) {
  regexConvert.addEventListener("click", (e) => {
    e.preventDefault();
    const regexValue = regexInput.value;
    if (regexValue) {
      const pattern = regexValue.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      const main = document.querySelector("main");
      const div = document.createElement("div");
      div.className = "regex-output";
      const h4 = document.createElement("h4");
      h4.className = "regex-title";
      h4.innerText = "HTML Pattern ";
      const p = document.createElement("p");
      p.className = "regex-value";
      p.innerText = pattern;
      div.appendChild(h4);
      div.appendChild(p);
      main.appendChild(div);
    } else {
      alert("Please enter a valid regex expression.");
    }
  });
}

const hexColorInput = document.querySelector("#hex");
const colorConverterButton = document.querySelector("#colorConverter");

// Covert Hex To RGB
function hexToRgb(hex) {
  let r = 0,
    g = 0,
    b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgb(${r}, ${g}, ${b})`;
}

// Convert Hex Color to HSL
function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

// Convert Hex to CMYK
function hexToCmyk(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  let k = Math.min(1 - r, 1 - g, 1 - b);
  let c = (1 - r - k) / (1 - k) || 0;
  let m = (1 - g - k) / (1 - k) || 0;
  let y = (1 - b - k) / (1 - k) || 0;
  return `cmyk(${Math.round(c * 100)}%, ${Math.round(m * 100)}%, ${Math.round(y * 100)}%, ${Math.round(k * 100)}%)`;
}

if (colorConverterButton) {
  colorConverterButton.addEventListener("click", (e) => {
    e.preventDefault();
    const hexValue = hexColorInput.value.trim();
    if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hexValue)) {
      const rgb = hexToRgb(hexValue);
      const hsl = hexToHsl(hexValue);
      const cmyk = hexToCmyk(hexValue);
      const colorValueLabels = ["Hex", "RGB", "HSL", "CMYK"];
      const colorValues = [hexValue, rgb, hsl, cmyk];

      const div = document.createElement("div");
      div.className = "color-values";
      colorValues.forEach((value, index) => {
        const divider = document.createElement("div");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        divider.className = "color-container";
        h4.className = "color-title";
        p.className = "color-value";
        h4.innerText = colorValueLabels[index];
        p.innerText = value;
        divider.appendChild(h4);
        divider.appendChild(p);
        div.appendChild(divider);
        const main = document.querySelector("main");
        main.appendChild(div);
      });
    } else {
      alert("Please enter a valid hex color code.");
    }
  });
}
