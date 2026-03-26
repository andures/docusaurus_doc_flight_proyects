---
sidebar_position: 6
---

# tofpa

**tofpa** (Take-Off Flight Path Analyser) is a desktop application for computing and visualizing the take-off flight path according to ICAO PANS-OPS Doc 8168.

**[GitHub →](https://github.com/FLYGHT7/tofpa)**

## Overview

|              |                                 |
| ------------ | ------------------------------- |
| **Language** | QML / Qt Quick                  |
| **Platform** | Desktop (Windows, Linux, macOS) |
| **License**  | GPL-2.0                         |
| **Stars**    | ⭐ 2                            |
| **Forks**    | 🍴 2                            |

## What It Does

tofpa models the take-off flight path (TOFP) as defined in ICAO Doc 8168 PANS-OPS. Given runway and aircraft parameters, it computes critical climb segments and evaluates obstacle clearance margins along the departure path. The Qt/QML interface provides an interactive graphical representation of the flight profile and associated obstacle clearance surface.

## Key Capabilities

- **TOFP segment calculation** — Segments 1, 2, 3 (and beyond) per PANS-OPS methodology
- **Obstacle clearance evaluation** — compare terrain/obstacle heights against the required clearance plane
- **Graphical profile view** — 2D side-profile display of the departure path and obstacles
- **Export** — save results for reporting or further analysis
- **Cross-platform** — native Qt application runs on Windows, Linux, and macOS

## Key Concepts

### Take-Off Flight Path Segments

| Segment               | Description                                |
| --------------------- | ------------------------------------------ |
| **Initial Climb**     | From lift-off to first flight level change |
| **Departure Segment** | Specific track from DER to PDG achievement |
| **En-route Segment**  | From PDG altitude onward                   |

### Procedure Design Gradient (PDG)

The minimum climb gradient required to clear all obstacles with the required vertical clearance (MOC). Default PDG is **3.3%** unless a higher gradient is required.

$$
PDG = \frac{h_{obs} + MOC}{d_{obs}} \times 100\%
$$

Where:

- $h_{obs}$ = obstacle height above DER elevation
- $d_{obs}$ = horizontal distance from DER
- $MOC$ = minimum obstacle clearance (typically 50 ft / 15 m in the initial departure area)

## Installation

### From Source

```bash
git clone https://github.com/FLYGHT7/tofpa.git
cd tofpa
```

Requires **Qt 5.x or 6.x** with Qt Quick (QML). Open `tofpa.pro` in Qt Creator and build.

### Pre-built Binaries

Check [GitHub Releases](https://github.com/FLYGHT7/tofpa/releases) for pre-built packages.

:::note Full Documentation Coming Soon
Input parameter guides, worked examples, and comparison with manual calculations will be published here. See the [GitHub repository](https://github.com/FLYGHT7/tofpa) for the latest source.
:::

## References

- ICAO Doc 8168 PANS-OPS Volume II — Construction of Visual and Instrument Flight Procedures
- Section 3 — Departure Procedures
