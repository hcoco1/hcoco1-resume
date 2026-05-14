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

This project is a **mobile-first gym tracker application** designed to help users log and track their fitness progress, including:

* Strength workouts (push, pull, legs, core)
* Cardio sessions (duration, distance, calories)
* Body measurements and photos
* Workout history and statistics
* Streaks and personal bests

The app is built using **React 18 + Vite** on the frontend and **Supabase** for authentication and database, with full internationalization support across 6 languages.

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

* Building mobile-first responsive applications with React
* Implementing internationalization with react-i18next
* Managing state with React Context and custom hooks
* Designing PWA features (service workers, install banners)
* Working with Supabase for auth and real-time data
* Creating reusable UI components with Tailwind + DaisyUI
* Handling async data flows and optimistic updates
* Implementing role-based access control and admin features

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