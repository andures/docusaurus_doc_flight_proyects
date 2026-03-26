---
sidebar_position: 1
---

# Profile Estimator

Estimates the **vertical profile** of an approach procedure — computing heights above threshold or MSL at given distances along the final approach track.

**[Open in app →](https://flyght7.com/webapp/Main.html#profile)**

## Background

The Profile Estimator helps procedure designers quickly verify that an approach profile is consistent with a defined glide path angle (GPA) or descent gradient, checking target heights at specific DME/distance points against published fixes, obstacles, and segment altitude constraints.

It is particularly useful in the early stages of procedure design to assess whether a proposed GPA and threshold crossing height (TCH) are compatible with the terrain and obstacle environment.

## Inputs

| Field                           | Unit    | Description                                                  |
| ------------------------------- | ------- | ------------------------------------------------------------ |
| Threshold Elevation             | ft or m | Elevation of the runway threshold                            |
| Threshold Crossing Height (TCH) | ft      | Nominal height of the glide path at the threshold            |
| Glide Path Angle (GPA)          | degrees | The descent angle (e.g., 3.00°)                              |
| Distance Points                 | NM      | List of distances from threshold at which to compute heights |

## Outputs

For each distance point entered:

| Value                  | Unit | Description                                                      |
| ---------------------- | ---- | ---------------------------------------------------------------- |
| Height above Threshold | ft   | Height of the GPA at that distance                               |
| Altitude (MSL)         | ft   | Absolute altitude (threshold elevation + height above threshold) |

## Height Formula

For a given distance $d$ (NM) from the threshold and glide path angle $\theta$:

$$
H_{above\_threshold} = d \times 6076.12 \times \tan(\theta)
$$

where $6076.12$ converts NM to feet.

## Notes

- This tool does not replace a full obstacle assessment — it is a quick profile check tool.
- Typical GPAs range from **2.5° to 3.5°** for instrument approaches; steeper angles up to 6.3° are permissible in some PANS-OPS criteria for special procedures.
- Always verify that the profile clears all segment minimum altitudes and the OCS/VSS.
- Reference: ICAO Doc 8168, Volume I, Part I, Chapter 4.
