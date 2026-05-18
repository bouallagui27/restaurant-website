# ✦ La Table — Luxury Restaurant Platform

A premium, high-end web application built for **La Table**, a minimalist luxury restaurant. This platform combines a dark, sophisticated user experience with modern full-stack engineering, featuring real-time table reservations, administrative oversight, and an automated premium communication workflow.

---

## 📸 Project Showcase & Aesthetics
The application adheres to a strict **Dark Luxury / Minimalist** design system:
* **Palette:** Deep Obsidian (`#0d0c0b`), Burgundy Wine (`#8b1e1e`), and Brushed Amber Gold (`#dca43a`).
* **Typography:** Elegant high-contrast Serifs paired with clean, geometric Sans-serifs for a high-end editorial feel.

---

## ⚡ Tech Stack & Architecture

### Front-End & Core Framework
* **Next.js 15 (App Router):** Leveraging Server Components for instantaneous initial loads and Client Components for smooth UI interactions.
* **Tailwind CSS:** For pixel-perfect responsive styling tailored to look premium on both mobile devices and desktop ultra-wides.
* **Sonner UI:** Used for micro-interactions and sleek, non-intrusive notification toasts (e.g., validation warnings and success statuses).

### Back-End & Infrastructure
* **Sequelize ORM & PostgreSQL/MySQL:** Database architecture handling relational data modeling with automated synchronization mechanisms.
* **Server Actions (`"use server"`):** Utilized for executing secure database queries (mutations) directly from client forms without additional API overhead.

### Integrations & Workflows
* **EmailJS SDK:** Clients' messages from the custom contact form bypass traditional DB bloat and are formatted instantly via raw HTML/CSS into premium emails delivered directly to the administration inbox.

---

## 🛡️ Key Features

### 1. Dynamic Booking Engine (`/`)
An interactive reservation module that allows users to pick their full name, phone number, specific date, seating time, and group sizes with an integrated validation state.

### 2. Live Administrative Management Dashboard (`/admin`)
An advanced data grid table displaying all structural reservation logs dynamically from the database. It allows real-time execution of operational actions:
* **Confirmation Status:** Visual tags indicating valid current reservations.
* **Cancellation Flow:** Fast, single-click deletion hooks tied to Next.js data revalidation.

### 3. Server-Side Middleware Protection (Cybersecurity)
Access to the administrative control panel is strictly guarded at the server level using **HTTP Basic Authentication Architecture**. Attempts to scrape or access `/admin` paths are intercepted via custom Next.js Middleware before rendering data.

---

## 🛠️ Installation & Setup

Follow these steps to run the environment locally:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/la-table-tunis.git](https://github.com/your-username/la-table-tunis.git)
cd la-table-tunis
2. Install dependencies
Bash
npm install
3. Setup Environment Variables
Create a .env.local file in the root directory and configure your database settings:

مقتطف الرمز
DB_NAME=la_table_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=127.0.0.1
DB_DIALECT=mysql  # Or 'postgres'
4. Configure EmailJS Keys
Ensure your custom public token and identifiers match inside the ContactSection.tsx module:

serviceId

templateId

publicKey

5. Fire up the Development Server
Bash
npm run dev
Open http://localhost:3000 inside your browser to view the application.

📁 Repository Structure
Plaintext
├── src/
│   ├── app/
│   │   ├── admin/            # Secure Server Component Dashboard
│   │   │   └── page.tsx
│   │   ├── action.ts         # Server Actions (CRUD Operations)
│   │   ├── layout.tsx        # Base Document Context & Font Configurations
│   │   └── page.tsx          # Main Restaurant Front Landing
│   ├── components/           # UI Elements (Contact, Reserve, AdminActions)
│   ├── lib/
│   │   └── db.ts             # Sequelize Database Connection Core
│   └── models/
│       └── Reservation.ts    # Relational Database Schema Model
├── middleware.ts             # Server-side HTTP Basic Auth Guard
└── package.json