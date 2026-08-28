# Calgary LUB 1P2007 — District Checklist Build Status

Tracks which `[DistrictCode]_Zoning_Review_Checklist.html` files (per the `lub-checklist` skill)
have been built for this folder. Update this file whenever a checklist is completed.

Status legend: ✅ Built &nbsp;·&nbsp; ⏳ Built, file not yet downloaded to this folder &nbsp;·&nbsp; ⬜ Not started

Last completed: CC-EIR (Centre City East Village Integrated Residential District), Part 12,
Division 3 — shares its General Rules tab with CC-ET (Part 12, Division 1: Sec. 1217–1242), since
both are Centre City East Village districts, but CC-EIR's own District Rules division is
noticeably shorter than CC-ET's: it runs Purpose through Use Area (§1253–1258, 6 sections) with no
district-specific Motor Vehicle Parking Stalls, Restricted Parking Area relaxation, Short Stay
Parking Stalls, or Parking Stall Transfer section at all — unlike CC-ET's §1249–1252 — so the
General Rules §1233 parking baseline applies to CC-EIR directly. CC-EIR's building-status
conditional pattern (§07 of the build spec) is the same plain two-way flip as CC-ET — Permitted
(§1254(2), existing approved building) vs. Discretionary (§1255(2), proposed building/addition) —
with only one sidebar checkbox (`newBuilding`) needed. CC-EIR's own use list runs 12 conditional
support-commercial uses (one fewer than CC-ET's 13 — CC-EIR's §1254(2) list has no Catering
Service – Minor entry) plus a conditional Restaurant: Food Service Only (both gated on the single
checkbox, with the Restaurant's 150.0 m² public-area threshold spelled out as static text), one
grandfather-only discretionary use (Parking Lot – Grade), and 48 unconditional discretionary uses
— notably including Dinner Theatre and Night Club, neither available in CC-ET; CC-EIR's Night Club
use also triggers the Part 2 §27(2)(f.1) mandatory Notice Posting requirement. CC-EIR permits only
Sign – Class A unconditionally (Classes B–E all discretionary, no Class F/G, same shape as CC-ET),
but its dimensional figures diverge: CC-EIR's Projecting Sign cap is a tighter 2.3 m² under
§102(1) (grouped with CC-MH/CC-MHX/CC-EMU/CC-EPR/etc.) versus CC-ET's more permissive 4.5 m²
carve-out under §102(3), while its Freestanding Sign (14.0 m²/9.0 m, §97(3)) and Digital Message
Sign (1.0 m², institutional/recreational uses only, §104(2)/(6)(b)) figures match CC-ET's exactly.
Before that: CC-ET (Centre City East Village Transition District), Part 12, Division 2 — the first
Centre City East Village district built, so it introduced the shared General Rules tab sourced
from Part 12, Division 1, distinct from both the CC-MH/CC-MHX family's Division 1 and the
CC-X/CC-COR family's Division 4. Before that: CC-COR (Centre City Commercial Corridor District),
Part 11, Division 6 — shares its general-rules tab with CC-X (Part 11, Division 4: General Rules
for Centre City Commercial Land Use Districts), a different general-rules division than the
CC-MH/CC-MHX family (Division 1). CC-COR's own use list runs 21 conditional support-commercial
uses (vs. CC-X's 18 — CC-COR additionally gates Financial Institution and Museum behind the
building-status checkboxes) and 41 unconditional discretionary uses (vs. CC-X's 52); CC-COR has no
Sign – Class G use at all, unlike CC-X's existing-only allowance. Before that: CC-X (Centre City
Mixed Use District), Part 11, Division 5. Before that: CC-MHX (Centre City Multi-Residential High
Rise Support Commercial), Part 11, Division 3. S-TUC (Special Purpose – Transportation and Utility
Corridor), Part 9, Division 10, merged alongside S-FUD (Special Purpose – Future Urban
Development), Part 9, Division 9, which was built concurrently in a separate PR. S-URP (Division
8) and S-CRI (Division 7) were built in earlier PRs and are also ✅ complete.

## Part 5 — Residential Districts

| Division | District Code(s) | Status |
|---|---|---|
| 2 | R-C1L & R-C1Ls | ✅ `RC1L_Zoning_Review_Checklist.html` |
| 3 | RC-1 & RC1s | ✅ `RC1_Zoning_Review_Checklist.html` |
| 4 | R-C1N | ✅ `RC1N_Zoning_Review_Checklist.html` |
| 5 | R-C2 | ✅ `RC2_Zoning_Review_Checklist.html` |
| 6 | R-1 & R-1s | ✅ `R1_Zoning_Review_Checklist.html` |
| 7 | R-1N | ✅ `R1N_Zoning_Review_Checklist.html` |
| 8 | R-2 | ✅ `R2_Zoning_Review_Checklist.html` |
| 9 | R-2M | ✅ `R2M_Zoning_Review_Checklist.html` |
| 10 | R-MH | ✅ `RMH_Zoning_Review_Checklist.html` |
| 11 | R-CG, R-CGex | ✅ `RCG_Zoning_Review_Checklist.html` |
| 12 | (R-G)(R-Gm) | ✅ `RG_Zoning_Review_Checklist.html` |

## Part 6 — Multi-Residential Districts

| Division | District Code(s) | Status |
|---|---|---|
| 2 | M-CG | ✅ `MCG_Zoning_Review_Checklist.html` |
| 3 | M-C1 | ✅ `MC1_Zoning_Review_Checklist.html` |
| 4 | M-C2 | ✅ `MC2_Zoning_Review_Checklist.html` |
| 5 | M-G | ✅ `MG_Zoning_Review_Checklist.html` |
| 6 | M-1 | ✅ `M1_Zoning_Review_Checklist.html` |
| 7 | M-2 | ✅ `M2_Zoning_Review_Checklist.html` |
| 8 | M-H1 | ✅ `MH1_Zoning_Review_Checklist.html` |
| 9 | M-H2 | ✅ `MH2_Zoning_Review_Checklist.html` |
| 10 | M-H3 | ✅ `MH3_Zoning_Review_Checklist.html` |
| 11 | M-X1 | ✅ `MX1_Zoning_Review_Checklist.html` |
| 12 | M-X2 | ✅ `MX2_Zoning_Review_Checklist.html` |

**Part 6 (Multi-Residential) is now complete.**

## Part 7 — Commercial Districts

| Division | District Code(s) | Status |
|---|---|---|
| 2 | C-N1 | ✅ `CN1_Zoning_Review_Checklist.html` |
| 3 | C-N2 | ✅ `CN2_Zoning_Review_Checklist.html` |
| 4 | C-C1 | ✅ `CC1_Zoning_Review_Checklist.html` |
| 5 | C-C2 | ✅ `CC2_Zoning_Review_Checklist.html` |
| 6 | C-COR1 | ✅ `CCOR1_Zoning_Review_Checklist.html` |
| 7 | C-COR2 | ✅ `CCOR2_Zoning_Review_Checklist.html` |
| 8 | C-COR3 | ✅ `CCOR3_Zoning_Review_Checklist.html` |
| 9 | C-O | ✅ `CO_Zoning_Review_Checklist.html` |
| 10 | C-R1 | ✅ `CR1_Zoning_Review_Checklist.html` |
| 11 | C-R2 | ✅ `CR2_Zoning_Review_Checklist.html` |
| 12 | C-R3 | ✅ `CR3_Zoning_Review_Checklist.html` |

**Part 7 (Commercial) is now complete.**

## Part 8 — Industrial Districts

| Division | District Code(s) | Status |
|---|---|---|
| 2 | I-G | ✅ `IG_Zoning_Review_Checklist.html` |
| 3 | I-B | ✅ `IB_Zoning_Review_Checklist.html` |
| 4 | I-E | ✅ `IE_Zoning_Review_Checklist.html` |
| 5 | I-C | ✅ `IC_Zoning_Review_Checklist.html` |
| 6 | I-R | ✅ `IR_Zoning_Review_Checklist.html` |
| 7 | I-O | ✅ `IO_Zoning_Review_Checklist.html` |
| 8 | I-H | ✅ `IH_Zoning_Review_Checklist.html` |

**Part 8 (Industrial) is otherwise complete.**

## Part 9 — Special Purpose Districts

| Division | District Code(s) | Status |
|---|---|---|
| 2 | S-UN | ✅ `SUN_Zoning_Review_Checklist.html` |
| 3 | S-SPR | ✅ `SSPR_Zoning_Review_Checklist.html` |
| 4 | S-CS | ✅ `CS_Zoning_Review_Checklist.html` |
| 5 | S-R | ✅ `SR_Zoning_Review_Checklist.html` |
| 6 | S-CI | ✅ `CI_Zoning_Review_Checklist.html` |
| 7 | S-CRI | ✅ `CRI_Zoning_Review_Checklist.html` |
| 8 | S-URP | ✅ `SURP_Zoning_Review_Checklist.html` |
| 9 | S-FUD | ✅ `SFUD_Zoning_Review_Checklist.html` |
| 10 | S-TUC | ✅ `STUC_Zoning_Review_Checklist.html` |

**Part 9 (Special Purpose) is now complete.**

## Part 11–14 — Centre City (Downtown) Districts

Part 10 ("Downtown") was deleted by 33P2013 in 2014 and replaced by the Centre City district
family below — this is the current "downtown" zoning group referenced by the Land Use Bylaw.

| Part | Division | District Code(s) | Status |
|---|---|---|---|
| 11 | 2 | CC-MH | ✅ `CCMH_Zoning_Review_Checklist.html` |
| 11 | 3 | CC-MHX | ✅ `CCMHX_Zoning_Review_Checklist.html` |
| 11 | 5 | CC-X | ✅ `CCX_Zoning_Review_Checklist.html` |
| 11 | 6 | CC-COR | ✅ `CCCOR_Zoning_Review_Checklist.html` |
| 12 | 2 | CC-ET | ✅ `CCET_Zoning_Review_Checklist.html` |
| 12 | 3 | CC-EIR | ✅ `CCEIR_Zoning_Review_Checklist.html` |
| 12 | 4 | CC-EMU | ⬜ |
| 12 | 5 | CC-EPR | ⬜ |
| 12 | 6 | CC-ERR | ⬜ |
| 12 | 7 | CC-ER | ⬜ |
| 13 | 2–3 | CR20-C20/R20 | ⬜ |
| 14 | 2 | MU-1 | ⬜ |
| 14 | 3 | MU-2 | ⬜ |
