---
sidebar_position: 10
---

# Contributing

Thank you for your interest in contributing to the PANSOPS Calculator Suite! This is an open-source project and contributions are welcome.

## Repository

**[https://github.com/FLYGHT7/pansops-calculator](https://github.com/FLYGHT7/pansops-calculator)**

## Getting the Code

```bash
git clone https://github.com/FLYGHT7/pansops-calculator.git
cd pansops-calculator
```

No build step required — the project is pure HTML, CSS, and JavaScript.

## Project Structure

```
pansops-calculator/
├── html/
│   ├── Main.html                  # App shell (sidebar + iframe)
│   ├── ISA_deviation.html         # ISA Deviation calculator
│   ├── TAS.html                   # TAS calculator
│   ├── rate_turn.html             # Rate & Radius of Turn
│   ├── dme_tolerance.html         # DME Tolerance
│   ├── Wind_Spiral.html           # Wind Spiral
│   ├── bearings_angles.html       # Bearings & Angles
│   ├── omni.html                  # OMNI SID PDG
│   ├── Profile_Check.html         # Profile Estimator
│   ├── NPA_SOC_Calculation.html   # NPA SOC
│   ├── VSS_OCS.html               # VSS/OCS Parameters
│   ├── Circling_Parameters.html   # Circling Protection Area
│   ├── ILS_height_calculations.html
│   ├── ILS_distance_calculations.html
│   ├── About.html                 # About / Changelog
│   ├── shared-config.js           # Shared constants and config
│   ├── aviation-utils.js          # Shared aviation math utilities
│   ├── dark-mode.css              # Dark mode styles
│   └── i18n/                      # Internationalization files
│       ├── i18n.js                # i18n engine
│       ├── en.json                # English strings
│       └── es.json                # Spanish strings
└── README.md
```

## Adding a New Calculator

1. **Create the HTML file** in `html/` following the glass cockpit UI pattern (see any existing calculator for reference).
2. **Add the page to `Main.html`**:
   - Add a sidebar button in the appropriate section
   - Add the URL mapping to `PAGE_MAP` and `PAGE_TITLES`
3. **Implement Copy Results** using `ClipboardItem` with both `text/html` and `text/plain` formats (see [Copy Results](./features/copy-results)).
4. **Add i18n keys** for all visible strings to both `en.json` and `es.json`.
5. **Test** in both light and dark mode, in English and Spanish.

## Reporting Issues

Use the GitHub Issues tracker:

**[https://github.com/FLYGHT7/pansops-calculator/issues](https://github.com/FLYGHT7/pansops-calculator/issues)**

Please include:

- A clear description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if relevant
- Browser and OS information

## Contributors

| Contributor                                            | Role                            |
| ------------------------------------------------------ | ------------------------------- |
| [@antoniolocandro](https://github.com/antoniolocandro) | Project lead / procedure design |
| [@andures](https://github.com/andures)                 | Development                     |
| [@flyght7-admin](https://github.com/flyght7-admin)     | Administration                  |

## License

GPL-2.0 — see [LICENSE](https://github.com/FLYGHT7/pansops-calculator/blob/main/LICENSE) for details.
