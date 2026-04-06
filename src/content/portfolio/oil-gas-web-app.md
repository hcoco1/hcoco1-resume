---

title: "Oil & Gas GIS Web App"
description: "An interactive Web GIS application to explore boreholes, pipelines, and licenses using real-time spatial queries and dynamic filtering."
custom_link_label: "Live App"
custom_link: "https://maps.hcoco1.com/"
updatedDate: "April 2026"
category: "Web GIS"

repository: "https://github.com/hcoco1/map-gis"
heroImage: "https://images.unsplash.com/photo-1749073668528-38ab64575f5d?q=80&w=1332&auto=format&fit=crop"



---


## Overview

This project is a **full-stack Web GIS application** designed to visualize and interact with oil & gas infrastructure data, including:

* Boreholes (points)
* Pipelines (lines)
* Licenses (polygons)

The app is built using **Leaflet (Vanilla JS)** on the frontend and a **FastAPI + PostGIS backend**, enabling real-time spatial queries based on the current map view.

---

## Key Features

* **Viewport-Based Loading**
  Only loads data inside the visible map area (bounding box queries)

* **Dynamic Filtering**
  Filter boreholes by status (Active, Abandoned, Suspended)

* **Layer Control**
  Toggle boreholes, pipelines, and licenses using Leaflet controls

* **Smart Rendering by Zoom Level**

  * Boreholes → always visible
  * Pipelines → visible from zoom level 8+
  * Licenses → visible from zoom level 7+

* **Color-Coded Data Visualization**
  Boreholes styled by status:

  * 🟢 Active
  * 🔴 Abandoned
  * 🟠 Suspended
  * 🔵 Other

* **Interactive Popups**
  Click features to view detailed attributes

* **Live UI Feedback Panel**

  * Current filter status
  * Feature count
  * Loading indicator
  * Legend

* **Performance Optimization**

  * Bounding box queries (PostGIS)
  * Request deduplication
  * Debounced map events
  * Lightweight GeoJSON streaming

---

## Tech Stack

### Frontend

* JavaScript (Vanilla)
* Leaflet
* HTML5 + CSS3

### Backend

* FastAPI
* PostgreSQL + PostGIS
* Psycopg2 connection pooling

---

## How It Works

1. User moves the map
2. Frontend sends a request with current bounding box
3. Backend queries PostGIS using `ST_MakeEnvelope`
4. Filtered GeoJSON is returned
5. Map updates dynamically

---

## Example API Request

```bash
/boreholes?minx=4&miny=52&maxx=5&maxy=53&status=Active
```

---

## Installation

### 1. Clone repository

```sh
git clone https://github.com/hcoco1/map-gis.git
cd oil-gas-gis
```

---

### 2. Backend setup

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

---

### 3. Run backend

```sh
uvicorn app.main:app --reload
```

---

### 4. Frontend

Serve the frontend (example):

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
├── backend
│   ├── main.py
│   ├── queries.py
│   └── db.py
├── frontend
│   ├── index.html
│   ├── js
│   │   ├── main.js
│   │   ├── api.js
│   │   ├── map.js
│   │   └── controls.js
│   └── css
│       └── style.css
```

---

## What I Learned

* Designing **viewport-based GIS systems**
* Optimizing spatial queries with PostGIS
* Managing async data flows in frontend apps
* Separating concerns between UI, API, and database
* Building scalable geospatial applications from scratch

---

## Future Improvements

* Marker clustering for large datasets
* Vector tiles for better performance at scale
* Advanced filtering (year, company, depth)
* User authentication & saved views

---

## Live Demo

👉 [https://maps.hcoco1.com/](https://maps.hcoco1.com/)

---



