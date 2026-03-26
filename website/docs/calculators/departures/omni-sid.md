---
sidebar_position: 1
---

# OMNI SID PDG

Calculates the minimum **Procedure Design Gradient (PDG)** required for an **OMNI-directional Standard Instrument Departure (SID)** to ensure obstacle clearance in all directions from an aerodrome.

**[Open in app →](https://flyght7.com/webapp/Main.html#omni-sid)**

## Background

An OMNI SID provides departures in any direction from an aerodrome without requiring aircraft-specific obstacle clearance data. The procedure must guarantee clearance over all obstacles within the departure area, regardless of the departure track.

The PDG is the minimum climb gradient (expressed as a percentage, ft/NM, or m/km) that aircraft must achieve after reaching 50 ft (15 m) above the Departure End of Runway (DER) to clear the obstacle with the required clearance margin.

The nominal PDG in PANS-OPS is **3.3%** (200 ft/NM). If obstacles penetrate the Obstacle Identification Surface (OIS), a higher PDG is published.

## Key Formula

$$
PDG = \frac{(H_{OBS} + MOC) - H_{DER}}{D_{OBS}} \times 100\%
$$

Where:

- $H_{OBS}$ = obstacle elevation (ft or m)
- $MOC$ = Minimum Obstacle Clearance in climb segment (typically 0.8% of distance + initial allowance)
- $H_{DER}$ = height at the DER (50 ft / 15 m above DER elevation)
- $D_{OBS}$ = horizontal distance from DER to obstacle

## Inputs

| Field                | Unit     | Description                                              |
| -------------------- | -------- | -------------------------------------------------------- |
| DER Elevation        | ft or m  | Elevation of the Departure End of Runway                 |
| Obstacle Elevation   | ft or m  | Highest obstacle elevation within the departure sector   |
| Distance to Obstacle | NM or km | Horizontal distance from DER to the controlling obstacle |
| MOC Multiplier       | —        | PANS-OPS MOC value (default: 0.8% of distance)           |

## Outputs

| Value        | Unit  | Description                                              |
| ------------ | ----- | -------------------------------------------------------- |
| Required PDG | %     | Minimum climb gradient to clear the controlling obstacle |
| PDG          | ft/NM | Same gradient expressed in ft per NM                     |
| PDG          | m/km  | Same gradient expressed in m per km                      |

## Notes

- The PDG applies from the DER up to 15 NM (Minimum Sector Altitude area) or until the departure area is exited.
- If the computed PDG exceeds aircraft performance limits, the OMNI SID must be redesigned with a limited sector or a conditional departure procedure.
- Reference: ICAO Doc 8168, Volume II, Part I, Section 3, Chapter 3.
