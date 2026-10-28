import guides from './guides.json';
import checklists from './checklists.json';

export interface Tool {
  title: string;
  description: string;
  href: string;
  tag?: string;
  external?: boolean;
}

export interface Section {
  slug: string;
  title: string;
  description: string;
  tools: Tool[];
}

// Official City of Calgary Land Use Bylaw page (replaces the self-hosted bylaw copy).
export const CITY_BYLAW_URL = 'https://www.calgary.ca/planning/land-use/districts.html';

const checklistCount = checklists.reduce((n, g) => n + g.items.length, 0);

export const sections: Section[] = [
  {
    slug: 'training',
    title: 'Training',
    description: `${guides.length} step-by-step workflow guides for Revit, Matterport, project admin, Office and more.`,
    tools: [],
  },
  {
    slug: 'land-use',
    title: 'Land Use Tools',
    description: 'Calgary Land Use Bylaw 1P2007 due diligence: tenancy checks and district zoning review checklists.',
    tools: [
      {
        title: 'Calgary Business Tenancy Checker',
        description: 'Land Use Bylaw 1P2007 due diligence — zone + business lookup, zone browser, and activity finder.',
        href: '/land-use/tenancy-checker/',
        tag: 'Calgary LUB 1P2007',
      },
      {
        title: 'Zoning Review Checklists',
        description: `${checklistCount} district-by-district review checklists, grouped by district family.`,
        href: '/land-use/checklists/',
        tag: 'Calgary LUB 1P2007',
      },
      {
        title: 'Calgary Land Use Bylaw 1P2007',
        description: 'Official bylaw and land use district information on the City of Calgary website.',
        href: CITY_BYLAW_URL,
        tag: 'City of Calgary',
        external: true,
      },
    ],
  },
  {
    slug: 'building-code',
    title: 'Building Code Tools',
    description: 'NBC 2023 Alberta Edition calculators and quick code utilities.',
    tools: [
      {
        title: 'Building Classification Tool',
        description: 'NBC 2023 Alberta Edition, Division B 3.2.2 — returns the most permissive qualifying article for a major occupancy.',
        href: '/building-code/classification/',
        tag: 'NBC 2023',
      },
      {
        title: 'Washroom Compliance Calculator',
        description: 'NBC 2023 Alberta Edition, Part 3 (3.7.2 & 3.8.2) — required fixture counts by occupancy and load.',
        href: '/building-code/washrooms/',
        tag: 'NBC 2023',
      },
      {
        title: 'Glazed Opening Calculator',
        description: 'NBC Table 9.10.15.4 — maximum aggregate glazed opening area by limiting distance and exposing building face area.',
        href: '/building-code/glazed-openings/',
        tag: 'NBC 9.10.15.4',
      },
      {
        title: 'Slope Calculator',
        description: 'Convert between angle (degrees), percent slope, X:12 pitch, and 1:N ratio, or derive slope from rise and run.',
        href: '/building-code/slope/',
        tag: 'Utility',
      },
    ],
  },
  {
    slug: 'revit',
    title: 'Revit Support',
    description: 'Reference material for PDG’s custom Revit tooling.',
    tools: [
      {
        title: 'PDG Revit Tools — Command Reference',
        description: 'Searchable, filterable index of every custom Revit command in PDGRevitAddinCollection, grouped by ribbon panel.',
        href: 'https://hamezmm.github.io/PDGRevitToolsReference/',
        tag: 'Revit',
        external: true,
      },
    ],
  },
  {
    slug: 'project-support',
    title: 'Project Support',
    description: 'Fee and permit calculators for proposals and project setup.',
    tools: [
      {
        title: 'PDG Fee Proposal Calculator',
        description: 'Enter fees and vendors to generate a fee breakdown automatically.',
        href: '/project-support/fee-proposal/',
      },
      {
        title: 'Calgary Commercial Permit Fee Calculator',
        description: 'City of Calgary commercial building permit fees (base, Safety Codes, partial permit, lot grading) plus PDG’s 9% admin handling fee.',
        href: '/project-support/calgary-permit-fees/',
        tag: 'Calgary',
      },
    ],
  },
  {
    slug: 'internal',
    title: 'Internal Tools',
    description: 'Automation references, scripting libraries and internal working documents.',
    tools: [
      {
        title: 'Revit Add-in Academy',
        description: 'C# learning hub for building Revit add-ins — from fundamentals through the Revit API.',
        href: '/internal/revit-academy/',
      },
      {
        title: 'AutoCAD LISP Routines',
        description: 'Every LISP routine in the shared library — what command it registers and what it does.',
        href: '/internal/lisp-routines/',
        tag: 'AutoCAD',
      },
      {
        title: 'Playwright Automations',
        description: 'Every browser automation script — what it drives (Monograph, Matterport, Airtable, ACC, Calgary), and what triggers it.',
        href: '/internal/playwright/',
        tag: 'Playwright',
      },
      {
        title: 'Folder Restructure Proposal',
        description: 'Proposed reorganization of the Peake Design document library, for team review.',
        href: '/internal/folder-restructure/',
      },
    ],
  },
];

export const sectionBySlug = (slug: string) => sections.find((s) => s.slug === slug)!;
