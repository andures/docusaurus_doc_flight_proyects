---
sidebar_position: 6
---

# tofpa

**tofpa** is a QGIS plugin for Take-Off Flight Path Analysis (TOFPA) according to ICAO PANS-OPS. It creates the default straight take-off flight path area and performs obstacle analysis using Digital Terrain Model (DTM) data.

**[GitHub →](https://github.com/FLYGHT7/tofpa)**

## Overview

|                  |                                         |
| ---------------- | --------------------------------------- |
| **Language**     | QML 55% / Python 45%                    |
| **Platform**     | QGIS Plugin                             |
| **License**      | GPL-2.0                                 |
| **Topics**       | aviation, ols, pansops                  |
| **Stars**        | ⭐ 2                                    |
| **Forks**        | 🍴 2                                    |
| **Contributors** | flyght7-admin, andures, antoniolocandro |

:::caution Development notice
This code is in development and provided as-is — it may contain errors and you are solely responsible for using it. Any feedback is welcome. Calculations are done in a projected coordinate system — no geodesic calculations intended.
:::

## What It Does

tofpa creates the default **straight take-off flight path area** considering a **1.2% slope**. Obstacle analysis is performed via a QGIS processing model that handles DTM (Digital Terrain Model) raster data.

### Key Concepts

#### Procedure Design Gradient (PDG)

The minimum climb gradient required to clear all obstacles with the required vertical clearance (MOC). Default PDG is **3.3%** (source: ICAO Doc 8168) unless terrain requires a higher gradient.

$$
PDG = \frac{h_{obs} + MOC}{d_{obs}} \times 100\%
$$

Where:

- $h_{obs}$ = obstacle height above DER elevation
- $d_{obs}$ = horizontal distance from DER
- $MOC$ = minimum obstacle clearance (typically 50 ft / 15 m)

#### Take-Off Flight Path Segments

| Segment           | Description                          |
| ----------------- | ------------------------------------ |
| Departure segment | Track from DER until PDG is achieved |
| En-route segment  | From PDG achievement altitude onward |

## Roadmap

1. Implement survey obstacle analysis
2. Convert QGIS processing model to UI pyqgis icon _click-to-run_

## Prerequisites

- **QGIS 3.x** (LTR recommended)
- Python 3 (bundled with QGIS)
- A projected CRS loaded in the QGIS project

## Installation

1. Clone or download the repository from [GitHub](https://github.com/FLYGHT7/tofpa)
2. Copy the plugin folder to your QGIS plugins directory:

   **Windows:**

   ```
   C:\Users\<user>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins\
   ```

   **Linux / macOS:**

   ```
   ~/.local/share/QGIS/QGIS3/profiles/default/python/plugins/
   ```

3. Enable **tofpa** via **QGIS → Plugins → Manage and Install Plugins**

## References

- ICAO Doc 8168 PANS-OPS Volume II — Construction of Visual and Instrument Flight Procedures, Section 3: Departure Procedures
