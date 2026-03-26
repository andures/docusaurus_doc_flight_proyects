---
sidebar_position: 1
---

# ILS Height Calculations

Computes the **height of the ILS glide path** at specified distances from the threshold (or DME fixes) along the ILS final approach segment.

**[Open in app →](https://flyght7.com/webapp/Main.html#ils-height)**

## Background

The ILS glide path is a straight line rising from the threshold at the **Glide Path Angle (GPA)** — typically 3°. Knowing the nominal height at each fix or DME distance is essential for:

- Verifying segment altitude constraints (stepdown fixes)
- Checking obstacle clearance along the approach
- Computing the Decision Altitude/Height (DA/H)
- Cross-checking altimeter readouts during a procedure check

## Height Formula

For a given distance $d$ (NM) from the **threshold**:

$$
H_{above\_threshold} = d \times 6076.12 \times \tan(GPA)
$$

The height **above MSL** is:

$$
H_{MSL} = H_{above\_threshold} + Elevation_{threshold}
$$

For a 3° GPA, this approximates to approximately **318 ft per NM**.

## Inputs

| Field                           | Unit    | Description                                                     |
| ------------------------------- | ------- | --------------------------------------------------------------- |
| Threshold Elevation             | ft or m | Runway threshold elevation above MSL                            |
| Threshold Crossing Height (TCH) | ft      | Height of the glide path at the threshold (typically 50–60 ft)  |
| Glide Path Angle (GPA)          | degrees | ILS glide path angle                                            |
| Distance Points                 | NM      | One or more distances from threshold at which to compute height |

## Outputs

For each distance:

| Value                  | Unit | Description                            |
| ---------------------- | ---- | -------------------------------------- |
| Height above Threshold | ft   | ILS glide path height at that distance |
| Altitude (MSL)         | ft   | Absolute altitude on the glide path    |

## Notes

- The ILS glide path origin for calculation purposes is the **Threshold Crossing Point** (TCP) at the TCH.
- The TCH is typically 50 ft (Cat I) or 55 ft (Cat II/III) above the runway threshold.
- Always compare computed heights against published IAL altitude constraints and obstacle clearance requirements.
- Reference: ICAO Doc 8168, Volume I, Part III / ICAO Annex 10.
