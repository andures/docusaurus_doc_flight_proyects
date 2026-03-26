---
sidebar_position: 2
---

# True Airspeed (TAS) Calculator

Converts **Calibrated Airspeed (CAS)** or **Indicated Airspeed (IAS)** to **True Airspeed (TAS)** for a given altitude and temperature condition.

**[Open in app →](https://flyght7.com/webapp/Main.html#tas)**

## Background

True Airspeed is the actual speed of the aircraft relative to the surrounding air mass. It differs from CAS/IAS due to air density decreasing with altitude. TAS is a critical parameter in PANS-OPS calculations — obstacle clearance areas, turn radii, and wind spiral widths are all defined in terms of TAS.

The simplified conversion formula is:

$$
TAS = CAS \times \left(1 + \frac{Altitude_{ft}}{1000} \times 0.02\right)
$$

A more precise calculation accounts for ISA deviation (ΔISA) and uses the actual air density ratio.

## Inputs

| Field                | Unit    | Description                                                       |
| -------------------- | ------- | ----------------------------------------------------------------- |
| CAS / IAS            | knots   | Calibrated or Indicated Airspeed                                  |
| Altitude             | ft or m | Pressure altitude                                                 |
| ISA Deviation (ΔISA) | °C      | Temperature deviation from ISA standard (optional, defaults to 0) |

## Outputs

| Value | Unit  | Description                           |
| ----- | ----- | ------------------------------------- |
| TAS   | knots | True Airspeed at the given conditions |

## Notes

- In PANS-OPS, the maximum TAS for each aircraft category at a specific phase of flight is defined in ICAO Doc 8168, Volume I, Part II.
- For protection area construction, TAS is normally computed at the **highest applicable altitude** and with a **positive ISA deviation** (warm conditions) to produce the most conservative (widest) protection areas.
