/** City resource pages (e.g. /chapters/new-york/universities).
 *
 *  GENERATED from Potential_CTC_Website_City_Resources_3.xlsx.
 *  Organization names, types, focus areas, descriptions, and websites come
 *  from the per-city sheets. Do not hand-edit; regenerate from the sheet. */

export type ResourceOrg = {
  name: string;
  url: string;
  /** e.g. "Accelerator" */
  type: string;
  /** e.g. "Growth-stage clean energy" */
  focus: string;
  body: string;
};

export type ResourceGroup = {
  heading?: string;
  orgs: ResourceOrg[];
  photoBreakAfter?: boolean;
};

export type ResourcePage = {
  citySlug: string;
  city: string;
  categorySlug: string;
  sidebarLabel: string;
  title: string;
  introLead: string;
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
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, New York's universities are the place to start.",
    introBody: "Columbia University (Columbia Climate School), NYU Tandon School of Engineering, Cornell Tech anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Columbia University (Columbia Climate School)",
        orgs: [
          {
            name: "Lamont-Doherty Earth Observatory",
            url: "https://lamont.columbia.edu/",
            type: "Research institute",
            focus: "Earth & climate science",
            body: "Lamont-Doherty is the Earth-science engine of the Columbia Climate School, with labs in geochemistry, ocean and climate physics, and seismology plus a research vessel and open data and sample archives. It runs no cohort or fund; its value to founders is collaborators, talent, and licensable climate IP. Spinouts route through Columbia Technology Ventures, which handles licensing and runs an executive-in-residence program, a lab-to-market network, and a carbontech initiative. Suits founders whose edge is Earth-system science and who want a research partner in New York.",
          },
        ],
      },
      {
        heading: "NYU Tandon School of Engineering",
        orgs: [
          {
            name: "Urban Future Lab (ACRE)",
            url: "https://www.ufl.nyc/",
            type: "Incubator / Hub",
            focus: "Clean energy, urban decarb",
            body: "Urban Future Lab at NYU Tandon is New York's longest-running climatetech incubator, home to ACRE, backing founders from pre-seed to Series A without taking equity. Companies get 24/7 Downtown Brooklyn workspace, advisory across legal, accounting, and design, and introductions to investors, mentors, and corporate buyers, backed by NYSERDA, NYCEDC, and National Grid. Adjacent programs include the Carbon to Value carbontech initiative, the Offshore Wind Innovation Hub, an international landing pad, and the Urban Future Prize, which pairs non-dilutive cash with an ACRE spot. Suits early clean energy, grid, buildings, and mobility founders who want NYC market access and a clean cap table.",
          },
          {
            name: "Center for Urban Science + Progress (CUSP)",
            url: "https://engineering.nyu.edu/research/centers/cusp",
            type: "Research center",
            focus: "Urban data science",
            body: "CUSP is NYU Tandon's urban-informatics center and graduate school, treating New York as a living lab across transport, energy, air quality, and public health. It offers degrees, capstones, and internships, not a funded cohort, so it supplies talent, applied research, and city datasets rather than capital or space. Founders needing incubation route to NYU Tandon Future Labs and Urban Future Lab. Suits data-heavy urban and climate founders recruiting talent or partnering on research.",
          },
          {
            name: "Sustainable Engineering Initiative",
            url: "https://engineering.nyu.edu/impact/sustainability/sustainable-engineering-initiative",
            type: "Research initiative",
            focus: "Decarbonization & clean energy",
            body: "NYU Tandon's Sustainable Engineering Initiative develops engineering approaches to cut emissions and support adaptation, with Urban Future Lab as a cornerstone. It is a research and education initiative, not a founder program, so startups enter through UFL and ACRE. Its draw is the faculty, students, and lab resources it coordinates. Suits early hardware and systems founders who want an academic partner beside a working incubator.",
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
            type: "Research hub",
            focus: "Urban sustainability",
            body: "Cornell Tech's Urban Tech Hub is an applied research and ecosystem center for urban technology, not an accelerator, spanning research, teaching, and ties to city government. It runs a dual-master's urban tech track, sponsored research, convenings, and policy work with NYCEDC on how the city pilots technology. For founders it offers credibility, research partnership, and paths into city-agency pilots, not funding. Suits urban and climate startups seeking a research ally and warmer public-sector introductions.",
          },
          {
            name: "Runway Startup Postdoc Program",
            url: "https://tech.cornell.edu/programs/phd/startup-postdocs/",
            type: "Fellowship",
            focus: "Deep-tech commercialization",
            body: "Runway at the Jacobs Technion-Cornell Institute turns technical PhDs into founders, part business school, part research institute, part incubator on Roosevelt Island. Fellows can start from an idea and receive salary, research budget, housing allowance, workspace, IP support, and mentorship from day one. The company issues a SAFE to the Institute, making this dilutive, with introductions to NYC investors and the Cornell and Technion networks. Suits newly minted deep-tech PhDs building a company in New York with runway to de-risk the science.",
          },
          {
            name: "PiTech (Public Interest Technology)",
            url: "https://pi.tech.cornell.edu",
            type: "University program",
            focus: "Public-interest technology",
            body: "Cornell Tech's PiTech applies technical talent to social and environmental outcomes through an impact studio, PhD fellowships, visiting practitioners, and a Runway pathway for public-interest founders. That Runway track is the relevant door for climate founders building ventures with public benefit at the core. Otherwise PiTech is education and placement, not a funded accelerator. Suits technical PhDs and postdocs building public-interest ventures at the climate-society intersection.",
          },
        ],
      },
      {
        heading: "Stony Brook University (Advanced Energy Center)",
        orgs: [
          {
            name: "Institute of Sustainability, Electrification and Energy (I:SEE)",
            url: "https://www.stonybrook.edu/commcms/iese/",
            type: "Research institute",
            focus: "Energy storage & electrification",
            body: "Stony Brook's Advanced Energy Research and Technology Center, a New York State Center of Excellence, houses the I:SEE institute for energy research, validation, and commercialization. For founders it acts as an on-site incubator: lab and test space via facility-use permits, business and technical resources, and access to Brookhaven National Lab, alongside CEBIP and NYSERDA proof-of-concept programs. It supplies space and equipment, not grants or equity. Suits Long Island and deep-tech energy hardware founders who need lab and validation infrastructure.",
          },
          {
            name: "Energy Systems research (College of Engineering)",
            url: "https://www.stonybrook.edu/commcms/iese/research.php",
            type: "Research area",
            focus: "Clean energy & advanced energy systems",
            body: "Energy-systems work in Stony Brook's College of Engineering spans batteries, grid, and advanced materials as academic research, not a founder program. Commercialization runs through AERTC and CEBIP for incubation and the Long Island High Technology Incubator for lab and office space. Founders tap the faculty and facilities here while getting structured support from those programs. Suits research-driven energy founders building on Stony Brook science with incubation nearby.",
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
            type: "Research initiative",
            focus: "Environmental & materials science",
            body: "CUNY's Advanced Science Research Center at City College runs environmental labs for chemical and isotopic measurement, coastal ecosystems, microbial ecology, and remote sensing, plus a rooftop observatory and shared core facilities. It serves researchers, not a startup cohort, offering instrumentation, measurement expertise, and collaboration. Teams needing sensing, characterization, or nanofabrication use its equipment while funding and incubating elsewhere. Suits science-first climate founders who need specialized environmental measurement.",
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
    introLead: "Looking to start or scale a climate company in New York?",
    introBody: "From The Clean Fight, New Energy Nexus NY, and Newlab, here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "The Clean Fight",
            url: "https://thecleanfight.com",
            type: "Accelerator",
            focus: "Growth-stage clean energy",
            body: "The Clean Fight is a non-profit, growth-stage clean-energy accelerator that scales proven companies into the New York market, backed by NYSERDA and NYCEDC as a New Energy Nexus chapter. Its non-dilutive cohort centers on customer matchmaking with anchor buyers like Con Edison and National Grid, plus introductions across venture, venture debt, credit, and project finance. Cohorts target concrete problems such as building decarbonization, storage deployment, and supply-chain electrification, and selected companies access non-dilutive grants for first-of-a-kind projects. Suits companies with a proven product chasing pilots, customers, and a New York foothold, not pre-seed teams.",
          },
          {
            name: "New Energy Nexus NY",
            url: "https://newenergynexus.com",
            type: "Accelerator / Funder",
            focus: "Clean energy entrepreneurs",
            body: "New Energy Nexus is a global non-profit backing clean-energy entrepreneurs with funds, accelerators, and networks; its New York chapter runs The Clean Fight and the Empire Technology Prize. It connects founders to a worldwide clean-energy community of investors, customers, and partners beyond New York. Its mandate to grow the state's clean-energy economy keeps programs focused on traction and non-dilutive support. Suits clean-energy founders, especially growth-stage, wanting NYC entry via The Clean Fight plus a global network.",
          },
          {
            name: "Newlab",
            url: "https://newlab.com",
            type: "Innovation Hub",
            focus: "Hard tech, urban tech",
            body: "Newlab is a deep-tech and climate venture platform in a purpose-built Brooklyn Navy Yard facility, giving members 24/7 access to prototyping shops, wet labs, electronics benches, and urban-industrial test beds including waterways and approved drone airspace. Membership opens an investor and corporate network and commercialization pilots with partners like Con Edison, Amazon, and Verizon. It takes no equity for membership but invests directly and runs a Founder Fellowship with NYCEDC offering a year of membership, mentorship, business development, and a shot at direct investment, widening access for underrepresented founders. Suits hardware and deep-tech climate founders needing prototyping infrastructure, pilots, and community in one place.",
          },
          {
            name: "SOSV",
            url: "https://sosv.com",
            type: "Accelerator / VC",
            focus: "Hard tech, climate hardware & bio-based climate/materials",
            body: "SOSV is a global deep-tech firm known as the first check in hard science, running two programs for New York climate founders: HAX for industrial hardware and IndieBio for biology-based climate, food, and materials. It invests at inception for equity, then follows on through seed and beyond, pairing the check with a residency of lab access, machine shops, and in-house engineering, design, and supply-chain experts. HAX targets industrial decarbonization, electrification, storage, robotics, and future fuels; IndieBio backs biology for climate and materials. Suits technical founders needing hands-on engineering alongside a first institutional round.",
          },
          {
            name: "Venture for ClimateTech",
            url: "https://forclimatetech.org/venture-for-climatetech/",
            type: "Accelerator / Studio",
            focus: "Hard climate tech",
            body: "Venture for ClimateTech is a non-profit venture studio and accelerator for pre-seed and seed climate founders, backed by NYSERDA and run by NextCorps, largely virtual and timed to Climate Week. Teams get non-dilutive funding, founder coaching, customer-discovery support, and investor and corporate introductions to push early technologies toward commercial readiness. It hands off to Scale for ClimateTech at the manufacturing stage. Suits very early climate founders wanting non-dilutive capital and commercialization help without giving up equity.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Scale For ClimateTech",
            url: "https://forclimatetech.org/scale-for-climatetech/",
            type: "Accelerator (manufacturing)",
            focus: "Climate hardware manufacturing scale-up",
            body: "Scale For ClimateTech is a non-dilutive manufacturing accelerator, funded by NYSERDA, that de-risks the path from prototype to mass production for climate hardware. It provides Manufacturing Readiness Level assessments, a production roadmap, dedicated mentors, greenhouse-gas impact analysis, and introductions to founder-friendly contract manufacturers, suppliers, and investors. It suits companies with demonstrated technology now building a production and supply-chain plan. Suits growth-stage hardware founders scaling physical products, a strong step after Venture for ClimateTech.",
          },
          {
            name: "Activate",
            url: "https://activate.org",
            type: "Fellowship",
            focus: "Hard-tech / climate entrepreneurship",
            body: "Activate runs a two-year fellowship turning scientists and engineers into hard-tech founders, with a dedicated Activate New York community built with NYSERDA and Columbia. It charges no fees and takes no equity, providing a living stipend, R&D funding, flexible capital, lab access, a startup curriculum, mentorship, and an investor and partner network. It targets first-time hard-tech founders working full time who have not raised significant private capital. Suits scientist-founders needing non-dilutive runway to prove physical or biological technology before a priced round.",
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
    introLead: "New York backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like New York State Energy Research and Development Authority (NYSERDA) and New York City Economic Development Corporation (NYC EDC) offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "New York State Energy Research and Development Authority (NYSERDA)",
            url: "https://nyserda.ny.gov",
            type: "State Energy Authority",
            focus: "Clean energy funding & policy",
            body: "NYSERDA is New York State's public energy agency and the financial backbone of its climate-startup ecosystem, funding programs rather than taking equity. Founders can tap state-backed incubators like ACRE and CEBIP, proof-of-concept centers, prizes such as the Empire Technology Prize and 76West, an entrepreneur-in-residence program, and commercialization and hiring funding. Most of New York's accelerators, pilots, and grants trace back here, making it the first stop for mapping non-dilutive options. Suits any clean-energy or climate founder building in or scaling into New York State.",
          },
          {
            name: "New York City Economic Development Corporation (NYC EDC)",
            url: "https://edc.nyc",
            type: "City development corp.",
            focus: "Urban cleantech, offshore wind",
            body: "The New York City Economic Development Corporation is the city's development arm, most useful to founders for pilots and test beds on city assets rather than direct investment. It backs a Brooklyn Army Terminal climate hub with funded pilots in real buildings, the Offshore Wind Innovation Hub, the Harbor Climate Collaborative, and inclusive-founder fellowships with partners like Newlab. Selected companies pilot on city-owned property, turning New York into a proving ground. Suits hardware and urban-tech founders needing real-world pilot sites and public-sector relationships.",
          },
          {
            name: "Empire State Development",
            url: "https://esd.ny.gov",
            type: "State Agency",
            focus: "Incentives, business support",
            body: "Empire State Development is New York State's economic-development agency, working through tax credits, grants, and incentives, not a climate-startup program. Its key tool is the Excelsior Jobs Program, offering refundable credits with an enhanced green-project tier for clean-energy and emissions-reducing investment, alongside investment and research credits and tax-free zones. This is an incentive layer for companies creating jobs and making capital investments in the state. Suits climate companies far enough along to hire and build in New York and cut the cost of scaling.",
          },
          {
            name: "New York Battery and Energy Storage Technology Consortium (NY-BEST)",
            url: "https://ny-best.org",
            type: "Industry Consortium",
            focus: "Energy storage",
            body: "NY-BEST is New York's energy-storage consortium, linking startups, manufacturers, universities, utilities, and national labs. Its BRIDGE program gives founders one-on-one business support and no-cost access to pilot manufacturing and testing facilities, plus introductions to funding and partners across the storage value chain. It also opens testing and commercialization capabilities, including its dedicated test center and university prototyping. Suits energy-storage founders needing testing, prototyping, and industry connections to complement incubators and investors.",
          },
          {
            name: "Clean Energy Business Incubator Program (CEBIP)",
            url: "https://www.cebip.org/",
            type: "Public Incubator",
            focus: "Renewable / clean energy",
            body: "The Clean Energy Business Incubator Program at Stony Brook, funded by NYSERDA, gives pre-seed clean-energy founders high-touch, hands-on support. Companies get intensive one-on-one mentoring, business-plan and pitch help, technical guidance, fundraising and pilot introductions, and space and testing at Stony Brook and AERTC. Its hardware-friendly orientation suits founders whose technology needs lab validation as much as coaching. Suits Long Island and New York early-stage clean-energy founders, especially hardware, wanting mentorship and university resources over a check.",
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
    introBody: "New York's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "National Grid (NY)",
            url: "https://nationalgridus.com",
            type: "Utility",
            focus: "Gas & electric",
            body: "National Grid Partners, the utility's venture and innovation arm, invests across energy and adjacent tech, stage-agnostic, with strategic and financial goals. Its draw is direct access to National Grid's New York, Northeast, and UK grids and operating businesses for pilots and co-innovation, plus a global utility network of potential customers. Most portfolio companies build a real commercial relationship with the utility, not just take capital. Suits energy and grid startups wanting utility pilots, distribution, and grid access with investment.",
          },
          {
            name: "Con Edison",
            url: "https://www.coned.com/en/",
            type: "Utility",
            focus: "Clean-energy pilots",
            body: "Con Edison, the New York City and Westchester utility, offers pilot and demonstration pathways rather than an accelerator or fund. Startups enter through its energy-efficiency Call for Ideas, for technologies pilotable within a year with a focus on income-eligible customers, and through demonstration solicitations across thermal networks, storage, and demand response. It co-sponsors external programs and anchors accelerators like The Clean Fight, so its value is grid access and a path to becoming a customer. Suits startups whose technology can prove out on Con Edison's dense urban grid.",
          },
          {
            name: "Equinor",
            url: "https://www.equinor.com/news/us/offshore-wind-innovation-hub-launched-in-new-york",
            type: "Offshore wind developer",
            focus: "Offshore wind",
            body: "The Offshore Wind Innovation Hub is a Brooklyn industry program backed by developer Equinor with NYU Tandon's Urban Future Lab and support from NYCEDC and NYSERDA. Its Call for Innovators cohort gives startups mentorship, advisors, US market-entry support, offshore-wind expertise, supply-chain connections, and investor introductions, without taking equity. Its scope has widened toward wind, maritime, and adjacent climate technology. Suits offshore-wind, maritime, and related founders needing industry validation and a route into a hard-to-enter supply chain.",
          },
          {
            name: "Enel North America",
            url: "https://openinnovability.enel.com/startup-ecosystem",
            type: "Energy company",
            focus: "Open innovation",
            body: "Enel engages startups through its global Open Innovability platform and innovation hubs, inviting companies to solve posted challenges and run proof-of-concept pilots. Selected startups access Enel's global assets, labs, experts, data, and customer base, with streamlined pilot contracts. Enel is explicit it is not a VC and takes no equity; it co-develops, then becomes a first customer at industrial scale. Suits energy, grid, and renewables founders wanting a large-utility pilot and a major first customer, not a check.",
          },
          {
            name: "NY Green Bank",
            url: "https://greenbank.ny.gov",
            type: "Green bank (NYSERDA)",
            focus: "Clean-energy project finance",
            body: "NY Green Bank, a NYSERDA division and state-sponsored investment fund, provides project and wholesale capital for clean-energy and infrastructure deals in New York, not startup equity. It offers flexible debt and structured products, including construction and term loans, pre-development and interconnection financing, and credit enhancement, to developers, property owners, and lenders where private capital falls short. Read it as a project-finance partner for deployment. Suits developers and companies financing clean-energy project buildout once a technology is ready to scale.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "NYCEEC (New York City Energy Efficiency Corporation)",
            url: "https://nyceec.com",
            type: "Green bank / lender",
            focus: "Building energy finance",
            body: "NYCEEC is a non-profit green bank and project lender, the country's first local green bank, financing building decarbonization rather than running a startup program. It provides pre-development, construction, and term loans plus C-PACE to building owners, contractors, and developers for efficiency, electrification, community solar, storage, and EV charging, focused on affordable housing and disadvantaged communities. Its value is capital for field projects, not company equity. Suits building owners and developers financing decarbonization projects across the region.",
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
    introLead: "The capital backing climate companies in New York.",
    introBody: "From Energy Impact Partners and Collaborative Fund to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Energy Impact Partners",
            url: "https://energyimpactpartners.com",
            type: "Venture Capital",
            focus: "Energy transition",
            body: "Energy Impact Partners is a New York-headquartered energy and climate platform built on a coalition of utility and industrial partners, giving companies access to pilots, decision-makers, and distribution. It invests across the stack: an early-stage strategy for deep-decarbonization bets, a flagship for companies at their scaling inflection, plus growth, credit, and diversity-focused vehicles. Beyond capital it deploys its corporate network for pilots, board support, and business development. Suits energy and climate founders, early or scaling, who can turn utility partnerships into traction.",
          },
          {
            name: "Collaborative Fund",
            url: "https://collabfund.com/",
            type: "Venture capital",
            focus: "Climate & cities",
            body: "Collaborative Fund is a New York venture firm investing at seed and early stage where profit meets purpose, with a climate strategy across materials, ingredients, energy, and supply chains. It comes in early, takes technical and scale-up risk, and backs founders pre-revenue, then helps with team building, hiring, brand, and the consumer side. Its climate portfolio spans hard-tech and consumer sustainability brands. Suits pre-seed and seed climate and consumer founders wanting a mission-aligned, brand-savvy early investor.",
          },
          {
            name: "Union Square Ventures (USV Climate)",
            url: "https://www.usv.com/",
            type: "Venture capital",
            focus: "Climate",
            body: "Union Square Ventures is a small, thesis-driven New York firm whose Climate Fund invests at seed and Series A in companies and projects that mitigate or adapt to climate change, across software and hardware. It invests once the science is de-risked, funding scaling and engineering over lab research, and comes in as early as a prototype, leading or co-leading with an active role. Its climate bets span energy markets, carbon removal, and consumer climate action. Suits seed and Series A founders wanting a high-conviction lead with strong networks and thesis discipline.",
          },
          {
            name: "Elemental Impact (Elemental Excelerator)",
            url: "https://elementalimpact.org/",
            type: "Catalytic capital / Investor",
            focus: "Climate equity & infrastructure",
            body: "Elemental Impact is a non-profit climate investor providing catalytic, patient capital and technical services to scale technologies with community benefit. It invests through equity, debt, and hybrid structures, including a project track for Series A and later companies deploying first-of-a-kind projects, paired with support in policy, workforce, community partnerships, and follow-on fundraising. It pioneered financing tools for the gap between pilot and scale. Suits climate founders from early stage through deployment needing catalytic capital and help reaching communities.",
          },
          {
            name: "Newlab",
            url: "https://newlab.com/",
            type: "Venture capital / Studio",
            focus: "Hard tech & climate",
            body: "Newlab invests directly in critical-tech and climate startups alongside a broad syndicate, mostly through early catalytic checks tied to its Founder Fellowship with NYCEDC, and co-invests beside leading funds. Its capital comes with the platform: prototyping infrastructure, corporate and civic pilots, community, and investor introductions. Checks are early and catalytic, sized to get hardware founders moving toward a larger round. Suits deep-tech and climate hardware founders wanting a small early check plus physical infrastructure and pilots.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Zero Infinity",
            url: "https://zeroinfinitypartners.com/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Zero Infinity Partners is a New York firm focused entirely on infrastructure technology across energy, power, mobility, logistics, water, waste, digital systems, and biomanufacturing, backing companies that digitize, decarbonize, or develop projects differently. It invests early and growth stage, bringing an infrastructure network and a senior bench of former utility and energy operators who know how these markets buy. Its portfolio reflects a hands-on, sector-deep approach. Suits early and growth-stage infrastructure and climate founders wanting investors fluent in utilities and heavy industry.",
          },
          {
            name: "Schneider Electric (SE Ventures)",
            url: "https://www.seventures.com/home/",
            type: "Industrial/energy CVC",
            focus: "Climate & industrial tech",
            body: "SE Ventures is Schneider Electric's corporate venture arm, investing in climate and industrial tech, energy management, industrial automation, electric mobility, and sustainability, with traditional-VC autonomy. Its differentiator is operating partners who connect companies to Schneider's global customer base for pilots and commercialization. It invests across stages and is strategic rather than New York-local. Suits climate and industrial founders wanting a strategic corporate investor that opens doors to large industrial customers.",
          },
          {
            name: "Streetlife Ventures",
            url: "https://streetlifeventures.com",
            type: "Venture capital",
            focus: "Cities x climate",
            body: "Streetlife Ventures is a New York firm investing at pre-seed and seed in B2B companies at the intersection of cities and climate, across buildings, energy, mobility and logistics, water and waste, and resilience. It favors founders with a working product and early pilots and is services-heavy, helping teams stack non-dilutive capital, navigate urban regulation, and de-risk in city test beds. Its partners bring operating credentials from New York transportation, government, and urban tech. Suits pre-seed and seed urban-climate founders needing help winning pilots and clearing regulatory hurdles.",
          },
          {
            name: "Burnt Island Ventures",
            url: "https://burntislandventures.com",
            type: "Venture capital",
            focus: "Water",
            body: "Burnt Island Ventures is an early-stage fund devoted to water, covering treatment, water data, infrastructure resilience, reuse, and adaptation. It invests pre-seed to Series A and offers what generalists cannot: water-sector expertise, privileged deal flow, and a network of utilities, corporates, and water veterans who help founders survive long procurement cycles. It was founded out of years running a leading water accelerator. Suits water-tech founders wanting a specialist early lead with domain command.",
          },
          {
            name: "Superorganism",
            url: "https://superorganism.com",
            type: "Venture capital",
            focus: "Biodiversity / nature tech",
            body: "Superorganism is an early-stage firm billed as the first VC dedicated to biodiversity, backing pre-seed and seed founders across three themes: slowing extinction drivers, climate-nature solutions, and conservation tools like sensing, genomics, and robotics. It writes small early checks, works closely with founders on first-of-their-kind nature-positive problems, and pledges a share of profits to conservation. Suits pre-seed and seed founders building nature and biodiversity-first companies with venture-scale ambition.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Planeteer Capital",
            url: "https://planeteercapital.com",
            type: "Venture capital",
            focus: "Climate tech (early-stage)",
            body: "Planeteer Capital is a New York climate-first firm leading or co-leading pre-seed and seed rounds globally, focused on asset-light companies across food and land use, manufacturing, buildings, carbon management, industrial decarbonization, climate intelligence and insurance, and adaptation. Founded by a known climate-tech analyst, it is thesis-driven and helps founders design capitalization structures blending equity, debt, grants, and offtake. Suits pre-seed and seed founders building capital-efficient climate companies who want a climate-first lead.",
          },
          {
            name: "Commonweal Ventures",
            url: "https://commonwealventures.com",
            type: "Venture capital",
            focus: "Climate & government-adjacent tech",
            body: "Commonweal Ventures is a New York early-stage firm backing pre-seed through Series A companies where partnership with government drives growth, with clean energy and climate a core vein alongside real estate and public safety. Its edge is a political-capital platform and senior advisors, including former federal environmental leadership, opening access to government decision-makers and policy intelligence. That matters where markets turn on regulation, incentives, and procurement. Suits climate and energy founders whose path to scale runs through policy-driven or government-adjacent markets.",
          },
          {
            name: "Aligned Climate Capital",
            url: "https://alignedclimatecapital.com",
            type: "Venture capital",
            focus: "Clean-energy deployment",
            body: "Aligned Climate Capital is a New York asset manager investing only in the clean-energy transition, through a venture fund backing seed to Series B companies scaling proven, financeable solutions and a project arm owning distributed clean-energy assets. Its team previously ran the federal clean-energy loan office, bringing deployment, market-access, and policy expertise beyond the check. It backs technologies ready to build, not lab-stage science. Suits seed through Series B founders deploying proven clean-energy solutions who want an investor fluent in project finance and policy.",
          },
          {
            name: "SJF Ventures",
            url: "https://sjfventures.com",
            type: "Venture capital (impact)",
            focus: "Climate, circular economy, equitable growth",
            body: "SJF Ventures is a long-running impact firm with a New York office providing expansion and growth-stage equity across clean energy and climate, circular economy and logistics, mobility, and sustainable food. It invests growth rounds solo or in syndicate, applies rigorous impact measurement, and helps companies scale operations and teams. Its climate investments include names that have reached significant scale. Suits later and expansion-stage climate founders past seed wanting growth capital with an impact partner.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "london",
    city: "London",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, London's universities are the place to start.",
    introBody: "Imperial College London (Grantham Institute), University College London (UCL), London School of Economics (LSE) anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Imperial College London (Grantham Institute)",
        orgs: [
          {
            name: "Undaunted (Centre for Climate Change Innovation)",
            url: "https://undaunted-hq.org/",
            type: "Incubator / Accelerator",
            focus: "Climate innovation",
            body: "Undaunted's flagship is The Greenhouse, a 12-month equity-free climate accelerator run with the Royal Institution and Imperial's Grantham Institute for pre-seed hard-science founders around TRL 3 to 5. Selected startups get equity-free grant funding, masterclasses and coaching from technical and commercial experts, free central-London workspace, and access to Imperial's lab benches, prototyping, investor network, and alumni community, closing with a Demo Day. Admission is highly competitive and graduation requires raising a set investment threshold. Suits UK-incorporated deep-tech climate founders with proven lab science ready to test with customers.",
          },
          {
            name: "Grantham Institute - Climate Change and the Environment",
            url: "https://www.imperial.ac.uk/grantham/",
            type: "Research institute",
            focus: "Climate science & policy",
            body: "Imperial's Grantham Institute is a climate and environment research institute, not a standalone founder program, but it is the academic half of Undaunted and co-runs The Greenhouse accelerator. For founders it is the research engine and institutional home behind that program rather than a direct route in. Approach it for research collaboration, credibility, and talent. Suits founders who want Imperial climate science behind them, with The Greenhouse as the actual accelerator door.",
          },
          {
            name: "Energy Futures Lab",
            url: "https://www.imperial.ac.uk/energy-futures-lab/",
            type: "Research institute",
            focus: "Energy systems & transition",
            body: "Energy Futures Lab is Imperial's cross-faculty energy research institute, convening hundreds of researchers across energy systems and the transition. It is a research, convening, and education body, not an accelerator, with no cohort, investment, or founder space. Founders route to Undaunted and The Greenhouse for acceleration and to Imperial Enterprise for spinouts and prototyping. Suits energy founders wanting a research and talent partner rather than program support.",
          },
        ],
      },
      {
        heading: "University College London (UCL)",
        orgs: [
          {
            name: "UCL Energy Institute",
            url: "https://www.ucl.ac.uk/bartlett/energy/",
            type: "Research institute",
            focus: "Energy demand & systems",
            body: "The UCL Energy Institute, within the Bartlett, researches energy demand, buildings, modelling, and shipping. It is a research and teaching institute, not a founder accelerator or fund. Founders route to UCL Business for spinouts and IP and to UCL Innovation & Enterprise for general startup support. Suits founders wanting a research or talent partner, not venture support.",
          },
          {
            name: "Bartlett School of Environment, Energy & Resources",
            url: "https://www.ucl.ac.uk/bartlett/environment-energy-resources/",
            type: "Academic school",
            focus: "Sustainable built environment",
            body: "BSEER is UCL's academic school housing the Energy Institute and institutes for environmental design and sustainable resources. It is research and teaching, not a founder program. Founders route to UCL Business and UCL Innovation & Enterprise. Suits founders seeking built-environment and resources research partnership, not acceleration.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "London School of Economics (LSE)",
        orgs: [
          {
            name: "Grantham Research Institute on Climate Change and the Environment",
            url: "https://www.lse.ac.uk/granthaminstitute/",
            type: "Research institute",
            focus: "Climate economics & policy",
            body: "LSE's Grantham Research Institute is a climate economics, finance, law, and policy research institute, the clearest pure research and policy body on this tab. It runs no accelerator, fund, or founder program; its output is evidence and credibility, from climate-law databases to transition frameworks. Founders needing general entrepreneurship support route to LSE Generate. Suits founders wanting policy evidence and credibility, not venture support.",
          },
        ],
      },
      {
        heading: "King's College London",
        orgs: [
          {
            name: "Climate & Sustainability research (Faculty of Natural, Mathematical & Engineering Sciences)",
            url: "https://www.kcl.ac.uk/nmes",
            type: "Research area",
            focus: "Climate & sustainability",
            body: "King's Climate & Sustainability is a university-wide research programme, with a Net Zero Centre covering decarbonisation, sustainable manufacturing, and resilient infrastructure. It is research, not a founder program, and its internal seed fund supports King's researchers rather than external startups. Founders route to the King's Entrepreneurship Institute for general support. Suits founders wanting a research or talent partner in climate and sustainability.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Queen Mary University of London",
        orgs: [
          {
            name: "Centre for Sustainable Engineering / Materials & energy research",
            url: "https://www.qmul.ac.uk/sems/research/",
            type: "Research center",
            focus: "Sustainable engineering & materials",
            body: "Queen Mary's sustainable-engineering research spans solar and perovskites, redox-flow batteries, cleaner combustion, and carbon storage within its School of Engineering and Materials Science. It is research and teaching, not an accelerator. Founders route to Queen Mary Innovation for spinouts and IP. Suits deep-materials founders seeking research partnership or test capability.",
          },
        ],
      },
      {
        heading: "Brunel University London",
        orgs: [
          {
            name: "Institute of Energy Futures",
            url: "https://www.brunel.ac.uk/research/Institutes/Institute-of-Energy-Futures",
            type: "Research institute",
            focus: "Energy efficiency & cooling",
            body: "Brunel's Institute of Energy Futures, in West London, is strong in cooling, refrigeration, waste-heat recovery, and energy in food chains, hosting a national centre for sustainable energy use in food chains. It is a research institute, not a founder accelerator. Founders route to Brunel's research and enterprise office. Suits cooling, thermal, and food-chain energy founders seeking research partnership or test capability.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "london",
    city: "London",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in London?",
    introBody: "From Sustainable Ventures, Carbon13, and Bethnal Green Ventures, here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "Sustainable Ventures",
            url: "https://sustainableventures.co.uk/",
            type: "Incubator / Ecosystem",
            focus: "Climate & sustainability",
            body: "Sustainable Ventures runs one of Europe's largest climate-tech ecosystems from County Hall on the South Bank, combining curated workspace and lab-style space, free business-support programmes, grant-writing and R&D tax-credit services, and corporate introductions, plus its own investment arm. Support spans idea stage to Series A, tailored through a gap-analysis plan and an assigned advisor, and it delivers the GLA's Better Futures+ and a national Barclays accelerator. Founders get space, hands-on commercialisation help, and capital access in one co-located community. Suits London and UK climate founders wanting workspace plus practical support, with a strong underrepresented-founder track.",
          },
          {
            name: "Carbon13",
            url: "https://carbonthirteen.com/",
            type: "Venture builder",
            focus: "Climate / carbon reduction",
            body: "Carbon13 is a venture builder for the climate emergency, running a roughly six-to-eight-month programme in Cambridge, London, and Berlin that assembles cohorts of would-be founders to form teams and build carbon-reducing startups from pre-idea. Teams that pass its investment committee receive pre-seed investment for equity via an SEIS fund, alongside early-phase stipends and access to hundreds of domain experts. Each venture must target roughly ten million tonnes of annual CO2e mitigation potential at scale. Suits technical and commercial founders who want to find a co-founder and build a carbon venture from scratch.",
          },
          {
            name: "Bethnal Green Ventures",
            url: "https://bethnalgreenventures.com/",
            type: "Accelerator / VC",
            focus: "Tech-for-good & climate",
            body: "Bethnal Green Ventures is Europe's pioneering tech-for-good accelerator and B Corp investor, running a roughly twelve-week hybrid programme that is the entry point for every portfolio company. It is an investor-accelerator hybrid, taking an initial stake for equity then following on from pre-seed to Series A, with mentoring, an expert network, and an open application requiring no warm introduction. Focus spans sustainable planet, healthy lives, and inclusive society. Suits early-stage, UK-incorporated, mission-driven founders, often first-time, building tech with built-in impact.",
          },
          {
            name: "Founders Factory",
            url: "https://foundersfactory.com/",
            type: "Accelerator / Studio",
            focus: "Climate & energy",
            body: "Founders Factory is a London venture studio and accelerator running sector-focused, often corporate-backed programmes, with climate and energy a current focus. Its climate track invests capital for minority equity and pairs founders with in-house operators across product, growth, PR, fundraising, and talent, plus access to corporate partners for pilots and commercial contracts. Programmes run roughly six months, squad-based. Suits pre-seed and seed founders with scalable tech and early traction who want hands-on operational build support and corporate access.",
          },
          {
            name: "Climate-KIC (UK)",
            url: "https://www.climate-kic.org/",
            type: "Accelerator / EU body",
            focus: "Climate systems innovation",
            body: "Climate-KIC is Europe's climate innovation agency, and its founder-facing vehicle is the ClimAccelerator, a staged, equity-free programme offering coaching, masterclasses, a climate-impact framework, network access, and, in many editions, equity-free grants and workspace. It also runs corporate-backed editions such as sustainability accelerators with large partners. Support is non-dilutive, though UK cohort availability is partner and place-based, so it varies. Suits early-stage climate founders wanting structured, equity-free acceleration with real impact measurement.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Subak",
            url: "https://subak.org/",
            type: "Accelerator / Nonprofit",
            focus: "Climate data & policy",
            body: "Subak is a not-for-profit accelerator and data cooperative for climate nonprofits using open data, policy, and behaviour change, offering unrestricted grant funding and no equity. Its staged programme provides a tailored curriculum across tech, data, impact, and business fundamentals, mentorship, and access to its data cooperative and a global community. It also runs fellowships for individuals. Suits nonprofit, mission-first climate organisations with a data-centred approach, not equity-seeking startups.",
          },
          {
            name: "Conception X",
            url: "https://www.conceptionx.org/",
            type: "Venture programme",
            focus: "Deep-tech / PhD ventures",
            body: "Conception X is a non-profit deep-tech venture programme for PhD researchers across UK and European universities, taking no equity and charging no fees. Its roughly nine-month programme runs alongside the PhD, providing entrepreneurship training, one-to-one coaching, an expert network, pitching including a large deep-tech Demo Day, and eligibility for grants, awards, and partner VC funding. It has also launched an angel syndicate for its founders. Suits STEM PhD students and early-career researchers building a startup from their research without dropping out.",
          },
          {
            name: "Zinc",
            url: "https://www.zinc.vc/",
            type: "Venture builder",
            focus: "Mission-driven incl. climate",
            body: "Zinc is a London venture builder that backs individual founders, including pre-team and pre-idea, to build commercial businesses in mission areas including climate and health. Its full-time, roughly twelve-month programme provides a founder stipend, a first cheque plus follow-on, a large pool of potential co-founders, expert fellows, in-house R&D support, coaching, office space, and investor introductions. Suits experienced or first-time founders willing to relocate to London full-time and co-found a mission-led venture from scratch.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "london",
    city: "London",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "London backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like Innovate UK and London & Partners (Grow London) offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "Innovate UK",
            url: "https://www.ukri.org/councils/innovate-uk/",
            type: "National innovation agency",
            focus: "Grants & innovation funding",
            body: "Innovate UK is the country's national innovation agency and the main source of non-dilutive grant funding founders can access while keeping full equity. Vehicles include open-call Smart Grants, sector and challenge competitions, innovation loans, knowledge-transfer partnerships, and free advisory support through its business-connect network and the Catapults. Founders should confirm current open competitions, since grant lines are periodically paused and refreshed. Suits R&D-intensive climate startups needing grant capital to de-risk technology.",
          },
          {
            name: "London & Partners (Grow London)",
            url: "https://www.londonandpartners.com/",
            type: "City growth agency",
            focus: "Business growth & greentech",
            body: "London & Partners is the Mayor's growth and investment-promotion agency, a support and soft-landing body rather than a fund. Founders get free business-growth programmes, market-entry help for international firms, trade missions, greentech networking, and export support, plus referrals into climate partners like Sustainable Ventures. It provides no direct capital. Suits growth-stage or internationally expanding greentech founders wanting connections, credibility, and market-entry help.",
          },
          {
            name: "Greater London Authority (Green Economy programmes)",
            url: "https://www.london.gov.uk/programmes-strategies/environment-and-climate-change",
            type: "City government",
            focus: "Green economy & net zero",
            body: "The Greater London Authority funds cleantech support rather than delivering it directly, chiefly through Better Futures and Better Futures+, backed by the Mayor's green funds. Founders get grant-subsidised support including workspace, prototyping, investment-readiness, and net-zero help, delivered by partners such as Sustainable Ventures and Undaunted. Applications run through those delivery partners rather than the GLA itself. Suits London-based low-carbon SMEs, with an emphasis on underrepresented founders.",
          },
          {
            name: "Energy Systems Catapult",
            url: "https://es.catapult.org.uk/",
            type: "Public innovation body",
            focus: "Energy systems innovation",
            body: "Energy Systems Catapult is a government-backed energy innovation body, not an investor, whose value to founders is testbeds, expertise, and market navigation. Its Living Lab is a real-world network of connected UK smart homes where startups trial products and gather technical and consumer data at far lower acquisition cost, and its Energy Launchpad adds incubation, investor-readiness, and policy navigation. It is best used to validate energy hardware and software in real conditions. Suits energy and net-zero founders needing real-world validation, consumer insight, and grid or market testing.",
          },
          {
            name: "Connected Places Catapult",
            url: "https://cp.catapult.org.uk/",
            type: "Public innovation body",
            focus: "Cities & mobility innovation",
            body: "Connected Places Catapult is the UK's innovation accelerator for cities, transport, and place, not an investor. It runs challenge-led SME accelerators across mobility, freight, maritime, and local-authority decarbonisation, providing business development, investment-readiness, technical support, space, and, in several programmes, real-world trials with public and corporate partners plus pilot contracts. Programmes typically suit companies at TRL 5 and above. Suits mobility, freight, maritime, and built-environment founders wanting pilots with public bodies and corporates.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "london",
    city: "London",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "London's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "National Grid Partners",
            url: "https://www.ngpartners.com/",
            type: "Corporate VC",
            focus: "Energy / climate",
            body: "National Grid Partners is the corporate venture and innovation arm of National Grid, investing across seed to growth in grid modernisation, storage, distributed energy, e-mobility, resilience, and decarbonisation. Beyond capital it offers pilot access to National Grid's UK and US operations and a global utility network of potential customers. It is UK-headquartered with a London office, though its main hub is in Silicon Valley. Suits energy and grid startups seeking a strategic utility investor and utility pilots.",
          },
          {
            name: "Octopus Energy (including Kraken and Octopus Energy Generation)",
            url: "https://octopus.energy/works-with-octopus/ ;  https://www.octopusenergygeneration.com/innovation/",
            type: "Energy company",
            focus: "Clean energy & flexibility",
            body: "Octopus Energy is a clean-energy retailer and technology group, not a startup accelerator or VC. Its Kraken platform, now spinning out, is a licensing and partnership route for utilities rather than an investor, and Octopus Energy Generation does renewables project and infrastructure finance, not early-stage venture. For venture funding under the Octopus brand, founders approach the separate Octopus Ventures. Suits energy-software firms partnering with Kraken or renewable-asset developers, not typical early-stage startups.",
          },
          {
            name: "Centrica Innovations",
            url: "https://www.centrica.com/",
            type: "Corporate VC / Innovation",
            focus: "Energy transition",
            body: "Centrica Innovations is the corporate venture and innovation arm of Centrica, the British Gas parent, investing dilutive equity from seed to Series A in distributed energy and storage, EV, connected home, and AI and robotics for the transition. Beyond capital it offers strategic access to Centrica and British Gas customers and route to market. It is a genuine UK corporate investor. Suits energy-transition and connected-home founders wanting a strategic UK energy incumbent.",
          },
          {
            name: "bp Ventures (Launchpad)",
            url: "https://www.bp.com/en/global/corporate/what-we-do/bp-ventures.html",
            type: "Corporate VC",
            focus: "Low-carbon energy",
            body: "bp Ventures is bp's corporate venture arm, historically investing across low-carbon and transition themes including bioenergy, EV charging, renewables, and hydrogen, with strategic access to bp's business units. It is UK-headquartered with London-based leadership. Note that bp has recently pivoted back toward oil and gas and agreed to sell much of its ventures portfolio, so its low-carbon venture commitment is in retreat. Suits founders weighing a strategic corporate investor, with that shift in mind.",
          },
          {
            name: "Shell Ventures",
            url: "https://www.shell.com/what-we-do/technology-and-innovation/innovate-with-shell/shell-ventures.html",
            type: "Corporate VC",
            focus: "Energy transition",
            body: "Shell Ventures is Shell's corporate venture arm, a significant-minority investor across power, mobility, emissions management, and digital, including renewables, storage, EV, hydrogen, and carbon capture, with strategic access to Shell's global businesses. It is UK-headquartered. Note that parts of its portfolio have recently been under strategic review amid a pivot toward LNG and upstream, so treat its climate venture activity as in flux. Suits founders weighing a strategic corporate investor, with that shift in mind.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "london",
    city: "London",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in London.",
    introBody: "From Systemiq Capital and Sustainable Ventures (SV Fund) to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Systemiq Capital",
            url: "https://systemiqcapital.earth/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Systemiq Capital is a London climate-tech VC, spun out of system-change firm SYSTEMIQ, investing in B2B companies from late seed to Series B across electrification, nature, applied AI, sustainable food and materials, clean transport, and climate intelligence. Beyond capital it plugs founders into SYSTEMIQ's network of business leaders, policymakers, and climate experts. It is genuinely London-headquartered. Suits commercially ambitious B2B climate founders ready to scale who value systems-change networks.",
          },
          {
            name: "Sustainable Ventures (SV Fund)",
            url: "https://sustainableventures.co.uk/",
            type: "Venture capital",
            focus: "Climate & sustainability",
            body: "SV Fund is the investment arm of Sustainable Ventures, providing SEIS and EIS-qualifying early-stage climate capital paired with an intensive support programme to the next round. Beyond capital, founders tap the full County Hall ecosystem of workspace, labs, grant-writing, R&D tax credits, corporate introductions, and community. It is genuinely London-headquartered and one of the most active UK climate investors by deal count. Suits early-stage UK climate founders wanting capital plus deep ecosystem support in one place.",
          },
          {
            name: "2150",
            url: "https://2150.vc/",
            type: "Venture capital",
            focus: "Urban sustainability",
            body: "2150 is a London-headquartered climate VC investing in the urban stack, the technologies reshaping how cities are designed, built, powered, and maintained, from energy and cooling to low-carbon cement, industrial heat, and mobility. It invests mainly at Series A and B, leads rounds, and reserves substantial follow-on, bringing deep urban and industrial expertise and a community of advisors. It has a genuine London office. Suits Series A and B founders with scalable, gigaton-potential urban and industrial climate tech.",
          },
          {
            name: "ETF Partners (Environmental Technologies Fund)",
            url: "https://etfpartners.com/",
            type: "Venture capital",
            focus: "Sustainability tech",
            body: "ETF Partners is a London-founded sustainability VC, often called Europe's original, investing in digitally led technology companies delivering environmental impact, typically from Series A with capital for multiple rounds. Beyond capital it offers hands-on scale-up support and sustainability expertise. It is genuinely London-headquartered and invests across the UK and Europe. Suits revenue-stage, digitally led sustainability founders ready to scale.",
          },
          {
            name: "Clean Growth Fund",
            url: "https://www.cleangrowthfund.com/",
            type: "Venture capital",
            focus: "Clean energy & climate",
            body: "Clean Growth Fund is a London-based, UK-only climate VC investing at seed and Series A in companies with clear emissions-reduction potential across power, transport, industrial decarbonisation, buildings, agrifood, and circular economy. Beyond capital it offers founder-friendly support and a close partnership with an incubator for commercialisation and business development. It is genuinely London-headquartered with a UK-only mandate. Suits early-stage UK cleantech founders with measurable carbon impact.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Octopus Ventures",
            url: "https://octopusventures.com/",
            type: "Venture capital",
            focus: "Climate & energy",
            body: "Octopus Ventures is one of Europe's largest and most active VCs, with a dedicated in-house climate team covering energy decarbonisation, circular economy, green finance, and carbon removal. It invests from pre-seed to Series A and follows on, backed by Octopus Group's permanent capital, and adds in-house talent specialists and US-expansion support. It is genuinely London-headquartered. Suits pre-seed to Series A climate founders wanting a large multi-stage UK platform investor.",
          },
          {
            name: "Green Angel Ventures (Green Angel Syndicate)",
            url: "https://greenangelventures.com/",
            type: "Angel network",
            focus: "Climate & clean tech",
            body: "Green Angel Ventures is the UK's leading climate-specialist angel syndicate, plus an EIS-eligible climate fund extending into Series A. It invests at early stage in EIS-eligible UK companies with a working product, adding member due-diligence expertise, board involvement, and follow-on through co-investment. It is UK-based and active nationwide including London. Suits early-stage, EIS-qualifying UK climate founders wanting angel capital plus operator expertise.",
          },
          {
            name: "World Fund",
            url: "https://www.worldfund.vc/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "World Fund is a leading European climate-tech VC investing from seed to Series B in startups that can each save large volumes of CO2e at scale, assessed by an in-house science team, across energy, food and agriculture, manufacturing, buildings, and transport. Beyond capital it offers rigorous scientific validation and lead-investor support. It is headquartered in Berlin with no dedicated London office, though it invests in UK companies. Suits deep-tech climate founders with large, measurable decarbonisation potential.",
          },
          {
            name: "Kompas VC",
            url: "https://www.kompas.vc/",
            type: "Venture capital",
            focus: "Built environment & climate",
            body: "Kompas VC is an early-stage industrial-tech VC investing at seed and Series A in decarbonisation, productivity, and resilience across manufacturing and the built environment, including proptech, construction, materials, and supply chain. Beyond capital it offers industrial sector expertise and follow-on reserves. It runs from Amsterdam, Berlin, Copenhagen, and Tel Aviv with no London office, though it invests in UK companies. Suits European seed and Series A industrial-decarbonisation founders, noting the absence of a UK base.",
          },
          {
            name: "Contrarian Ventures",
            url: "https://www.cventures.vc/",
            type: "Venture capital",
            focus: "Energy transition",
            body: "Contrarian Ventures is a pan-European seed-stage climate VC investing in decarbonisation across energy, transport, buildings, and heavy industry, often leading with a software-first lean. Beyond capital it runs a strong community platform, including an energy-tech summit and a scaling framework, plus regulatory and commercial support. It is headquartered in Vilnius with a London office and heavy UK activity. Suits seed-stage European climate founders with a validated prototype or early revenue who want a community-driven investor.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Norrsken VC",
            url: "https://www.norrsken.vc/",
            type: "Venture capital",
            focus: "Impact & climate",
            body: "Norrsken VC is a Stockholm impact VC investing pre-seed to Series B across climate tech, energy, and AI, structured as a dark-green fund, with the Norrsken foundation ecosystem behind it. It has no dedicated London office, though it invests across Europe including the UK. Beyond capital it offers a large impact network. Suits European impact and climate founders comfortable with a Nordic-led investor.",
          },
          {
            name: "Speedinvest (Climate & Industrial Tech)",
            url: "https://www.speedinvest.com/",
            type: "Venture capital",
            focus: "Climate & industrial tech",
            body: "Speedinvest is a pan-European early-stage VC with a dedicated climate and industrial-tech team covering energy, infrastructure, construction, manufacturing, mobility, and decarbonisation, plus a growth follow-on vehicle. Beyond capital it offers an in-house operational team for growth, hiring, and US expansion, plus a large founder network. It has a genuine London office alongside other European hubs. Suits pre-seed and seed European climate and industrial-tech founders wanting hands-on operational support.",
          },
          {
            name: "Ada Ventures",
            url: "https://www.adaventures.com/",
            type: "Venture capital",
            focus: "Impact incl. climate",
            body: "Ada Ventures is a London pre-seed and seed VC with an inclusive-investing thesis, one theme of which is climate equity, a fair net-zero transition. Beyond capital it runs a scouts network sourcing overlooked and underrepresented founders, plus venture partners. It is genuinely London-based, with a Bristol office. Suits pre-seed and seed founders, often from underrepresented backgrounds, building climate solutions for underserved communities.",
          },
          {
            name: "MMC Ventures",
            url: "https://mmc.vc/",
            type: "Venture capital",
            focus: "Tech incl. climate",
            body: "MMC Ventures is a London seed and Series A VC, research-led, but not a climate specialist, with a core in enterprise AI, fintech, data-driven health, and data infrastructure, and climate a peripheral theme. Beyond capital it offers a platform of sales introductions, coaching, and talent, plus co-investment vehicles. It is genuinely London-headquartered. Suits data and AI-driven founders, including climate-adjacent software, rather than deep climate hardware.",
          },
          {
            name: "Molten Ventures",
            url: "https://www.moltenventures.com/",
            type: "Venture capital",
            focus: "Deep tech incl. climate",
            body: "Molten Ventures is a London-headquartered, listed growth-stage VC with a permanent-capital model, investing Series A and B through pre-IPO across generalist tech including a climate theme, and also backing seed funds as an LP. It is genuinely London-headquartered, offering a large growth-stage platform beyond capital. Suits growth-stage climate founders past the first cheque, not early-stage teams.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Foresight Group",
            url: "https://www.foresightgroup.eu/",
            type: "Infrastructure / VC",
            focus: "Sustainability & environmental infra",
            body: "Foresight Group is a London-headquartered, listed infrastructure and private-equity manager, predominantly an asset and project investor in renewables and real assets rather than an early-stage climate VC. Its founder-facing route is Foresight Ventures, which backs UK SMEs including university spinouts with tax-efficient VCT and EIS capital and a support programme. Founders should approach that ventures arm specifically. Suits early-stage UK founders seeking tax-efficient venture capital, via Foresight Ventures rather than the infrastructure business.",
          },
          {
            name: "Barclays Climate Ventures (Sustainable Impact Capital) & Eagle Labs",
            url: "https://labs.uk.barclays/our-industries/climate-and-nature-innovation/ ; https://home.barclays/our-sustainability-/barclays-approach-to-the-transition/barclays-climate-ventures/",
            type: "Corporate / Principal investment & Incubator / Accelerator",
            focus: "Climate tech",
            body: "This entry covers two Barclays vehicles. Sustainable Impact Capital invests the bank's balance-sheet equity into early-stage environmentally focused companies, while Eagle Labs is a UK-wide network of incubator and coworking spaces and programmes, including a climate-tech centre of excellence, offering workspace, mentoring, an academy, and corporate connections, and delivering climate accelerators through partners. It has a strong UK-wide presence. Suits early-stage climate founders wanting either strategic bank equity or non-dilutive workspace and programme support.",
          },
          {
            name: "Zero Carbon Capital",
            url: "https://zerocarbon.capital/",
            type: "Venture capital",
            focus: "Deep climate science",
            body: "Zero Carbon Capital is a UK deep-science climate VC investing at pre-seed and seed in hard-science solutions to emissions across materials, industrial decarbonisation, energy, and food and agriculture. It is known for backing hardware and deep-tech founders very early and providing scientific diligence and support. It is genuinely UK-based. Suits deep-science and hardware climate founders at the earliest stages.",
          },
          {
            name: "Counteract",
            url: "https://www.counteract.vc/",
            type: "Venture capital",
            focus: "Carbon removal",
            body: "Counteract is a London VC billed as the first dedicated carbon-removal fund, investing at pre-seed and seed across all removal pathways, from direct air capture and biochar to mineralisation, enhanced weathering, and carbon-removing concrete. Beyond capital it offers deep removal specialism, with a threshold that each company plausibly enables large-scale removal. It is genuinely London-based. Suits carbon-removal founders at the earliest stages.",
          },
          {
            name: "Elbow Beach Capital",
            url: "https://www.elbowbeachcapital.com/",
            type: "Venture capital",
            focus: "Climate & sustainability",
            body: "Elbow Beach Capital is a London-headquartered, explicitly UK-focused VC investing pre-seed to Series A in decarbonisation and sustainable-energy hardware, from automation and AI to carbon capture, electrification, and low-carbon materials, often backing university spinouts and Innovate UK grant recipients. It is genuinely London-headquartered, helping founders bridge the pre-seed-to-Series-A gap. Suits UK deep-tech and hardware climate founders in that missing middle.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "AENU",
            url: "https://www.aenu.com/",
            type: "Venture capital",
            focus: "Climate impact",
            body: "AENU is a Berlin evergreen impact VC investing at seed and Series A in climate tech and the energy transition, including the carbon economy, industrial decarbonisation, buildings, and agrifood, typically co-leading with a board seat. It has no London office, though it invests across Europe including UK companies. Beyond capital it offers long-horizon evergreen support. Suits European seed and Series A climate founders comfortable with a German lead.",
          },
          {
            name: "Planet A Ventures",
            url: "https://planet-a.com/",
            type: "Venture capital",
            focus: "Science-based climate",
            body: "Planet A Ventures is a German science-first climate VC investing pre-seed to Series A in European green tech, using an in-house science team that runs life-cycle assessments with veto power, across agrifood, construction, energy, manufacturing, transport, and water and waste. Its presence is primarily German, with UK portfolio companies but no dedicated London office. Beyond capital it offers rigorous impact validation. Suits European climate founders with quantifiable environmental impact.",
          },
          {
            name: "Climentum Capital",
            url: "https://climentum.com/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Climentum Capital is a Nordic and DACH climate VC investing at seed and Series A in climate hard tech, from energy security and industrial efficiency to supply-chain resilience, as a dark-green fund with carry tied to verified CO2 savings. Its core geography is the Nordics and DACH rather than the UK. Beyond capital it offers deep-tech and impact expertise. Suits Nordic and DACH-based climate deep-tech founders.",
          },
          {
            name: "Extantia Capital",
            url: "https://www.extantia.com/",
            type: "Venture capital",
            focus: "Deep decarbonization",
            body: "Extantia Capital is a Berlin deep-decarbonisation hardtech VC investing seed to Series A with a gigaton-scale thesis across energy, carbon removal, transport, industrial processes, and green hydrogen, and it also runs a fund-of-funds. Its base is primarily German, with some UK team footprint but no London HQ. Beyond capital it offers deep-tech decarbonisation expertise. Suits deep-decarbonisation hardware founders with very large climate potential.",
          },
          {
            name: "Pale Blue Dot",
            url: "https://paleblue.vc/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Pale Blue Dot is a Malmo-based climate VC investing pre-seed and seed across climate-only, sector-agnostic areas including energy, food and agriculture, industry, and transport, in software and some hardware. It has no London office, though it invests across Europe and the US including the UK. Beyond capital it offers focused early-stage climate support. Suits pre-seed and seed European climate founders comfortable with a Nordic lead.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Regenerate Ventures",
            url: "https://www.regenerate.ventures/",
            type: "Venture capital",
            focus: "Agrifood & climate",
            body: "Regenerate Ventures is a UK-focused agrifoodtech VC, described as the UK's first dedicated upstream, inside-the-farmgate agtech fund, investing pre-seed to Series A through an EIS-eligible evergreen fund and partnering with Innovate UK. Focus spans farm-level biotech and genetics, robotics, AI, data and satellite, sensors, biologicals, and measurement. It is genuinely UK-based, agri-focused rather than London-specific. Suits early-stage UK upstream-agtech founders.",
          },
          {
            name: "Low Carbon Innovation Fund",
            url: "https://innovationfunding.uea.ac.uk/low-carbon-innovation-fund/",
            type: "Venture capital",
            focus: "Low-carbon tech",
            body: "The Low Carbon Innovation Fund is a regional co-investment fund for the East of England, managed on behalf of the University of East Anglia's low-carbon group, investing in companies demonstrating measurable emissions reductions. Its earlier funds are limited to the East of England, so London founders are largely out of scope, while a newer fund targets UK later-stage climate tech more broadly. London founders should use London-eligible funds unless targeting the East of England. Suits post-revenue climate founders in the East of England, or UK-wide via its later fund.",
          },
          {
            name: "Kiko Ventures",
            url: "https://kiko.vc/",
            type: "Venture capital",
            focus: "Deep-tech climate",
            body: "Kiko Ventures is a London-based, IP Group-owned evergreen cleantech VC with no fixed fund cycle or external LPs, investing at seed and Series A and B in science-based climate tech from renewable energy and carbon capture to hydrogen, fusion, and mobility, with strong university-spinout ties. It can invest very early and follow on with patient capital. It is genuinely London-based. Suits science and IP-rich cleantech founders wanting patient, long-horizon capital.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "boston",
    city: "Boston",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, Boston's universities are the place to start.",
    introBody: "MIT (MIT Energy Initiative), Harvard (Salata Institute), Tufts University anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "MIT (MIT Energy Initiative)",
        orgs: [
          {
            name: "MIT Sandbox Innovation Fund",
            url: "https://innovation.mit.edu/sandbox",
            type: "University Fund",
            focus: "Cross-sector incl. climate",
            body: "MIT Sandbox is the entry-point venture program for any MIT student, providing non-dilutive, milestone-based seed funding plus mentorship from experienced founders and tailored entrepreneurship education. It is open at any stage, runs across fall, spring, and summer, and is not a competition, so hundreds of teams take part. It takes no equity. Suits MIT-affiliated student founders testing an early climate idea who want non-dilutive money and coaching.",
          },
          {
            name: "MIT delta v",
            url: "https://entrepreneurship.mit.edu",
            type: "University Accelerator",
            focus: "Cross-sector incl. climate",
            body: "MIT delta v is the Institute's capstone student accelerator, a full-time, in-person summer cohort run by the Martin Trust Center that ends in Demo Day, with equity-free milestone funding and student fellowships. It uses MIT's disciplined-entrepreneurship framework, entrepreneurs-in-residence, and mock boards, and is highly selective, admitting only a fraction of applicant teams. Founder and operator partners add hands-on mentorship. Suits MIT student teams ready to go full-time and launch by the end of summer.",
          },
          {
            name: "MIT Energy Initiative (MITEI)",
            url: "https://catalog.mit.edu/mit/research/mit-energy-initiative/",
            type: "Research initiative",
            focus: "Energy systems, climate",
            body: "MITEI is MIT's member-funded energy research hub, not a dedicated accelerator, but it offers founders real routes in through its startup-member class and seed fund, which give energy startups access to MIT labs, talent, and sponsored research to clear technology hurdles. It is best used to de-risk capital-intensive energy technology alongside MIT researchers rather than as a cohort program. Founders seeking structured acceleration route to delta v, Sandbox, or The Engine. Suits capital-intensive energy startups, often MIT-linked, needing sponsored research and lab access.",
          },
        ],
      },
      {
        heading: "Harvard (Salata Institute)",
        orgs: [
          {
            name: "Harvard Innovation Labs - Climate Circle",
            url: "https://innovationlabs.harvard.edu/climate",
            type: "University Accelerator",
            focus: "Climate mitigation & adaptation",
            body: "Harvard Climate Circle is a selective, year-long program for Harvard-affiliated climate ventures, run with the business school and alumni climate network, offering coaching, pro bono legal counsel, negotiations advising, warm industry introductions, and a peer cohort, all free and without equity. A distinctive first-customer program lets ventures pilot and sell to Harvard operations, using the campus as a living lab. For-profit and nonprofit ventures are welcome, with a resilience and adaptation track added. Suits Harvard founders and alumni with early traction such as users, IP, or partner agreements.",
          },
          {
            name: "Salata Institute for Climate and Sustainability",
            url: "https://salatainstitute.harvard.edu/",
            type: "Research institute",
            focus: "Climate science & solutions",
            body: "Harvard's Salata Institute is a climate and sustainability research institute funding faculty-led research clusters and education, not an early-stage founder program. Its value to founders is research, expertise, and credibility rather than a cohort, grants, or lab space. Founders route to Harvard Innovation Labs and its Climate Circle for actual venture support. Suits founders wanting a Harvard research or talent partner, with the i-lab as the accelerator door.",
          },
          {
            name: "Sustainability Science Program (HKS)",
            url: "https://www.hks.harvard.edu/centers/mrcbg/programs/sustainability-science-program",
            type: "Research / graduate program",
            focus: "Sustainable development",
            body: "The Sustainability Science Program at Harvard Kennedy School is a research and fellowship program linking science to policy for sustainable development, not a startup program. Its value is policy research, fellowships, and networks rather than venture support. Founders route to Harvard Innovation Labs and Climate Circle. Suits researchers and policy-minded founders, with the i-lab as the founder-facing vehicle.",
          },
          {
            name: "Harvard University Center for the Environment (HUCE)",
            url: "https://www.environment.harvard.edu/",
            type: "Research center",
            focus: "Environment & climate",
            body: "The Harvard University Center for the Environment coordinates environmental research and graduate fellowships across Harvard, a research center rather than a founder program. It offers expertise, talent, and research collaboration, not a cohort or capital. Founders route to Harvard Innovation Labs and Climate Circle. Suits founders wanting a Harvard environmental research partner, not acceleration.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Tufts University",
        orgs: [
          {
            name: "Offshore Wind Energy Engineering (School of Engineering)",
            url: "https://offshorewind.tufts.edu/",
            type: "Graduate program",
            focus: "Offshore wind",
            body: "Tufts' Offshore Wind Energy Engineering is a graduate engineering education and research track, not a startup program, valuable as a source of offshore-wind talent and technical expertise. Founders needing funding or testbeds route to MassCEC and Greentown Labs. It suits companies wanting deep offshore-wind engineering capability and hires. Suits offshore-wind founders seeking technical talent and research partnership rather than acceleration.",
          },
        ],
      },
      {
        heading: "Boston University (Institute for Global Sustainability)",
        orgs: [
          {
            name: "Institute for Global Sustainability (IGS)",
            url: "https://www.bu.edu/igs/",
            type: "Research institute",
            focus: "Sustainability, climate & energy",
            body: "Boston University's Institute for Global Sustainability is a research institute convening sustainability and energy-policy research and events, not an early-stage accelerator. Its value is research, convening, and policy expertise rather than a cohort or capital. Founders route to BU's broader entrepreneurship resources and MassCEC. Suits founders wanting a sustainability-policy research partner, not venture support.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Northeastern University",
        orgs: [
          {
            name: "Global Resilience Institute (GRI)",
            url: "https://globalresilience.northeastern.edu/",
            type: "Research institute",
            focus: "Climate & community resilience",
            body: "Northeastern's Global Resilience Institute is a research institute focused on societal resilience to climate and other shocks, not a founder program. Its value is resilience research and expertise rather than a cohort or capital. Founders route to Northeastern's IDEA venture accelerator and MassCEC. Suits adaptation and resilience founders wanting a research partner, with IDEA as the venture door.",
          },
        ],
      },
      {
        heading: "UMass (Amherst / Lowell)",
        orgs: [
          {
            name: "Wind Energy Center",
            url: "https://www.umass.edu/windenergy/",
            type: "Research center",
            focus: "Wind & offshore wind",
            body: "UMass's Wind Energy Center is one of the oldest US university wind-energy research and education centers, a source of technical expertise and testing rather than a startup program. Founders needing funding, testbeds, or incubation route to MassCEC and the UMass Lowell iHub. It suits wind and offshore-wind founders wanting deep technical capability and validation. Suits wind founders seeking research partnership and testing, not acceleration.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "boston",
    city: "Boston",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in Boston?",
    introBody: "From Greentown Labs, The Engine, and Activate Boston, here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "Greentown Labs",
            url: "https://greentownlabs.com",
            type: "Incubator",
            focus: "Multi-sector climate tech",
            body: "Greentown Labs is North America's largest climatetech incubator, offering the deepest physical infrastructure in the ecosystem from its Somerville campus, including wet labs, a large prototyping lab, machine and electronics shops, a battery pilot lab, and office space on flexible fee-based memberships. Members get software, legal, and business resources plus a large network of corporate partners, investors, and fellow founders, with a focus on hardware-heavy climate across energy, storage, mobility, buildings, and water. It takes no equity for membership. Suits hardware climate founders needing wet-lab and prototyping space and a dense community.",
          },
          {
            name: "The Engine",
            url: "https://engine.xyz",
            type: "Incubator / VC",
            focus: "Tough Tech, deep climate",
            body: "The Engine, built by MIT, is a nonprofit Tough Tech incubator providing the full founder pathway from a large Cambridge facility of managed wet lab, engineering, and office space available month to month with no MIT affiliation required. Programs include Blueprint, an eight-week commercialisation course for researchers with no equity and founder-retained IP, a faculty seminar, and residency programming across many learning areas, spanning climate, energy, materials, and advanced manufacturing. Fees are usage-based with grants and discounts for early teams. Suits scientist and engineer founders translating breakthrough research who need lab space and de-risking support.",
          },
          {
            name: "Activate Boston",
            url: "https://activate.org/the-fellowship",
            type: "Fellowship",
            focus: "Climate hardware, deep tech",
            body: "Activate Boston runs the two-year, non-dilutive Activate Fellowship for scientist and engineer researchers becoming hard-tech founders, based in Kendall Square with no fee and no equity. Fellows receive a multi-year living stipend, R&D funding, technical resources, and a national network of advisors, customers, and investors, plus memberships to The Engine, Greentown Labs, and CIC and proximity to MIT and Harvard. Selection is intensely competitive, running over several months. Suits PhD scientist-founders early in commercialisation who need runway and unencumbered IP.",
          },
          {
            name: "Cleantech Open Northeast",
            url: "https://cleantechopen.org",
            type: "Accelerator",
            focus: "Early-stage cleantech",
            body: "Cleantech Open Northeast is the regional arm of the world's largest and oldest cleantech accelerator, a months-long, zero-equity program built on non-dilutive support. Founders get cleantech-specific mentorship, a structured curriculum, national bootcamps, pitch competitions with cash prizes, and connections to financiers, partners, and early-adopter customers across energy, water, waste, agriculture, and transportation. It takes no equity unless a prize is awarded. Suits very early cleantech founders wanting mentorship and validation without dilution.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "boston",
    city: "Boston",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "Boston backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like MassCEC and Massachusetts Climatetech Studio offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "MassCEC",
            url: "https://www.masscec.com/program/catalyst-and-dices",
            type: "State Agency",
            focus: "Clean energy economic dev",
            body: "MassCEC is Massachusetts's state clean-energy and climatetech agency and the anchor of non-dilutive founder funding, with Catalyst grants for early-stage prototypes and DICES grants for underrepresented or economically barriered founders, both paired with mentorship, market insight, and pitch coaching. Its wider stack adds demonstration and deployment grants, incubator funding, testing and demonstration assets, and tax incentives founders can access as they scale. It funds and enables rather than taking equity. Suits Massachusetts-based early-stage climate hardware founders needing non-dilutive prototype capital.",
          },
          {
            name: "Massachusetts Climatetech Studio",
            url: "https://www.masscec.com/program/climatetech-studio",
            type: "Public Program",
            focus: "Lab-to-market",
            body: "The Massachusetts Climatetech Studio is a lab-to-market venture-creation program from MassCEC and FedTech that matches entrepreneurs with vetted IP from federal and university labs over an intensive cohort. Participants receive a stipend, pay nothing, give up no equity, and compete for a prize pool while accessing alumni services, entrepreneur-in-residence support, and workshops, culminating in a showcase. It is designed for people who want to build a company around existing lab IP rather than their own. Suits aspiring or serial entrepreneurs, technical or not, who want to found a climate company from lab IP.",
          },
          {
            name: "Greentown Labs",
            url: "https://greentownlabs.com/programs/",
            type: "Public-Private Program",
            focus: "Underrepresented founders",
            body: "Greentown's public-private programs are sponsored, equity-free accelerators for underrepresented founders and targeted challenges, led by its ACCEL program for BIPOC-led climatetech startups. ACCEL offers a non-dilutive grant, a curated curriculum, incubation at Greentown, and extensive mentorship, with global applications but in-person attendance. Other editions run corporate-sponsored challenges across areas like carbontech. Suits BIPOC and underrepresented climate founders wanting non-dilutive support plus Greentown's space and network.",
          },
          {
            name: "MassChallenge",
            url: "https://masschallenge.org/",
            type: "Nonprofit accelerator",
            focus: "Cross-sector incl. climate",
            body: "MassChallenge is a Boston-headquartered, zero-equity, no-fee accelerator running a roughly four-month cohort for large batches of startups, with mentorship from a deep bench, tailored curriculum, corporate-partner access, and workspace, ending in competition-based, non-dilutive cash awards. It is sector-agnostic with a defined climate challenge alongside health, fintech, and food. It takes no equity. Suits early-stage founders across sectors, including pre-revenue teams, who want a large network and prize capital without dilution.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "boston",
    city: "Boston",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "Boston's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "National Grid Partners",
            url: "https://www.ngpartners.com/",
            type: "Corporate VC",
            focus: "Energy/climate",
            body: "National Grid Partners is the corporate venture and innovation arm of utility National Grid, with a genuine Massachusetts nexus through a Boston office and the utility's US headquarters in Waltham. It is a growth-oriented, multistage investor in grid decarbonisation, electrification, and adjacent infrastructure, and most portfolio companies pilot on National Grid's US and UK networks, backed by its utility-executive network. Beyond capital it offers pilots and business development. Suits grid and energy startups seeking a strategic utility investor and real-world pilots.",
          },
          {
            name: "Schneider Electric (SE Ventures)",
            url: "https://www.seventures.com/home/",
            type: "Industrial/energy CVC",
            focus: "Climate & industrial tech",
            body: "SE Ventures is Schneider Electric's corporate venture arm, headquartered in the Bay Area with no Boston office, investing across stages in climate and industrial tech from energy management and automation to sustainability and electric mobility. Its differentiator is privileged access to Schneider's global customers, R&D labs, and embedded operating partners for pilots and commercialisation. It is a strategic rather than a local investor. Suits energy-management and industrial climate founders wanting a global strategic partner, noting it is not Boston-based.",
          },
          {
            name: "Iberdrola / Avangrid (PERSEO)",
            url: "https://www.iberdrola.com/about-us/our-innovation-model/international-startup-program-perseo",
            type: "Corporate VC",
            focus: "Clean energy",
            body: "PERSEO is the international startup program of utility Iberdrola, whose US subsidiary is Avangrid, offering founders equity investment, strategic alliances, innovation challenges, and pilot projects, with a venture builder based mainly in Spain. Focus spans electrification, decarbonisation, EV charging, solar, offshore wind, and industrial heat, and its Massachusetts nexus runs through Avangrid's US challenges and offshore-wind interests. It is a global program without a dedicated local venture office. Suits energy startups, especially in offshore wind and grid, seeking utility pilots and European market access.",
          },
          {
            name: "Saint-Gobain (NOVA External Venturing)",
            url: "https://www.nova-saint-gobain.com/",
            type: "Corporate VC",
            focus: "Sustainable materials",
            body: "NOVA is the corporate venturing arm of building-materials multinational Saint-Gobain and a founding Greentown Labs sponsor, offering both minority equity and non-equity partnerships such as co-development, distribution, licensing, and pilots, plus manufacturing scale-up, IP expertise, and customer introductions. It invests at seed to Series A across sustainable construction, advanced materials, building performance, and circular economy. It is a global team without a dedicated Boston venture office, though Saint-Gobain has regional R&D ties. Suits sustainable-materials and construction-tech founders wanting a strategic corporate partner and route to market.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "boston",
    city: "Boston",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in Boston.",
    introBody: "From Breakthrough Energy Ventures and Pillar VC to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Breakthrough Energy Ventures",
            url: "https://breakthroughenergy.org",
            type: "Venture Capital",
            focus: "Deep climate tech",
            body: "Breakthrough Energy Ventures, founded by Bill Gates, is a climate and energy fund with a Boston office and long-horizon, patient capital investing from seed through growth. It requires credible gigaton-scale impact potential and concentrates on electricity, transport, industry and materials, buildings, and agriculture, backing technically ambitious, capital-intensive hardware. Beyond capital it offers deep technical diligence from former national-lab scientists and the wider Breakthrough Energy policy and deployment ecosystem. Suits technically ambitious, capital-intensive climate hardware founders.",
          },
          {
            name: "Pillar VC",
            url: "https://pillar.vc",
            type: "Venture Capital",
            focus: "Pre-seed deep/bio tech",
            body: "Pillar VC is a Boston-headquartered early-stage firm backing breakthrough science at pre-seed and seed, able to move quickly and even buy common stock alongside founders. It is sector-broad across bio, chips, robotics, manufacturing, and energy, with a strong university-spinout focus and a willingness to work with founders before incorporation. Beyond capital it offers dedicated founder support in talent, coaching, and PR, plus Series A help and a Boston founder community. Suits technical and first-time founders, often MIT or Harvard spinouts, at the earliest stage.",
          },
          {
            name: "Clean Energy Venture Group",
            url: "https://cevg.com/",
            type: "Angel / VC",
            focus: "Early-stage clean energy",
            body: "Clean Energy Venture Group is a Boston and Cambridge-based angel group providing seed capital plus hands-on management expertise, with offices in Boston and New York and a Northeast focus. Its partners are former energy and environmental executives who bring capital, strategic advice, and networks, and it co-sources and diligences deals with its sister firm Clean Energy Ventures. It backs early-stage clean-energy and climate tech with clear mitigation potential. Suits pre-seed and seed clean-energy founders in the Northeast wanting angel capital plus operator mentorship.",
          },
          {
            name: "Prime Coalition",
            url: "https://primecoalition.org/",
            type: "Catalytic capital",
            focus: "Climate",
            body: "Prime Coalition is a Boston-based nonprofit climate investor, not a conventional VC, mobilising philanthropic and catalytic capital into early-stage ventures and first-of-a-kind infrastructure that cannot yet attract market-rate money. It runs funds for transformative, gigaton-scale companies alongside a catalytic project-finance program, with additionality-driven diligence, a large philanthropic-partner network, and open impact tools. Beyond capital it offers catalytic first money where the market will not go. Suits gigaton-potential climate founders stuck in a capital gap who need catalytic first capital.",
          },
          {
            name: "Material Impact",
            url: "https://materialimpact.com/",
            type: "Venture capital",
            focus: "Deep tech incl. climate",
            body: "Material Impact is a Boston-headquartered VC focused on materials science and deep tech, investing at inception and early stages, often first money in and spinning technology out of universities, and typically leading. It backs materials-enabled products across climate, energy, water, food and agriculture, and manufacturing, keeping a select, high-touch portfolio. Beyond capital it offers hands-on company-building and deep technical and commercial expertise. Suits materials-science and deep-tech founders needing an expert lead investor.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Engine Ventures",
            url: "https://engine.xyz/",
            type: "Venture capital",
            focus: "Tough Tech / deep climate",
            body: "Engine Ventures is a Cambridge-headquartered fund affiliated with The Engine, investing at seed and Series A with follow-on in Tough Tech across climate, health, and advanced systems, with a portfolio including landmark energy and fusion companies. It is operationally distinct from the nonprofit incubator but sits close to its lab infrastructure. Beyond capital it offers operational expertise and an academic, commercial, and government network. Suits breakthrough-science and hardware founders, often MIT-adjacent, at the earliest institutional stage.",
          },
          {
            name: "Clean Energy Ventures",
            url: "https://www.cleanenergyventures.com/",
            type: "Venture capital",
            focus: "Early-stage climate tech",
            body: "Clean Energy Ventures is a Boston-headquartered climate VC and sister to Clean Energy Venture Group, investing early via convertible note, seed, and Series A, and requiring each company to be capable of large-scale emissions mitigation on its own calculator. Its heavily technical team focuses on energy, materials, hardware, transportation, and carbon, and it takes active board roles. Beyond capital it offers technical and commercial support, leadership coaching, IP development, and angel co-investment. Suits deeply technical decarbonisation founders in North America and, increasingly, Europe.",
          },
          {
            name: "MassMutual Ventures",
            url: "https://massmutualventures.com/",
            type: "Corporate VC",
            focus: "Climate & sustainability",
            body: "MassMutual Ventures is a Boston-headquartered corporate VC of MassMutual, multistage across enterprise software, cybersecurity, fintech, and health, with a dedicated climate fund focused on climate data and carbon markets, the built environment, and power-system electrification at Series A and B. Beyond capital it offers strategic advice and access to MassMutual's assets and expertise. It has a genuine Massachusetts presence. Suits climate-software, data, and built-environment founders raising at Series A or B.",
          },
          {
            name: "Fine Structure Ventures",
            url: "https://www.finestructure.vc/",
            type: "Venture capital",
            focus: "Deep tech incl. climate",
            body: "Fine Structure Ventures is a Cambridge and Boston-based deep-tech VC affiliated with Fidelity, now part of its F-Prime family, investing from seed through Series B and flexible earlier or later. It backs deep science across next-generation computing, energy and climate, biology, advanced materials, and aerospace, with a climate portfolio spanning fusion, energy, and industrial materials. Beyond capital it offers technical diligence from scientists and engineers, active board roles, and a fellowship. Suits deep-science climate founders wanting a technically credible early lead.",
          },
          {
            name: "Azolla Ventures",
            url: "https://www.azollaventures.com/",
            type: "Catalytic / Venture capital",
            focus: "Climate tech",
            body: "Azolla Ventures is a Cambridge-based VC launched by Prime Coalition that deploys blended catalytic and commercial capital at the earliest stages, with follow-on, and an impact-first thesis tested on both additionality and commercial potential. It skews hardware across gigaton-scale breakthroughs like industrial heat, lithium extraction, offshore wind, and CO2 conversion, tying carried interest to impact. Beyond capital it offers impact stewardship and access to Prime Coalition's catalytic-investor network and tools. Suits high-impact, hard-to-fund early climate founders.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Ecosystem Integrity Fund",
            url: "https://eif.vc/",
            type: "Venture capital",
            focus: "Sustainability",
            body: "Ecosystem Integrity Fund is a sustainability and climate VC headquartered in San Francisco, not Boston, investing at early-growth stage and typically leading Series A and B in capital-efficient, near-commercial technology. Focus spans renewable energy, grid management, efficiency, transportation, green chemistry, waste, and sustainable food. Beyond capital it offers growth support and industrial and utility relationships for exits. Suits capital-efficient climate founders at Series A or B, noting it is not Boston-based.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-francisco",
    city: "San Francisco",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, San Francisco's universities are the place to start.",
    introBody: "Stanford (Doerr School of Sustainability), UC Berkeley (Energy & Resources Group / Bakar Climate Labs), Lawrence Berkeley National Laboratory anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Stanford (Doerr School of Sustainability)",
        orgs: [
          {
            name: "StartX",
            url: "https://startx.com",
            type: "Accelerator",
            focus: "Stanford-affiliated startups",
            body: "StartX is a nonprofit accelerator and lifelong founder community for Stanford-affiliated founders, taking no equity and charging no fees, with three cohorts a year across a full-time accelerator and a student fellowship. Founders get assigned mentors, one-to-one staff support, a heavy events calendar, drop-in office space, a large perks package, and a durable network used for hiring and early customers. It is industry and stage agnostic, and a separate opt-in fund co-invests only after a company raises from professional investors. Suits any Stanford-affiliated climate founder wanting non-dilutive acceleration and the Stanford network.",
          },
          {
            name: "Doerr School of Sustainability",
            url: "https://sustainability.stanford.edu/",
            type: "School",
            focus: "Sustainability, climate, energy",
            body: "Stanford's Doerr School of Sustainability is a university school, not a dedicated founder program, and the academic hub for its climate and sustainability research. Founders should target its Sustainability Accelerator, which funds and helps commercialise solutions, and Stanford's broader entrepreneurship arms like StartX. Its direct value is research, talent, and translational funding rather than a cohort. Suits Stanford researchers seeking research funding and translational support before incorporation.",
          },
          {
            name: "Earth Systems Program",
            url: "https://earthsystems.stanford.edu/",
            type: "Interdisciplinary program",
            focus: "Environmental science",
            body: "Stanford's Earth Systems Program is an interdisciplinary Earth and environmental sciences degree, not a startup program, offering no cohort, grants, or investment. Its value to founders is talent and research rather than acceleration. Founders route to StartX and the Doerr School Sustainability Accelerator to commercialise. Suits Stanford students and researchers, with StartX as the founder-facing door.",
          },
          {
            name: "Emmett Interdisciplinary Program in Environment & Resources (E-IPER)",
            url: "https://eiper.stanford.edu/",
            type: "Interdisciplinary program",
            focus: "Environment & resources",
            body: "Stanford's Emmett Interdisciplinary Program in Environment and Resources is a graduate academic program in the Doerr School, not a startup accelerator. Its value to founders is talent and research rather than programming or capital. Students wanting to commercialise route to StartX and the Doerr School Sustainability Accelerator. Suits Stanford graduate researchers, with StartX as the accelerator door.",
          },
          {
            name: "TomKat Center for Sustainable Energy",
            url: "https://tomkat.stanford.edu/",
            type: "Research center",
            focus: "Sustainable energy",
            body: "Stanford's TomKat Center is a sustainable-energy research center, not an accelerator, but it runs founder-relevant translational funding, including faculty seed grants and an innovation-transfer program that funds Stanford teams to build prototypes, do market research, and refine business plans with a faculty mentor. Its value is bridging lab research toward a fundable venture. Founders seeking a full cohort pair it with StartX. Suits Stanford faculty and students moving lab research toward a company.",
          },
        ],
      },
      {
        heading: "UC Berkeley (Energy & Resources Group / Bakar Climate Labs)",
        orgs: [
          {
            name: "CITRIS Foundry",
            url: "https://citrisfoundry.org",
            type: "University Incubator",
            focus: "Hardware, climate",
            body: "CITRIS Foundry is the University of California's deep-tech incubator for founders from its member campuses, requiring a UC tie and at least two founders, and explicitly no-cost and no-equity. Value comes from a roughly six-month tailored program of intensive early coaching and milestone work, mentorship, and access to UC labs, fablabs, and testbeds plus on-campus workspace. Its focus is deep tech including sustainability, resilience, and energy. Suits UC-affiliated hardware and climate founders wanting lab access and structured help without giving up equity.",
          },
          {
            name: "Berkeley SkyDeck",
            url: "https://skydeck.berkeley.edu",
            type: "Accelerator",
            focus: "Cross-sector incl. climate",
            body: "Berkeley SkyDeck is UC Berkeley's flagship accelerator, running a roughly six-month, mostly in-person program in downtown Berkeley that ends in a Demo Day before many investors. Its cohort track is dilutive, with the SkyDeck Fund investing for a modest equity stake and uniquely sharing half its profits with the university, while a separate Pad-13 track gives earlier teams partial resources without a guaranteed check. It is industry-agnostic with deep-tech tracks. Suits MVP-stage climate startups with early traction ready to raise, who value the Berkeley network and customer introductions.",
          },
          {
            name: "Renewable & Appropriate Energy Laboratory (RAEL)",
            url: "https://rael.berkeley.edu/",
            type: "Research laboratory",
            focus: "Renewable & appropriate energy",
            body: "Berkeley's Renewable and Appropriate Energy Laboratory is an academic research lab in the Energy and Resources Group, not a startup program, producing energy-systems and energy-access research and training researchers. It offers no cohort, grants, or investment. Founders route to CITRIS Foundry, SkyDeck, Cyclotron Road and Activate, and state programs like CalSEED and CalTestBed. Suits energy-access and energy-systems founders wanting a research partner, with those programs as the venture doors.",
          },
          {
            name: "Berkeley Energy and Climate Institute (BECI)",
            url: "https://vcresearch.berkeley.edu/energy-climate-change",
            type: "Research institute",
            focus: "Energy & climate research hub",
            body: "The Berkeley Energy and Climate Institute coordinates energy and climate research across UC Berkeley and Berkeley Lab, not a dedicated founder program. Its value to founders is research, talent, and convening rather than a cohort or capital. Founders route to CITRIS Foundry and SkyDeck, Cyclotron Road and Activate, and state CalSEED and CalTestBed programs. Suits founders wanting a Berkeley energy and climate research partner, not acceleration.",
          },
          {
            name: "Energy Institute at Haas",
            url: "https://haas.berkeley.edu/energy-institute/",
            type: "Research center",
            focus: "Energy economics & policy",
            body: "The Energy Institute at Haas is a business-school research center focused on energy economics and policy, not a startup accelerator, offering research, seminars, and analysis rather than programming or capital. Founders route to SkyDeck and CITRIS Foundry for acceleration. Its value is economic and policy insight. Suits founders wanting energy-economics research and analysis, with the accelerators as the founder-facing vehicles.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Lawrence Berkeley National Laboratory",
        orgs: [
          {
            name: "Cyclotron Road (Lab-Embedded Entrepreneurship)",
            url: "https://cyclotronroad.lbl.gov/",
            type: "Fellowship",
            focus: "Deep-tech / clean energy",
            body: "Cyclotron Road at Berkeley Lab is the keystone lab-embedded entrepreneurship program, run with the nonprofit Activate, supporting scientist-founders through a two-year fellowship to move hard-science ideas from concept to first product. Fellows receive a living stipend, health coverage, relocation support, research funding at the lab, and access to world-class facilities, with no equity taken and IP retained, delivered through a weekly curriculum, mentorship, and a peer community. Bay Area relocation is required. Suits deep-tech and climate scientist-founders in energy, materials, and manufacturing who need runway and lab access without dilution.",
          },
          {
            name: "Energy Technologies & Energy Sciences Areas",
            url: "https://eta.lbl.gov/",
            type: "Research divisions",
            focus: "Clean energy",
            body: "Berkeley Lab's Energy Technologies and Energy Sciences Areas are national-laboratory research divisions, not a startup program, conducting energy R&D and operating user facilities. Founders access them through other mechanisms, chiefly Cyclotron Road and Activate for an embedded fellowship, CalTestBed for paid facility access, and lab licensing. Their value is science and facilities, not cohorts or capital. Suits energy hardware founders needing lab science and facilities, via those adjacent vehicles.",
          },
          {
            name: "Earth & Environmental Sciences Area (EESA)",
            url: "https://eesa.lbl.gov/",
            type: "Research division",
            focus: "Earth & climate systems",
            body: "Berkeley Lab's Earth and Environmental Sciences Area is a research division focused on subsurface, climate, and water systems, not a founder program. Its outputs are science and facilities rather than cohorts or capital. Founders route to Cyclotron Road and Activate for embedded support, CalTestBed for facility access, and lab tech-transfer for licensing. Suits earth and climate science founders needing lab capability, via those vehicles.",
          },
          {
            name: "Joint BioEnergy Institute (JBEI)",
            url: "https://www.jbei.org/",
            type: "Research institute",
            focus: "Bioenergy & biofuels",
            body: "The Joint BioEnergy Institute at Berkeley Lab is a federal bioenergy research center in synthetic biology for biofuels and bioproducts, not a startup accelerator, whose IP and expertise seed companies without a founder cohort. Bio-based climate founders route to SOSV, Cyclotron Road and Activate, and lab licensing, and can target CalSEED. Its value is science and licensable IP. Suits bio-based climate founders needing synthetic-biology research and IP, via those vehicles.",
          },
        ],
      },
      {
        heading: "UC Davis (Energy & Efficiency Institute)",
        orgs: [
          {
            name: "Energy and Efficiency Institute (EEI)",
            url: "https://energy.ucdavis.edu/",
            type: "Research institute",
            focus: "Energy efficiency, buildings, transport",
            body: "UC Davis's Energy and Efficiency Institute coordinates energy-efficiency and clean-energy research, not a dedicated early-stage founder program, offering research, testbeds, and talent. Founders route to CITRIS Foundry, which is open to UC Davis teams, state CalSEED and CalTestBed programs, and Cleantech Open West. Its value is applied research and validation capability. Suits efficiency and clean-energy founders wanting a research and testbed partner, with those programs as venture doors.",
          },
          {
            name: "EEI Research Centers (buildings, lighting, transportation)",
            url: "https://energy.ucdavis.edu/research/",
            type: "Research centers",
            focus: "Buildings & mobility",
            body: "UC Davis's EEI research centers, spanning lighting, cooling efficiency, and transportation, are specialised academic centers offering testing, demonstration, and applied research rather than cohorts or capital. Several serve as testbeds founders can access through CalTestBed, alongside CITRIS Foundry and Cleantech Open West. Their value is validation and demonstration capability. Suits buildings and mobility founders needing testing and demonstration, via those vehicles.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Santa Clara University (Miller Center)",
        orgs: [
          {
            name: "Miller Center - Global Social Benefit Institute",
            url: "https://millercenterglobal.org/",
            type: "Accelerator / program",
            focus: "Social & climate entrepreneurship",
            body: "Santa Clara's Miller Center runs one of the world's largest accelerators for social enterprises, focused on climate resilience and women's economic power, pairing each venture with Silicon Valley executive mentors over a roughly six-month cohort delivered online with an in-residence component, free and without equity. It refines impact and business models and investment readiness, and its impact fund provides debt financing to top graduates. Suits mission-driven, revenue-oriented climate-resilience social enterprises, often in the Global South, seeking scale and investment readiness rather than a dilutive check.",
          },
          {
            name: "Roelandts Grant Program (science & tech for social benefit)",
            url: "https://globalsocialbenefit.institute/education.html",
            type: "Research grant program",
            focus: "Science & technology for social benefit",
            body: "The Roelandts Grant Program at Santa Clara's Miller Center provides modest non-dilutive grants to early-stage social entrepreneurs, often student or alumni ventures, plus university mentorship, rather than a full cohort accelerator. Its value is first non-dilutive dollars for very early social and climate founders. Those ready for structured acceleration pair it with the Miller Center accelerator. Suits very early Santa Clara-affiliated social and climate founders needing first grant funding.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-francisco",
    city: "San Francisco",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in San Francisco?",
    introBody: "From SOSV, Activate, and Cleantech Open West, here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "SOSV",
            url: "https://sosv.com",
            type: "Accelerator",
            focus: "Bio-based climate, materials",
            body: "SOSV is a leading pre-seed biotech and deep-tech accelerator and the Bay Area node of a global venture firm, focused on bio-based solutions for human and planetary health, from climate materials and carbon removal to alternative foods and biomanufacturing. It runs a roughly four-month cohort twice a year in San Francisco, providing a first check for equity plus wet-lab and coworking space, in-house PhD scientists and engineers, and a large mentor network, then follows on into alumni. Suits scientist-founders needing lab infrastructure and a first institutional check to de-risk biology toward market.",
          },
          {
            name: "Activate",
            url: "https://activate.org",
            type: "Fellowship",
            focus: "Deep-tech climate hardware",
            body: "Activate runs the two-year, non-dilutive fellowship that scaled the lab-embedded model nationally, and its Berkeley community shares a single application with Cyclotron Road at Berkeley Lab. Fellows across many hard-science verticals receive a living stipend, R&D support, curriculum, mentorship, and lab and community access, with no equity and no fees, and Bay Area relocation and in-person participation are required. Suits deep-tech climate scientists who want two years of non-dilutive runway plus national-lab access.",
          },
          {
            name: "Cleantech Open West",
            url: "https://cleantechopen.org",
            type: "Accelerator",
            focus: "Early-stage cleantech",
            body: "Cleantech Open West is the Western US region of the world's largest and longest-running cleantech accelerator, now run as a program of the Los Angeles Cleantech Incubator, offering a roughly twelve-week program for early-stage founders. It provides intensive workshops, one-to-one mentoring from a large pro bono network, customer discovery, investor meetings, and showcases, funded by fees and sponsors with cash and in-kind prizes rather than a guaranteed investment, and coordinated with CalSEED. Suits idea-to-early-revenue cleantech founders wanting structured training and West Coast ecosystem connections.",
          },
          {
            name: "Third Derivative (RMI)",
            url: "https://third-derivative.org",
            type: "Accelerator",
            focus: "Deep climate tech",
            body: "Third Derivative is a global climate-tech accelerator founded by RMI and New Energy Nexus, structured as an integrated engine of accelerator, venture funding, and corporate and investor ecosystem. Its flexible, roughly eighteen-month virtual program gives each startup a dedicated account manager, an optional early investment, first access to a large follow-on investor network, corporate deal facilitation, and RMI's deep energy-expert bench, targeting prototype-stage companies across hard-to-abate sectors. Suits prototype-stage climate founders who want corporate pilots and follow-on capital without an in-person residency.",
          },
          {
            name: "New Energy Nexus",
            url: "https://www.newenergynexus.com/",
            type: "Accelerator / Fund",
            focus: "Clean energy entrepreneurs",
            body: "New Energy Nexus is the world's leading clean-energy entrepreneur network, providing funds, accelerators, and networks to diverse clean-energy founders, and in California it administers the state's flagship non-dilutive CalSEED grants and CalTestBed vouchers and co-founded Third Derivative. It offers grant capital, accelerator and mentorship services, testing access, and a large entrepreneur community, with an explicit access-and-inclusion focus. Suits early-stage clean-energy founders, especially underrepresented founders, wanting non-dilutive capital plus ecosystem support.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Prospect Silicon Valley (ProspectSV)",
            url: "https://www.prospectsv.org/",
            type: "Innovation hub",
            focus: "Cleantech & mobility",
            body: "Prospect Silicon Valley is a San Jose nonprofit urbantech innovation hub for mobility, energy, and the built environment, whose distinctive offering is a technology demonstration center with workspace, lab and prototyping space, and a connected-vehicle testbed. It adds commercialisation support and connections to corporate and government partners and investors, with recent work in building decarbonisation and equitable clean mobility. Suits mobility, energy, and built-environment hardware founders needing physical demonstration and test space and public-sector pilot pathways.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-francisco",
    city: "San Francisco",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "San Francisco backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like California Energy Commission (CEC) and EPIC Program offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "California Energy Commission (CEC)",
            url: "https://energy.ca.gov",
            type: "State Agency",
            focus: "Energy R&D & policy",
            body: "The California Energy Commission is the state's energy agency, a government funder and regulator rather than a startup program, and its importance to founders is as the source of the clean-energy R&D funding that flows into founder-facing vehicles. The programs founders actually apply to are CalSEED for grants, CalTestBed for testing vouchers, BlueTechValley for incubation, and utility pilot programs. Suits California clean-energy hardware founders, who should track its solicitations and apply through those administered programs.",
          },
          {
            name: "EPIC Program",
            url: "https://energy.ca.gov",
            type: "State Program",
            focus: "Clean energy R&D",
            body: "The Electric Program Investment Charge is California's ratepayer-funded clean-energy R&D program, administered by the state and the large utilities, and the funding engine behind CalSEED, CalTestBed, and utility pilots rather than a program founders apply to directly. Its value is that it capitalises the non-dilutive and pilot vehicles founders actually use. Founders route to CalSEED, CalTestBed, BlueTechValley, and PG&E's pilots. Suits clean-energy founders, who access it indirectly through those funded programs.",
          },
          {
            name: "CalSEED",
            url: "https://calseed.fund",
            type: "State Grant Program",
            focus: "Early-stage clean energy",
            body: "CalSEED is an early-stage clean-energy grant program funded by the state's clean-energy charge and administered by New Energy Nexus, the first rung of California's public innovation pipeline for concept-to-prototype ideas. It provides direct, non-dilutive, non-matching grants through concept and prototype awards won in an annual competition, plus professional development, mentorship, and community, and prioritises diverse founders and ratepayer benefits. Suits California idea and prototype-stage clean-energy, efficiency, and storage founders wanting equity-free first capital.",
          },
          {
            name: "CalTestBed",
            url: "https://www.caltestbed.com/",
            type: "Public program (CEC)",
            focus: "Clean energy",
            body: "CalTestBed is a state-funded voucher program administered by New Energy Nexus with the University of California and Berkeley Lab, giving California clean-energy entrepreneurs vouchers for third-party testing across many facilities at UC campuses and the national lab. It takes no equity, no matched funding, and no IP, and adds a commercialisation symposium, partner introductions, and an entrepreneur directory, requiring an existing hardware prototype and a California address. Suits California hardware founders with a working prototype needing independent validation to de-risk for investors and customers.",
          },
          {
            name: "BlueTechValley",
            url: "https://www.btvnc.org/",
            type: "Public program (CEC)",
            focus: "Clean energy",
            body: "BlueTechValley is a state-funded clean-energy innovation cluster managed from Fresno State, serving California's Central Valley through a hub-and-spoke model across several campuses. For clean-energy, water, and ag-tech founders it offers technology evaluation, proof-of-concept and demonstration sites, incubation and acceleration, business and legal services, and workspace, with a focus on disadvantaged communities and access to university testing. Suits Central Valley clean-energy, water, and agtech founders needing regional incubation and testing.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-francisco",
    city: "San Francisco",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "San Francisco's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "Pacific Gas and Electric (PG&E)",
            url: "https://pge.com",
            type: "Utility",
            focus: "Grid, resilience, decarbonization",
            body: "Pacific Gas and Electric is California's largest utility and a major pilot and customer-access pathway for climate startups rather than an investor, running an annual Innovation Pitch Fest tied to published problem statements across grid reliability, wildfire resilience, electrification, and load growth. Founders apply against those problems and finalists pitch decision-makers to co-develop deployable projects on PG&E's systems, supported by state clean-energy R&D funding, with eligibility favouring near-market solutions. Suits growth-stage grid, wildfire, distributed-energy, and electrification startups seeking a utility pilot and a marquee customer.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-francisco",
    city: "San Francisco",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in San Francisco.",
    introBody: "From Lowercarbon Capital and DCVC to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Lowercarbon Capital",
            url: "https://lowercarbon.com",
            type: "Venture Capital",
            focus: "Climate tech",
            body: "Lowercarbon Capital is a prominent climate VC with a hardware-heavy, science-forward thesis across carbon removal, fusion, energy, industrial decarbonisation, transportation, agriculture, and adaptation. It is stage-flexible, investing from pre-seed through Series A via its early funds and later via growth funds, and runs dedicated fusion funds, offering deep technical diligence, a large founder and expert ecosystem, and hands-on scaling help. It is headquartered in San Francisco. Suits technically audacious hardware climate founders.",
          },
          {
            name: "DCVC",
            url: "https://dcvc.com",
            type: "Venture Capital",
            focus: "Deep tech & climate",
            body: "DCVC is a deep-tech VC applying a computational and simulation lens to hard industries including climate and energy, biotech, robotics, and industrial systems, investing from seed and Series A through growth. Beyond capital it offers many technical operating experts for diligence, hiring, and customer introductions, and its climate practice is well established. It is headquartered in Palo Alto with a San Francisco office. Suits computationally differentiated deep-tech climate founders.",
          },
          {
            name: "Congruent Ventures",
            url: "https://www.congruentvc.com/",
            type: "Venture capital",
            focus: "Climate",
            body: "Congruent Ventures is a leading pure-play early-stage climate and sustainability VC investing from formation and pre-seed to Series A across mobility and urbanisation, energy transition, food and agriculture, and sustainable production, typically as lead and often the first institutional check. Beyond capital it offers multidisciplinary underwriting across project finance, grid, hard science, and software, board engagement, and customer introductions, with a separate continuity fund for scaling. It is headquartered in San Francisco. Suits technically deep hardware-plus-software climate founders at formation.",
          },
          {
            name: "G2 Venture Partners",
            url: "https://www.g2vp.com/",
            type: "Venture capital",
            focus: "Sustainable industry",
            body: "G2 Venture Partners is a growth and expansion-stage VC, spun out of a well-known green-growth practice, backing sustainability and the digitisation of traditional industries across transportation, manufacturing, energy, agriculture, and logistics, typically at Series B and beyond. Beyond capital it offers operational resources, industry networks, and data-led scaling support. It is headquartered in Menlo Park. Suits later-stage climate and industrial founders scaling proven technology.",
          },
          {
            name: "Breakthrough Energy Ventures",
            url: "https://breakthroughenergy.org/",
            type: "Venture capital",
            focus: "Deep climate tech",
            body: "Breakthrough Energy Ventures, founded by Bill Gates, spans a large venture fund and an early-stage Fellows program, investing early through growth in science-driven decarbonisation across electricity, manufacturing, agriculture, transportation, and buildings, requiring credible gigaton-scale impact. Its Fellows program is the founder on-ramp, a full-time year offering catalytic early investment and in-kind support with technical milestone management, mentorship, and network access for teams that have raised little. It is headquartered near Seattle but invests nationally. Suits pre-venture and early hard-tech climate founders.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Energy Impact Partners",
            url: "https://energyimpactpartners.com/",
            type: "Venture capital",
            focus: "Energy transition",
            body: "Energy Impact Partners is a global energy-transition investor across venture, growth, credit, and infrastructure, distinguished by a coalition of utility and industrial partners that give portfolio companies direct customer access and commercial pilots. It is headquartered in New York with a San Francisco office, and beyond capital its core offering is that utility-coalition pilot pathway plus a large industrial network. Suits startups whose growth depends on utility and industrial customers.",
          },
          {
            name: "Khosla Ventures",
            url: "https://www.khoslaventures.com/",
            type: "Venture capital",
            focus: "Climate & deep tech",
            body: "Khosla Ventures is a large, risk-tolerant deep-tech VC backing science-heavy bets including a deep clean-energy and climate portfolio, investing from a first seed check through growth, with a stated sweet spot in early rounds and flexibility to go much larger. Beyond capital it offers hands-on venture assistance in recruiting, strategy, and technical support. It is headquartered in Menlo Park. Suits audacious, technically differentiated climate and deep-tech founders comfortable with high risk.",
          },
          {
            name: "Fifth Wall",
            url: "https://fifthwall.com/",
            type: "Venture capital",
            focus: "Built environment / climate",
            body: "Fifth Wall is the largest VC focused on the built environment and real-estate tech, including building decarbonisation, investing early to late via hybrid funds. Its defining benefit is a network of many real-estate owner and operator partners that provide pilots, customer deals, and deployment for property-related climate tech. It is headquartered in Los Angeles with a San Francisco office. Suits built-environment and decarbonisation founders needing real-estate customers.",
          },
          {
            name: "Voyager (Voyager Ventures)",
            url: "https://www.voyagervc.com/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Voyager Ventures is an early-stage climate, energy, and industrial VC investing pre-seed to Series A with select follow-on across North America and Europe in generation and storage, efficiency, critical materials, advanced manufacturing, and physical AI. Beyond capital it offers deep policy, technical, and climate-finance support with an explicit carbon-impact goal per fund. It is headquartered in San Francisco and New York. Suits early climate hardware and industrial founders who value policy and technical depth.",
          },
          {
            name: "Climactic",
            url: "https://www.climactic.vc/",
            type: "Venture capital",
            focus: "Climate tech",
            body: "Climactic is an early-stage, deliberately software-first climate VC investing at seed and Series A and leading most seeds, focused on energy, AI, automation, and mobility while avoiding capital-heavy hardware. Its operator partners offer enterprise go-to-market, founder coaching, and Silicon Valley recruiting, and it co-founded an effort to move talent into climate. It is headquartered in San Francisco with an SF climate hub. Suits software-centric climate founders wanting go-to-market and talent help.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Galvanize Climate Solutions",
            url: "https://galvanizeclimate.com/",
            type: "Venture / Multi-strategy",
            focus: "Climate tech",
            body: "Galvanize Climate Solutions is a multi-strategy climate investment firm spanning venture, growth, public equities, real estate, and private credit, more a global asset manager than a dedicated seed fund. Its venture strategy takes equity in early and growth-stage climate companies, and its differentiated offering is an in-house team of science, policy, and technology experts adding technical diligence and scaling support. It is headquartered in San Francisco. Suits founders wanting a multi-asset, return-first climate partner with deep technical and policy resources.",
          },
          {
            name: "Energy Foundry",
            url: "https://energyfoundry.com/",
            type: "Venture capital",
            focus: "Energy & climate",
            body: "Energy Foundry is a Chicago-based energy and cleantech VC operating a utility-backed model, offering founders capital plus utility partnerships and pilots. Based on available sourcing it appears Chicago-centric without a confirmed Bay Area office, so its local presence should be verified. Its value is a utility-aligned investor relationship. Suits energy founders seeking a utility-aligned investor, with Bay Area founders confirming local presence first.",
          },
          {
            name: "Powerhouse Ventures",
            url: "https://www.powerhouse.fund/",
            type: "Venture capital",
            focus: "Energy transition",
            body: "Powerhouse Ventures is the seed-stage fund of the Oakland-based Powerhouse organisation, backing founders building software to decarbonise energy, mobility, and industry. It writes early checks and draws proprietary deal flow and corporate customer access from its sister innovation firm, with strategic partners among large energy and technology companies. It is headquartered in Oakland. Suits seed-stage climate software founders wanting corporate customer connectivity.",
          },
          {
            name: "Spring Lane Capital",
            url: "https://springlanecapital.com/",
            type: "Project / Venture capital",
            focus: "Sustainable infrastructure",
            body: "Spring Lane Capital is not an early-stage equity program but a private-equity firm providing hybrid project capital that combines project finance and growth capital to deploy sustainable-infrastructure projects in energy, food, water, waste, and transportation. Deals are structured as project facilities plus select company equity, sized in the tens of millions, and it is headquartered in Boston with no Bay Area presence. Founders should use an equity seed fund for company capital and engage it later for project deployment. Suits post-Series-A climate companies needing capital to build and deploy projects.",
          },
          {
            name: "At One Ventures",
            url: "https://www.atoneventures.com/",
            type: "Venture capital",
            focus: "Nature-positive deep tech",
            body: "At One Ventures is an early-stage nature-positive deep-tech climate VC leading most of its first checks at seed and Series A, with a thesis requiring disruptive deep tech, upended unit economics, and net-positive outcomes for nature beyond carbon. It backs teams with in-house platform support for talent, manufacturing, marketing, IP, and fundraising, and a rapid-prototyping ethos. It is headquartered in San Francisco. Suits deep-tech founders whose technology can be both cost-disruptive and restorative to nature.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Overture (VC)",
            url: "https://www.overture.vc/",
            type: "Venture capital",
            focus: "Climate / public sector",
            body: "Overture is an early-stage climate VC investing pre-seed to Series A, often leading, across energy, AI, resilience, and industrial transformation, with a distinctive government and policy edge. Its signature benefit is in-kind government-affairs support to unlock federal and state grants, loans, permitting, and public-sector customers. It is anchored in Washington DC, with no confirmed San Francisco office, so local presence should be verified. Suits climate founders whose scaling depends on policy, permitting, and government customers.",
          },
          {
            name: "Emerson Collective",
            url: "https://www.emersoncollective.com/",
            type: "Venture / Impact",
            focus: "Climate & environment",
            body: "Emerson Collective is not a dedicated early-stage climate fund but a multi-purpose organisation spanning venture, philanthropy, advocacy, and media, where climate is one of several focus areas. It invests across stages with large, variable checks and offers policy and advocacy muscle, media reach, and operational support, with much dedicated climate money held in a separate spend-down foundation. It is headquartered in Palo Alto. Suits founders seeking strategic and impact capital and advocacy rather than a structured seed round.",
          },
          {
            name: "Valo Ventures",
            url: "https://valoventures.org/",
            type: "Venture capital",
            focus: "Sustainability",
            body: "Valo Ventures is a thesis-driven VC investing at venture and growth stage, primarily seed and Series A, across North America and Europe around digitisation, decarbonisation, and adaptation, recently framed as physical AI, energy, and materials. Beyond capital it offers alignment to long-run megatrend theses and a supportive partner group. It is headquartered in Palo Alto. Suits early climate and deep-tech founders aligned to its megatrend theses.",
          },
          {
            name: "Powerhouse",
            url: "https://powerhouse.fund",
            type: "VC + Community",
            focus: "Energy transition",
            body: "Powerhouse is the innovation and community arm of the Oakland-based Powerhouse organisation, distinct from its fund, helping large corporates, utilities, and investors find, partner with, pilot, invest in, and acquire climate and energy startups. For founders it offers corporate-partnership and customer-access pathways rather than capital, while feeding proprietary deal flow to the fund. It is headquartered in Oakland. Suits startups seeking corporate and utility customer introductions, paired with Powerhouse Ventures for capital.",
          },
          {
            name: "Chevron Technology Ventures",
            url: "https://www.chevron.com/what-we-do/technology-and-innovation/technology-ventures",
            type: "Corporate VC",
            focus: "Low-carbon energy",
            body: "Chevron Technology Ventures is Chevron's corporate VC, investing early through late stage via a core fund for lower-carbon technology and future-energy funds for industrial decarbonisation, emerging mobility, decentralisation, and the circular and carbon economy. Beyond capital it offers pilots and deployment within Chevron's operations, technical validation, a venture-creation partnership with a national lab, and a large co-investor network. It is headquartered in San Ramon. Suits energy and industrial-decarbonisation founders seeking a strategic corporate partner and pilots.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Salesforce Ventures (Impact Fund)",
            url: "https://salesforceventures.com/",
            type: "Corporate VC",
            focus: "Climate/impact",
            body: "The Salesforce Ventures Impact Fund backs enterprise-software startups with measurable impact, including a climate vertical spanning clean-energy access, resource efficiency, and supply-chain performance. Beyond capital it offers go-to-market help, Salesforce partnership and marketplace distribution, and platform and community access, investing at any stage through an evergreen model. It is headquartered in San Francisco. Suits enterprise-software climate founders who can leverage the Salesforce ecosystem.",
          },
          {
            name: "Shell Ventures",
            url: "https://www.shell.com/what-we-do/technology-and-innovation/innovate-with-shell/shell-ventures.html",
            type: "Corporate VC",
            focus: "Energy transition",
            body: "Shell Ventures is Shell's corporate VC, making minority investments from seed to Series C in renewable energy, mobility, climate tech, and digital, with a dedicated deployment team offering founders pilots and field trials, a path to becoming a Shell customer, R&D facilities, and multinational scaling. It has a strong San Francisco Bay Area presence alongside other US hubs. Suits energy, mobility, and industrial founders seeking a major-energy strategic partner and pilots.",
          },
          {
            name: "Prelude Ventures",
            url: "https://preludeventures.com",
            type: "Venture capital",
            focus: "Climate tech (early-stage)",
            body: "Prelude Ventures is a climate-dedicated VC investing since the late 2000s with a single-family capital base that enables patient, climate-first, no-fossil-fuels investing from early stage through growth, across the built environment, carbon management, compute, food and agriculture, energy, industrials, and mobility. Its technical managing directors act as thesis-driven partners. It is headquartered in San Francisco. Suits technical climate founders, including capital-intensive hardware, wanting a patient long-term investor.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "los-angeles",
    city: "Los Angeles",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, Los Angeles's universities are the place to start.",
    introBody: "Caltech (Resnick Sustainability Institute), USC (Wrigley Institute / Viterbi), UC Irvine (Advanced Power & Energy Program) anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Caltech (Resnick Sustainability Institute)",
        orgs: [
          {
            name: "Resnick Sustainability Institute (RSI)",
            url: "https://resnick.caltech.edu/",
            type: "Research institute",
            focus: "Energy, water, climate, biosphere",
            body: "Caltech's Resnick Sustainability Institute advances sustainability science across energy, climate, and water, and although primarily a research institute it runs a genuine entrepreneurship track for Caltech innovators. Its Rocket Fund gives non-equity grants to build commercial prototypes and run early pilots, alongside translational ideation grants, entrepreneurship seminars, mentorship, and warm hand-offs to Caltech's technology-transfer office for licensing and new ventures. Suits Caltech-affiliated scientist-founders with early, lab-stage cleantech seeking to cross from research to a fundable company.",
          },
          {
            name: "Energy Science & Technology program",
            url: "https://www.catalog.caltech.edu/current/areas-of-study-and-research/energy-science-and-technology/",
            type: "Academic program",
            focus: "Clean energy",
            body: "Caltech's Energy Science and Technology program is an academic and research program within its sustainability initiatives, spanning solar and fuels, storage, and decarbonisation science, not a dedicated startup program. Its value to founders is deep technical talent and IP from Caltech labs rather than cohorts or checks. Founders route to the Resnick Rocket Fund and ideation grants and to Caltech's technology-transfer and new-venture resources. Suits researchers whose energy-science work could spin out, via those entrepreneurship vehicles.",
          },
          {
            name: "RSI Fellowships (WAVE & Pioneer Postdoctoral)",
            url: "https://resnick.caltech.edu/programs/fellowships",
            type: "Fellowships",
            focus: "Sustainability research",
            body: "Caltech's Resnick fellowships are research and training fellowships, not startup programs, spanning a summer undergraduate research experience for aspiring sustainability PhDs and a postdoctoral fellowship for independent sustainability research. They involve no equity, company-building, or accelerator element, feeding Caltech's climate research talent pipeline. Founders should instead use the Rocket Fund and technology-transfer pathway. Suits aspiring researchers rather than founders, with the Rocket Fund as the founder-facing door.",
          },
        ],
      },
      {
        heading: "USC (Wrigley Institute / Viterbi)",
        orgs: [
          {
            name: "USC Viterbi Startup Garage",
            url: "https://viterbi.usc.edu",
            type: "University Accelerator",
            focus: "Tech incl. climate",
            body: "USC's Viterbi Startup Garage is a university accelerator in Marina del Rey running a one-year residency for early-stage technology startups, now taking no equity and no fees with founders keeping all IP. Founders get around-the-clock coworking space, innovator-in-residence coaching, specialist mentors from the USC network, workshops, a speaker series, and investor introductions, with a national commercialisation partnership. It is sector-agnostic, including climate hardware and software. Suits USC-connected, post-ideation technical founders wanting free space and hands-on coaching.",
          },
          {
            name: "Wrigley Institute for Environment and Sustainability",
            url: "https://dornsife.usc.edu/wrigley/",
            type: "Research institute",
            focus: "Environment & sustainability",
            body: "USC's Wrigley Institute is an environment and sustainability research and education institute, spanning marine science, ocean carbon, plastics, and aquaculture, and it does not run a founder or startup program. Its funding is academic, through faculty awards, graduate fellowships, and undergraduate internships, rather than equity or acceleration. USC-affiliated founders route to the USC Stevens Center for licensing and the Viterbi Startup Garage. Suits researchers seeking a sustainability research partner, with those USC vehicles as the founder doors.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "UC Irvine (Advanced Power & Energy Program)",
        orgs: [
          {
            name: "Energy Materials & Sustainability research",
            url: "https://engineering.uci.edu/energy-materials-and-sustainability",
            type: "Research thrust",
            focus: "Clean energy & sustainable materials",
            body: "UC Irvine's Energy Materials and Sustainability research thrust is an academic research capacity in energy materials, storage, and sustainability, not a dedicated early-stage program. Its value to founders is research collaboration, faculty expertise, and graduate talent rather than cohorts or checks. Founders route to CalTestBed, where UC Irvine is a testbed campus, and UCI's applied-innovation commercialisation resources. Suits deep-tech founders seeking sponsored research or materials characterisation, via those vehicles.",
          },
          {
            name: "National Fuel Cell Research Center & Field Lab for Energy Studies",
            url: "https://www.nfcrc.uci.edu/",
            type: "Research centers",
            focus: "Fuel cells & grid",
            body: "UC Irvine's National Fuel Cell Research Center and its Advanced Power and Energy Program are research centers with significant testbed assets, not a founder accelerator, advancing fuel cell, electrolyser, and grid technology through research and public-private demonstrations. Founders engage through sponsored research and testbed collaboration, with access to a campus microgrid, hydrogen fuelling, and advanced-vehicle assets, rather than a cohort or investment. Suits hydrogen, fuel cell, and grid founders needing validation partners and real-world demonstration infrastructure.",
          },
        ],
      },
      {
        heading: "UCLA (Institute of the Environment & Sustainability / TDG)",
        orgs: [
          {
            name: "UCLA Anderson Venture Accelerator",
            url: "https://anderson.ucla.edu",
            type: "University Accelerator",
            focus: "Cross-sector incl. climate",
            body: "The UCLA Anderson Venture Accelerator is a university accelerator running cohort programs a few times a year, including an immersive multi-month accelerator with mentor pairings, proof-of-concept grants, and around-the-clock on-campus workspace, plus a summer incubator and a demo-day showcase. Founders get mentorship from the Anderson network, cross-campus technical office hours, mock investor interviews, and go-to-market and legal sessions, and cohorts regularly include clean and sustainable technology. Suits UCLA students, alumni, and greater-LA founders, including cleantech, wanting structured, equity-free acceleration.",
          },
          {
            name: "Technology Development Group (TDG)",
            url: "https://tdg.ucla.edu/",
            type: "Commercialization office",
            focus: "Cleantech commercialization",
            body: "UCLA's Technology Development Group is the campus commercialisation and tech-transfer office, not a dedicated accelerator, handling licensing, patents, startup formation, and industry deals. For founders it offers an innovation fund providing non-dilutive proof-of-concept gap funding, an innovation fellows program, and warm introductions to vetted service providers, plus startup licensing support. It is most useful to UCLA researchers spinning out IP. Suits UCLA faculty and researchers commercialising IP, paired with the Anderson accelerator for programmatic support.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "UC Riverside (CE-CERT / EPIC)",
        orgs: [
          {
            name: "Center for Environmental Research & Technology (CE-CERT)",
            url: "https://www.cert.ucr.edu/",
            type: "Research center",
            focus: "Clean transportation, energy, air quality",
            body: "UC Riverside's Center for Environmental Research and Technology is an environmental, emissions, and energy research center, not a founder program, covering air quality, transportation emissions, alternative fuels, and energy systems. Founders engage via sponsored research and testing rather than incubation, and it anchors regional energy-innovation efforts in the Inland Empire. The correct founder vehicle at UC Riverside is its EPIC and ExCITE incubator. Suits transportation, emissions, and clean-fuels founders needing an Inland Empire research and testing partner.",
          },
          {
            name: "EPIC proof-of-concept incubator",
            url: "https://innovation.ucr.edu/entrepreneurs",
            type: "Incubator",
            focus: "Climate/energy commercialization",
            body: "UC Riverside's EPIC incubator provides no-cost, non-dilutive support to early-stage Inland Southern California founders through one-to-one consulting from entrepreneurs-in-residence, training and workshops, SBIR and STTR proposal help, and investor connections, with its ExCITE incubator adding coworking space and mentoring. Mentors take no equity, and it has administered regional clean-energy innovation funding. Suits pre-seed Inland Empire founders, including clean energy, wanting free proof-of-concept help and grant-proposal guidance.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "los-angeles",
    city: "Los Angeles",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in Los Angeles?",
    introBody: "From LA Cleantech Incubator (LACI), Grid110, and Cleantech Open (Southwest), here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "LA Cleantech Incubator (LACI)",
            url: "https://laincubator.org",
            type: "Incubator",
            focus: "Energy, mobility, sustainable cities",
            body: "LACI is the City of LA's official cleantech incubator and the region's deepest single-stop resource, operating the La Kretz Innovation Campus with an advanced prototyping center, lab and event space, and workforce training. Its roughly two-year incubation program for pre-seed and seed startups with a prototype pairs a hybrid curriculum with weekly executive-in-residence advisory, a large mentor network, pilot funding and customer pathways, and in-house capital through its equity impact fund and non-dilutive debt fund, taking only a small warrant stake. Focus is zero-emission transportation, clean energy, and sustainable cities. Suits pre-seed to seed cleantech founders with a prototype wanting space, pilots, coaching, and non-dilutive capital in one place.",
          },
          {
            name: "Grid110",
            url: "https://grid110.org",
            type: "Accelerator",
            focus: "Early-stage founders",
            body: "Grid110 is an LA economic-development nonprofit running equity-free, no-fee cohort programs for greater-LA founders, from an idea-stage bootcamp to a twelve-week residency for teams with a prototype or early traction and a launchpad accelerator for launched companies. Founders get weekly roundtables, one-to-one mentoring, expert sessions, and a strong perks and mentor network, open to any sector and skewed toward women and founders of colour. Suits greater-LA founders, including climate and consumer, at idea-to-early-traction stage wanting free, community-driven acceleration, paired with LACI for lab space.",
          },
          {
            name: "Cleantech Open (Southwest)",
            url: "https://cleantechopen.org",
            type: "Accelerator",
            focus: "Early-stage cleantech",
            body: "Cleantech Open Southwest is the Southern California region of the world's largest cleantech accelerator, running the national annual program for early-stage cleantech startups as a paid, non-equity program unless a company wins seed prizes. Founders get a customer-discovery and business-model curriculum, extensive pro bono mentoring, investor and corporate introductions, national bootcamps, and regional and global showcases across energy, storage, transport, buildings, water, and materials. Suits very early cleantech founders wanting a low-dilution, mentorship-heavy program and national network who can absorb program fees.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "los-angeles",
    city: "Los Angeles",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "Los Angeles backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like California Energy Commission (CEC) and CalSEED offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "California Energy Commission (CEC)",
            url: "https://energy.ca.gov/programs-and-topics/programs/electric-program-investment-charge-epic-program",
            type: "State Agency",
            focus: "Energy R&D & policy",
            body: "The California Energy Commission is the state's energy policy and R&D agency, not a startup accelerator, and the ultimate funder behind the region's most important founder programs through its clean-energy R&D charge. Founders generally do not engage it directly, instead accessing its funds through administered programs like CalSEED, CalTestBed, and regional innovation clusters. Its value is as the source of funds behind those vehicles. Suits California clean-energy hardware founders, who should track its solicitations and apply through the programs it funds.",
          },
          {
            name: "CalSEED",
            url: "https://calseed.fund/",
            type: "Public grant program",
            focus: "Clean energy",
            body: "CalSEED provides non-dilutive grants to the earliest-stage California clean-energy innovators, funded by the state's clean-energy R&D charge and administered by New Energy Nexus, through concept awards and larger prototype awards won in an annual business-plan competition. Beyond cash it offers professional-development services, mentorship, legal counsel, a community of entrepreneurs, and access to regional clusters, with an explicit priority on diverse founders and disadvantaged communities. Suits pre-seed California clean-energy founders at concept or prototype stage needing first non-dilutive capital and credibility.",
          },
          {
            name: "Southern California Energy Innovation Network",
            url: "https://cleantechsandiego.org",
            type: "Public Incubator",
            focus: "Clean energy",
            body: "The Southern California Energy Innovation Network is a free public incubator managed by Cleantech San Diego and funded by the state, offering commercialisation support to clean-energy startups, but its geography is San Diego, Imperial, Riverside, and San Bernardino counties rather than the city of LA. It provides customised business services through a regional partner consortium, industry connections, pilot matchmaking, mentorship, and grant support, taking no equity. LA-based founders should instead use LACI's clean-energy programs. Suits Inland Empire and San Diego clean-energy founders, with LACI as the LA equivalent.",
          },
          {
            name: "CALSTART",
            url: "https://calstart.org/",
            type: "Nonprofit consortium",
            focus: "Clean transportation",
            body: "CALSTART is a clean-transportation industry nonprofit and consortium, not a dedicated startup accelerator, convening the zero-emission mobility industry across trucks, buses, and infrastructure. For founders its value is industry access through consortium membership, fleet, utility, and manufacturer connections, incentive-program navigation, technical working groups, and market intelligence rather than cohorts, lab space, or checks. Suits zero-emission vehicle, charging, and fleet-electrification founders needing industry partnerships, policy insight, and customer access.",
          },
          {
            name: "CalTestBed",
            url: "https://www.caltestbed.com/",
            type: "Public program (CEC)",
            focus: "Clean energy",
            body: "CalTestBed gives California clean-energy entrepreneurs vouchers for third-party testing at many world-class facilities across UC campuses and the national lab, funded by the state and administered by New Energy Nexus with the University of California. Founders keep their IP, de-risk prototypes, and gain a commercialisation network with an annual symposium and introductions to investors, customers, and pilot partners, requiring a California hardware prototype. Suits California clean-energy hardware founders with a working prototype needing expensive, credibility-building testing they cannot afford themselves.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "los-angeles",
    city: "Los Angeles",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "Los Angeles's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "Southern California Edison (SCE)",
            url: "https://www.sce.com/",
            type: "Utility",
            focus: "Grid & electrification",
            body: "Southern California Edison is an investor-owned utility, not a dedicated accelerator, and functions as a pilot, demonstration, and validation partner. The founder-relevant vehicle is its Emerging Technologies Program and state-funded demonstration projects, through which startups can get technologies assessed, validated, and demonstrated, guided by its published priority maps. Founders route to that program and use CalTestBed and LACI as the structured on-ramps. Suits grid, storage, EV, efficiency, and distributed-energy founders seeking a utility validation and pilot partner.",
          },
          {
            name: "LADWP (Los Angeles Department of Water and Power)",
            url: "https://ladwp.com",
            type: "Utility (municipal)",
            focus: "Clean energy, water, grid",
            body: "LADWP is the largest US municipal utility and, crucially for founders, the owner and funder of the La Kretz Innovation Campus that LACI operates, and a founding partner of LACI. It runs energy-efficiency demonstration and customer-engagement programs on that campus, but startups access incubation, prototyping, pilots, and capital through LACI rather than LADWP directly. It can also be a demonstration counterparty for grid, water, and efficiency solutions. Suits LA clean-energy and water founders, engaging via LACI and the La Kretz campus.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "los-angeles",
    city: "Los Angeles",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in Los Angeles.",
    introBody: "From Riot Ventures and Regeneration.VC to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Riot Ventures",
            url: "https://riot.vc/",
            type: "Venture capital",
            focus: "Climate & hard tech",
            body: "Riot Ventures is an LA-based deep-tech VC backing founders modernising physical and critical industries across aerospace, defence, energy, robotics, manufacturing, and climate hard tech, entering at institutional pre-seed and seed where it leads or co-leads and follows on. Beyond capital it bakes executive and technical recruiting into its platform and partners operationally with a small, high-conviction portfolio. It is headquartered in LA with a Boston presence. Suits capital-intensive deep-tech and climate-hardware founders wanting a hands-on lead investor at seed.",
          },
          {
            name: "Regeneration.VC",
            url: "https://regeneration.vc/",
            type: "Venture capital",
            focus: "Consumer-powered climate",
            body: "Regeneration.VC is an LA-founded early-stage climate VC investing in consumer-powered climate innovation across next-generation materials and packaging, apparel and food brands, and recommerce and reverse logistics, at seed and Series A. Beyond capital it offers materials-science and circularity expertise, brand-building support, and a high-profile network. It is headquartered in Los Angeles. Suits early-stage consumer, materials, and circular-economy climate founders wanting a specialist LA lead with consumer and brand DNA.",
          },
          {
            name: "Fifth Wall",
            url: "https://fifthwall.com/",
            type: "Venture capital",
            focus: "Built environment / climate",
            body: "Fifth Wall is the largest investment firm focused on technology for the built environment, combining proptech and climate, founded in LA with additional offices elsewhere. Its edge for climate founders is a network of many strategic real-estate owner-operator partners that serve as pilot customers and distribution for building-decarbonisation technology across software, hardware, renewables, storage, and carbon tech, investing early through growth. Suits founders decarbonising real estate and buildings who need corporate real-estate customers as much as capital.",
          },
          {
            name: "Idealab",
            url: "https://www.idealab.com/",
            type: "Startup studio / investor",
            focus: "Cleantech",
            body: "Idealab is a Pasadena-based startup studio and company-builder, not a traditional accelerator, with a long history in renewable energy and climate. Its model is co-creation, generating or co-developing ideas, providing first capital, recruiting teams, and supplying shared operational infrastructure across product, marketing, legal, and business development, taking a founding equity stake, with companies joining by invitation rather than open cohorts. Suits founders, often technical domain experts, willing to build a company hand-in-hand with a studio, especially in energy, climate, and robotics.",
          },
          {
            name: "Overture (VC)",
            url: "https://www.overture.vc/",
            type: "Venture capital",
            focus: "Climate / public sector",
            body: "Overture is an early-stage climate VC with a strong Washington policy edge, investing pre-seed to Series A in energy, resilience, AI, and industrial transformation where public policy and government procurement are central. Its signature benefit is embedded government-affairs support to win federal and state grants and loans, navigate regulation, and sell into public-sector customers. Its founders are LA-connected though the firm is DC-oriented, so verify its primary office. Suits climate founders whose business models depend on unlocking government incentives, permits, or public demand.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "MaC Venture Capital",
            url: "https://macventurecapital.com/",
            type: "Venture capital",
            focus: "Tech incl. climate",
            body: "MaC Venture Capital is an LA-based seed VC, among the larger seed firms in North America, investing with a cultural-investing thesis across frontier technologies, fintech, enterprise, consumer, and some climate and infrastructure. It offers seed founders strategic, perspective-driven guidance, a diverse multidisciplinary team, and an active lead-investor posture, as a generalist rather than a climate specialist. It is headquartered in Los Angeles. Suits seed-stage founders, including climate-adjacent and infrastructure, wanting a well-networked LA lead.",
          },
          {
            name: "Ten13 / Climate-focused LA angels",
            url: "https://www.ten13.vc/",
            type: "Angel / Venture",
            focus: "Climate tech",
            body: "Ten13 is an Australian venture syndicate, not LA-based, using a deal-by-deal, network-based model rather than a pooled fund, and it is early-stage and generalist across fintech, software, and AI without a specific climate thesis. Founders get access to its large syndicate community of operators, founders, and family offices, focused on Australia, the US, and Africa. Suits early-stage founders across sectors seeking Australian angel and syndicate capital, listed as an international source rather than an LA climate specialist.",
          },
          {
            name: "Building Ventures",
            url: "https://www.buildingventures.com/",
            type: "Venture capital",
            focus: "Built environment",
            body: "Building Ventures is an early-stage VC headquartered in Boston, not Los Angeles, investing exclusively in the built environment across design, build, operate, and experience, spanning proptech, construction tech, and building decarbonisation, typically leading or co-leading as first institutional investor at seed to Series A. It offers founders a large network of senior industry executives and strategic partners for pilots and distribution. Suits built-environment and building-decarbonisation founders, listed as a national source rather than LA-local.",
          },
          {
            name: "Toyota Ventures (Climate Fund)",
            url: "https://toyota.ventures/",
            type: "Corporate VC",
            focus: "Climate",
            body: "The Toyota Ventures Climate Fund is the climate arm of Toyota's early-stage corporate VC, headquartered in the San Francisco Bay Area rather than LA, targeting seed-stage startups with scalable solutions for carbon neutrality across renewable energy, storage and batteries, carbon capture and utilisation, and hydrogen. Beyond capital it offers Toyota's global network, technical expertise, strategic partnerships, a dedicated portfolio-support team, and potential to become an early customer. Suits seed-stage climate, energy, and mobility-adjacent founders wanting a strategic corporate partner, listed as a Bay Area source.",
          },
          {
            name: "Chevron Technology Ventures",
            url: "https://www.chevron.com/what-we-do/technology-and-innovation/technology-ventures",
            type: "Corporate VC",
            focus: "Low-carbon energy",
            body: "Chevron Technology Ventures is Chevron's corporate strategic VC, headquartered in Houston rather than LA, investing through a core fund for its own operations and a future-energy fund for transition technology like carbon capture, hydrogen, storage, industrial decarbonisation, and emerging mobility, typically at Series A through C. Its distinctive value is access to Chevron's industrial assets and facilities for piloting and a scale-up and partnership pathway. Suits later-stage-of-early climate and energy founders seeking an industrial strategic partner and pilot sites, listed as a Houston source rather than a first-check provider.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "washington-dc",
    city: "Washington, D.C.",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, Washington, D.C.'s universities are the place to start.",
    introBody: "Johns Hopkins (Ralph O'Connor Sustainable Energy Institute), Georgetown University (Washington DC), George Washington University (Washington DC) anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "Johns Hopkins (Ralph O'Connor Sustainable Energy Institute)",
        orgs: [
          {
            name: "Johns Hopkins Ward Infinity Impact Accelerator",
            url: "https://gce.jhu.edu/ward-infinity/",
            type: "Accelerator",
            focus: "Climate resilience / local food systems",
            body: "Ward Infinity is a sixteen-week, equity-free accelerator run by Johns Hopkins for community-rooted ventures solving health and environmental challenges across the DC metro, based at a local hospital campus, with a climate-resilience and local-food-systems track. Fellows get capital, mentorship, and resources, blending design thinking, public health, and entrepreneurship, and join a lasting network of changemakers. It takes no equity. Suits mission-driven, community-rooted DMV founders working at the health, environment, and equity intersection.",
          },
          {
            name: "Ralph O'Connor Sustainable Energy Institute (ROSEI)",
            url: "https://energyinstitute.jhu.edu/",
            type: "Research institute",
            focus: "Clean energy, grid, storage",
            body: "ROSEI is Johns Hopkins's central sustainable-energy research and education institute, not a dedicated accelerator, but it actively supports commercialisation through an annual translation-to-market workshop with the university's tech-ventures office and an explicit aim to cultivate energy and climate startups from Hopkins labs. Its direct value to founders is research, talent, and translation rather than a cohort or checks. Founders route to Johns Hopkins Technology Ventures for spinouts and MEIA for local commercialisation. Suits Hopkins-affiliated researchers exploring a spinout.",
          },
          {
            name: "ROSEI Centers (grid, offshore wind, net-zero supply chains)",
            url: "https://energyinstitute.jhu.edu/centers/",
            type: "Research centers",
            focus: "Grid & industrial decarbonization",
            body: "The ROSEI centers are Johns Hopkins research centers focused on a fully decarbonised grid, offshore wind reliability, and net-zero supply chains, not founder programs. Their value is research, tools, talent, and workforce rather than venture support. Founders route to Johns Hopkins Technology Ventures for any IP and to MEIA and MEI2 for commercialisation. Suits researchers and technical talent, not founders seeking a program.",
          },
        ],
      },
      {
        heading: "Georgetown University (Washington DC)",
        orgs: [
          {
            name: "Georgetown Climate Center",
            url: "https://www.georgetownclimate.org/",
            type: "Research center (law/policy)",
            focus: "Climate, energy & transportation policy",
            body: "The Georgetown Climate Center is a nonpartisan law and policy center advancing federal, state, and local climate policy and maintaining a widely used adaptation clearinghouse, not a startup program. It serves policymakers, and for founders it is a knowledge resource on adaptation policy rather than a source of capital or acceleration. Founders route to MEIA or Halcyon for programmatic support. Suits founders wanting to understand adaptation policy context, as a reference rather than a program.",
          },
          {
            name: "Earth Commons - Institute for Environment & Sustainability",
            url: "https://earthcommons.georgetown.edu/",
            type: "University research institute",
            focus: "Environment & sustainability",
            body: "Georgetown's Earth Commons is the university's environment and sustainability institute for research, education, and degree programs, not primarily a venture accelerator, though it hosts nascent environmental-entrepreneurship activity with Georgetown Entrepreneurship. Its direct value is research and education rather than capital or a cohort. Founders route to Georgetown Entrepreneurship rather than Earth Commons itself for venture support. Suits Georgetown students and researchers testing an environmental venture idea.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "George Washington University (Washington DC)",
        orgs: [
          {
            name: "GW Solar Institute",
            url: "https://solar.gwu.edu/",
            type: "University institute",
            focus: "Solar & clean-energy policy",
            body: "The GW Solar Institute is a research and policy institute focused on the economics, technology, and public policy of solar deployment, not a founder program, doing analysis, education, and outreach. Its value to founders is policy insight rather than capital or acceleration. Solar founders route to federal non-dilutive programs and regional accelerators like MEIA. Suits researchers and policy-oriented students, with those programs as the founder doors.",
          },
        ],
      },
      {
        heading: "American University (Washington DC)",
        orgs: [
          {
            name: "Center for Environmental Policy (CEP)",
            url: "https://www.american.edu/spa/cep/",
            type: "University research center",
            focus: "Environmental & climate governance",
            body: "American University's Center for Environmental Policy is a research and policy center aimed at improving US environmental governance through webinars, symposia, awards, and reports, not a startup program. Its value to founders is policy research rather than capital or acceleration. Founders route to accelerators and funds for venture support. Suits policy researchers rather than founders.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Howard University (Washington DC)",
        orgs: [
          {
            name: "Environmental & Climate Justice Center",
            url: "https://law.howard.edu/environmental-and-climate-justice-center",
            type: "University law center",
            focus: "Environmental & climate justice",
            body: "Howard University's Environmental and Climate Justice Center sits in its law school and focuses on environmental-justice scholarship, education, and advocacy, serving communities and nonprofits rather than for-profit founders. Its value is legal and policy expertise and community support rather than venture programming. Mission-aligned founders route to Halcyon, which prioritises equity-driven entrepreneurs. Suits environmental-justice advocates and community organisations, with Halcyon as the founder door.",
          },
        ],
      },
      {
        heading: "University of Maryland, College Park (suburban Maryland)",
        orgs: [
          {
            name: "Maryland Momentum Fund",
            url: "https://momentum.usmd.edu/",
            type: "University venture fund",
            focus: "University startup capital (climate-adjacent)",
            body: "The Maryland Momentum Fund is a university venture fund providing gap equity or convertible-note investment into Maryland startups affiliated with the state university system by founder, IP, or location, positioning them for a Series A within a year or two. It is sector-agnostic, so climate is eligible but not the focus, and requires a third-party co-investment match, with coaching even for applicants not selected. Suits state-university-affiliated founders, including climate, with early traction raising a bridge round.",
          },
          {
            name: "Center for Global Sustainability (CGS)",
            url: "https://cgs.umd.edu/",
            type: "University research center",
            focus: "Climate & energy policy",
            body: "The University of Maryland's Center for Global Sustainability is a research and policy center delivering emissions-pathway analysis and policy engagement, not a startup program. Its value to founders is research and policy insight rather than capital or acceleration. Founders route to MEI2 and MEIA for commercialisation. Suits policy researchers, with the Maryland energy programs as the founder doors.",
          },
          {
            name: "Center for Environmental Energy Engineering (CEEE)",
            url: "https://ceee.umd.edu/education/graduate-program",
            type: "Research center",
            focus: "Sustainable energy engineering",
            body: "Maryland's Center for Environmental Energy Engineering is an industry-sponsored research lab specialising in HVAC, refrigeration, heat pumps, and heat exchangers, operating a consortium model where corporate and government sponsors pool funds and license results, not a founder program. It does spin out companies and license IP, so its founder value is licensable thermal-systems technology. Founders route to UM Ventures for licensing and MEIA to build a venture. Suits corporates sponsoring research or founders licensing thermal-systems IP.",
          },
          {
            name: "Maryland Energy Innovation Institute (MEI2)",
            url: "https://energy.umd.edu/",
            type: "Research institute",
            focus: "Clean-energy tech commercialization",
            body: "MEI2 is a state-created institute to commercialise clean-energy technology, awarding energy seed grants and prototype-demonstration funding and serving as the parent and partner of the Maryland Energy Innovation Accelerator, rather than running its own cohort. Its founder value is early commercialisation capital and the MEIA pathway. Founders route to MEIA and its seed grants. Suits Maryland university researchers moving lab energy technology toward a company.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "George Mason University (Northern Virginia)",
        orgs: [
          {
            name: "Institute for a Sustainable Earth (ISE)",
            url: "https://ise.gmu.edu/",
            type: "Research institute",
            focus: "Sustainability & UN SDGs",
            body: "George Mason's Institute for a Sustainable Earth is a research-coordination and convening body connecting many faculty and students and offering internal seed grants to faculty teams, not external startups, so it is not a founder program. Its value is research collaboration and convening rather than venture support. Mason-linked founders route to Virginia Venture Partners and the state innovation ecosystem. Suits Mason researchers, with those state vehicles as the founder doors.",
          },
          {
            name: "Center for Climate Change Communication (Mason 4C)",
            url: "https://www.climatechangecommunication.org/",
            type: "University research center",
            focus: "Climate communication",
            body: "George Mason's Center for Climate Change Communication is a social-science research center studying public understanding of climate change and training weathercasters, not a startup program. Its value is communications research and practitioner training rather than capital or acceleration. Founders needing programs route to regional accelerators and funds. Suits communications researchers and climate-communication practitioners rather than founders.",
          },
        ],
      },
      {
        heading: "Independent Research Institutions (Washington DC)",
        orgs: [
          {
            name: "World Resources Institute (WRI)",
            url: "https://www.wri.org/",
            type: "Independent global research institute",
            focus: "Climate, energy, sustainable cities",
            body: "The World Resources Institute is a global research institute headquartered in DC, and while it runs entrepreneur programs they are land-restoration focused and targeted at Africa, Latin America, and South Asia rather than DMV climate tech broadly. For a DMV founder its local value is research and convening rather than a program. Founders route to MEIA and Halcyon for regional support. Suits restoration entrepreneurs in the Global South, with the regional accelerators as the DMV founder doors.",
          },
          {
            name: "Resources for the Future (RFF)",
            url: "https://www.rff.org/",
            type: "Independent research institute",
            focus: "Environmental & energy economics",
            body: "Resources for the Future is an independent environmental-economics research institution in DC producing impartial analysis, such as work underpinning the social cost of carbon, with no startup program. Its value to founders is economic and policy knowledge rather than capital or acceleration. Founders route to accelerators and funds for venture support. Suits economists and policy analysts rather than founders.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "washington-dc",
    city: "Washington, D.C.",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in Washington, D.C.?",
    introBody: "From Halcyon (DMV Climate Innovation Fellowship), Bethesda Green (Be Green Innovation Lab), and Maryland Energy Innovation Accelerator (MEIA), here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "Halcyon (DMV Climate Innovation Fellowship)",
            url: "https://halcyonhouse.org/",
            type: "Incubator / Accelerator",
            focus: "Climate mitigation, adaptation, resilience",
            body: "Halcyon's DMV Climate Innovation Fellowship is an equity-free incubator for DC, Maryland, and Virginia founders addressing climate mitigation, adaptation, and resilience, based in Georgetown. Fellows get a stipend, cloud credits, professional advisors, expert workshops in climate and non-dilutive finance, pro bono legal support, in-person residency weeks in the DMV, and a global community, with training in product-market fit and investment readiness. It requires a for-profit venture serving the DMV with an MVP and a full-time founder. Suits DMV founders past MVP who need non-dilutive runway, mentorship, and local ecosystem ties.",
          },
          {
            name: "Bethesda Green (Be Green Innovation Lab)",
            url: "https://bethesdagreen.org/",
            type: "Green incubator / Accelerator",
            focus: "Clean energy & sustainability",
            body: "Bethesda Green's Be Green Innovation Lab is a green incubator in Montgomery County supporting sustainability and social-impact startups from idea to seed, with a rolling, year-round incubator and, at times, a cohort accelerator focused on investment readiness. Founders get mentorship, tailored curriculum, non-equity awards, entrepreneur roundtables, impact-benchmarking tools, and a community network, across climate, blue tech, circular economy, fashion, and food. Members can access grants and investment via partners. Suits early, mission-driven green founders in Montgomery County wanting low-cost, non-dilutive incubation.",
          },
          {
            name: "Maryland Energy Innovation Accelerator (MEIA)",
            url: "https://energy.umd.edu/",
            type: "Clean-energy accelerator",
            focus: "Clean-energy startups",
            body: "MEIA is a cohort-based clean-energy accelerator of the Maryland Clean Energy Center commercialising advanced energy and climate tech from Maryland businesses, universities, and federal labs, distinguished by an executive-in-residence model that pairs seasoned leaders with lab-born teams. It runs a multi-phase path from customer discovery through commercialisation planning to a capital-ready accelerator, plus a founders fund providing early capital targeting minority, women, and veteran-owned businesses. Focus spans solar, wind, storage, efficiency, grid, and carbon. Suits Maryland-affiliated hard-tech energy founders needing team-building and commercialisation help.",
          },
          {
            name: "Refraction",
            url: "https://refraction.one/",
            type: "Innovation hub / Coworking",
            focus: "Tech incl. climate",
            body: "Refraction is an innovation hub and coworking space in Northern Virginia providing offices, event space, mentoring, programming, and connections to customers, investors, and partners across sectors, not a dedicated climate program. Its value is workspace and Northern Virginia ecosystem access rather than climate-specific programming or capital. Climate founders route to the Dominion accelerator or MEIA for sector support. Suits Northern Virginia founders of any sector wanting workspace and community, paired with those climate programs.",
          },
          {
            name: "Dominion Energy Innovation Center",
            url: "https://dominnovation.com/",
            type: "Corporate innovation center",
            focus: "Energy & grid",
            body: "The Dominion Energy Innovation Center is a clean-energy incubator and accelerator in Virginia, a nonprofit public-private partnership with Dominion Energy, whose flagship virtual accelerator connects seed-stage-or-later energy and sustainability startups with their next utility customer and potential corporate investor. Each company gets a dedicated Dominion mentor, workshops, and a pitch to utility leadership, plus optional coworking, and it takes no equity or IP. Suits energy and grid founders with a pilot-ready product seeking a utility customer and Virginia ecosystem access.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Conservation X Labs",
            url: "https://conservationxlabs.com",
            type: "Nonprofit / Incubator",
            focus: "Conservation tech",
            body: "Conservation X Labs is a conservation-tech nonprofit and incubator in DC running open-innovation prizes and challenges rather than a fixed-equity accelerator, funding early prototypes through a tech prize and supporting winners with design, engineering, investment, and acceleration via its digital makerspace. It also runs larger grand challenges with partners, focused on technology solutions to biodiversity loss and extinction across hardware and software. Suits conservation and biodiversity-tech inventors at the prototype stage seeking non-dilutive grants and technical support.",
          },
          {
            name: "Halcyon Global Climate Accelerator",
            url: "https://halcyonaccelerator.org/climate/",
            type: "Accelerator",
            focus: "Climate adaptation/resilience",
            body: "The Halcyon Global Climate Accelerator is Halcyon's global adaptation and resilience program, distinct from its DMV fellowship, a roughly six-month hybrid with a virtual kickoff and in-person residency weeks in Washington and Los Angeles. Founders receive an equity-free stipend, training in Halcyon's methodology, masterclasses, connections to impact investors and multilaterals, and a global community, with skill series in blended and adaptation finance and non-dilutive funding. It requires a for-profit with a working MVP and early commercial validation. Suits adaptation and resilience founders anywhere, from energy resilience to nature tech and water, willing to travel to residencies.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "washington-dc",
    city: "Washington, D.C.",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "Washington, D.C. backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like DC Department of Energy & Environment (DOEE) and DC Green Bank offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "DC Department of Energy & Environment (DOEE)",
            url: "https://doee.dc.gov/",
            type: "City government agency",
            focus: "Energy & environment",
            body: "The DC Department of Energy and Environment is the District's environmental regulator and program funder, not a startup accelerator, and its founder relevance is as a funder and partner of vehicles like DC PACE, the DC Green Bank, DCSEU, and Solar for All, plus grants and rebates. Founders route to DC Green Bank for financing, DCSEU for rebates and contracting, and Halcyon for programmatic support. Suits founders selling into District clean-energy and efficiency programs or seeking grants.",
          },
          {
            name: "DC Green Bank",
            url: "https://dcgreenbank.com/",
            type: "Quasi-public green finance authority",
            focus: "Clean-energy financing",
            body: "The DC Green Bank is a quasi-governmental green-finance authority offering project-level debt and credit enhancements, from commercial PACE and efficiency and renewables loans to a small-business loan fund and pre-development loans, to deploy clean energy and green infrastructure in DC. It finances projects, not company equity. Founders route to K Street Capital or the District's venture program for equity and to the green bank for project and deployment capital. Suits founders and developers needing project finance for DC installations.",
          },
          {
            name: "DC Sustainable Energy Utility (DCSEU)",
            url: "https://www.dcseu.com/",
            type: "Public-purpose energy program",
            focus: "Energy efficiency & renewables",
            body: "The DC Sustainable Energy Utility is a performance-based contractor to the District delivering efficiency and renewable programs, offering businesses rebates and incentives, technical assistance, custom energy-savings analysis, contracting opportunities, and free workforce training, but no dedicated startup-pilot program. Efficiency-product founders can become DCSEU vendors and contractors. Founders route to DC Green Bank for finance and Halcyon or MEIA for programs. Suits efficiency-product companies wanting to become District vendors.",
          },
          {
            name: "Montgomery County Green Bank",
            url: "https://mcgreenbank.org/",
            type: "Publicly chartered nonprofit green bank",
            focus: "Clean-energy & resilience financing",
            body: "The Montgomery County Green Bank is a green-finance entity offering project financing to county residents and businesses, from commercial efficiency and solar deals to PACE, low-income solar access, and co-lending with banks, and a sub-awardee under the federal greenhouse-gas reduction fund. It finances clean-energy projects, not startup equity. Founders route to TEDCO or the Maryland Momentum Fund for venture capital and to the green bank for deployment capital. Suits founders and developers financing county clean-energy projects.",
          },
          {
            name: "Metropolitan Washington Council of Governments (MWCOG)",
            url: "https://www.mwcog.org/",
            type: "Regional planning body",
            focus: "Regional climate & energy",
            body: "The Metropolitan Washington Council of Governments is a regional planning body coordinating transportation, air-quality, and climate and energy planning across two dozen local governments, setting regional targets and running cooperative procurement, not a startup program. Its value to founders is regional coordination and data rather than capital or acceleration. Founders route to accelerators and funds for venture support. Suits local governments and planners rather than founders.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "ARPA-E (Advanced Research Projects Agency-Energy)",
            url: "https://arpa-e.energy.gov/",
            type: "Federal agency",
            focus: "Advanced energy R&D funding",
            body: "ARPA-E is a major non-dilutive federal funder for advanced-energy startups, backing high-risk, potentially transformative technologies too early for private investment through competitive funding announcements with defined milestones and a tech-to-market team, plus a scale-up program for prior awardees. Awards are non-dilutive grants and cooperative agreements. Suits hardware and deep-tech energy founders with a bold, high-risk technical thesis and often research partners, noting federal timelines can shift.",
          },
          {
            name: "Maryland TEDCO",
            url: "https://www.tedcomd.com/",
            type: "State innovation agency",
            focus: "Startup support (climate-adjacent)",
            body: "Maryland TEDCO is a state seed and venture agency and one of the nation's more active seed investors, running a family of funds from seed and gap funds to inclusion-focused and venture funds, plus mentoring and education, and it is sector-agnostic so climate is eligible. Many funds require a non-governmental match. Beyond capital it offers one of the region's densest support networks. Suits Maryland-based founders, including climate, needing seed capital and hands-on support.",
          },
          {
            name: "DOE Office of Technology Transitions (EPIC Prize/Program)",
            url: "https://energy.gov/technologytransitions",
            type: "Federal Program",
            focus: "Incubator/accelerator support",
            body: "The DOE Office of Technology Transitions runs the Energy Program for Innovation Clusters, which funds the incubators and accelerators that support energy-hardware startups rather than funding startups directly, administered as prize competitions. Founders benefit indirectly, since winning incubators fund mentorship, technology validation, and business development, and pitch competitions let incubators nominate startups for cash prizes. Founders route to an EPIC-supported incubator or a pitch competition. Suits energy-hardware founders who plug into an EPIC-funded incubator, noting federal program status can change.",
          },
          {
            name: "NSF America's Seed Fund (SBIR/STTR)",
            url: "https://seedfund.nsf.gov/",
            type: "Federal program",
            focus: "Deep tech incl. climate",
            body: "NSF America's Seed Fund provides equity-free federal R&D grants to US small businesses, a phase-one proof-of-concept award followed by a larger phase-two, with founders keeping full ownership and IP and program directors providing guidance. It is sector-broad, including clean energy and sustainability, and highly competitive, and selection signals strong technical and commercial merit. Suits deep-tech climate founders with a genuinely novel, high-risk innovation and a commercialisation path, noting federal timelines can shift.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "washington-dc",
    city: "Washington, D.C.",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "Washington, D.C.'s utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "Exelon (Climate Change Investment Initiative)",
            url: "https://www.exeloncorp.com/",
            type: "Utility holding company",
            focus: "Clean energy & decarbonization",
            body: "Exelon's Climate Change Investment Initiative, known as 2c2i, is an early-stage corporate investment vehicle with strong DMV presence, making equity investments into for-profit startups whose solutions benefit one of Exelon's utility markets, which include Washington and Baltimore. Beyond capital it offers mentorship in capital access, business planning, and regulatory navigation, plus pilot access at Exelon utilities through a co-designed impact project, across mitigation, adaptation, and urban resilience. Nonprofits are ineligible. Suits for-profit climate founders who can pilot with or sell into a large regulated utility.",
          },
          {
            name: "Maryland Clean Energy Center",
            url: "https://www.mdcleanenergy.org/",
            type: "Quasi-public agency",
            focus: "Clean-energy finance",
            body: "The Maryland Clean Energy Center is a quasi-public state agency and financing and economic-development body rather than a cohort program, but it is the parent of the MEIA accelerator and a co-founder of MEI2, and administers a climate-technology founders fund. Its founder value is delivered through those vehicles rather than directly. Founders route to MEIA for acceleration and the founders fund for early capital targeting minority, women, and veteran founders. Suits Maryland clean-energy founders, entering through MEIA.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "washington-dc",
    city: "Washington, D.C.",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in Washington, D.C..",
    introBody: "From Overture (Overture VC) and Virginia Venture Partners (VIPC) - GAP Clean Energy Fund to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Overture (Overture VC)",
            url: "https://www.overture.vc/",
            type: "Venture capital",
            focus: "Climate tech / energy / public sector",
            body: "Overture is an early-stage climate VC with a strong DC presence, founded by former White House and Department of Energy officials, investing pre-seed to Series A in energy, AI, resilience, and industrial transformation where public policy is central. Its differentiator is embedded government-affairs support to unlock federal and state grants, low-cost loans, and regulatory navigation, and it avoids consumer apps and companies that ignore government engagement. Suits policy-exposed climate hardware and energy founders who must navigate government incentives and procurement.",
          },
          {
            name: "Virginia Venture Partners (VIPC) - GAP Clean Energy Fund",
            url: "https://www.vipc.org/virginia-venture-partners/",
            type: "Public seed investor",
            focus: "Clean-energy seed capital",
            body: "Virginia Venture Partners is the state-backed seed and early-stage equity program of the Virginia Innovation Partnership Corporation, making seed investments in Virginia technology, clean-energy, and life-science startups, with a dedicated clean-energy fund for efficiency and renewables and pre-seed funds for underrepresented and underserved-geography founders. It also offers launch grants and convertible notes and serves as the state's venture on-ramp to downstream capital. Suits Virginia-based clean-energy founders needing seed capital and in-state network.",
          },
          {
            name: "TEDCO",
            url: "https://www.tedcomd.com/",
            type: "State seed/venture investor",
            focus: "Seed capital (climate-adjacent)",
            body: "TEDCO is Maryland's state seed and venture investor with deep in-state presence, offering seed checks and larger venture and gap funding plus mentoring, entrepreneur-in-residence support, and inclusion-focused funds, and it is sector-agnostic so climate founders are eligible. Beyond capital it offers one of the region's densest support networks. Suits Maryland founders, including climate, wanting seed capital plus operational support.",
          },
          {
            name: "K Street Capital",
            url: "https://kstreet.vc",
            type: "Venture capital",
            focus: "Early-stage incl. climatetech",
            body: "K Street Capital is a Washington-based early-stage venture firm that explicitly includes climatetech among its focus sectors, investing through a seed fund, an invite-only angel syndicate, and a DC-focused fund of funds, and it administers the District's venture-capital program backing early-stage managers. Beyond capital it offers mentorship, a large investor and operator network from government, media, technology, and finance, and advisory services, favouring regulated markets. Suits DC-area seed-stage founders in regulated sectors, including climate.",
          },
          {
            name: "Constellation Technology Ventures",
            url: "https://technologyventures.constellation.com/",
            type: "Corporate venture capital",
            focus: "Clean energy, grid & electrification",
            body: "Constellation Technology Ventures is the venture investing arm of Constellation Energy in Baltimore, backing venture-stage energy technology across power and renewables, electrification, storage, grid digitalization, and emissions measurement and removal, and it leads a meaningful share of the rounds it joins. The value beyond the check is the utility itself, giving founders a route to pilots, commercial validation, and operating expertise inside one of the country's largest carbon-free generators. It engages once a technology is in the field rather than at idea stage. Suits product-stage energy founders who want a strategic utility partner alongside capital.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Chesapeake Bay Seed Capital Fund",
            url: "https://cbscf.umd.edu/",
            type: "Public seed fund (university-administered)",
            focus: "Emissions reduction & watershed technology",
            body: "The Chesapeake Bay Seed Capital Fund is a state-supported seed vehicle administered by the University of Maryland's Maryland Technology Enterprise Institute with the Maryland Department of Natural Resources, investing in Maryland companies whose technology cuts greenhouse-gas emissions across energy, transportation, and agriculture, or reduces nutrient and sediment loading in the Chesapeake watershed. It invests at seed and Series A through preferred equity, convertible notes, and SAFEs, takes applications on a rolling basis, and regularly co-invests with other Maryland public funds. Suits Maryland climate and environmental-technology founders with a measurable emissions or watershed benefit.",
          },
          {
            name: "Halcyon Venture Partners (HVP Angels)",
            url: "https://www.halcyonventurepartners.com/",
            type: "Impact venture fund & angel network",
            focus: "Climate, health & equity tech",
            body: "Halcyon Venture Partners is the investing arm of Halcyon in Georgetown, deploying a fund into pre-seed and seed ventures across climate, health, and equity tech drawn from the Halcyon accelerator and beyond, and running HVP Angels, the only angel network in the region organized around impact. The angel group gathers quarterly to hear selected pitches and invests through managed special-purpose vehicles, so a founder gains one clean line on the cap table rather than a scattered roster of individuals, and its record skews heavily toward women founders and founders of color. Suits DC-area climate and impact founders at pre-seed or seed, especially those already connected to Halcyon programming.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-diego",
    city: "San Diego",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, San Diego's universities are the place to start.",
    introBody: "UC San Diego (Jacobs School / von Liebig Center), UC San Diego (Institute for the Global Entrepreneur), San Diego State University anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "UC San Diego (Jacobs School / von Liebig Center)",
        orgs: [
          {
            name: "von Liebig Center for Entrepreneurism",
            url: "https://ige.ucsd.edu/",
            type: "Commercialization program",
            focus: "Clean-energy commercialization",
            body: "UC San Diego's von Liebig Center is a proof-of-concept center commercialising university inventions through pre-seed grants, business mentoring, and entrepreneurial education, rather than an open-application accelerator. It provides technology-advancement and customer-validation grants and a network of technology and business advisors who guide researchers through commercialisation milestones, with much current activity delivered through the Institute for the Global Entrepreneur. Suits UC San Diego faculty, researchers, or students with lab IP needing early validation funding and commercialisation coaching.",
          },
        ],
      },
      {
        heading: "UC San Diego (Institute for the Global Entrepreneur)",
        orgs: [
          {
            name: "Institute for the Global Entrepreneur (IGE)",
            url: "https://ige.ucsd.edu/",
            type: "Institute / program",
            focus: "Deep-tech commercialization",
            body: "UC San Diego's Institute for the Global Entrepreneur trains entrepreneurial engineers and translates university discoveries to market, offering a technology-management certificate, a national customer-discovery program with seed-grant pathways, a medtech bootcamp, an accelerator for international startups with a domain-expert coach, and the Triton sustainability challenge. Founders get mentorship, industry and investor introductions, and structured commercialisation curriculum rather than direct checks. Suits UC San Diego-affiliated engineers and scientists wanting structured commercialisation training and ecosystem access, across broad tech with a sustainability track.",
          },
          {
            name: "startBlue accelerator & Triton Innovation Challenge",
            url: "https://startblue.ucsd.edu/",
            type: "Accelerator / competition",
            focus: "Ocean & climate ventures",
            body: "startBlue is an intensive, no-cost, no-equity accelerator from Scripps and the Rady School for ocean and freshwater blue-economy startups, running several months with in-person weeks in San Diego across early-stage and scale tracks, offering matched mentors, ocean-focused technology-development facilities, a demo day, and non-dilutive award eligibility. The paired Triton Innovation Challenge is an annual campus environmental-tech pitch competition with cash prizes and a path to larger university fund investment. Suits ocean and climate-resilience hardware and data founders, and UC San Diego innovators with an environmental idea at any stage.",
          },
          {
            name: "Deep Decarbonization Initiative",
            url: "https://gps.ucsd.edu/faculty-research/research-policy-topics/energy-environment-health.html",
            type: "Research initiative",
            focus: "Decarbonization & energy policy",
            body: "UC San Diego's Deep Decarbonization Initiative is a cross-campus research and policy initiative studying how the economy reaches net-zero, embedding social science within energy-systems research and funding fellowships and curriculum, not a startup program. It offers no accelerator, founder grants, or commercialisation support. Founders route to von Liebig and IGE for UC San Diego commercialisation and to SCEIN and CalSEED for clean energy. Suits researchers and students, with those vehicles as the founder doors.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "San Diego State University",
        orgs: [
          {
            name: "ZIP Launchpad (SDSU)",
            url: "https://ziplaunchpad.sdsu.edu/about",
            type: "University incubator",
            focus: "Cross-sector incl. cleantech",
            body: "SDSU's ZIP Launchpad is a free, extracurricular, equity-free campus incubator for students, staff, faculty, and researchers across all majors, running several semesters with weekly curriculum, a dozen-plus advisors, a rapid-prototyping idea lab, paid student interns, pro bono legal guidance, around-the-clock coworking, and small non-equity working-capital grants. It supports founders across sectors, including climate and hardware. Suits SDSU-affiliated early-stage founders needing prototyping facilities, structured programming, and small non-dilutive grants.",
          },
          {
            name: "Center for Climate and Sustainability Studies (C2S2)",
            url: "https://c2s2.sdsu.edu/",
            type: "Research center",
            focus: "Climate & sustainability studies",
            body: "SDSU's Center for Climate and Sustainability Studies is an interdisciplinary research area spanning biology, geography, anthropology, and statistics, producing climate research, hosting seminars, and offering postdoctoral training, not a founder program. It provides no accelerator, grants, or commercialisation support for startups. Founders route to SDSU's ZIP Launchpad and Lavin Entrepreneurship Center. Suits researchers, with those campus vehicles as the founder doors.",
          },
          {
            name: "Center for Regional Sustainability (CRS)",
            url: "https://crs.sdsu.edu/",
            type: "Research center",
            focus: "Regional sustainability",
            body: "SDSU's Center for Regional Sustainability is an applied-sustainability research and community-engagement center advancing sustainability and environmental justice in the San Diego and Tijuana region through community-based research, stewardship, and technical assistance, serving communities and governments rather than startups. It runs no dedicated founder program, so a founder's realistic touchpoints are research collaboration or student projects. Founders route to ZIP Launchpad for venture support. Suits community organisations and researchers, with ZIP Launchpad as the founder door.",
          },
        ],
      },
      {
        heading: "Salk Institute",
        orgs: [
          {
            name: "Harnessing Plants Initiative (HPI)",
            url: "https://www.salk.edu/harnessing-plants-initiative/",
            type: "Research initiative",
            focus: "Plant & climate science",
            body: "The Salk Institute's Harnessing Plants Initiative is a basic-research and postdoctoral-training program engineering crops to capture and store more atmospheric carbon in their roots, funded by philanthropy and corporate gifts, not a founder program. Its relevance to founders is licensable IP, scientific collaboration, and talent rather than an accelerator or startup funding. Carbon-removal founders route to UC San Diego commercialisation and external carbon-removal accelerators. Suits researchers, with those vehicles as the founder doors.",
          },
          {
            name: "CRoPS - CO2 Removal on a Planetary Scale",
            url: "https://www.salk.edu/harnessing-plants-initiative/research/",
            type: "Research project",
            focus: "Carbon capture",
            body: "The Salk Institute's CRoPS program develops carbon-storing food crops such as wheat, rice, corn, and sorghum as basic research, not a founder program, with no accelerator or startup funding. Its founder relevance is licensable IP and scientific talent. Carbon-removal founders route to UC San Diego von Liebig and IGE and external carbon-removal accelerators and funders. Suits researchers, with those vehicles as the founder doors.",
          },
          {
            name: "Coastal Plant Restoration (CPR)",
            url: "https://www.salk.edu/harnessing-plants-initiative/",
            type: "Research project",
            focus: "Wetlands & carbon storage",
            body: "The Salk Institute's Coastal Plant Restoration program develops carbon-holding wetland plants as basic research, not a founder program, offering no accelerator or startup funding. Its founder relevance is licensable IP and scientific collaboration. Coastal and blue-carbon founders route to UC San Diego commercialisation and startBlue. Suits researchers, with those vehicles as the founder doors.",
          },
          {
            name: "Plant biology research & postdoctoral training",
            url: "https://www.salk.edu/science/power-of-plants/",
            type: "Research / training",
            focus: "Plant science for climate",
            body: "The Salk Institute's plant-biology research and postdoctoral training is basic science and talent development, not a founder program, with no accelerator, funding, or commercialisation support for external founders. Its value to founders is scientific collaboration, licensable IP, and a talent pipeline. Founders route to UC San Diego von Liebig and IGE for commercialisation. Suits researchers and scientific talent, with those vehicles as the founder doors.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "University of San Diego (Brink SBDC)",
        orgs: [
          {
            name: "Brink Small Business Development Center",
            url: "https://www.sandiego.edu/sbdc/",
            type: "Venture support program",
            focus: "Sustainability ventures",
            body: "The University of San Diego's Brink Small Business Development Center is a specialty innovation-focused SBDC in the federally funded regional network, offering free, confidential one-to-one advising and training to help tech and life-science founders access capital and build investable companies, backed by experienced advisors covering grant help, pitch prep, and IP. It is an advising service rather than an accelerator or fund, and is closely tied to the San Diego Angel Conference. Suits any San Diego and Imperial County founder, including cleantech, needing free advising, grant guidance, and investor-readiness prep.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-diego",
    city: "San Diego",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in San Diego?",
    introBody: "From Southern California Energy Innovation Network (SCEIN), EvoNexus, and CONNECT (Springboard), here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "Southern California Energy Innovation Network (SCEIN)",
            url: "https://cleantechsandiego.org",
            type: "Incubator",
            focus: "Clean energy",
            body: "SCEIN is a free, equity-free clean-energy incubator managed by Cleantech San Diego and funded by the state, serving startups in San Diego, Riverside, San Bernardino, and Imperial counties developing technologies for California's clean-energy goals. It provides customised business services through a regional partner consortium, industry and investor connections, pilot-demonstration matchmaking, and access to regional facilities on a rolling basis, across transportation electrification, grid and building decarbonisation, efficiency, storage, and resilience. Suits clean-energy hardware and software founders in the four-county region wanting free commercialisation support and pilot access.",
          },
          {
            name: "EvoNexus",
            url: "https://evonexus.org",
            type: "Incubator",
            focus: "Tech incl. cleantech",
            body: "EvoNexus is San Diego's leading nonprofit technology-startup incubator, historically pro bono with free workspace and now a nominal common-equity grant on admission for a long-duration residency of up to about two years. It provides private office and coworking space, milestone-based one-to-one mentoring, strategic corporate connections, and an expansive investor network, and is sector-broad rather than climate-specific though it has hosted energy startups. Suits high-growth tech founders, including climate software and hardware, wanting long-duration incubation, cheap space, and deep corporate and investor access.",
          },
          {
            name: "CONNECT (Springboard)",
            url: "https://connect.org",
            type: "Accelerator",
            focus: "Cross-sector startups",
            body: "CONNECT's Springboard is a free, no-equity mentoring and acceleration program pairing early-stage tech and life-science founders with seasoned executive mentors to sharpen their business model, commercialisation strategy, and investor pitch over several months, as part of the regional SBDC network. It is explicitly not a funding program and does not itself introduce founders to investors, which run through separate CONNECT programs. Suits prototype or MVP-stage founders, tech or life science including climate, who need investor-readiness mentoring rather than capital.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-diego",
    city: "San Diego",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "San Diego backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like California Energy Commission (CEC) and CalSEED offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "California Energy Commission (CEC)",
            url: "https://energy.ca.gov",
            type: "State Agency",
            focus: "Energy R&D & policy",
            body: "The California Energy Commission is the state's energy policy, planning, and clean-energy R&D funding agency, and for founders its value is non-dilutive grant funding and credibility delivered through its clean-energy R&D program rather than a direct accelerator. Founders apply to its adjacent vehicles, chiefly CalSEED for early grants, CalTestBed for testing vouchers, and SCEIN as the San Diego regional cluster, plus follow-on and scale-up programs. Suits California clean-energy founders seeking non-dilutive capital and testing and commercialisation support through the programs it funds.",
          },
          {
            name: "CalSEED",
            url: "https://calseed.fund/",
            type: "Public grant program",
            focus: "Clean energy",
            body: "CalSEED is the state's first-step clean-energy grant program, funded by the clean-energy R&D charge and administered by New Energy Nexus, providing direct, non-dilutive concept and larger prototype grants won through an annual business-plan competition, plus mentorship, legal counsel, professional development, and access to regional clusters. Focus spans storage, distributed energy, transportation electrification, building and industrial decarbonisation, and renewables, with an energy-equity lens. Suits California early-stage, concept-to-prototype clean-energy founders needing non-dilutive seed funding.",
          },
          {
            name: "CalTestBed",
            url: "https://www.caltestbed.com/",
            type: "Public program (CEC)",
            focus: "Clean energy",
            body: "CalTestBed is a state-funded voucher program administered by New Energy Nexus with the University of California and the national lab, giving clean-energy founders vouchers for third-party testing and validation at many world-class facilities, letting them de-risk technology, keep their IP, and connect to investors and pilot partners through a symposium and directory. It requires a California hardware prototype, and standalone software is ineligible. Suits California clean-energy hardware founders with a prototype needing credible third-party performance validation.",
          },
          {
            name: "CALSTART",
            url: "https://calstart.org/",
            type: "Nonprofit consortium",
            focus: "Clean transportation",
            body: "CALSTART is a national nonprofit clean-transportation consortium and program administrator with hundreds of member companies and agencies, running major incentive programs and offering members network connections, market intelligence, partner-matching, and policy guidance, not an early-stage accelerator or investor. It takes no equity and writes no venture checks. Suits clean-transportation and zero-emission-vehicle founders wanting industry network access, incentive-program participation, and market validation.",
          },
          {
            name: "BlueTechValley",
            url: "https://www.btvnc.org/",
            type: "Public program (CEC)",
            focus: "Clean energy",
            body: "BlueTechValley is a state-funded clean-energy, water, and agriculture innovation cluster centered on Fresno State and covering Central and Northern California, offering an accelerator, technology evaluation, proof-of-concept validation, field-testing sites, and commercialisation services. It is a Central Valley cluster rather than a San Diego program, and San Diego blue-economy founders should instead use the regional maritime cluster and UC San Diego's startBlue. Suits energy, water, and agtech founders in the Central and Northern California footprint, with startBlue as the San Diego equivalent.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-diego",
    city: "San Diego",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "San Diego's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "Cleantech San Diego",
            url: "https://cleantechsandiego.org/",
            type: "Industry alliance",
            focus: "Cleantech ecosystem",
            body: "Cleantech San Diego is a member-based regional cleantech business association positioning the region as a cleantech leader through collaboration, advocacy, and investment promotion, and for startups its most concrete offering is managing the free SCEIN accelerator, plus member networking, events, visibility, and investor connections. The core organisation is a membership association rather than an accelerator, with the founder-facing program being SCEIN. Suits cleantech founders wanting regional industry visibility and, via SCEIN, hands-on commercialisation support.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "san-diego",
    city: "San Diego",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in San Diego.",
    introBody: "From Critical Capital Partners and Southern California Energy Innovation Network to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Critical Capital Partners",
            url: "https://critical-cap.com/",
            type: "Venture capital",
            focus: "Climate adaptation/mitigation",
            body: "Critical Capital Partners appears to be a Europe-based capital platform for family offices structuring growth-stage co-investment and infrastructure financing in critical industrial technology across energy, food, the built environment, and industry, not an early-stage VC and without a genuine San Diego presence beyond a portfolio link. It offers curated-network access, fundraising-prep guidance, and market intelligence rather than a defined local check. Suits growth-stage industrial and infrastructure founders seeking family-office co-investment, noting it is not a San Diego early-stage source.",
          },
          {
            name: "Southern California Energy Innovation Network",
            url: "https://cleantechsandiego.org/scein/",
            type: "Ecosystem capital",
            focus: "Cleantech",
            body: "As a capital pathway, SCEIN does not invest or grant money directly but is the state-funded conduit connecting startups to capital, helping regional founders compete for CalSEED grants, positioning them for investor showcases, and building sales pipelines and follow-on funding. Its value is a guided route to non-dilutive clean-energy grants and investor visibility rather than a direct check. Suits clean-energy founders wanting a guided path to the state grant ecosystem and investor visibility.",
          },
          {
            name: "Tech Coast Angels (San Diego)",
            url: "https://www.techcoastangels.com/",
            type: "Angel network",
            focus: "Cleantech / climate",
            body: "The San Diego chapter of Tech Coast Angels, now NuFund Venture Group, is one of the country's largest and most active early-stage angel groups, using a member-managed annual-fund model to invest at seed, bridge, and early Series A, able to fund a company with a meaningful early check and providing mentorship, diligence, and operational support. Its focus is broad rather than climate-dedicated, though it has funded sustainability-tech companies, and founders access it by pitching through its screening process. It is deeply San Diego-rooted. Suits San Diego founders, including cleantech, with traction seeking angel seed capital plus mentorship.",
          },
          {
            name: "San Diego Angel Conference (SDSU) San Diego State University",
            url: "https://sdac.sdsu.edu/",
            type: "Angel fund",
            focus: "Early-stage incl. climate",
            body: "The San Diego Angel Conference is an annual angel-investment conference and pooled investor fund, now hosted at San Diego State's business school, where investors buy units to form a fund and invest in winning startups selected through a months-long cycle that narrows many applicants to a few finalists. Founders receive free advising, pitch and investor-readiness training, diligence feedback, mentorship, and ecosystem connections, and while it is stage- and sector-agnostic, cleantech startups are eligible and have competed. It is deeply San Diego-rooted. Suits early-stage San Diego-region founders, including cleantech, wanting investor-readiness prep plus a shot at a pooled angel check.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "seattle",
    city: "Seattle",
    categorySlug: "universities",
    sidebarLabel: "Universities",
    title: "Climate Programs at Universities",
    introLead: "Whether you're starting a career in climate, hiring talent, or building on the latest research, Seattle's universities are the place to start.",
    introBody: "University of Washington (Clean Energy Institute), Pacific Northwest National Laboratory (PNNL), Washington State University (Office of Commercialization) anchor the region's climate research and feed talent into the industries doing the work. Read on for a starter guide to the major programs and centers.",
    groups: [
      {
        heading: "University of Washington (Clean Energy Institute)",
        orgs: [
          {
            name: "Washington Clean Energy Testbeds",
            url: "https://wcet.washington.edu",
            type: "University Facility",
            focus: "Prototyping, scale-up",
            body: "The Washington Clean Energy Testbeds are an open-access fabrication, testing, and prototyping facility in Seattle created by UW's Clean Energy Institute for solar, energy storage, systems integration, and pilot-scale batteries, where founders keep their IP and pay per use, with staff who can run R&D for them. Its dedicated founder program, CHIP, offers funded facility access for pre-Series-B startups over roughly six months plus a materials allowance, open to applicants nationwide. Suits hardware and deep-tech cleantech founders in batteries, solar, and materials needing pilot-scale prototyping without heavy capital.",
          },
          {
            name: "UW CoMotion Labs - Climate Tech Incubator",
            url: "https://comotion.uw.edu",
            type: "University Incubator",
            focus: "Energy, materials, electrification",
            body: "UW's CoMotion Climate Tech Incubator is a cohort-based, equity-free incubator at the downtown Seattle Climate Innovation Hub run with the city and partners, offering tailored mentorship, a climate-tech network, business-development curriculum, downtown coworking and makerspace access, connections to UW labs, and a demo day. It prefers UW spinouts but accepts non-UW startups and is not built for pure ideation-stage teams. Suits early-stage climate founders from pre-seed to around Series A who want structured programming and a downtown Seattle base.",
          },
          {
            name: "Clean Energy Institute (CEI)",
            url: "https://www.cei.washington.edu/",
            type: "Research institute",
            focus: "Solar, storage, grid",
            body: "UW's Clean Energy Institute is a university research institute advancing next-generation solar, batteries, and grid-integration materials and devices, not a founder program, and its founder-facing value is delivered through the vehicles it operates, the Clean Energy Testbeds and the CHIP program. Founders should engage it through the Testbeds, CHIP, or CoMotion rather than expecting direct startup services. Suits researchers and hardware founders, with the Testbeds and CoMotion as the founder doors.",
          },
          {
            name: "Clean Energy Bridge to Research (CEBR)",
            url: "https://www.cei.washington.edu/education/undergraduate-students/clean-energy-bridge-to-research/",
            type: "Undergraduate research program",
            focus: "Solar, storage, grid",
            body: "UW's Clean Energy Bridge to Research is a federally funded summer undergraduate research experience, a multi-week lab placement with a stipend and allowances, not a founder program, and it offers no accelerator, funding, or commercialisation support for startups. It is a workforce and education pipeline and a source of technical talent. Founders route to the Clean Energy Testbeds, CHIP, or CoMotion. Suits students and aspiring researchers, with those vehicles as the founder doors.",
          },
          {
            name: "CEI Graduate Fellows Program",
            url: "https://www.cei.washington.edu/education/uw-graduate-students/",
            type: "Fellowship",
            focus: "Clean energy research",
            body: "UW's CEI Graduate Fellows Program is a competitive PhD fellowship providing salary and tuition support for doctoral research in clean-energy focus areas plus seminars and networking, not a startup program. It is a talent-development pipeline and a source of technical co-founders and hires rather than a founder vehicle. Founders route to CoMotion and the Clean Energy Testbeds. Suits doctoral researchers, with those vehicles as the founder doors.",
          },
          {
            name: "EarthLab",
            url: "https://earthlab.uw.edu/",
            type: "Research institute",
            focus: "Climate & environment",
            body: "UW's EarthLab is a university institute functioning as a research engine and community catalyst, housing environmental centers and running community-engaged research grant programs for faculty and community partners rather than startups, so it is not a founder program. Founders focused on adaptation and environmental-justice research can treat it as a research-partnership and grant convener. Founders route to CoMotion and the Clean Energy Testbeds for venture support. Suits researchers and community partners, with those vehicles as the founder doors.",
          },
        ],
      },
      {
        heading: "Pacific Northwest National Laboratory (PNNL)",
        orgs: [
          {
            name: "Energy & Environment Internship Program (EEIP)",
            url: "https://www.pnnl.gov/energy-and-environment-internship-program",
            type: "Internship program",
            focus: "Energy & environment",
            body: "Pacific Northwest National Laboratory's Energy and Environment Internship Program is a paid multi-week STEM research internship with mentorship and professional development, not a founder program, offering no accelerator, funding, or commercialisation support for startups. It is a talent pipeline, and founders wanting to engage the lab commercially should pursue its technology-licensing and collaborative-agreement pathways or use the Clean Energy Testbeds for prototyping. Suits students, with those licensing and prototyping routes as the founder doors.",
          },
          {
            name: "WDTS Internships (SULI / CCI)",
            url: "https://www.pnnl.gov/wdts-internships",
            type: "Internship programs",
            focus: "Clean energy & STEM",
            body: "PNNL's federally sponsored undergraduate research internships are multi-week summer or term placements, a pure workforce and education pipeline rather than a founder program, with no accelerator, funding, or commercialisation support. Founders wanting to engage the lab should pursue technology transfer and licensing or use regional accelerators. Suits undergraduate students, with lab tech transfer and the accelerators as the founder doors.",
          },
          {
            name: "Joint Institutes (with UW, WSU, UMD)",
            url: "https://www.pnnl.gov/joint-institutes",
            type: "Research institutes",
            focus: "Energy, grid & climate",
            body: "PNNL's joint institutes are research collaborations with regional universities assembling faculty, staff, and students for multi-disciplinary research and workforce training, not founder programs, though they can seed technology and industry ecosystems. Founders engage them through licensing and collaborative research agreements rather than direct startup services. Founders route to the WSU Office of Commercialisation or CoMotion for commercialisation. Suits researchers, with those vehicles as the founder doors.",
          },
          {
            name: "Distinguished Graduate Research Program",
            url: "https://www.pnnl.gov/education",
            type: "Graduate research program",
            focus: "Energy & environment research",
            body: "PNNL's Distinguished Graduate Research Program is a joint PhD program embedding doctoral students in lab research, funded by their advisors, a talent pipeline rather than a founder program with no startup services. Its value to founders is technical talent and research collaboration. Founders route to lab tech transfer and regional accelerators for commercialisation. Suits doctoral students, with those routes as the founder doors.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        heading: "Washington State University (Office of Commercialization)",
        orgs: [
          {
            name: "WSU-PNNL Joint Institutes (Advanced Grid, Bioproducts)",
            url: "https://natlab.wsu.edu/",
            type: "Research institutes",
            focus: "Grid & bioproducts",
            body: "The WSU and PNNL joint institutes are research institutes advancing grid simulation and controls and bioproducts from plants and waste, with joint appointments and student training, not founder programs. Their founder-relevant adjacent vehicle is the WSU Office of Commercialisation for licensing and gap funding. Their value is research and licensable technology rather than acceleration. Suits researchers, with the commercialisation office as the founder door.",
          },
          {
            name: "Office of Commercialization",
            url: "https://commercialization.wsu.edu/",
            type: "Commercialization office",
            focus: "Clean-energy commercialization",
            body: "Washington State University's Office of Commercialisation is the university's tech-transfer office managing invention disclosures, patenting, and licensing of WSU IP and supporting startup formation, offering founders technology licensing through option and exclusive agreements and an annual commercialisation gap fund to advance readiness. It is a tech-transfer office rather than an accelerator, so non-WSU founders are served only as licensees. Suits WSU-affiliated researchers and founders licensing university IP.",
          },
          {
            name: "PNNL-WSU Distinguished Graduate Research Program",
            url: "https://natlab.wsu.edu/",
            type: "Graduate research program",
            focus: "Clean energy research",
            body: "The PNNL and WSU Distinguished Graduate Research Program is a doctoral training pipeline embedding WSU students in lab research in their later years, funded by their advisors, not a founder program with startup services. Its value to founders is technical talent and research collaboration. Founders route to the WSU Office of Commercialisation for licensing and venture development. Suits doctoral students, with the commercialisation office as the founder door.",
          },
          {
            name: "WSU Energy Program",
            url: "https://www.energy.wsu.edu/",
            type: "Public energy program",
            focus: "Energy efficiency & clean tech",
            body: "The WSU Energy Program is a self-supporting university department operating like a state energy office and consulting extension, delivering energy-efficiency technical assistance, industrial assessments, building-code support, free analytical software, and state community-energy programs, not a startup program. It is useful to founders as a technical-assistance and market-connection resource across utilities, industry, and agencies, but it does not fund or incubate startups. Suits energy founders needing technical assistance and market connections rather than acceleration.",
          },
        ],
      },
      {
        heading: "Western Washington University (Institute for Energy Studies)",
        orgs: [
          {
            name: "Institute for Energy Studies (IES)",
            url: "https://cenv.wwu.edu/institute-energy-studies",
            type: "Institute",
            focus: "Clean energy",
            body: "Western Washington University's Institute for Energy Studies is an interdisciplinary academic program offering energy degrees, minors, undergraduate research, and a tool-lending library, a workforce and education pipeline and talent source rather than a founder program. Its value to founders is talent and research collaboration. Founders route to the regional accelerators like Cascadia and VertueLab for venture support. Suits students and researchers, with those accelerators as the founder doors.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "seattle",
    city: "Seattle",
    categorySlug: "incubators-accelerators",
    sidebarLabel: "Incubators & Accelerators",
    title: "Accelerators, Incubators, & Hubs",
    introLead: "Looking to start or scale a climate company in Seattle?",
    introBody: "From Cascadia Cleantech Accelerator, Washington Maritime Blue, and VertueLab, here is the accelerator and incubator ecosystem that can back your startup with capital, space, and hands-on support.",
    groups: [
      {
        orgs: [
          {
            name: "Cascadia Cleantech Accelerator",
            url: "https://cascadiacleantech.org",
            type: "Accelerator",
            focus: "Clean energy, climate tech",
            body: "The Cascadia CleanTech Accelerator is the region's flagship cleantech accelerator, run by CleanTech Alliance and VertueLab and repeatedly funded by the federal innovation-cluster program, having served many startups over its cohorts. It runs a roughly eighteen-week, mostly virtual program delivering cleantech curriculum, matched industry mentors, connections to business, utility, and investor networks, customer discovery, a funding bootcamp, and a showcase, taking no equity with a modest fee and non-dilutive cash prizes. Suits incorporated early-stage cleantech startups in or entering the Northwest, especially hardware and impact companies.",
          },
          {
            name: "Washington Maritime Blue",
            url: "https://maritimeblue.org/",
            type: "Nonprofit incubator",
            focus: "Maritime clean tech",
            body: "Washington Maritime Blue is a blue-economy cluster nonprofit running a suite of founder programs, led by a venture-scale Blue Accelerator that provides an early investment via a SAFE plus intensive mentorship, access to global industry and government networks, and enterprise pilots including with the Port of Seattle. It also runs a free ten-month Seattle incubator at its Blue Hub with two years of free office space and an accelerator for international startups entering the US. Suits maritime and ocean climate founders in clean vessels, port decarbonisation, aquaculture, and ocean monitoring needing industry pilots and sector-specific capital.",
          },
          {
            name: "VertueLab",
            url: "https://vertuelab.org",
            type: "Incubator / Fund",
            focus: "Cleantech",
            body: "VertueLab is a Portland-based, Pacific Northwest climate-tech nonprofit incubator and fund combining catalytic capital with holistic support, whose climate impact fund makes pre-seed and early-stage investments in high-impact companies across the region. Beyond capital it co-runs the Cascadia accelerator, offers low-cost federal grant-writing assistance for SBIR and STTR, provides prototyping access through the Clean Energy Testbeds, and runs equity-focused programs. Suits pre-seed Pacific Northwest climate and hardware founders, especially women and BIPOC founders, needing patient capital plus grant support.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "seattle",
    city: "Seattle",
    categorySlug: "public-programs",
    sidebarLabel: "Resources & Public Programs",
    title: "Public Programs & Startup Resources",
    introLead: "Seattle backs its climate ambitions with real public infrastructure for startups.",
    introBody: "Programs and agencies like WA Dept. of Commerce - Clean Energy Fund and Washington Research Foundation offer grants, incentives, testing, and incubation to help climate companies get started and scale here.",
    groups: [
      {
        orgs: [
          {
            name: "WA Dept. of Commerce - Clean Energy Fund",
            url: "https://commerce.wa.gov",
            type: "State Program",
            focus: "Clean energy R&D & deployment",
            body: "The Washington Department of Commerce Clean Energy Fund is a state grants program, and for founders its most relevant channel is its research, development, and demonstration grants for new and emerging clean-energy technologies at mid-range readiness, open to Washington-based organisations and out-of-state entities with a significant Washington presence. Most other grants fund deployment projects by communities and utilities rather than startups. It is non-dilutive. Suits Washington clean-energy innovators with a working technology seeking non-dilutive demonstration funding.",
          },
          {
            name: "Washington Research Foundation",
            url: "https://wrfseattle.org",
            type: "Nonprofit Funder",
            focus: "Research commercialization",
            body: "The Washington Research Foundation is a Seattle nonprofit providing non-dilutive technology-commercialisation grants plus commercialisation support and postdoctoral fellowships to Washington nonprofit research institutions, with phased grants that bridge discovery and commercial investment, predominantly in life sciences and enabling technologies. It also funds innovation-ecosystem programs and, through its capital arm, invests in startups. Eligibility is limited to Washington nonprofit research-institution investigators. Suits Washington university and research-institute researchers de-risking a technology toward a license or spinout.",
          },
          {
            name: "CleanTech Alliance",
            url: "https://www.cleantechalliance.org/",
            type: "Industry association",
            focus: "Cleantech ecosystem",
            body: "CleanTech Alliance is a regional cleantech industry association with a large multi-state membership, not itself an accelerator, offering founders networking events, policy advocacy, industry clusters, commercialisation assistance, a diversity fund, and co-running the Cascadia accelerator. Its value is ecosystem visibility, connections, and policy engagement, with the dedicated early-stage program to enter being Cascadia. Suits any Pacific Northwest cleantech founder wanting ecosystem visibility and connections, with Cascadia as the founder door.",
          },
          {
            name: "Pacific Northwest Hydrogen Hub (PNWH2)",
            url: "https://www.pnwh2.com/",
            type: "Public program (DOE)",
            focus: "Hydrogen",
            body: "The Pacific Northwest Hydrogen Hub is a federally designated regional hydrogen hub run by a multi-state nonprofit coalition, funding and coordinating large infrastructure and demonstration projects with significant industry cost-share rather than serving early-stage founders. For hydrogen startups its relevance is as a potential customer, partner, or consortium participant, with the founder-facing vehicles being federal seed grants, state demonstration grants, and accelerators. Suits hydrogen ventures seeking a large-project partner, with those grants and accelerators as the founder doors.",
          },
          {
            name: "NSF America's Seed Fund (SBIR/STTR)",
            url: "https://seedfund.nsf.gov/",
            type: "Federal program",
            focus: "Deep tech incl. climate",
            body: "NSF America's Seed Fund provides equity-free federal R&D grants to US deep-tech startups, including climate, with a phase-one proof-of-concept award followed by a larger phase-two and a combined fast-track option, and founders keep full ownership and IP. Beyond cash it offers program-director guidance, customer-discovery training, and reviewer feedback even when declined. It is national rather than Pacific Northwest-specific. Suits any US deep-tech or climate founder with a defensible technical innovation, noting federal timelines can shift.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "seattle",
    city: "Seattle",
    categorySlug: "industry-partners",
    sidebarLabel: "Industry Partners",
    title: "Industry & Utility Partners",
    introLead: "Your first pilot may be closer than you think.",
    introBody: "Seattle's utilities, energy companies, and industrial players actively partner with climate startups. These are the organizations opening their infrastructure, grids, and customers to new technology.",
    groups: [
      {
        orgs: [
          {
            name: "Amazon (Clean Energy Accelerator)",
            url: "https://aws.amazon.com/energy-utilities/clean-energy-accelerator/",
            type: "Corporation",
            focus: "Clean energy",
            body: "Amazon's Clean Energy Accelerator is a non-dilutive corporate accelerator run by AWS with partners, distinct from its investment fund, selecting mature, market-ready climate and clean-energy startups globally for multi-week programming with substantial cloud credits, mentorship, pilot coordination with large energy and industrial customers, and exposure to Amazon operations. It is an accelerator and pilots program rather than an investment vehicle. Suits growth-stage climate startups seeking enterprise pilots and cloud and AI resources rather than pre-seed founders.",
          },
          {
            name: "Microsoft (Climate Innovation Fund / M12)",
            url: "https://www.microsoft.com/en-us/corporate-responsibility/sustainability/climate-innovation-fund",
            type: "Corporation",
            focus: "Climate",
            body: "Microsoft runs two distinct Redmond vehicles: the Climate Innovation Fund, a large balance-sheet commitment deploying growth and late-stage equity, project debt, and carbon-removal offtake into carbon removal, low-carbon materials, recycling, and fuels; and M12, its traditional corporate VC focused on enterprise software, AI, and security rather than the decarbonisation mandate. Both are genuinely Pacific Northwest-based. The fund suits later-stage climate ventures needing large, patient, strategic capital or offtake, while M12 suits enterprise and AI software founders, climate-software only incidentally.",
          },
        ],
      },
    ],
  },
  {
    citySlug: "seattle",
    city: "Seattle",
    categorySlug: "capital-partners",
    sidebarLabel: "Capital Partners",
    title: "Climate Capital & Investors",
    introLead: "The capital backing climate companies in Seattle.",
    introBody: "From Amazon Climate Pledge Fund and Breakthrough Energy to the funds investing across the region, here is a starter map of the investors active in the local climate ecosystem.",
    groups: [
      {
        orgs: [
          {
            name: "Amazon Climate Pledge Fund",
            url: "https://fund.theclimatepledge.com/",
            type: "Corporate VC",
            focus: "Decarbonization tech",
            body: "The Amazon Climate Pledge Fund is Amazon's Seattle-based corporate VC investing patient capital from pre-product startups to established enterprises across energy, buildings, transportation, manufacturing and materials, circular economy, food and agriculture, carbon removal, and water. Its differentiator is that Amazon is both investor and customer, so portfolio technology can be deployed into Amazon's own operations, offering a rare enterprise-scale pilot and deployment pathway. It has a genuine Seattle presence. Suits climate founders whose product Amazon could deploy at scale.",
          },
          {
            name: "Breakthrough Energy",
            url: "https://breakthroughenergy.org/",
            type: "Investment network",
            focus: "Climate",
            body: "Breakthrough Energy is the Bill Gates-founded climate platform with a Kirkland office and three vehicles: a large venture arm investing seed to later stage across clean energy, agriculture, manufacturing, and transportation; a Fellows program of grants and fellowships for individual innovators at the discovery stage; and Catalyst, a project-funding vehicle for first-of-a-kind commercial demonstrations in areas like sustainable fuels, hydrogen, direct air capture, and long-duration storage. It has a genuine Pacific Northwest presence. Suits deep-tech climate founders, with Fellows for pre-company innovators, the venture arm for scalable startups, and Catalyst for first-of-a-kind projects.",
          },
          {
            name: "E8",
            url: "https://www.e8angels.com/",
            type: "Investor network (non profit angel investor network)",
            focus: "Cleantech",
            body: "E8 is a Seattle-based cleantech angel network, a nonprofit membership community of accredited investors that has invested substantially across many companies from pre-seed to Series A, with an affiliated impact fund making equity and debt investments on rotating themes. Beyond capital it offers cooperative due diligence, mentorship, learning labs, syndication, follow-on participation, and visibility at no cost to founders who pitch, with backers across the regional research and industry ecosystem. It has a genuine Seattle presence. Suits early-stage Pacific Northwest cleantech founders seeking angel capital plus hands-on guidance.",
          },
          {
            name: "Earth Finance",
            url: "https://www.earthfinance.com/",
            type: "Climate investment/advisory",
            focus: "Decarbonization",
            body: "Earth Finance is a Seattle-based climate strategy and finance advisory firm, not a founder-facing VC, providing corporate transition strategy, spatial finance, energy-security, and nature and water advisory, and growing through acquisitions. It has a genuine Seattle headquarters but works with enterprises rather than funding or incubating startups. Founders seeking capital route to E8, VertueLab, or the corporate funds. Suits companies needing enterprise climate advisory, with those investors as the founder doors for capital.",
          },
          {
            name: "Congruent Ventures",
            url: "https://www.congruentvc.com/",
            type: "Venture capital",
            focus: "Climate / energy transition",
            body: "Congruent Ventures is a San Francisco-based early-stage climate VC investing pre-seed to Series A across mobility and urbanisation, energy transition, food and agriculture, and sustainable production, often as the first institutional check, with no Pacific Northwest office though it invests in and co-invests with regional players. Beyond capital it offers multidisciplinary underwriting and deep cleantech-cycle experience. Suits climate founders across North America, including the Pacific Northwest, wanting a specialist lead investor, noting it is an out-of-region firm.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Fuse Venture Partners",
            url: "https://www.fuse.vc/",
            type: "Venture capital",
            focus: "PNW tech incl. climate",
            body: "Fuse Venture Partners is a Seattle-area, Pacific Northwest-focused VC investing at seed and Series A and positioned as one of the few local funds able to lead Series A rounds, with a large network of senior operators for go-to-market, customer introductions, and hiring. It is not climate-specific, with a thesis in enterprise software and AI, robotics, spacetech, and healthcare, so climate founders fit only if software or AI-enabled. It has a genuine Seattle presence. Suits Pacific Northwest enterprise-software and AI founders, including climate software.",
          },
          {
            name: "Madrona Venture Group",
            url: "https://www.madrona.com/",
            type: "Venture capital",
            focus: "Tech incl. climate/energy",
            body: "Madrona Venture Group is Seattle's flagship generalist VC investing from seed through later stages in enterprise software, AI, and cloud, with a strong regional focus and an emerging climate-tech practice that added a sustainability-focused venture partner and spun out an emissions startup through its studio. It is not a dedicated climate fund but offers full-stack hands-on support and an in-house studio. It has a genuine Seattle presence. Suits Pacific Northwest software and AI founders, including climate software, with hardware-heavy climate founders a weaker fit.",
          },
          {
            name: "Trailhead Capital",
            url: "https://www.trailheadcap.com/",
            type: "Venture capital",
            focus: "Regenerative climate",
            body: "Trailhead Capital is a Boulder-based regenerative-agriculture and climate VC investing at seed and Series A in tech-enabled food value chains, soil health, and carbon sequestration, with no confirmed Pacific Northwest presence and a North American and global mandate. Its value is deep regenerative food and agriculture focus rather than local proximity. Suits regenerative food and agriculture founders anywhere, noting Pacific Northwest founders should expect no local office.",
          },
          {
            name: "WRF Capital (Washington Research Foundation)",
            url: "https://www.wrfseattle.org/",
            type: "Venture / Research capital",
            focus: "Deep tech incl. climate",
            body: "WRF Capital is the evergreen investment arm of the Washington Research Foundation, funded by licensing royalties, making early-stage investments in Washington-based startups, especially spinouts from state research institutions, with an emphasis on life sciences and enabling technologies. Beyond capital it offers deep university and tech-transfer ties and diligence credibility that signals to co-investors, with a Washington-only mandate. It is not climate-dedicated. Suits Washington research-spinout founders seeking early equity from a patient local backer.",
          },
          {
            name: "Pack Ventures",
            url: "https://www.packvc.com/",
            type: "Venture capital",
            focus: "UW-affiliated deep tech",
            body: "Pack Ventures is a Seattle-based, UW-affiliated VC investing pre-seed and seed in startups with UW ties across applied AI, enterprise software, life sciences, robotics, and deep tech, offering UW and CoMotion network access, mentorship, and backing from local venture heavyweights. It is not climate-dedicated, with climate fitting only incidentally. It has a genuine Seattle presence. Suits UW-connected founders at the earliest stages, with climate as an incidental fit.",
          },
        ],
        photoBreakAfter: true,
      },
      {
        orgs: [
          {
            name: "Stepchange (Stepchange Ventures)",
            url: "https://stepchange.vc",
            type: "Venture capital",
            focus: "Climate software / infrastructure",
            body: "Stepchange is a Seattle-based climate VC investing pre-seed and seed with early checks, focused on climate software and asset-light, software-enabled solutions across transportation, the built environment, energy and the grid, and adaptation and resilience, favouring companies that do not rely on green premiums or subsidies. Beyond capital it offers hands-on product and operator expertise from founders with notable exits, a strong LP network, and a climate community. It has a genuine Seattle presence. Suits Pacific Northwest climate-software founders at the earliest stages.",
          },
        ],
      },
    ],
  },
]

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
