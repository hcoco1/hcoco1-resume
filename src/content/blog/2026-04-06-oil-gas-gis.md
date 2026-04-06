---
title:  "From a simple map to a full Web GIS system."
description: "I started by building a small project using pure JavaScript and Leaflet ...."
pubDate: "Apr 6 2026"
heroImage: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
Comments: True
badge: "Web App"
tags: ["web-gis","leaflet", "python"]

---


I started by building a small project using pure JavaScript and Leaflet — no frameworks, just fundamentals.

The goal was simple:
understand how maps actually work.

* how tiles load
* how layers are structured
* how GeoJSON is rendered
* how user interaction is handled

That project became my foundation.

---

Then I pushed it further.

I built a full-stack Web GIS application for Oil & Gas data, adding:

* real-time spatial queries (PostGIS)
* a FastAPI backend
* viewport-based loading (bbox filtering)
* dynamic filters (status-based)
* layer control + UI panel
* performance optimizations (debounce, request control)

---

The biggest shift wasn’t technical — it was conceptual:

I moved from:

“displaying data on a map”

to:

“designing how spatial data is requested, filtered, and rendered efficiently”

---

What I learned:

* Fundamentals matter more than frameworks
* Performance becomes critical with real data
* UI and data logic must stay in sync
* Debugging teaches more than tutorials

---

Projects:

🔹 👉 [Leaflet Demo](https://gis.hcoco1.com)

🔹 👉 [Oil & Gas GIS Web App](https://maps.hcoco1.com/)

---

Next step:

Scaling this with clustering, vector tiles, and more advanced filtering.

---

If you're learning GIS or web mapping — start simple.

It compounds faster than you think.








