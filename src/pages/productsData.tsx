import { Settings, Gem, Layers } from 'lucide-react';
import solidCarbideOverview from '../assets/solid-carbide-overview.jpg.asset.json';
import solidCarbideEndmills from '../assets/solid-carbide-endmills.jpg.asset.json';
import solidCarbideReamers from '../assets/solid-carbide-reamers.jpg.asset.json';
import solidCarbideDrills from '../assets/solid-carbide-drills.jpg.asset.json';
import pcdOverview from '../assets/pcd-overview.jpg.asset.json';
import pcdToolingTechnology from '../assets/pcd-tooling-technology.jpg.asset.json';
import pcdToolingRange from '../assets/pcd-tooling-range.jpg.asset.json';
import brazedCarbideOverview from '../assets/brazed-carbide-overview.jpg.asset.json';
import brazedShellCutter from '../assets/brazed-shell-cutter.png.asset.json';
import pcdTool1 from '../assets/pcd-tool-1.png.asset.json';
import pcdTool2 from '../assets/pcd-tool-2.png.asset.json';
import pcdTool3 from '../assets/pcd-tool-3.png.asset.json';
import pcdTool4 from '../assets/pcd-tool-4.png.asset.json';
import pcdTool5 from '../assets/pcd-tool-5.png.asset.json';
import pcdTool6 from '../assets/pcd-tool-6.png.asset.json';
import pcdTool7 from '../assets/pcd-tool-7.png.asset.json';
import pcdTool8 from '../assets/pcd-tool-8.png.asset.json';
import brazedTool1 from '../assets/brazed-tool-1.png.asset.json';
import brazedTool2 from '../assets/brazed-tool-2.png.asset.json';
import brazedTool3 from '../assets/brazed-tool-3.png.asset.json';
import brazedTool4 from '../assets/brazed-tool-4.png.asset.json';
import brazedTool5 from '../assets/brazed-tool-5.png.asset.json';
import brazedTool6 from '../assets/brazed-tool-6.png.asset.json';
import brazedTool7 from '../assets/brazed-tool-7.png.asset.json';
import brazedTool8 from '../assets/brazed-tool-8.png.asset.json';

export type Product = {
  name: string;
  desc: string;
  image?: string;
  specs?: { label: string; value: string }[];
  application?: string;
};

export type SubCategory = {
  id: string;
  title: string;
  blurb: string;
  products: Product[];
};

export type Category = {
  id: 'solid-carbide' | 'pcd' | 'brazed';
  icon: typeof Settings;
  color: string;
  bg: string;
  label: string;
  headline: string;
  intro: string;
  image: string;
  features: string[];
  subcategories: SubCategory[];
};

