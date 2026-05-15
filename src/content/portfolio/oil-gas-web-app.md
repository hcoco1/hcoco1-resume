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

This project is a **full-stack Web GIS application** built with **Claude Code** as my coding partner. I did not write the code by hand — I designed the system (the data model, the spatial query strategy, the viewport-based loading approach, the UI behavior) and directed Claude Code through the implementation.

The app visualizes and lets users interact with oil & gas infrastructure data:

* Boreholes (points)
* Pipelines (lines)
* Licenses (polygons)

It uses **Leaflet (Vanilla JS)** on the frontend and a **FastAPI + PostGIS backend**, with real-time spatial queries driven by the current map view.

This project represents a new stage in my journey into **Web GIS**: learning the discipline by collaborating with Claude Code instead of writing every line by hand. My role was the GIS architect; Claude Code was the engineer.

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

## My Workflow with Claude Code

* **Designed the GIS architecture first** — bounding-box queries, zoom-based layer visibility, status filtering, and the UI panel were specified before any code
* **Split the work into clear prompts** — PostGIS schema, FastAPI endpoints, Leaflet client, then the optimization passes (debounce, dedup, streaming)
* **Read every diff** — checked the SQL, the FastAPI route signatures, and the Leaflet event handling, pushing back when something was off
* **Verified spatially** — tested at multiple zoom levels and viewports, watching the network panel to confirm bbox queries behaved correctly
* **Learned by reviewing** — the geospatial concepts (envelopes, GeoJSON streaming, projection edge cases) became real to me through reading the AI's code, not by writing it

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

This project marks the start of my work in **Web GIS with Claude Code**. The lessons fall into two layers:

**About directing Claude Code:**

* How to translate a GIS design (viewport queries, layer rules, filters) into prompts the AI can execute
* How to keep Claude Code focused on geospatial concerns instead of generic web patterns
* How to read and validate spatial code — PostGIS queries, GeoJSON shapes, Leaflet event flow — without having written it
* That my value is in the GIS architecture, the review, and the spatial verification — not in typing the code

**About Web GIS itself, learned through that workflow:**

* Designing viewport-based GIS systems and why bbox queries scale
* Optimizing spatial queries with PostGIS (`ST_MakeEnvelope`, indexes, connection pooling)
* Managing async data flows and debouncing map events
* Separating concerns between UI, API, and database in a geospatial stack

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



