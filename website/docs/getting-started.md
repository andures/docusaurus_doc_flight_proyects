---
sidebar_position: 2
---

# Getting Started

## Accessing the App

No installation is needed. Open the live web application directly in your browser:

**[https://flyght7.com/webapp/Main.html](https://flyght7.com/webapp/Main.html)**

The app runs entirely client-side — no account, no login, no data sent to any server.

## Interface Overview

### Sidebar

The left sidebar contains all available calculators organized into collapsible sections:

- **Calculators** — General tools, Departures, and Approach & Manoeuvring
- **ILS** — ILS-specific height and distance calculators

Click any item to load that calculator in the main panel. On mobile, tap the hamburger menu (☰) to open the sidebar.

The sidebar can be **collapsed to a rail** (icon-only mode) using the chevron button in the top bar, giving more screen space to the calculator.

### Top Bar

The top bar shows:

- **Current calculator name** (breadcrumb)
- **Dark mode toggle** — switch between light and dark themes
- **Language selector** — choose English (`EN`) or Spanish (`ES`)
- **Issues link** — report a bug or request a feature on GitHub
- **About** — version and changelog

### Language

The app supports **English** and **Spanish**. Select the language from the dropdown in the top bar. The setting is saved in your browser's local storage and persists across sessions.

### Dark Mode

Dark mode is toggled via the sun/moon icon in the top bar. The app automatically respects your OS preference on first visit. The setting is saved locally.

## Using a Calculator

1. **Select** a calculator from the sidebar.
2. **Fill in** the input fields (units are shown next to each field).
3. Click **CALCULATE**.
4. Results appear below the input form.

Some calculators offer **Save Parameters / Load Parameters** buttons to persist your last-used inputs in the browser.

## Copying Results

Most calculators include a **Copy Results as Table** button. This copies results to your clipboard in two formats simultaneously:

| Format                   | Best for                    |
| ------------------------ | --------------------------- |
| HTML table               | Microsoft Word, Google Docs |
| Tab-separated plain text | Notepad, Excel              |

Just paste (`Ctrl+V`) into your target application — it will automatically use the richest format it supports.

See [Copy Results — Standardized Behavior](./features/copy-results) for details.

## Running Locally

If you want to run the project locally (e.g., to contribute or work offline):

```bash
git clone https://github.com/FLYGHT7/pansops-calculator.git
cd pansops-calculator
```

The project is a static HTML/JS/CSS application with no build step required. Open `html/Main.html` directly in your browser, or serve it with any static HTTP server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Then navigate to `http://localhost:8080/html/Main.html`.
