# FLYGHT7 Docs

Documentation website for all [FLYGHT7](https://github.com/FLYGHT7) open-source aviation projects, built with [Docusaurus 3](https://docusaurus.io/).

---

## FLYGHT7 Projects

FLYGHT7 develops open-source software tools for ICAO PANS-OPS procedure design, aeronautical charting, and obstacle analysis. All projects are released under the **GPL-2.0 license**.

### pansops-calculator · [GitHub](https://github.com/FLYGHT7/pansops-calculator) · [Live App](https://flyght7.com/webapp/Main.html)

> An open-source PANS-OPS web interface for doing calculations that normally you would have on a spreadsheet.

- **Stack:** HTML 62% / JavaScript 32% / CSS 6%
- **Calculators:** ISA Deviation, TAS, Rate & Radius of Turn, DME Tolerance, Wind Spiral, Bearings & Angles, OMNI SID PDG, Profile Estimator, NPA SOC, VSS/OCS, Circling Protection, ILS Height & Distance
- **Features:** Runs entirely in the browser — no installation required. Dark mode, English/Spanish UI, Copy Results to clipboard (HTML table + plain text for Word/Excel)
- **Contributors:** 3 · **Stars:** ⭐ 1 · **Forks:** 🍴 2

---

### qpansopy · [GitHub](https://github.com/FLYGHT7/qpansopy)

> An open-source PANS-OPS software implementation based on QGIS.

- **Stack:** Python 96% / QML 4%
- **Implemented tools:** VSS Tool, Wind Spiral Tool, Object Selection, Point Filter, Flash Feature Merge
- **Approach procedures:** Conventional (VOR, NDB), Precision (ILS Basic Surfaces, ILS OAS CAT I), PBN (LNAV, intermediate, initial, missed approach)
- **Notes:** Uses projected coordinate systems; calculations in meters and knots. Initial focus is area creation — evaluation to be added later.
- **Contributors:** 4 (andures, antoniolocandro, flyght7-admin, ShaunGouvea) · **Stars:** ⭐ 4 · **Forks:** 🍴 3

---

### qAeroChart · [GitHub](https://github.com/FLYGHT7/qAeroChart)

> Open-source aeronautical charting solution built on QGIS aimed at complying with ICAO SARPs.

- **Stack:** Python 100%
- **Goal:** Replace legacy proprietary charting systems with a flexible, ICAO Annex 4-compliant open-source alternative
- **Planned components:** qAeroCore (shared libraries), qAeroTools (utilities), qAeroWeb (web viewer), qAeroCloud (cloud sync)
- **Contributors:** 3 · **Stars:** ⭐ 4 · **Forks:** 🍴 2

---

### qOLS · [GitHub](https://github.com/FLYGHT7/qOLS)

> Obstacle Limitation Surfaces creation in accordance with ICAO Annex 14 Vol I and Vol II.

- **Stack:** Python 100%
- **Generates:** Conical, Inner Horizontal, Approach, Transitional, Takeoff/Climb, and Outer Horizontal surfaces
- **Constraints:** Single runway systems only (multi-runway requires separate analysis). Projected coordinate systems — no geodetic calculations.
- **Roadmap:** Hard-coded initial areas → file-based ICAO values → local configuration → obstacle evaluation → automatic report creation → Future OLS concept → FAA surfaces
- **Contributors:** 3 · **Stars:** ⭐ 8 · **Forks:** 🍴 3

---

### qBRA · [GitHub](https://github.com/FLYGHT7/qBRA)

> A collection of QGIS tools for aviation procedures. Currently includes the QBRA ILS/LLZ plugin.

- **Stack:** Python 100%
- **QBRA ILS/LLZ plugin:** Creates BRA (Basic Radio Aids) protection areas around a selected navaid using the same calculations as the original QGIS script (`ILS_LLZ_single_frequency.py`)
- **Usage:** Select a navaid feature + routing/runway feature in QGIS → open dock panel → press Calculate → outputs a memory layer with BRA polygons
- **Contributors:** 2 · **Forks:** 🍴 2

---

### tofpa · [GitHub](https://github.com/FLYGHT7/tofpa)

> Take-Off Flight Path Analysis Tool for Aviation (ICAO).

- **Stack:** QML 55% / Python 45%
- **What it does:** Creates the default straight take-off flight path area (TOFPA) with a 1.2% slope. Obstacle analysis via a QGIS processing model using DTM data.
- **Roadmap:** Implement survey obstacle analysis; convert processing model to a UI pyqgis icon click-to-run
- **Topics:** aviation, ols, pansops
- **Contributors:** 3 · **Stars:** ⭐ 2 · **Forks:** 🍴 2

---

### checklists · [GitHub](https://github.com/FLYGHT7/checklists)

> A series of checklists for reviewing compliance for aeronautical charts and procedure design.

- **Stack:** HTML 47% / Python 23% / CSS 16% / JavaScript 14%
- **Framework:** Django web application, deployed on [Render](https://render.com/)
- **Database:** PostgreSQL (Supabase for production)
- **Contributors:** 2

---

## Getting Started (this docs site)

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### 1. Clone the repository

```bash
git clone https://github.com/andures/docusaurus_doc_flight_proyects.git
cd docusaurus_doc_flight_proyects
```

### 2. Install dependencies

```bash
cd website
npm install
```

### 3. Start the development server

```bash
npm run start
```

The site will open at **http://localhost:3000**. Changes to any `.md` file are reflected live without restarting.

## Build for Production

```bash
cd website
npm run build
```

Static files are generated in `website/build/`. To preview the production build locally:

```bash
npm run serve
```

## Repository Structure

```
docusaurus_doc_flight_proyects/
└── website/                  # Docusaurus site root
    ├── docs/                 # Documentation source files (Markdown/MDX)
    │   ├── intro.md          # FLYGHT7 org landing page
    │   ├── pansops-calculator/
    │   ├── calculators/
    │   ├── ils/
    │   ├── features/
    │   └── projects/         # Other FLYGHT7 project pages
    ├── src/                  # React components and custom CSS
    ├── static/               # Static assets (images, fonts)
    ├── docusaurus.config.js  # Site configuration
    └── sidebars.js           # Sidebar navigation structure
```

## Math Rendering

This site uses [KaTeX](https://katex.org/) for LaTeX math formulas via `remark-math` and `rehype-katex`. Math expressions in docs use standard LaTeX syntax:

- Inline: `$formula$`
- Block: `$$formula$$`

## Contributing

To add or update documentation, edit the relevant `.md` file inside `website/docs/` and submit a pull request.

For the FLYGHT7 projects themselves, visit [github.com/FLYGHT7](https://github.com/FLYGHT7).
