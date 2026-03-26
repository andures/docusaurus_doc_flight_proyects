---
sidebar_position: 4
---

# Circling Protection Area

Determines the **circling protection area** dimensions for a circling approach, based on aircraft category and aerodrome elevation (TAS).

**[Open in app →](https://flyght7.com/webapp/Main.html#circling)**

## Background

A **circling approach** allows an aircraft to land on a runway not aligned with the final approach segment. After completing the instrument approach, the aircraft maneuvers visually at the **Circling MDA/H** to align with the landing runway.

ICAO PANS-OPS defines the circling protection area as a set of **overlapping circles** centered at each runway threshold end, with a radius that depends on aircraft category (which determines maximum TAS during circling) and aerodrome pressure altitude.

The circling area must be free of obstacle penetrations above the circling OCS (a horizontal plane at the circling MDA/H minus the required obstacle clearance of 90 m / 295 ft for Cat A/B or 120 m / 394 ft for Cat C/D/E).

## Aircraft Categories

PANS-OPS aircraft categories for circling:

| Category | Max Approach Speed (IAS) | Max Circling Speed (IAS) |
| -------- | ------------------------ | ------------------------ |
| A        | ≤ 90 kt                  | 100 kt                   |
| B        | 91–120 kt                | 135 kt                   |
| C        | 121–140 kt               | 180 kt                   |
| D        | 141–165 kt               | 205 kt                   |
| E        | 166–210 kt               | 240 kt                   |

## Protection Area Radius

The radius $R$ of each circle is:

$$
R = \frac{TAS^2}{68629 \times \tan(25°)} + \frac{TAS \times t_{bank}}{3600}
$$

Where $t_{bank}$ is the time to establish the bank angle (typically 3 seconds).

The TAS is derived from the maximum circling IAS corrected for aerodrome altitude and temperature (ISA + 15°C as standard).

## Inputs

| Field               | Unit    | Description                                     |
| ------------------- | ------- | ----------------------------------------------- |
| Aircraft Category   | —       | A, B, C, D, or E                                |
| Aerodrome Elevation | ft or m | Elevation of the aerodrome (for TAS correction) |
| ISA Deviation       | °C      | Temperature deviation from ISA at the aerodrome |

## Outputs

| Value                | Unit  | Description                                                             |
| -------------------- | ----- | ----------------------------------------------------------------------- |
| TAS (circling)       | knots | True Airspeed used for area construction                                |
| Radius of Turn       | NM    | Turn radius used for the protection circles                             |
| Circling Area Radius | NM    | Total radius of the circling protection area from each runway threshold |

## Notes

- New (expanded) circling criteria (introduced in ICAO Doc 8168, 6th Edition Amendment 1, 2013) differ from the traditional criteria used before. Verify which standard applies to your procedure.
- The circling protection area must encompass **all runways** at the aerodrome.
- Reference: ICAO Doc 8168, Volume I, Part I, Chapter 4, Section 4.7.
