---
name: Vitalis Logic
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffc174'
  on-tertiary: '#472a00'
  tertiary-container: '#f59e0b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeric-data:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  grid-margin: 20px
  grid-gutter: 16px
---

## Brand & Style

The design system is engineered for a high-performance health-monitoring ecosystem. It balances the precision of medical technology with the approachable calm of a personal wellness companion. The aesthetic is **Corporate / Modern** with a lean toward **Minimalism**, prioritizing data clarity and cognitive ease.

The target audience consists of health-conscious individuals and patients who require reliable, real-time feedback without feeling overwhelmed by "clinical" coldness. The UI evokes a sense of quiet authority and proactive care through organized information density and a sophisticated dark-mode-first approach.

## Colors

This design system utilizes a deep-sea palette to minimize eye strain and maximize the vibrance of health data metrics. 

- **Primary Canvas:** The background uses a deep navy (`#0F172A`), providing a high-contrast base for data visualization.
- **Accents:** A soft blue is used for primary actions, while the semantic palette (Mint, Amber, Coral) is reserved strictly for status communication:
    - **Mint Green (#10B981):** Represents "Optimal" or "Goal Achieved" states.
    - **Amber (#F59E0B):** Represents "Caution" or "Moderate" activity levels.
    - **Soft Coral (#EF4444):** Reserved for urgent "Alerts" or "Critically Low" metrics.
- **Surface Strategy:** Use slightly lighter shades of navy (`#1E293B`) to define card containers and interactive surfaces, creating depth without relying on heavy borders.

## Typography

The design system relies on **Inter** for its exceptional legibility in data-dense environments. 

- **Hierarchy:** Use `display-lg` and `numeric-data` for primary health metrics (e.g., Heart Rate, Steps). These should be the largest elements on the screen.
- **Labels:** Use `label-md` with uppercase styling for category headers and axis labels in charts.
- **Scale:** On mobile devices, ensure headlines scale down to prevent text wrapping on critical metric cards. Use medium weights (500) for secondary information to maintain a clean, non-aggressive visual tone.

## Layout & Spacing

The design system employs a **Fluid Grid** model based on a 4px baseline rhythm.

- **Desktop:** 12-column grid with 24px gutters and 40px margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.
- **Philosophy:** Content is grouped into modular cards. Spacing between related metrics within a card should be `sm` (8px) or `md` (16px), while spacing between major dashboard sections should be `xl` (32px) to provide visual breathing room.

## Elevation & Depth

To maintain a professional, data-driven look, the design system uses **Tonal Layers** rather than heavy shadows.

- **Level 0 (Base):** `#0F172A` (Main background).
- **Level 1 (Cards/Containers):** `#1E293B` with a subtle 1px border of `#334155`.
- **Level 2 (Overlays/Modals):** `#334155` with an ambient, extra-diffused shadow (0px 8px 24px rgba(0, 0, 0, 0.4)).
- **Depth:** Interaction is conveyed by increasing the brightness of the surface slightly on hover/active states, rather than physical "lift."

## Shapes

The shape language is **Rounded**, reflecting the organic nature of health and the human body while maintaining a "tech" edge.

- **Cards & Buttons:** Use a standard 0.5rem (8px) corner radius.
- **Gauges & Icons:** Health indicators like heart rate rings or activity progress should always be perfectly circular to contrast against the rectangular grid system.
- **Selection States:** Use pill-shaped indicators for active tab states or chips.

## Components

- **Buttons:** Primary buttons use a solid `#38BDF8` fill with white or deep navy text. Secondary buttons are "Ghost" style with a `#334155` border.
- **Metric Cards:** Rounded containers (`rounded-lg`) that house a title, a large numeric value, and a small sparkline or gauge. Background should be `surface`.
- **Circular Gauges:** Use a 4px to 8px stroke width for progress rings. The "track" should be a low-opacity version of the metric color (e.g., 10% opacity Mint).
- **Chips:** Used for filtering data (e.g., "1D", "1W", "1M"). Use the `surface-variant` background with `body-md` typography.
- **Input Fields:** Darker than the card surface to provide a "recessed" feel. Focus states must use the `primary_color_hex` border.
- **Lists:** Clean rows with `md` (16px) vertical padding, separated by a subtle 1px divider (`#334155`).
- **Health Indicators:** Tiny colored dots (Mint, Amber, Coral) placed next to timestamps or logs to provide immediate status context without reading text.