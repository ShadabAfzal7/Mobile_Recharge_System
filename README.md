# Mobile Recharge System

## Overview
The Mobile Recharge System is a frontend web application designed to provide users with a unified, highly available, and user-friendly platform to recharge their mobile plans. This project was developed as part of an Agile and DevOps lab to simulate real-world frontend development, version control collaboration, and UI/UX design.

## Features
* **User Authentication:** Mock login and signup functionality using browser `localStorage`.
* **Quick Recharge Dashboard:** Easy-to-use interface to input a mobile number and select a telecom operator.
* **Dynamic Plan Catalog:** Browse and filter up-to-date tariff plans (e.g., Data, Voice, SMS).
* **Shopping Cart & Checkout:** A mock payment gateway integration for secure transaction simulation.
* **Transaction History:** View past recharges and filter them by status.
* **User Profile:** Manage saved numbers and user session details.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
* **Theme Toggle:** Built-in Dark/Light mode support.

## Technologies Used
* **HTML5:** Semantic structuring of all web pages.
* **CSS3:** Custom styling, flexbox/grid layouts, media queries, and CSS variables for theming.
* **JavaScript (Vanilla):** DOM manipulation, event handling, and data management using `localStorage`.
* **Git & GitHub:** Version control, feature branching, and collaborative merging.

## Project Structure
```text
mobile-recharge-frontend/
├── index.html        # Home / Quick Recharge Dashboard
├── login.html        # User Login
├── signup.html       # User Registration
├── plans.html        # Recharge Plans Catalog
├── cart.html         # Order Summary & Checkout
├── history.html      # Transaction History
├── profile.html      # User Profile & Settings
├── css/
│   └── style.css     # Global styles and responsiveness
├── js/
│   ├── common.js     # Shared utilities (Navbar, Theme toggle)
│   ├── auth.js       # Login/Signup logic
│   ├── plans.js      # Plan filtering and rendering
│   ├── cart.js       # Mock payment processing
│   └── history.js    # Transaction history logic
└── README.md         # Project documentation