export const categories: Category[] = [
  {
    id: 'solid-carbide',
    icon: Settings,
    color: 'var(--cat-solid)',
    bg: 'var(--cat-solid-bg)',
    label: 'Solid Carbide',
    headline: 'Solid Carbide End Mills, Reamers & Drills',
    intro:
      'High-performance solid carbide tools for demanding machining across grey and nodular cast iron, alloyed and stainless steels, titanium, Inconel and aluminium. The range includes precision end mills, reamers and drills, with application-specific geometries, polished flutes, internal coolant options and wear-resistant PVD coatings.',
    image: solidCarbideOverview.url,
    features: [
      'End mill diameters from 2 to 32 mm',
      '2, 3, 4, 5 and 6-flute options',
      'Multi-helix geometry, polished and edge-honed',
      'Reamer diameters from 2 to 32 mm',
      'Customer-specific bore tolerances, including H6 and H7',
      'Drills from 2 to 25 mm, including special step drills',
      'Internal coolant from 4 mm diameter on drills',
      'Application-specific PVD wear-resistant coatings',
    ],
    subcategories: [
      {
        id: 'sc-end-mills',
        title: 'End Mills',
        blurb:
          'Cost-effective high-performance milling tools for slot and shoulder milling, grooving, chamfering, roughing, finishing, high-feed and 3D profile milling.',
        products: [
          {
            name: 'Finishing Application Solid Carbide Endmill',
            desc:
              'Solid carbide end mill for finish milling flat surfaces, shoulders and contours, removing remaining stock after roughing to achieve the required surface finish and final shape.',
            image: solidCarbideEndmills.url,
            // TODO: Confirm specifications for this finishing end mill before displaying them.
            /* specs: [
              { label: 'Diameter', value: '2–32 mm' },
              { label: 'Flutes / edges', value: '2, 3, 4, 5 or 6' },
              { label: 'Geometry', value: 'Multi-helix' },
              { label: 'Edge finish', value: 'Polished and edge-honed' },
            ], */
            application: 'Finish milling of flat surfaces, shoulders and contours',
          },
        ],
      },
      {
        id: 'sc-reamers',
        title: 'Reamers',
        blurb:
          'Full-carbide reamers for precision bores and critical geometric accuracy in automotive, aerospace and other demanding applications.',
        products: [
          {
            name: 'Solid Carbide Reamers',
            desc:
              'High-performance monoblock reamers with unequal spacing and application-specific cutting geometry. Straight flutes suit through and blind holes; left-hand spiral flutes are available for through holes.',
            image: solidCarbideReamers.url,
            specs: [
              { label: 'Diameter', value: '2–32 mm' },
              { label: 'Tolerance', value: 'Customer-specific, e.g. H6 / H7' },
              { label: 'Flutes', value: 'Straight or left-hand spiral' },
              { label: 'Material', value: 'Ultra-fine carbide' },
            ],
            application: 'Grey and nodular iron, alloyed steel, stainless steel, titanium and Inconel precision bores',
          },
        ],
      },
      {
        id: 'sc-drills',
        title: 'Drills & Step Drills',
        blurb:
          'Solid carbide drilling solutions with smooth polished flutes and cutting edges honed to match the application.',
        products: [
          {
            name: 'Solid Carbide Drills',
            desc:
              'Application-designed two- and three-edge drills for cast iron, alloyed steel, stainless and titanium. Aluminium options include straight-fluted, high-polish designs; aerospace aluminium geometries help reduce long chips and built-up edge.',
            image: solidCarbideDrills.url,
            specs: [
              { label: 'Diameter', value: '2–25 mm' },
              { label: 'Edges', value: '2 or 3' },
              { label: 'Helix', value: '30° standard; 40° for multi-step' },
              { label: 'Coolant', value: 'Internal from 4 mm diameter' },
            ],
            application: 'Grey and nodular iron, alloyed and stainless steels, PH steel, titanium and aluminium alloys',
          },
        ],
      },
    ],
  },
  {
    id: 'pcd',
    icon: Gem,
    color: 'var(--cat-pcd)',
    bg: 'var(--cat-pcd-bg)',
    label: 'PCD Tools',
    headline: 'PCD Tools for High-Performance Machining',
    intro:
      'Polycrystalline diamond tooling for highly productive machining of aluminium parts in automotive and aerospace applications. Riddhi develops application-specific PCD solutions for drilling, milling and precision boring, supporting tool design through manufacturing.',
    image: pcdOverview.url,
    features: [
      'Application-specific drilling, milling and boring solutions',
      'Wire EDM, lapping and grinding of cutting edges',
      'Solid carbide or steel tool bodies',
      'Seamless brazing and high-quality pocket seats',
      'Smooth flutes and balanced PCD material',
      'Long tool life and high wear resistance',
      'Surface finish below Ra 0.2 µm is achievable',
      'Multiple operations can be combined in one tool',
    ],
    subcategories: [
      {
        id: 'pcd-tools',
        title: 'PCD Tooling Technology',
        blurb:
          'PCD cutting material combines high hardness, a fine microstructure and smooth cutting surfaces to reduce built-up edge when machining aluminium.',
        products: [
          {
            name: 'PCD Cutting Tool Construction',
            desc:
              'Tool designs combine well-balanced PCD material, high-quality pocket seats, smooth flutes, precision-finished cutting edges and seamless brazing.',
            image: pcdToolingTechnology.url,
            application: 'High-speed aluminium machining where long tool life, tight tolerances and fine surface finish matter',
          },
        ],
      },
      {
        id: 'pcd-reamers',
        title: 'PCD Boring & Reaming Tools',
        blurb:
          'Precision PCD tooling designed around component and bore requirements, including operations that can be consolidated into one tool.',
        products: [
          {
            name: 'PCD Boring Tool',
            desc:
              'Steel-body precision boring tool with a PCD cutting head for high-productivity machining.',
            image: pcdTool1.url,
            application: 'Aluminium component precision boring',
          },
          {
            name: 'PCD Finish Boring Tool',
            desc: 'Long-reach PCD tool for accurate, smooth bore finishing.',
            image: pcdTool2.url,
            application: 'High-performance bore finishing',
          },
          {
            name: 'PCD Step Boring Tool',
            desc: 'Application-designed PCD boring tool with stepped cutting geometry.',
            image: pcdTool3.url,
            application: 'Multi-feature aluminium bores',
          },
          {
            name: 'PCD Reamer',
            desc: 'PCD-edged reaming solution for consistent precision bore machining.',
            image: pcdTool4.url,
            application: 'Aluminium precision reaming',
          },
        ],
      },
      {
        id: 'pcd-milling',
        title: 'PCD Milling & Special Tools',
        blurb:
          'PCD milling and application-specific tools engineered for high-speed aluminium machining and multiple-operation processes.',
        products: [
          {
            name: 'PCD Milling Tool',
            desc: 'Multi-edge PCD milling tool for high material-removal rates and repeatable finishes.',
            image: pcdTool5.url,
            application: 'Aluminium milling operations',
          },
          {
            name: 'PCD Special Tool',
            desc: 'Custom PCD cutting solution manufactured to the component and process requirements.',
            image: pcdTool6.url,
            application: 'Customer-specific aluminium machining',
          },
          {
            name: 'PCD Combination Tool',
            desc: 'Combination tooling can consolidate multiple machining operations into one tool to reduce tool changes and production cost.',
            image: pcdTool7.url,
            application: 'Multi-operation automotive and aerospace components',
          },
          {
            name: 'PCD Form Tool',
            desc: 'Purpose-designed PCD form geometry for accurate profiles and long machining cycles.',
            image: pcdTool8.url,
            application: 'Application-specific profile machining',
          },
          {
            name: 'PCD Tool Range',
            desc: 'Selection of precision tool solutions designed for high-performance machining.',
            image: pcdToolingRange.url,
            application: 'Application-specific drilling, milling and precision boring',
          },
        ],
      },
    ],
  },
  {
    id: 'brazed',
    icon: Layers,
    color: 'var(--cat-brazed)',
    bg: 'var(--cat-brazed-bg)',
    label: 'Brazed Carbide',
    headline: 'Brazed Carbide Tools & Special Solutions',
    intro:
      'Brazed carbide-tipped tools offer a cost-conscious way to retain strong machining performance amid high carbide raw-material costs. A heat-treated tool-steel body carries carbide tips brazed into prepared pockets, with cutting edges ground on a 5-axis CNC tool-grinding machine.',
    image: brazedCarbideOverview.url,
    features: [
      'Tool-steel body, heat-treated for the application',
      'Carbide tips brazed into prepared pockets',
      'Cutting edges ground on 5-axis CNC equipment',
      'Manufactured to customer-specific requirements',
      'Stepped special tools and form tools',
      'T-slot milling cutters',
      'Reamers with internal coolant and PVD coating',
      'Lugged carbide drills and reamers with internal coolant',
    ],
    subcategories: [
      {
        id: 'bc-milling',
        title: 'Milling Cutters',
        blurb:
          'Brazed carbide milling solutions include T-slot cutters and special milling tools manufactured for the component and customer requirements.',
        products: [
          {
            name: 'Brazed Carbide Shell Milling Cutter',
            desc:
              'Brazed carbide-tipped shell milling cutter built on a tool-steel body for demanding machining and reduced tooling cost.',
            image: brazedShellCutter.url,
            application: 'Customer-specific milling applications',
          },
          {
            name: 'T-Slot Milling Cutter',
            desc:
              'Brazed carbide T-slot cutter manufactured to the profile and requirements of the component.',
            image: brazedTool1.url,
            application: 'T-slot milling',
          },
        ],
      },
      {
        id: 'bc-reamers',
        title: 'Drills & Reamers',
        blurb:
          'Brazed carbide drilling and reaming tools, including internal-coolant options and application-specific geometries.',
        products: [
          {
            name: 'Brazed Carbide Reamer',
            desc: 'Carbide-tipped reamer with a heat-treated steel body, ground to the required geometry.',
            image: brazedTool2.url,
            application: 'Customer-specific precision reaming',
          },
          {
            name: 'Lugged Carbide Drill',
            desc: 'Lugged carbide drilling tool manufactured for the workpiece and application.',
            image: brazedTool3.url,
            application: 'Special-purpose drilling',
          },
          {
            name: 'Brazed Carbide Drill',
            desc: 'Carbide-tipped drill with application-specific cutting geometry.',
            image: brazedTool4.url,
            application: 'Industrial drilling applications',
          },
          {
            name: 'Brazed Carbide Reamer with Coolant',
            desc: 'Special brazed carbide reamer option with internal coolant supply and PVD coating.',
            image: brazedTool5.url,
            application: 'Precision reaming with internal coolant',
          },
        ],
      },
      {
        id: 'bc-special',
        title: 'Stepped & Form Tools',
        blurb:
          'Special and form tools are designed around customer-specific component requirements.',
        products: [
          {
            name: 'Stepped Special Tool',
            desc: 'Brazed carbide tool with stepped geometry made to suit the required machining sequence.',
            image: brazedTool6.url,
            application: 'Customer-specific stepped machining',
          },
          {
            name: 'Brazed Carbide Form Tool',
            desc: 'Profiled carbide tips brazed to a steel body and ground to the required form.',
            image: brazedTool7.url,
            application: 'Special form milling and turning operations',
          },
          {
            name: 'Special Carbide Tool',
            desc: 'Application-engineered brazed tool manufactured to customer-specific requirements.',
            image: brazedTool8.url,
            application: 'Customer-specific machining operations',
          },
        ],
      },
    ],
  },
];