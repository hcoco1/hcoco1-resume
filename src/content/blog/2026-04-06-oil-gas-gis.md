---
title:  "From a simple map to a full Web GIS system — built with Claude Code."
description: "A new stage in my journey: learning Web GIS and full-stack web development by directing Claude Code instead of writing every line myself."
pubDate: "Apr 6 2026"
heroImage: "https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
Comments: True
badge: "Web App"
tags: ["web-gis","leaflet", "python", "claude-code"]

---


This post marks a new stage in how I build software.

I did not write the code for these projects by hand. **Claude Code did.**

My role changed: I became the architect, the product owner, and the reviewer — not the typist.

---

I started small.

A simple project using pure JavaScript and Leaflet — no frameworks, just fundamentals.

The goal was to understand how maps actually work:

* how tiles load
* how layers are structured
* how GeoJSON is rendered
* how user interaction is handled

I designed it. Claude Code implemented it. I read every line.

That project became my foundation in Web GIS.

---

Then I pushed it further.

I designed a full-stack Web GIS application for Oil & Gas data, and directed Claude Code to build it with:

* real-time spatial queries (PostGIS)
* a FastAPI backend
* viewport-based loading (bbox filtering)
* dynamic filters (status-based)
* layer control + UI panel
* performance optimizations (debounce, request control)

I wrote the design. Claude Code wrote the code. I reviewed, tested, and iterated.

---

The biggest shift wasn’t technical — it was conceptual.

I moved from:

“writing every line of a small map app”

to:

“designing how spatial data is requested, filtered, and rendered efficiently — and directing an AI to implement it.”

---

What I learned in this stage:

* **Design comes before prompting.** Vague intent produces generic code.
* **Reading code is a skill of its own.** I learn Web GIS by reviewing what Claude Code writes.
* **Verification is my job.** Type-checking and tests don't verify a feature — only I can.
* **The bottleneck moved.** It used to be syntax. Now it's clarity of design.
* **Fundamentals still matter.** I can only direct Claude Code well when I understand what good output looks like.

---

Projects:

🔹 👉 [Leaflet Demo](https://gis.hcoco1.com)

🔹 👉 [Oil & Gas GIS Web App](https://maps.hcoco1.com/)

---

Next step:

Scaling this with clustering, vector tiles, and more advanced filtering — and continuing to sharpen how I collaborate with Claude Code across the full stack and Web GIS.

---

If you're learning GIS, web development, or how to work with AI coding tools — start simple, design first, and read everything the AI writes.

It compounds faster than you think.
