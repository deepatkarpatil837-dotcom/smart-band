# FitPulse Pro - Smart Fitness Band Companion App

A feature-complete, modern companion web application and dashboard for smart fitness bands (e.g., Apple Watch, Fitbit, Garmin, Xiaomi Band style), styled in an **elegant Cream White (`#FAF7F2`) aesthetic with bold black typography** for high contrast and legibility.

---

## 🚀 How to Run the App

### 1. Open Terminal or PowerShell in this folder
Open PowerShell / Command Prompt and navigate to this folder:
```powershell
cd "C:\Users\UMESH ANANDE\OneDrive\Documents\SmartFitnessBandApp"
```

### 2. Install Dependencies (first time only)
```powershell
npm install
```

### 3. Start the Live Web Server
```powershell
npm run dev
```

Then open your browser and visit:
👉 **http://localhost:3000/**

---

## 🌟 Included Features & Components
- **Device Status Card**: FitPulse Ultra Band 5 info, battery gauge, Bluetooth RSSI, Find Band audio buzzer, DND & Water Lock toggles.
- **Daily Activity Rings**: Concentric Move (kcal), Steps, and Exercise (mins) rings + Hourly step bar graph.
- **PPG Heart Rate & ECG**: Animated real-time canvas ECG oscilloscope, resting BPM, and 5-zone distribution.
- **Sleep & Recovery**: Score (89/100), hypnogram bar with Deep, REM, Light, and Awake stages.
- **24/7 Vitals Dashboard**: SpO2 (98%), Stress Index (28) with 1-Minute Guided Breathing Modal, Skin Temp, and Hydration logger (+250ml / +500ml).
- **Quick Workout Launcher**: 7 workout modes with full-screen Live Workout HUD Modal (timer, live BPM, calories, GPS pace).
- **AI Health Coach**: Dynamic recovery insights, 7-day performance history, streak badges.
- **Watch Face Customizer**: 3D smart band preview with 4 AMOLED watch faces + AOD / Raise-to-wake toggles.
- **Band Telemetry Simulator**: Interactive panel to inject steps (+250, +500, +1500), continuous walk motion, low battery alerts, and notifications.

---

## 🛠️ Project Structure
- `src/App.jsx` - Main application container with tab navigation and toast notifications
- `src/context/FitnessContext.jsx` - Real-time state management, telemetry tickers, and device controls
- `src/data/mockFitnessData.js` - Band mock telemetry, initial data sets, and workouts
- `src/components/` - Full suite of 9 modular dashboard components
- `src/index.css` - Custom glassmorphism styling and cream white theme definitions
