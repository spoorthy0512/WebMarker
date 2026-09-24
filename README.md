# QuickHighlight & Export Utility

A lightweight, performance-focused Google Chrome extension engineered using the modern **Manifest V3** specification. This developer productivity tool enhances digital research workflows by allowing users to dynamically highlight active webpage DOM content with persistent color settings and export extracted texts directly into local storage.

## 🚀 Core Features
- **Context Menu Integration:** Hooks into Chrome's native right-click context selection menus using an asynchronous event-driven system.
- **Dynamic User Settings Layer:** Features an aesthetic configuration popup UI panel allowing real-time accent color switches.
- **Asynchronous State Retention:** Leverages localized sandboxed browser cache storage routines to retain color variables securely across session reloads.
- **Client-Side File Stream Generation:** Scrapes targeted highlight blocks and generates dynamic raw `.txt` files directly via frontend Data URIs—requiring zero external server footprint or data collection.

## 🛠️ Architecture & Technology Stack
- **Architecture:** Asynchronous Event-Driven Messaging Architecture (Manifest V3)
- **Languages:** JavaScript (ES6+), HTML5, CSS3
- **APIs Handled:** Chrome Storage API, Chrome ContextMenus API, Native Tab Messaging Bus, JavaScript DOM Range & Selection Modules, Data URLs

## 💻 Local Installation & Setup

To run and test this repository locally on your computer:

1. Clone or download this repository onto your local file system.
2. Open Google Chrome and navigate to the extension manager panel at `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the upper right-hand corner.
4. Click the **Load unpacked** button in the top-left corner.
5. Select the main directory containing these source files to mount the extension instantly.

## 📂 Project Structure
```text
├── manifest.json     # Main extension registration and declarative security profile
├── background.js     # Background Service Worker routing context menu click streams
├── content.js        # Runtime content layer executing page parsing and DOM manipulation
├── popup.html        # Aesthetic user interface panel layout widget
├── popup.js          # Controller layer syncing interactive UI triggers with browser memory
└── README.md         # Documentation file
```
