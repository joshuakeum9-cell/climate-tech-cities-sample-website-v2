/** City resource pages (e.g. /chapters/new-york/universities).
 *
 *  Content is sourced from Potential_CTC_Website_City_Resources_2.xlsx:
 *  organization names, types, focus areas, descriptions, and websites come
 *  from the per-city sheets, rewritten into sentence form. Adding a category
 *  page for another city = adding entries here; the route and components
 *  are city-agnostic. */

export type ResourceOrg = {
  name: string;
  url: string;
  /** Editorial paragraph weaving in the org's type, focus, and description */
  body: string;
};

export type ResourceGroup = {
  /** Optional group heading (used on the universities page per institution) */
  heading?: string;
  orgs: ResourceOrg[];
  /** Render a full-width skyline image band after this group */
  photoBreakAfter?: boolean;
};

export type ResourcePage = {
  citySlug: string;
  city: string;
  /** URL segment under /chapters/[citySlug]/ */
  categorySlug: string;
  /** Label shown in the chapter page sidebar */
  sidebarLabel: string;
  /** Stylized hero title */
  title: string;
  /** Large bold lead-in line */
  introLead: string;
  /** Supporting intro paragraph */
  introBody: string;
  groups: ResourceGroup[];
};

export const resourcePages: ResourcePage[] = [
  {
    citySlug: "new-york",
    city: "New York",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead:
      "Whether you're starting your career in climate, expanding your knowledge, hiring talent, or building on the latest research, New York's universities are the best place to start.",
    introBody:
      "Columbia, NYU, Cornell Tech, Stony Brook, and CUNY anchor the city's climate research and feed talent directly into the industries that own its buildings, grids, and capital. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Columbia University (Columbia Climate School)",
        orgs: [
          {
            name: "Lamont-Doherty Earth Observatory",
            url: "https://lamont.columbia.edu/",
            body: "Lamont-Doherty Earth Observatory is a Palisades-based research institute focused on Earth and climate science, and one of the world's leading Earth-science institutions. It serves as a major climate research engine and talent pipeline for the New York region.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "NYU Tandon School of Engineering",
        orgs: [
          {
            name: "Urban Future Lab (ACRE)",
            url: "https://www.ufl.nyc/",
            body: "The Urban Future Lab is NYU Tandon's climate hub and incubator, focused on clean energy and urban decarbonization. It runs ACRE, PowerBridgeNY, and the Clean Start certificate, making it one of the city's central on-ramps into climate work.",
          },
          {
            name: "Center for Urban Science + Progress (CUSP)",
            url: "https://engineering.nyu.edu/research/centers/cusp",
            body: "CUSP is a research center for urban data science. It runs the MS in Urban Data Science and a doctoral track that applies data to energy, flooding, and city systems, training the analysts who will manage the city's climate transition.",
          },
          {
            name: "Sustainable Engineering Initiative",
            url: "https://engineering.nyu.edu/impact/sustainability/sustainable-engineering-initiative",
            body: "The Sustainable Engineering Initiative coordinates cross-department research (AMRAd) on decarbonized energy, emissions mitigation, remediation, and climate adaptation across NYU's engineering school.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Cornell Tech",
        orgs: [
          {
            name: "Urban Tech Hub",
            url: "https://urban.tech.cornell.edu/what-we-do/",
            body: "The Urban Tech Hub is an applied-research and startup hub at the Jacobs Institute, focused on urban sustainability. Its work centers on making cities livable, adaptable, and low-carbon.",
          },
          {
            name: "Runway Startup Postdoc Program",
            url: "https://tech.cornell.edu/programs/phd/startup-postdocs/",
            body: "Runway is a fellowship for deep-tech commercialization that turns research into startups, including building-sustainability and urban-tech companies. It gives postdocs the runway, capital, and mentorship to become founders.",
          },
        ],
      },
      {
        heading: "Stony Brook University (Advanced Energy Center)",
        orgs: [
          {
            name: "Institute of Sustainability, Electrification and Energy (I:SEE)",
            url: "https://www.stonybrook.edu/commcms/iese/",
            body: "I:SEE is a research institute focused on electrochemistry and energy storage for a clean, resilient grid, leveraging its relationship with Brookhaven National Lab to move storage science toward deployment.",
          },
          {
            name: "Energy Systems research (College of Engineering)",
            url: "https://www.stonybrook.edu/commcms/iese/research.php",
            body: "Stony Brook's College of Engineering runs cross-cutting research in advanced energy systems, materials for climate solutions, and grid technology, rounding out the university's clean energy bench.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "CUNY Advanced Science Research Center",
        orgs: [
          {
            name: "Environmental Sciences Initiative (ASRC)",
            url: "https://asrc.gc.cuny.edu/environment/",
            body: "The Environmental Sciences Initiative is the ASRC's research hub for environmental and materials science, developing high-tech, interdisciplinary solutions to air, water, and climate challenges.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "new-york",
    city: "New York",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or expand a climate company in New York?",
    introBody:
      "Learn about the city's accelerator ecosystem. From clean energy scaling through The Clean Fight and New Energy Nexus, to hard tech prototyping at Newlab, HAX, and Venture for ClimateTech, to bio-based breakthroughs at IndieBio, there's support for your climate startup at every stage.",
    groups: [
      {
        orgs: [
          {
            name: "The Clean Fight",
            url: "https://thecleanfight.com",
            body: "The Clean Fight is a non-profit accelerator focused on growth-stage clean energy. It scales climate companies into New York State, and it is powered by New Energy Nexus and funded by NYSERDA.",
          },
          {
            name: "New Energy Nexus NY",
            url: "https://newenergynexus.com",
            body: "New Energy Nexus NY is the New York arm of the global clean-energy accelerator network, supporting clean energy entrepreneurs as both an accelerator and a funder. Its New York programs include The Clean Fight and the Empire Technology Prize.",
          },
          {
            name: "Newlab",
            url: "https://newlab.com",
            body: "Newlab is an innovation hub for hard tech and urban tech in the Brooklyn Navy Yard. Its prototyping labs support energy, robotics, and urban-tech startups building physical products inside the city.",
          },
          {
            name: "Urban-X",
            url: "https://www.allthingsurban.net/education/91",
            body: "Urban-X is a MINI/BMW-backed accelerator and venture investor for startups reimagining city life. The 20-week program provides roughly $150K along with hands-on design support for urban and city-scale climate companies.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "HAX (SOSV)",
            url: "https://hax.co",
            body: "HAX is SOSV's accelerator and venture program for hard tech and climate hardware, and the world's most active hard-tech program. It backs founders at pre-seed with funding and deep engineering support.",
          },
          {
            name: "IndieBio (SOSV)",
            url: "https://indiebio.co",
            body: "IndieBio, also part of SOSV, is a deep-tech bio accelerator backing climate, food, and materials startups. Companies receive up to roughly $525K to turn bio-based science into commercial products.",
          },
          {
            name: "Venture for ClimateTech",
            url: "https://forclimatetech.org/venture-for-climatetech/",
            body: "Venture for ClimateTech is a non-profit venture studio and accelerator focused on hard climate tech in New York State. It offers non-dilutive funding and manufacturing support to help founders move from concept to build.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "new-york",
    city: "New York",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead:
      "New York backs its climate ambitions with real public infrastructure for startups.",
    introBody:
      "From NYSERDA's funding programs to NYC EDC's cleantech and offshore-wind initiatives, the state and city offer grants, incentives, testing, and incubation to help climate companies get started and scale in the Empire State.",
    groups: [
      {
        orgs: [
          {
            name: "NYSERDA",
            url: "https://nyserda.ny.gov",
            body: "NYSERDA is New York's state energy authority, focused on clean energy funding and policy. It funds accelerators, pilots, and the incentive programs that anchor the New York climate ecosystem.",
          },
          {
            name: "NYC EDC",
            url: "https://edc.nyc",
            body: "NYC EDC is the city's economic-development arm, active in urban cleantech and offshore wind. It runs cleantech and offshore-wind initiatives and provides venue access for climate companies working in the five boroughs.",
          },
          {
            name: "Empire State Development",
            url: "https://esd.ny.gov",
            body: "Empire State Development is New York State's economic-development agency, offering grants, incentives, and business support relevant to climate startups choosing to build in New York.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "NY-BEST",
            url: "https://ny-best.org",
            body: "NY-BEST is the New York Battery & Energy Storage Technology consortium, an industry group focused on energy storage. It offers grants, testing capabilities, and a statewide network for storage startups.",
          },
          {
            name: "Clean Energy Business Incubator Program (CEBIP)",
            url: "https://www.cebip.org/",
            body: "CEBIP is a NYSERDA-supported public incubator for renewable and clean energy ventures, providing mentoring, space, and technical support to early-stage companies finding their footing.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "new-york",
    city: "New York",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody:
      "New York's utilities and energy companies actively partner with climate startups, from Con Edison's grid pilots to the Brooklyn Offshore Wind Innovation Hub. Here are the industry players opening their infrastructure to innovation.",
    groups: [
      {
        orgs: [
          {
            name: "National Grid (NY)",
            url: "https://nationalgridus.com",
            body: "National Grid is a major New York gas and electric utility that is active in the clean-energy transition and in innovation partnerships with startups working on the grid of the future.",
          },
          {
            name: "Con Edison",
            url: "https://www.coned.com/en/",
            body: "Con Edison runs the Energy Efficiency Pilots \"Call for Ideas\" and the Newlab Resilient Energy Studio, inviting startups to pilot clean-energy solutions on its New York City grid. Beyond its own programs, it sponsors many initiatives at local accelerators and venture firms.",
          },
          {
            name: "Equinor",
            url: "https://www.equinor.com/news/us/offshore-wind-innovation-hub-launched-in-new-york",
            body: "Equinor, an offshore wind developer, co-founded the Brooklyn Offshore Wind Innovation Hub with NYC EDC and the NYU Urban Future Lab to pilot and scale offshore-wind startups in New York harbor.",
          },
          {
            name: "Enel North America",
            url: "https://openinnovability.enel.com/startup-ecosystem",
            body: "Enel North America runs the Enel Open Innovability Startup Ecosystem, an open-innovation program giving climate startups pilot projects and access to its grid, labs, and customers.",
          },
          {
            name: "Schneider Electric (SE Ventures)",
            url: "https://www.seventures.com/home/",
            body: "SE Ventures is Schneider Electric's $1B+ climate and industrial-tech venture fund, backing energy-transition startups and connecting them to one of the world's largest industrial energy companies.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "new-york",
    city: "New York",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead:
      "New York is home to the deepest pool of capital on earth, and more of it is moving into climate every year.",
    introBody:
      "From dedicated climate funds like USV Climate and Energy Impact Partners to catalytic investors like Elemental Impact and the Grantham Foundation, here's a starter map of the capital backing climate companies in New York.",
    groups: [
      {
        orgs: [
          {
            name: "Energy Impact Partners",
            url: "https://energyimpactpartners.com",
            body: "Energy Impact Partners is an NYC-headquartered venture capital platform focused on the energy transition, with strong utility and corporate ties that help portfolio companies find their first big customers.",
          },
          {
            name: "Fifth Wall",
            url: "https://fifthwall.com",
            body: "Fifth Wall is a real-estate-tech and climate venture fund with a New York presence, focused on the built environment. It is especially relevant for founders working on buildings decarbonization.",
          },
          {
            name: "Collaborative Fund",
            url: "https://collabfund.com/",
            body: "Collaborative Fund is a venture capital firm with a significant, explicit climate-and-cities investing practice, backing early-stage sustainability companies.",
          },
          {
            name: "Union Square Ventures (USV Climate)",
            url: "https://www.usv.com/",
            body: "Union Square Ventures is an NYC-based venture firm running a $200M+ dedicated Climate fund that invests in decarbonization startups.",
          },
          {
            name: "Third Sphere",
            url: "https://thirdsphere.com/",
            body: "Third Sphere is an NYC early-stage climate VC with more than 100 investments, backing pre-seed and seed climate founders with capital and go-to-market support.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Congruent Ventures",
            url: "https://www.congruentvc.com/",
            body: "Congruent Ventures is an early-stage climate VC investing at seed and Series A, with a New York office alongside San Francisco. It backs energy, mobility, and industrial decarbonization companies.",
          },
          {
            name: "Elemental Impact (Elemental Excelerator)",
            url: "https://elementalimpact.org/",
            body: "Elemental Impact is a nonprofit climate investor deploying catalytic capital into deployment-stage projects, with a focus on climate equity and infrastructure. It is active with startups across the New York region.",
          },
          {
            name: "At One Ventures",
            url: "https://www.atoneventures.com/",
            body: "At One Ventures is a deep-tech climate VC investing in nature-positive technologies, and an active investor in New York-region startups.",
          },
          {
            name: "Gigascale Capital",
            url: "https://gigascale.com/",
            body: "Gigascale Capital is a climate-focused venture firm backing companies that decarbonize large end markets, with active involvement in the New York ecosystem.",
          },
          {
            name: "Newlab Venture Fund / Newlab",
            url: "https://newlab.com/",
            body: "Newlab's Brooklyn Navy Yard hard-tech platform includes an affiliated venture fund backing energy, mobility, and urban climate startups, pairing capital with prototyping space.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Zero Infinity",
            url: "https://zeroinfinitypartners.com/",
            body: "Zero Infinity is an NYC early-stage climate fund investing across decarbonization and the energy transition.",
          },
          {
            name: "Blackhorn Ventures",
            url: "https://blackhornvc.com/",
            body: "Blackhorn Ventures is an early-stage VC investing in resource efficiency and industrial decarbonization, with investments in New York-region companies.",
          },
          {
            name: "2150",
            url: "https://2150.vc/",
            body: "2150 is a venture firm investing across the 'urban stack' to sustainably reshape cities. The firm is transatlantic, with activity relevant to New York founders.",
          },
          {
            name: "Systemiq Capital",
            url: "https://systemiqcapital.earth/",
            body: "Systemiq Capital is an early-stage climate VC backing systems-level decarbonization, with a transatlantic presence that includes New York.",
          },
          {
            name: "Active Impact Investments",
            url: "https://www.activeimpactinvestments.com/",
            body: "Active Impact Investments is a seed-stage climate VC backing early climate founders across North America, including the New York region.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Better Ventures",
            url: "https://www.better.vc/",
            body: "Better Ventures is an early-stage firm backing founders solving climate and human-health problems, and an investor in New York startups.",
          },
          {
            name: "Overture",
            url: "https://www.overture.vc/",
            body: "Overture is a climate VC investing at the intersection of climate tech and government and public-sector markets, and is active with New York founders.",
          },
          {
            name: "MCJ Collective",
            url: "https://www.mcjcollective.com/",
            body: "MCJ Collective (My Climate Journey) is a community-driven early-stage climate fund with a large New York member base, pairing capital with one of the strongest networks in climate.",
          },
          {
            name: "Grantham Foundation (Environment)",
            url: "https://www.granthamfoundation.org/",
            body: "The Grantham Foundation is a mission-driven investor deploying catalytic and strategic capital into breakthrough climate technologies, with activity in the New York region.",
          },
        ],
      },
    ],
  },
];

export function getResourcePage(
  citySlug: string,
  categorySlug: string,
): ResourcePage | undefined {
  return resourcePages.find(
    (page) => page.citySlug === citySlug && page.categorySlug === categorySlug,
  );
}

export function getResourcePagesForCity(citySlug: string): ResourcePage[] {
  return resourcePages.filter((page) => page.citySlug === citySlug);
}
