---

title: "Leaflet Vanilla JS Web Map"
description: "A lightweight Web GIS application built using pure JavaScript and Leaflet, demonstrating interactive mapping without frameworks."
custom_link_label: "Live Demo"
custom_link: "https://gis.hcoco1.com"
updatedDate: "April 2026"
category: "Web GIS"

repository: "https://github.com/hcoco1/Leaflet_vanilla_js"
heroImage: "https://images.unsplash.com/photo-1461183479101-6c14cd5299c4?q=80&w=1470&auto=format&fit=crop"


---

## Overview

This project is a **minimal Web GIS application** built using **pure (vanilla) JavaScript** and Leaflet.

The goal of this project is to demonstrate how to build an interactive map **without frameworks**, focusing on:

* clean architecture
* modular JavaScript
* direct interaction with mapping APIs

Leaflet provides core mapping features like tiles, markers, popups, and vector layers while remaining lightweight and easy to use ([Leaflet][1]).

---

## Features

* **Interactive Map**

  * Zoom and pan controls
  * Smooth navigation

* **Tile Layers**

  * Integration with OpenStreetMap tiles

* **Markers & Popups**

  * Add points dynamically
  * Display contextual information

* **GeoJSON Support**

  * Load and visualize spatial data

* **Custom Styling**

  * Styled markers and map elements using CSS

* **Modular Code Structure**

  * Separation of concerns (map, controls, data)

---

## Tech Stack

### Frontend

* JavaScript (Vanilla)
* Leaflet
* HTML5 + CSS3

---

## How It Works

1. Initialize map with:

```javascript
const map = L.map('map').setView([51.505, -0.09], 13);
```

2. Add tile layer (OpenStreetMap)

3. Load GeoJSON or markers

4. Bind popups and styles

👉 Leaflet handles rendering, interaction, and events efficiently with a lightweight footprint ([Leaflet][1])

---

## Installation

### 1. Clone repository

```sh
git clone https://github.com/hcoco1/Leaflet_vanilla_js.git
cd Leaflet_vanilla_js
```

---

### 2. Run locally

```sh
python3 -m http.server
```

Open:

```text
http://localhost:8000
```

---

## Project Structure

```sh
.
├── index.html
├── css
│   └── style.css
├── js
│   ├── main.js
│   ├── map.js
│   └── controls.js
```

---

## What I Learned

* Building maps **without frameworks**
* Understanding Leaflet core concepts (layers, events, GeoJSON)
* Structuring frontend code in a modular way
* Managing UI and map interaction directly
* Working with spatial data in the browser

---

## Why This Project Matters

Many GIS projects rely heavily on frameworks (React, Angular, etc.).

This project shows that:

```text
You can build powerful mapping applications using only JavaScript + Leaflet
```

👉 This improves:

* performance
* simplicity
* understanding of fundamentals

---

## Future Improvements

* Add filtering system
* Integrate backend API (FastAPI + PostGIS)
* Add clustering for large datasets
* Improve UI/UX (legend, panels, controls)

---

## Live Demo

👉 [https://gis.hcoco1.com](https://gis.hcoco1.com)

---
