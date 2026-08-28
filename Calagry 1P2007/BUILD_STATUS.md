# Calgary LUB 1P2007 — District Checklist Build Status

Tracks which `[DistrictCode]_Zoning_Review_Checklist.html` files (per the `lub-checklist` skill)
have been built for this folder. Update this file whenever a checklist is completed.

Status legend: ✅ Built &nbsp;·&nbsp; ⏳ Built, file not yet downloaded to this folder &nbsp;·&nbsp; ⬜ Not started

Last completed: CC-EPR (Centre City East Village Primarily Residential District), Part 12, Division 5 —
shares its General Rules tab with CC-ET, CC-EIR, and CC-EMU (Part 12, Division 1: Sec. 1217–1242).
CC-EPR's own District Rules division runs Purpose through Use Area (§1265–1270, 6 sections) with no
district-specific Motor Vehicle Parking Stalls, Restricted Parking Area relaxation, Short Stay
Parking Stalls, or Parking Stall Transfer section, so the General Rules §1233 parking baseline
applies directly — the same shape as CC-EIR and CC-EMU. CC-EPR's building-status conditional pattern
(§07 of the build spec) is the same plain two-way flip as its neighbours — Permitted (§1266(2),
existing approved building) vs. Discretionary (§1267(2), proposed building/addition) — with only one
sidebar checkbox (`newBuilding`) needed, covering 10 conditional support-commercial uses (one fewer
than CC-EMU's 11, two fewer than CC-EIR's 12 — CC-EPR's §1266(2) list has no Radio and Television
Studio, Instructional Facility, or Museum entry). Unlike CC-EIR and CC-EMU, CC-EPR's Restaurant: Food
Service Only carries no separate Permitted/Discretionary public-area split — it's simply one more
entry in the same conditional list, and both Restaurant: Food Service Only and Restaurant: Licensed
share one flat 150.0 m² public-area cap (§1270(3)) that applies regardless of building status,
computed as a static caveat rather than a second conditional branch (CC-EIR/CC-EMU instead have a
150.0 m² Permitted-only threshold PLUS a separate absolute <300.0 m² cap). CC-EPR's own use list runs
narrower than its CC-EIR/CC-EMU neighbours — 35 unconditional discretionary uses (down from CC-EIR's
48 and CC-EMU's 37) plus the one grandfather-only Parking Lot – Grade, with no Night Club, Dinner
Theatre, Brewery/Winery/Distillery, Post-secondary Learning Institution, Kennel, Veterinary Clinic,
or Drinking Establishment – Medium, consistent with its primarily-residential purpose — but it does
add Food Kiosk, Health Care Service, and Outdoor Recreation Area (none of which CC-EIR/CC-EMU offer),
and it moves Instructional Facility to an unconditional discretionary use instead of the
existing-building conditional list. CC-EPR's Density section matches CC-EMU's 6.65 max. FAR (lower
than CC-EIR's/CC-ET's shared 7.0), with a shorter 10-use FAR exclusion list (no Community Entrance
Feature, Museum, or Post-secondary Learning Institution) and no separate Post-secondary Learning
Institution FAR carve-out. Its Use Area section keeps CC-EMU's Health Care Service counselling
carve-out (200.0 m² baseline lifting to 465.0 m² for counselling-only activities). CC-EPR permits
only Sign – Class A unconditionally (Classes B–E all discretionary, no Class F/G, same shape as
CC-EIR/CC-EMU/CC-ET), and its sign figures match CC-EMU's exactly — the same §97(4) conditional
7.0 m²/6.0 m Freestanding Sign cap tied to commercial multi-residential uses, the same 2.3 m²
Projecting Sign cap under §102(1), and the same restrictive 1.0 m² Digital Message Sign pathway under
§104(2)/(6)(b) — CC-EPR is explicitly grouped alongside CC-EMU in all three of those citywide
subsections. Before that: CC-EMU (Centre City East Village Mixed Use District), Part 12, Division 4 — shares
its General Rules tab with CC-ET and CC-EIR (Part 12, Division 1: Sec. 1217–1242). Like CC-EIR,
CC-EMU's own District Rules division runs Purpose through Use Area (§1259–1264, 6 sections) with
no district-specific Motor Vehicle Parking Stalls, Restricted Parking Area relaxation, Short Stay
Parking Stalls, or Parking Stall Transfer section, so the General Rules §1233 parking baseline
applies directly. CC-EMU's building-status conditional pattern (§07 of the build spec) is the same
plain two-way flip as CC-ET/CC-EIR — Permitted (§1260(2), existing approved building) vs.
Discretionary (§1261(2), proposed building/addition) — with only one sidebar checkbox
(`newBuilding`) needed. CC-EMU's own use list runs 11 conditional support-commercial uses (one
fewer than CC-EIR's 12 — CC-EMU's §1260(2) list has no Radio and Television Studio entry) plus a
conditional Restaurant: Food Service Only, one grandfather-only discretionary use (Parking Lot –
Grade), and 37 unconditional discretionary uses — notably including Kennel and Veterinary Clinic,
neither available in CC-EIR or CC-ET. Unlike CC-EIR, CC-EMU's Restaurant uses carry a *second*,
absolute public-area cap independent of the checkbox and the 150.0 m² Permitted/Discretionary
split: §1264(3) caps the public area of both Restaurant: Food Service Only and Restaurant: Licensed
at LESS THAN 300.0 m² outright, and §1261(4) makes both Restaurant uses additionally discretionary
when located in a Municipal Historic Resource building — a pathway CC-EIR's District Rules don't
have. CC-EMU's Density section also diverges: a 6.65 max. FAR, lower than CC-EIR's and CC-ET's
shared 7.0, with no separate 3.0-FAR carve-out for Post-secondary Learning Institution gross floor
area (CC-EIR has one). Its Use Area section adds a counselling carve-out for Health Care Service
(the 200.0 m² cap lifts to 465.0 m² when activities are limited to counselling) that CC-EIR's
equivalent section doesn't have. CC-EMU permits only Sign – Class A unconditionally (Classes B–E
all discretionary, no Class F/G, same shape as CC-EIR/CC-ET), and most of its sign figures match
CC-EIR's — a 2.3 m² Projecting Sign cap under §102(1) and a restrictive 1.0 m² Digital Message Sign
pathway under §104(2)/(6)(b) — but its Freestanding Sign rule genuinely differs: instead of
CC-EIR/CC-ET's flat 14.0 m²/9.0 m figure under §97(3), CC-EMU falls under §97(4)'s conditional
7.0 m²/6.0 m cap, but only where the parcel contains commercial multi-residential uses; the bylaw
doesn't spell out a fallback rate for a CC-EMU parcel that doesn't meet that condition, so the tool
flags it as a caveat to confirm directly rather than assuming either figure. Before that: CC-EIR
(Centre City East Village Integrated Residential District), Part 12, Division 3 — shares its
General Rules tab with CC-ET, and its own District Rules division (§1253–1258) uses the same
building-status two-way flip pattern; its use list runs 12 conditional support-commercial uses and
48 unconditional discretionary uses (notably Dinner Theatre and Night Club, with Night Club
triggering the Part 2 §27(2)(f.1) Notice Posting requirement), and it permits only Sign – Class A
unconditionally, with a 2.3 m² Projecting Sign cap and a 14.0 m²/9.0 m Freestanding Sign matching
CC-ET's. Before that: CC-ET (Centre City East Village Transition District), Part 12, Division 2 —
the first Centre City East Village district built, so it introduced the shared General Rules tab
sourced from Part 12, Division 1, distinct from both the CC-MH/CC-MHX family's Division 1 and the
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
| 12 | 4 | CC-EMU | ✅ `CCEMU_Zoning_Review_Checklist.html` |
| 12 | 5 | CC-EPR | ✅ `CCEPR_Zoning_Review_Checklist.html` |
| 12 | 6 | CC-ERR | ⬜ |
| 12 | 7 | CC-ER | ⬜ |
| 13 | 2–3 | CR20-C20/R20 | ⬜ |
| 14 | 2 | MU-1 | ⬜ |
| 14 | 3 | MU-2 | ⬜ |
