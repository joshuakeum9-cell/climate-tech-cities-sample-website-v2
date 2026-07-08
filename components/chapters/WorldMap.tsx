import { chapters } from "@/lib/chapters";

/** Static world map placeholder.
 *
 *  The outer container owns the layout (aspect ratio, rounding, border);
 *  the SVG + pin overlay simply fill it. To upgrade to the Google Maps
 *  JavaScript API later, replace the contents of the container with a map
 *  canvas and feed it the same lat/lon-derived data from lib/chapters.ts —
 *  no surrounding layout changes required. */
export function WorldMap() {
  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-line bg-[#eef0e3]">
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g fill="#d3ddc0">
          {/* North America */}
          <path d="M60,90 Q120,50 210,60 Q290,66 300,100 Q310,130 275,150 Q300,165 285,195 Q265,230 235,240 Q215,270 190,255 Q170,245 160,220 Q120,210 95,180 Q60,150 60,90 Z" />
          {/* Central America bridge */}
          <path d="M200,255 Q230,265 250,285 Q262,300 252,308 Q235,300 220,285 Q205,272 200,255 Z" />
          {/* South America */}
          <path d="M255,305 Q295,295 315,325 Q330,355 320,395 Q310,435 290,455 Q275,465 268,440 Q255,400 250,360 Q245,325 255,305 Z" />
          {/* Greenland */}
          <path d="M330,35 Q365,22 395,38 Q405,58 385,75 Q355,85 338,68 Q325,50 330,35 Z" />
          {/* Europe */}
          <path d="M465,95 Q500,70 545,80 Q575,88 570,112 Q560,135 535,145 Q505,158 485,148 Q465,135 465,95 Z" />
          {/* Africa */}
          <path d="M470,165 Q515,150 560,168 Q590,185 585,225 Q578,265 550,300 Q530,335 510,330 Q490,320 482,280 Q470,230 470,165 Z" />
          {/* Asia */}
          <path d="M580,70 Q660,45 760,60 Q850,72 870,110 Q880,145 840,165 Q810,185 770,180 Q740,200 710,190 Q680,205 655,185 Q620,170 600,140 Q580,110 580,70 Z" />
          {/* India */}
          <path d="M690,195 Q715,190 725,215 Q730,240 712,258 Q698,265 690,240 Q684,215 690,195 Z" />
          {/* Southeast Asia */}
          <path d="M775,195 Q805,195 815,215 Q820,235 800,240 Q782,236 775,215 Z" />
          {/* Australia */}
          <path d="M800,310 Q845,295 880,315 Q898,335 885,360 Q862,382 825,375 Q798,365 795,340 Q794,322 800,310 Z" />
        </g>
      </svg>

      {chapters.map((chapter) => (
        <div
          key={chapter.name}
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: `${chapter.x}%`, top: `${chapter.y}%` }}
        >
          <svg
            viewBox="0 0 24 32"
            className="h-6 w-[18px] drop-shadow-sm sm:h-7 sm:w-[21px]"
            aria-hidden="true"
          >
            <path
              d="M12 0 C5.4 0 0 5.4 0 12 C0 21 12 32 12 32 C12 32 24 21 24 12 C24 5.4 18.6 0 12 0 Z"
              fill="#ef653a"
            />
            <circle cx="12" cy="12" r="5" fill="#fefefb" />
          </svg>
          <span className="sr-only">{chapter.name} chapter</span>
        </div>
      ))}

      <span className="absolute bottom-3 right-4 text-[11px] uppercase tracking-wide text-forest/40">
        Static map placeholder
      </span>
    </div>
  );
}
