---
sidebar_position: 1
---

# ISA Deviation Calculator

Calculates the **International Standard Atmosphere (ISA) temperature deviation** (ΔISA) for a given aerodrome and observed temperature, and computes key ISA-related temperatures.

**[Open in app →](https://flyght7.com/webapp/Main.html#isa)**

## Background

The ISA defines a standard temperature lapse rate starting at 15 °C at Mean Sea Level (MSL), decreasing at 1.98 °C per 1,000 ft up to the tropopause. Procedure designers use the ISA deviation to determine the Temperature Correction that must be applied to minimum altitudes/heights to account for cold temperature effects on altimetry.

The ISA temperature at altitude is:

$$
T_{ISA} = 15 - 1.98 \times \frac{Elevation_{ft}}{1000}
$$

The deviation is:

$$
\Delta ISA = T_{OBS} - T_{ISA}
$$

## Inputs

| Field                         | Unit    | Description                                       |
| ----------------------------- | ------- | ------------------------------------------------- |
| ICAO Airport Code             | —       | Optional — used for reference labeling            |
| Aerodrome Elevation           | ft or m | The elevation of the aerodrome above MSL          |
| Reference Temperature (T_REF) | °C      | Observed / reference temperature at the aerodrome |
| Rounding Step                 | —       | Rounding precision for the output (default: 5)    |

## Outputs

| Value      | Description                                     |
| ---------- | ----------------------------------------------- |
| T_ISA      | Standard ISA temperature at the given elevation |
| ΔISA       | Deviation from ISA (T_OBS − T_ISA)              |
| ISA + ΔISA | Confirms the observed temperature               |

## Notes

- The Reference Temperature used for cold temperature corrections in procedure design is typically the **mean of daily minimum temperatures of the coldest month** at the aerodrome (ICAO Doc 8168, Part III, Chapter 4).
- A positive ΔISA (ISA+) means warmer than standard — altimeter reads higher than actual.
- A negative ΔISA (ISA−) means colder than standard — altimeter reads lower than actual; cold temperature correction must be applied.
