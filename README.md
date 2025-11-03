# Event-Portal-static-website-
EventPortal.com is a responsive and user-friendly web portal built using HTML, CSS, and  JavaScript — designed to help users browse, add, edit, and manage events easily.   The portal also includes a cinematic opening animation that introduces the website name “EventPortal.com” with smooth letter-by-letter motion and scaling.


---

## 🚀 Features

- 🎬 **Opening Animation:**  
  A stunning intro showing *“EventPortal.com”* with each letter appearing from the back and zooming forward.

- 🧭 **Left Sidebar Filters:**  
  Filter events by type, age restriction, and location.

- ➕ **Add / Edit / Delete Events:**  
  Add your own events using a modal form and manage them instantly.

- 🧾 **Google Form Registration:**  
  Each event includes a “Register” button linked to a Google Form for sign-ups.

- 💾 **Local Storage Support:**  
  Events are saved locally — no backend required!

- 📱 **Responsive Design:**  
  Works perfectly on both desktop and mobile devices.
  
- 📱 **Dark Theme:**  
  Toggles between Dark and White Themes for UI Performance

---

## 🗂️ Project Structure

```
📁 EventPortal/
│
├── Main.html         # Main web page
├── styles.css        # All styling, including animation and layout
├── app.js            # Logic for events, filters, modal, and animation
└── README.md         # Project documentation
```

---

## 🧠 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Page structure and content |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6)** | Event logic, filters, local storage |
| **Google Forms** | Event registration integration |

---

## 💡 How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/your-username/EventPortal.git
   ```

2. **Navigate into the folder**
   ```bash
   cd EventPortal
   ```

3. **Open the main page**
   - Just double-click `Main.html`
   - Or open it in a browser with:  
     ```
     file:///path-to-your-folder/EventPortal/Main.html
     ```

4. Enjoy the **EventPortal.com** animation and explore your event dashboard!

---

## ✨ Opening Animation Details

- Each letter of *EventPortal.com* appears one after another.  
- The letters start small (scale `0.2`) and grow to full size.  
- The splash fades out automatically after ~4.5 seconds.

### Sample CSS
```css
.opening-text {
  color: white;
  font-size: 5rem;
  font-weight: bold;
}
@keyframes popIn {
  0%   { opacity: 0; transform: scale(0.2) translateY(50px); }
  60%  { opacity: 1; transform: scale(1.3) translateY(-5px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
```

---

## 🧑‍💻 Author

**Rugved Ganapuram**  
💡 *Built with HTML, CSS, and JavaScript using VS Code.*

---

## 🏷️ License

This project is open-source under the **MIT License**.  
Feel free to use, modify, and share!

---

### 📸 Preview GIF or Screenshot

<img width="1894" height="1017" alt="img1" src="https://github.com/user-attachments/assets/ea640930-0faf-4899-89cf-3ce980aee2a3" />


---
