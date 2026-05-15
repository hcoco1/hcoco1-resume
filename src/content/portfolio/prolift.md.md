---

title: "ProLift - Mobile Gym Tracker"
description: "A mobile-first gym tracker app for logging strength and cardio workouts, tracking progress with stats and streaks, and managing body measurements with internationalization and theming support."
custom_link_label: "Live App"
custom_link: "https://workouts.hcoco1.com/"
updatedDate: "May 2026"
category: "Fitness"

repository: "https://github.com/hcoco1/prolift"
heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1332&auto=format&fit=crop"



---

## Overview

This project is a **mobile-first gym tracker application** built with **Claude Code** as my coding partner. I did not write the code by hand — instead, I designed the product, scoped the features, broke the work into tasks, and directed Claude Code through the full implementation. My role was that of the architect and product owner; Claude Code was the engineer.

The application lets users:

* Log strength workouts (push, pull, legs, core)
* Record cardio sessions (duration, distance, calories)
* Track body measurements and photos
* Review workout history and statistics
* Maintain streaks and personal bests

The app is built on **React 18 + Vite** with **Supabase** for authentication and database, including full internationalization across 6 languages.

This project represents a new stage in my journey: learning how to ship real full-stack web applications by collaborating with Claude Code rather than coding everything line by line.

---

## Key Features

* **Workout Logging**
  Log strength exercises with sets/reps/weight or cardio metrics (duration, distance, calories)

* **Dynamic Workout Types**
  Choose between strength (with focus: push/pull/legs/core) or cardio sessions

* **Progress Tracking**
  View volume charts, personal bests, workout type splits, and training streaks

* **Body Measurements**
  Track weight, chest, waist, hips, and other measurements with photo uploads

* **Internationalization**
  Support for 6 languages: English, Spanish, Dutch, French, German, Ukrainian

* **Theme System**
  30+ DaisyUI themes with color-dot previews and anti-FOUC inline scripts

* **PWA Features**
  Install banner, service worker caching, offline capabilities

* **Admin Panel**
  User management for administrators (role promotion, deletion)

* **Responsive Design**
  Mobile-first with Tailwind CSS and DaisyUI components

* **Data Visualization**
  Heatmaps for streaks, charts for volume over time

* **Confirmation Modals**
  Safe deletion with reusable confirmation dialogs

---

## Tech Stack

### Frontend

* React 18 + Vite
* Tailwind CSS + DaisyUI
* React Router (HashRouter)
* React i18next

### Backend

* Supabase (auth + PostgreSQL database)
* Supabase Edge Functions (admin operations)

---

## How It Works

1. User signs up/signs in via Supabase auth
2. Select workout type (strength/cardio) and focus (for strength)
3. Log exercises/sets or cardio details during workout
4. View history, stats, and progress charts
5. Manage profile settings (units, language, theme)
6. Track body measurements and photos

---

## My Workflow with Claude Code

* **Design first, then prompt** — I wrote the feature list, data model, and UX flows before opening Claude Code
* **Small, reviewable steps** — broke each feature into focused tasks (auth, then schema, then workout logging, then stats, then i18n)
* **Read every diff** — reviewed each change and pushed back when the output drifted from the design
* **Verify in the browser** — manually tested the golden path and edge cases after each iteration
* **Iterate on prompts** — refined instructions when results were generic or missed the mobile-first intent

---

## Example API Request

```javascript
// Fetch user workouts from Supabase
const { data, error } = await supabase
  .from('workouts')
  .select('*')
  .eq('user_id', user.id)
  .order('date', { ascending: false });
```

---

## Installation

### 1. Clone repository

```sh
git clone https://github.com/hcoco1/prolift.git
cd prolift
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment

Create .env.local with:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run development server

```sh
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Project Structure

```sh
.
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Select.jsx
│   │   ├── BottomNav.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── ThemeSwitcher.jsx
│   │   └── WorkoutCard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── UnitContext.jsx
│   ├── hooks/
│   │   ├── useWorkouts.js
│   │   ├── useExercises.js
│   │   ├── useStats.js
│   │   └── useBodyMeasurements.js
│   ├── i18n/
│   │   ├── index.js
│   │   └── locales/
│   ├── lib/
│   │   ├── constants.js
│   │   ├── statsDerive.js
│   │   └── supabase.js
│   ├── pages/
│   │   ├── AuthPage.jsx
│   │   ├── WorkoutPage.jsx
│   │   ├── HistoryPage.jsx
│   │   ├── StatsPage.jsx
│   │   ├── BodyPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── AdminPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── supabase/
│   ├── functions/
│   └── migrations/
├── public/
│   ├── sw.js
│   ├── site.webmanifest
│   └── robots.txt
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## What I Learned

This project taught me how to **direct Claude Code** to deliver a real, deployed product. The technical lessons came through that lens:

* How to scope a full-stack app into prompts Claude Code can execute reliably
* How to keep the AI focused — specifying mobile-first, i18n, and PWA constraints up front instead of mid-stream
* How React 18 + Vite + Supabase fit together, by reading and reviewing every file Claude Code produced
* How `react-i18next`, Context, and custom hooks compose — learned by reading the diffs, not by writing them
* How PWA pieces (service workers, install banner, manifest) connect to a real deployment
* How to debug Supabase auth, RLS, and edge functions when the AI's first attempt didn't work
* How to recognize when Claude Code over-engineered something and ask it to simplify
* That my value is in the design, the review, and the verification — not in typing the code

---

## Future Improvements

* Push notifications for workout reminders
* Social features (sharing workouts, following friends)
* Integration with wearable devices
* Advanced analytics and AI-powered insights
* Offline workout logging with sync
* Custom workout templates and programs
* Nutrition tracking integration

---

## Live Demo

👉 [https://workouts.hcoco1.com/](https://workouts.hcoco1.com/)

---