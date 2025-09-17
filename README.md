# Polyglotter

Polyglotter is a Chrome extension that lets you translate highlighted text on any webpage into a selected language. The popup allows you to choose the target language, while the content script captures text selections and sends them to the background service worker for processing.

---

## Features

- Capture highlighted text on any webpage.
- Send selected text to the background service worker.
- Popup interface to select the target translation language.
- Ready for integration with translation APIs (e.g., Google Translate, DeepL).
- Built with React, TypeScript, and Vite.
- Fully compatible with Chrome Manifest V3.

---

## Folder Structure

```bash
project-root/
├─ src/
│ ├─ background/
│ │ └─ index.ts # Service worker logic
│ ├─ content/
│ │ └─ index.ts # Content script capturing highlighted text
│ ├─ popup/
│ │ ├─ index.html # Popup HTML
│ │ └─ main.tsx # Popup React app
├─ dist/ # Built extension files
├─ manifest.json # Chrome extension manifest
├─ vite.config.ts # Vite build config for popup + background
├─ content.vite.config.ts # Vite build config for content script
├─ package.json
```

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/polyglotter.git
cd polyglotter

npm install

npm run build
```

### Loading the Extension in Chrome

1. Open Chrome and go to chrome://extensions.
2. Enable Developer mode (top right corner).
3. Click Load unpacked.
4. Select the dist/ folder.

### Usage

1. Open any webpage.
2. Highlight some text.
3. The content script automatically captures the selection and logs it in the background service worker console.
4. Open the popup to select your target translation language.
5. (Future) Translations can be sent to a translation API and displayed inline or via popup.

### Development Notes

- Content script must be built as an IIFE because Chrome MV3 does not allow modules in content scripts.

- Background and popup are ES modules.

- Console logs from the content script appear in the webpage DevTools console.

- Console logs from the background service worker appear in the service worker inspector in chrome://extensions.
