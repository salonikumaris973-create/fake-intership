# 🛡️ VerifyIntern - Fake Internship Detector

VerifyIntern is a lightweight, responsive web-based frontend application designed to help students and job seekers evaluate the legitimacy of internship postings, emails, or offer letters. By pasting the text description into the tool, users receive an instant risk assessment highlighting potential employment scams.

## 🚀 Live Demo
Check out the live deployment here: **[Insert Your GitHub Pages URL Here]**

## ✨ Features
* **Interactive Frontend:** A clean, centered modern card layout with a custom header and disclaimer footer.
* **Instant Analysis:** Uses a tiered JavaScript keyword-matching ruleset to spot common job scam red flags.
* **Color-Coded Alerts:** Dynamically updates the user interface with risk statuses:
  * 🟢 **Low Risk:** Clean posting (reminds user to keep researching).
  * 🟡 **Moderate Risk:** Flashes warning for generic phrases or high urgency.
  * 🔴 **High Risk:** Alerts user to severe scams (e.g., requests for money, communication via Telegram/WhatsApp).

## 🛠️ Built With
* **HTML5:** Structures the app with native semantic header, body, and footer elements.
* **CSS3:** Delivers a fully responsive layout with soft modern shadows, custom focus states, and a flexbox structural design.
* **JavaScript (Vanilla):** Processes the user's text input locally without needing an external database or server.

## 📁 Project Structure
The repository is separated cleanly following web development best practices:
├── index.html   # Main web page skeleton
├── style.css    # Layout styling and UI theme 
└── script.js    # Rule engine logic and risk scoring
