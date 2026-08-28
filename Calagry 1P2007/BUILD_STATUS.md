# Calgary LUB 1P2007 — District Checklist Build Status

Tracks which `[DistrictCode]_Zoning_Review_Checklist.html` files (per the `lub-checklist` skill)
have been built for this folder. Update this file whenever a checklist is completed.

Status legend: ✅ Built &nbsp;·&nbsp; ⏳ Built, file not yet downloaded to this folder &nbsp;·&nbsp; ⬜ Not started

Last completed: MU-1 (Mixed Use – General District), Part 14, Division 2 — the first district built
in this table that isn't a Part 11–13 Centre City (Downtown) district: it introduces its own General
Rules division (Part 14, Division 1: §1333–1364, 31 items covering 32 section numbers — §1357 is
wholly deleted) shared only with the not-yet-built MU-2,
distinct from every Centre City General Rules division built so far. MU-1's building-status
conditional pattern (§07 of the build spec) needed a genuinely new two-checkbox combination:
`newBuilding` (§1367(1) — existing approved building vs. proposed building/addition, flipping 21 of
MU-1's 62 uses between Permitted and Discretionary) plus `groundFloor` (§1367(2) — a second, purely
floor-based trigger that ALSO makes 8 of those 21 uses — Artist's Studio, Catering Service – Minor,
Financial Institution, Health Care Service, Instructional Facility, Office, Service Organization,
Veterinary Clinic — discretionary when on the ground floor of an existing building, independent of
whether the building itself is "proposed"). That's a different shape than CR20-C20/R20's
newBuilding+skywalk combination or CC-EMU/CC-EIR/CC-EPR's newBuilding-only pattern — here the second
checkbox is a floor location, not a connection feature, and it only matters when the first checkbox is
unchecked. The Restaurant pair (Food Service Only, Licensed) layers a third, non-checkbox condition on
top of `newBuilding`: a static 150.0 m² public-area threshold (§1366(2.1)/§1367(1.1)) that the build
spec's §07 caveat rule says not to gate behind a toggle, PLUS a genuinely MU-1/MU-2-specific citywide
rule found while sourcing Part 4 — §278(e)/§281(e) requires either Restaurant use sit more than 45.0 m
from a residential district whenever its public area exceeds 150.0 m² in MU-1, a separation rule that
doesn't apply to most other districts' Restaurant uses at all. MU-1 is also the first district built
where the dimensional standards themselves are site-specific rather than fixed: Floor Area Ratio
(§1369), Density (§1370), and Building Height (§1371) are all "no maximum unless indicated" defaults
that resolve to whatever number follows the letters "f", "d" and "h" on the Land Use District Maps for
that parcel (the District's own MU-1f#h#d# naming convention) — the checklist flags all three as
site-specific caveats rather than guessing a figure, the same treatment CR20-C20/R20's out-of-scope
bonus-density system received, but here it's the *base* standard, not an add-on. Unlike CR20-C20/R20,
Cannabis Store and Liquor Store are NOT exempted from the standard 300.0 m same-use/150.0 m
school-proximity separation rules in MU-1 — flagged directly on those Use tab items. The Citywide tab
is also the first built in a while with no unresolved Bylaw gap: MU-1 is explicitly named in §65's
outdoor-lighting-height group, §97(3)'s Freestanding Sign group (14.0 m²/9.0 m), §102(3)'s Projecting
Sign group (4.5 m²), §104(1)/(6)(a)'s less-restrictive Digital Message Sign pathway, and §107(1)(b.1)'s
Roof Sign eligibility ("all mixed use districts") — every citywide sign/lighting figure resolves
cleanly. MU-1's own use list runs 62 uses total (8 flat permitted, 11 building-status-conditional, 2
Restaurant uses conditional on building status plus the static area/distance caveats, 8 conditional on
both checkboxes together, and 33 flat discretionary) across a General tab of 31 items (§1333–1364,
with §1357 — wholly deleted — folded into the adjacent §1358 Garbage item as a caveat rather than
itemized), a District tab of 10 items (§1365–1374), and a Citywide tab of 34 items, on par with most
of the family, now also covering the previously-uncovered §59/§60 Flood Fringe building-design
sections and a "deleted" placeholder for §127–129's repealed cash-in-lieu parking areas (75 total
non-use items, 137 grand total with the 62 Use tab items). Verified with an automated
Playwright smoke test covering tab navigation (31/10/34/0 cards before any use is selected, 0/0 on the
Use tab), the use-selector's Permitted/Discretionary optgroup counts shifting correctly under all three
checkbox states (29/33 unchecked, 8/54 with `newBuilding` checked, 21/41 with `groundFloor` checked
alone), status-pill clicks updating the card/stat-strip/tab badge/overall-progress bar together, and a
full CSV export/import round trip (137 rows exported — every General/District/Citywide item plus every
Use tab item with its Proposed Yes/No flag — with project fields and notes containing embedded commas,
quotes, and newlines, and both District Conditions checkboxes, diffed to zero mismatches). Before that:
CR20-C20/R20 (Commercial Residential District), Part 13, Divisions 2–3 — the first
Downtown district built outside the Part 11/12 Centre City East Village/Multi-Residential-High-Rise
family, and the first with three independent District Conditions checkboxes rather than one or two.
Its own District Rules division (§1305–1331, 27 sections) runs Purpose through Location of Bicycle
Parking Stalls, with a full district-specific motor vehicle/bicycle parking framework (§1325–1331) —
unlike CC-ER, it never falls back to a General Rules parking baseline. The building-status pattern
(§07 of the build spec) needed three flags instead of the family's usual one or two: `newBuilding`
(§1306(2)/§1307(1) flips 24 support-commercial/office uses between Permitted-if-existing and
Discretionary-if-proposed), `skywalkSecondFloor` (§1306(3)/§1307(2) additionally makes 8 more uses —
Catering Service – Minor, Counselling Service, Fitness Centre, Health Services Laboratory – With
Clients, Medical Clinic, Power Generation Facility – Small, Radio and Television Studio, Service
Organization — discretionary when on the second floor of an existing building with a +15 Skywalk
connection, layered on top of the `newBuilding` check), and `transitionArea` (§1308 — the first
checkbox in the family to make a use UNAVAILABLE rather than merely discretionary: Drinking
Establishment – Large and Sign – Class G drop out of the "add a use" dropdown entirely, though an
already-added card stays on screen re-labeled "Not available" per the build spec's re-label-don't-
delete rule, verified directly with Playwright). CR20-C20/R20's own use list is the broadest built so
far in the Centre City family — 95 Use tab items (6 flat permitted, 24 building-status-conditional,
8 skywalk-conditional, 53 flat discretionary, 2 grandfather-only, 2 transition-conditional) — including
several legacy/deemed-use terms with no standalone Part 4 section (Accessory Food Service, Accessory
Liquor Service, Take Out Food Service, Market, Counselling Service, Medical Clinic, Cannabis
Counselling, Health Services Laboratory – With Clients — all resolved via §134.1's deeming clauses or
flagged with a "—" section and a caveat where no deeming exists). Two uses carry a genuinely unique
citywide exemption: Cannabis Store (§160.3) and Liquor Store (§225) are both expressly carved out of
the standard 300.0 m same-use and 150.0 m school-proximity separation-distance rules that apply almost
everywhere else in the city. The Citywide tab surfaces two outright gaps in the Bylaw's own district
lists — CR20-C20/R20 is named in neither §65's outdoor-lighting-height groups nor §97's Freestanding
Sign area/height groups — flagged as caveats rather than guessed at, and one unique inclusion found in
no other district: a Third Party Advertising Sign (or its digital Class G equivalent) larger than
4.5 m² may be approved here as part of a comprehensive, building-incorporated development (§114(1.1)/
§115.5(1.1)). Sign Classes A, B and D are flat permitted uses in this District — unlike every East
Village district, where all sign classes are discretionary. Floor area ratio is a base 3.0, but the
Part 13, Division 3 incentive/bonus density system (Table 8 public amenity items, up to a max. 20.0
FAR) is deliberately out of scope for this checklist, the same treatment CC-X's Part 11, Division 7
bonus rules received — noted as a caveat on the Floor Area Ratio item rather than itemized. Verified
with an automated Playwright smoke test covering tab navigation, the use selector (add/remove across
all three District Conditions states), status-pill clicks, the re-label-not-remove behavior for a
card made unavailable by a later checkbox toggle, and a full CSV export/import round trip with project
fields and notes containing embedded commas/quotes/newlines. Before that: CC-ER (Centre City East
Village Recreational District), Part 12, Division 7 — the file for this district was already built and
merged (see git history) but this status file hadn't been updated to reflect it; corrected here.
Before that: CC-ERR (Centre City East Village River Residential District), Part 12, Division 6 —
the simplest East Village district built so far. CC-ERR is the first district in this family with
NO building-status conditional at all: its Permitted Uses section (§1272) has no second, conditional
support-commercial block the way CC-EPR's §1266(2), CC-EMU's §1260(2), and CC-EIR's §1254(2) each do
— there is no §1272(2). Every support-commercial-type use (Restaurant: Food Service Only, Restaurant:
Licensed, Retail and Consumer Service, Hotel, etc.) is instead a flat, unconditional discretionary
use under §1273, so this checklist needed no sidebar District Conditions checkbox and no live-computed
use-status logic (§07 of the build spec) — `allItemsForTab` simply returns `CHECKLIST_DATA[tabKey]`
unchanged for the Use tab. CC-ERR's own use list is also the narrowest yet: 7 permitted uses (§1272,
the same unconditional 7 as CC-EPR's §1266(1)) plus 21 discretionary uses (§1273, letters (h), (l),
(n) and (o) deleted) — far short of CC-EPR's 35 unconditional + 10 conditional discretionary uses or
CC-EMU's 37 + 11. CC-ERR has no Convenience Food Store, Financial Institution, Fitness Centre,
Information and Service Provider, Pet Care Service, Print Centre, or Specialty Food Store — the whole
support-commercial group that sits behind CC-EPR's/CC-EMU's/CC-EIR's conditional is simply absent —
and also no Assisted Living, Cannabis Store, Health Care Service, Instructional Facility, Liquor
Store, Live Work Unit, Office, Place of Worship, Residential Care, School – Private, School Authority
– School, Artist's Studio, or Community Entrance Feature, consistent with a district purpose skewed
toward riverfront hospitality/leisure (Hotel, Brewery/Winery/Distillery, Community/Indoor Recreation
Facility) rather than daily retail or institutional uses. Parking Lot – Grade isn't a CC-ERR use at
all, unlike CC-EPR's grandfather-only §1267(1) allowance. CC-ERR's Density section (§1275) sets the
lowest max. FAR of any East Village district built so far — 5.0, below CC-EMU's/CC-EPR's shared 6.65
and CC-EIR's/CC-ET's shared 7.0 — with the shortest FAR-exclusion list yet (Child Care Service,
Protective and Emergency Service, Social Organization, and Utilities — 4 uses to a max. cumulative
1.0 FAR), notably NOT excluding Community Recreation Facility or Indoor Recreation Facility even
though both are CC-ERR discretionary uses — every other East Village district built so far excludes
at least one recreation-facility use from FAR; CC-ERR excludes neither. Its Use Area section (§1276)
keeps the familiar 465.0 m² ground-floor baseline, and sets a single flat 300.0 m² Restaurant
public-area cap — matching the absolute ceiling figure in CC-EIR's/CC-EMU's two-tier structure, but
here it's the only figure, since there's no building-status split to also carry a lower
Permitted-branch threshold (unlike CC-EIR/CC-EMU's 150.0 m² threshold-plus-cap, or CC-EPR's single
but lower 150.0 m² cap). CC-ERR has no Health Care Service use at all, so there's no counselling
use-area carve-out. Signage follows the family's usual Class A permitted / B–E discretionary / no
F or G shape, and CC-ERR shares CC-EMU's/CC-EPR's conditional 7.0 m²/6.0 m Freestanding Sign cap
(§97(4), tied to commercial multi-residential uses, with the same unresolved non-qualifying-parcel
gap) and the family's restrictive 1.0 m² Digital Message Sign pathway (§104(2)/(6)(b)) — but its
Projecting Sign cap is a genuine standout: CC-ERR isn't named in §102(1)'s 2.3 m² group (CC-EPR/
CC-EIR/CC-EMU) or §102(3)'s 4.5 m² group (CC-ET), so it falls to the residual §102(4): just 1.0 m²,
the tightest Projecting Sign figure of any East Village district built so far. Verified with an
automated Playwright smoke test covering the use selector (add/remove), status-pill clicks and
progress-bar updates across all four tabs, and a full CSV export/import round trip with project
fields and notes containing embedded commas/quotes/newlines (93 checks total — 25 general + 6
district + 34 citywide + 28 use). Before that: CC-EPR (Centre City East Village Primarily Residential District), Part 12, Division 5 —
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
| 12 | 6 | CC-ERR | ✅ `CCERR_Zoning_Review_Checklist.html` |
| 12 | 7 | CC-ER | ✅ `CCER_Zoning_Review_Checklist.html` |
| 13 | 2–3 | CR20-C20/R20 | ✅ `CR20C20R20_Zoning_Review_Checklist.html` |
| 14 | 2 | MU-1 | ✅ `MU1_Zoning_Review_Checklist.html` |
| 14 | 3 | MU-2 | ⬜ |
