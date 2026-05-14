---
title: "Expense Tracker - Personal Finance Manager"
description: "A personal expense and income tracker built with React, Vite, DaisyUI, and Supabase for managing finances with themes, languages, real-time data, and export features."
custom_link_label: "Live App"
custom_link: "https://expenses.hcoco1.com/"
updatedDate: "May 2026"
category: "Finance"

repository: "https://github.com/hcoco1/expense_tracker"
heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1332&auto=format&fit=crop"

---

## Overview

This project is a **personal expense and income tracker application** designed to help users manage their finances effectively, including:

* Tracking expenses and income by categories
* Real-time dashboard with summaries and charts
* Filtering by period, category, and currency
* Sharing and exporting data (CSV/JSON/Web Share API)
* Multi-language support (English, Español, Nederlands)
* Theme customization with 29 DaisyUI themes
* Admin panel for user management
* PWA features for offline access

The app is built using **React 18 + Vite** on the frontend and **Supabase** for authentication and database, with full internationalization and theming support.

---

## Key Features

* **Transaction Management**
  Add, edit, and delete expenses/income with categories, amounts, dates, and notes

* **Category System**
  Organize transactions into expense/income categories with custom colors and icons

* **Dashboard Overview**
  View balance, income, expenses, and savings with summary cards and charts

* **Filtering & Search**
  Filter transactions by period, category, and currency for detailed analysis

* **Data Visualization**
  Category doughnut charts and period trend line charts using Chart.js

* **Internationalization**
  Support for 3 languages: English, Español, Nederlands

* **Theme System**
  29 DaisyUI themes with theme picker and localStorage persistence

* **PWA Features**
  Offline caching, service worker, install banner, and manifest

* **Admin Panel**
  Restricted to admin emails for per-user transaction/category stats

* **Share & Export**
  Web Share API, clipboard, CSV export (UTF-8 BOM), JSON export, and preview

* **Responsive Design**
  Mobile-first with Tailwind CSS and DaisyUI components

* **Real-time Updates**
  Supabase Postgres subscriptions for live dashboard updates

* **Offline Support**
  Categories and expenses cached in localStorage per user

---

## Tech Stack

### Frontend

* React 18 + Vite
* Tailwind CSS + DaisyUI
* React Router v6
* React Hot Toast
* Lucide React (icons)
* Chart.js + react-chartjs-2

### Backend

* Supabase (auth + PostgreSQL database)
* Supabase Realtime

---

## How It Works

1. User signs up/signs in via Supabase auth
2. Create and manage categories for expenses/income
3. Log transactions with amounts, dates, payment methods, and notes
4. View dashboard with summaries, filters, and charts
5. Manage profile settings (theme, language, currency)
6. Share/export data or access admin panel (if admin)

---

## Example API Request

```javascript
// Fetch user expenses from Supabase
const { data, error } = await supabase
  .from('expenses')
  .select('*')
  .eq('user_id', user.id)
  .order('expense_date', { ascending: false });
```

---

## Installation

### 1. Clone repository

```sh
git clone https://github.com/hcoco1/expense_tracker.git
cd expense_tracker
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment

Create .env with:

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
│   │   ├── CategoryIcon.jsx
│   │   ├── CategoryList.jsx
│   │   ├── CategoryModal.jsx
│   │   ├── Charts.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── FiltersBar.jsx
│   │   ├── Layout.jsx
│   │   ├── ShareModal.jsx
│   │   ├── SummaryCards.jsx
│   │   └── TransactionModal.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── hooks/
│   │   └── usePageTitle.js
│   ├── i18n/
│   │   └── index.js
│   ├── lib/
│   │   ├── constants.js
│   │   ├── filters.js
│   │   ├── share.js
│   │   ├── supabase.js
│   │   └── utils.js
│   ├── pages/
│   │   ├── AdminPage.jsx
│   │   ├── AuthPage.jsx
│   │   ├── CategoriesPage.jsx
│   │   └── DashboardPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── manifest.json
│   ├── og-image.svg
│   ├── robots.txt
│   └── favicon.svg
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## What I Learned

* Building responsive web applications with React and Vite
* Implementing internationalization with custom hooks
* Managing complex state with React Context
* Designing PWA features (manifest, service workers, offline caching)
* Working with Supabase for auth, database, and real-time subscriptions
* Creating reusable UI components with Tailwind CSS and DaisyUI
* Handling data export and sharing with Web APIs
* Implementing role-based access and admin features

---

## Future Improvements

* Push notifications for budget alerts
* Advanced analytics and AI-powered insights
* Integration with bank APIs for automatic transaction import
* Recurring transactions and budgeting features
* Social features (sharing expenses, group tracking)
* Enhanced charts with more visualization options
* Mobile app versions (React Native)
* Multi-currency support with exchange rates

---

## Live Demo

👉 [https://expenses.hcoco1.com/](https://expenses.hcoco1.com/)

---