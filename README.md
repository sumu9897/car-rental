# 🚗 CarRental – Full Stack Car Booking Web App

A professional-grade, scalable car rental web application that allows users to book vehicles, manage bookings, and for admins to manage inventory and operations. Built with performance, security, and user experience in mind.

---

## 🔑 Key Features

### 🧑‍💼 User Authentication
- Secure user sign-up and login system
- JWT-based authentication for stateless and secure sessions

### 🚘 Car Listings
- Users can browse available cars
- Filter by location, pickup dates, and vehicle specifications

### 📅 Booking System
- Select pickup and return dates
- Book cars directly with live availability and confirmation
- View and manage personal bookings

### 🧑‍💻 Admin Dashboard
- Add, edit, and delete car listings
- Monitor bookings, revenue, and system metrics
- Update booking statuses (pending, confirmed, completed)

### 📸 Media Management
- Optimized image storage and delivery using **ImageKit**
- High-quality and fast-loading car images

---

## 📂 Project Structure (Example)
```bash
/client # Frontend (React or Next.js)
/server # Backend (Express.js / Node.js)
/uploads # Local image storage (if applicable)
/config # DB, ImageKit, JWT config
.env # Environment variables
package.json
README.md

```
---

## ⚙️ Tech Stack

- **Frontend:** React / Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB / PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Image Hosting:** ImageKit
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sumu9897/car-rental.git
cd car-rental
```

### 2. Install dependencies
#### Backend

```bash
cd server
npm install
 ```

#### Frontend

```bash
cd ../client
npm install

 ```

### 3. Set up environment variables

Create a .env file in both server/ and client/ directories.

Example .env for server:

```bash

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id

```

## 🛠 Features in Action

### 👥 Authentication
- Register & Login with JWT
- Protect routes using middleware

### 🚙 Car Management
- Browse cars by category: Luxury, Economy, SUV, etc.
- View detailed specs: seating, transmission, fuel type, price

### 🗓 Bookings
- Real-time availability check
- Booking summary with dates, locations, and pricing
- "My Bookings" page to track status

### 📊 Admin Features
- Add/Edit/Delete cars with full specs
- Manage and approve/cancel bookings
- View revenue reports & booking logs

### 🖼 UI Highlights
- Responsive, mobile-friendly design
- Customer testimonials
- Subscription section for latest deals
- Clean navigation and call-to-action flows

### 📸 Sample Car Listing
**BMW X5 (SUV 2022)**  
💺 5 Seats | ⚙️ Automatic | ⛽ Gas 
📍 Location: Dhaka  
💵 ৳4500/day
