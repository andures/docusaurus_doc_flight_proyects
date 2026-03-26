---
sidebar_position: 3
---

# qAeroChart

**qAeroChart** is an open-source aeronautical charting solution built on QGIS, aimed at complying with ICAO SARPs (Standards and Recommended Practices) — reimagining aeronautical charting with open-source power and QGIS precision.

> ✈️ Built on QGIS. Designed to outfly legacy.

**[GitHub →](https://github.com/FLYGHT7/qAeroChart)**

## Overview

|                  |                                         |
| ---------------- | --------------------------------------- |
| **Language**     | Python 100%                             |
| **Platform**     | QGIS Plugin                             |
| **License**      | GPL-2.0                                 |
| **Stars**        | ⭐ 4                                    |
| **Forks**        | 🍴 2                                    |
| **Contributors** | andures, antoniolocandro, flyght7-admin |

## Vision

qAeroChart will revolutionize aeronautical charting by providing a modern, open-source solution built on QGIS. Designed to replace outdated, rigid legacy systems, it empowers aviation professionals with flexible, compliant, and dynamic mapping tools — with no licensing fees and no annual subscriptions.

## Planned Components

| Component      | Description                        |
| -------------- | ---------------------------------- |
| **qAeroCore**  | Shared libraries and core logic    |
| **qAeroTools** | Utility tools for chart production |
| **qAeroWeb**   | Web-based chart viewer             |
| **qAeroCloud** | Cloud sync services                |

## Key Capabilities

- **ICAO Annex 4 compliance** — chart symbology and layout following ICAO SARPs
- **QGIS-powered cartography** — leverage QGIS's full cartographic engine for chart production
- **Profile charts** — vertical profile generation with configurable style parameters
- **JSON-based configuration** — profile chart styles defined via JSONHandler and Validators modules
- **Distance/altitude tables** — automated generation of distance-altitude reference tables

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)

## Installation

1. Clone or download from [GitHub](https://github.com/FLYGHT7/qAeroChart)
2. Copy the `qAeroChart` plugin folder to your QGIS plugins directory:

   **Windows:**

   ```
   C:\Users\<user>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins\
   ```

   **Linux / macOS:**

   ```
   ~/.local/share/QGIS/QGIS3/profiles/default/python/plugins/
   ```

3. Enable via **QGIS → Plugins → Manage and Install Plugins**

## Contributing

PR documentation files under `docs/` are required when the PR fixes a user-assigned issue or the maintainer requests it. Use the naming convention:

- English: `docs/PR-issue-<number>-en.md`
- Spanish: `docs/PR-issue-<number>-es.md`

Templates are available at `docs/PR-template-en.md` and `docs/PR-template-es.md`.

## References

- ICAO Annex 4 — Aeronautical Charts
- QGIS Documentation: https://qgis.org/en/docs/
