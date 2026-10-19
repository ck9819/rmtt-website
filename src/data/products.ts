import solidCarbideEndmills from '../assets/solid-carbide-endmills.jpg.asset.json';
import solidCarbideReamers from '../assets/solid-carbide-reamers.jpg.asset.json';
import solidCarbideDrills from '../assets/solid-carbide-drills.jpg.asset.json';
import pcdToolingTechnology from '../assets/pcd-tooling-technology.jpg.asset.json';
import pcdToolingRange from '../assets/pcd-tooling-range.jpg.asset.json';
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

export type ProductCategory = 'solid-carbide' | 'pcd' | 'brazed';
export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  image?: string;
  applications: string[];
  materials: string[];
  industries: string[];
  specs?: { label: string; value: string }[];
  datasheetUrl?: string;
};

// Only source-backed, previously visible specifications are included.
// End-mill specifications approved from the company FINAL deck.
export const products: Product[] = [
{
    slug: 'finishing-application-solid-carbide-endmill',
    category: 'solid-carbide',
    subcategory: 'sc-end-mills',
    materials: [],
    industries: [],
            name: 'Finishing Application Solid Carbide Endmill',
            description:
              'Solid carbide end mill for finish milling flat surfaces, shoulders and contours, removing remaining stock after roughing to achieve the required surface finish and final shape.',
            image: solidCarbideEndmills.url,
            // TODO: Confirm specifications for this finishing end mill before displaying them.
            
            applications: ['Finish milling of flat surfaces, shoulders and contours'],
          },
{
    slug: 'solid-carbide-reamers',
    category: 'solid-carbide',
    subcategory: 'sc-reamers',
    materials: ['cast iron', 'steel', 'stainless steel', 'titanium', 'Inconel'],
    industries: ['Automotive', 'Aerospace'],
            name: 'Solid Carbide Reamers',
            description:
              'High-performance monoblock reamers with unequal spacing and application-specific cutting geometry. Straight flutes suit through and blind holes; left-hand spiral flutes are available for through holes.',
            image: solidCarbideReamers.url,
            specs: [
              { label: 'Diameter', value: '2–32 mm' },
              { label: 'Tolerance', value: 'Customer-specific, e.g. H6 / H7' },
              { label: 'Flutes', value: 'Straight or left-hand spiral' },
              { label: 'Material', value: 'Ultra-fine carbide' },
            ],
            applications: ['Grey and nodular iron, alloyed steel, stainless steel, titanium and Inconel precision bores'],
          },
{
    slug: 'solid-carbide-drills',
    category: 'solid-carbide',
    subcategory: 'sc-drills',
    materials: ['cast iron', 'steel', 'stainless steel', 'titanium', 'aluminium'],
    industries: ['Aerospace'],
            name: 'Solid Carbide Drills',
            description:
              'Application-designed two- and three-edge drills for cast iron, alloyed steel, stainless and titanium. Aluminium options include straight-fluted, high-polish designs; aerospace aluminium geometries help reduce long chips and built-up edge.',
            image: solidCarbideDrills.url,
            specs: [
              { label: 'Diameter', value: '2–25 mm' },
              { label: 'Edges', value: '2 or 3' },
              { label: 'Helix', value: '30° standard; 40° for multi-step' },
              { label: 'Coolant', value: 'Internal from 4 mm diameter' },
            ],
            applications: ['Grey and nodular iron, alloyed and stainless steels, PH steel, titanium and aluminium alloys'],
          },
{
    slug: 'pcd-cutting-tool-construction',
    category: 'pcd',
    subcategory: 'pcd-tools',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Cutting Tool Construction',
            description:
              'Tool designs combine well-balanced PCD material, high-quality pocket seats, smooth flutes, precision-finished cutting edges and seamless brazing.',
            image: pcdToolingTechnology.url,
            applications: ['High-speed aluminium machining where long tool life, tight tolerances and fine surface finish matter'],
          },
{
    slug: 'pcd-boring-tool',
    category: 'pcd',
    subcategory: 'pcd-reamers',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Boring Tool',
            description:
              'Steel-body precision boring tool with a PCD cutting head for high-productivity machining.',
            image: pcdTool1.url,
            applications: ['Aluminium component precision boring'],
          },
{
    slug: 'pcd-finish-boring-tool',
    category: 'pcd',
    subcategory: 'pcd-reamers',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Finish Boring Tool',
            description: 'Long-reach PCD tool for accurate, smooth bore finishing.',
            image: pcdTool2.url,
            applications: ['High-performance bore finishing'],
          },
{
    slug: 'pcd-step-boring-tool',
    category: 'pcd',
    subcategory: 'pcd-reamers',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Step Boring Tool',
            description: 'Application-designed PCD boring tool with stepped cutting geometry.',
            image: pcdTool3.url,
            applications: ['Multi-feature aluminium bores'],
          },
{
    slug: 'pcd-reamer',
    category: 'pcd',
    subcategory: 'pcd-reamers',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Reamer',
            description: 'PCD-edged reaming solution for consistent precision bore machining.',
            image: pcdTool4.url,
            applications: ['Aluminium precision reaming'],
          },
{
    slug: 'pcd-milling-tool',
    category: 'pcd',
    subcategory: 'pcd-milling',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Milling Tool',
            description: 'Multi-edge PCD milling tool for high material-removal rates and repeatable finishes.',
            image: pcdTool5.url,
            applications: ['Aluminium milling operations'],
          },
{
    slug: 'pcd-special-tool',
    category: 'pcd',
    subcategory: 'pcd-milling',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Special Tool',
            description: 'Custom PCD cutting solution manufactured to the component and process requirements.',
            image: pcdTool6.url,
            applications: ['Customer-specific aluminium machining'],
          },
{
    slug: 'pcd-combination-tool',
    category: 'pcd',
    subcategory: 'pcd-milling',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Combination Tool',
            description: 'Combination tooling can consolidate multiple machining operations into one tool to reduce tool changes and production cost.',
            image: pcdTool7.url,
            applications: ['Multi-operation automotive and aerospace components'],
          },
{
    slug: 'pcd-form-tool',
    category: 'pcd',
    subcategory: 'pcd-milling',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Form Tool',
            description: 'Purpose-designed PCD form geometry for accurate profiles and long machining cycles.',
            image: pcdTool8.url,
            applications: ['Application-specific profile machining'],
          },
{
    slug: 'pcd-tool-range',
    category: 'pcd',
    subcategory: 'pcd-milling',
    materials: ['aluminium'],
    industries: ['Automotive', 'Aerospace'],
            name: 'PCD Tool Range',
            description: 'Selection of precision tool solutions designed for high-performance machining.',
            image: pcdToolingRange.url,
            applications: ['Application-specific drilling, milling and precision boring'],
          },
{
    slug: 'brazed-carbide-shell-milling-cutter',
    category: 'brazed',
    subcategory: 'bc-milling',
    materials: [],
    industries: [],
            name: 'Brazed Carbide Shell Milling Cutter',
            description:
              'Brazed carbide-tipped shell milling cutter built on a tool-steel body for demanding machining and reduced tooling cost.',
            image: brazedShellCutter.url,
            applications: ['Customer-specific milling applications'],
          },
{
    slug: 't-slot-milling-cutter',
    category: 'brazed',
    subcategory: 'bc-milling',
    materials: [],
    industries: [],
            name: 'T-Slot Milling Cutter',
            description:
              'Brazed carbide T-slot cutter manufactured to the profile and requirements of the component.',
            image: brazedTool1.url,
            applications: ['T-slot milling'],
          },
{
    slug: 'brazed-carbide-reamer',
    category: 'brazed',
    subcategory: 'bc-reamers',
    materials: [],
    industries: [],
            name: 'Brazed Carbide Reamer',
            description: 'Carbide-tipped reamer with a heat-treated steel body, ground to the required geometry.',
            image: brazedTool2.url,
            applications: ['Customer-specific precision reaming'],
          },
{
    slug: 'lugged-carbide-drill',
    category: 'brazed',
    subcategory: 'bc-reamers',
    materials: [],
    industries: [],
            name: 'Lugged Carbide Drill',
            description: 'Lugged carbide drilling tool manufactured for the workpiece and application.',
            image: brazedTool3.url,
            applications: ['Special-purpose drilling'],
          },
{
    slug: 'brazed-carbide-drill',
    category: 'brazed',
    subcategory: 'bc-reamers',
    materials: [],
    industries: [],
            name: 'Brazed Carbide Drill',
            description: 'Carbide-tipped drill with application-specific cutting geometry.',
            image: brazedTool4.url,
            applications: ['Industrial drilling applications'],
          },
{
    slug: 'brazed-carbide-reamer-with-coolant',
    category: 'brazed',
    subcategory: 'bc-reamers',
    materials: [],
    industries: [],
            name: 'Brazed Carbide Reamer with Coolant',
            description: 'Special brazed carbide reamer option with internal coolant supply and PVD coating.',
            image: brazedTool5.url,
            applications: ['Precision reaming with internal coolant'],
          },
{
    slug: 'stepped-special-tool',
    category: 'brazed',
    subcategory: 'bc-special',
    materials: [],
    industries: [],
            name: 'Stepped Special Tool',
            description: 'Brazed carbide tool with stepped geometry made to suit the required machining sequence.',
            image: brazedTool6.url,
            applications: ['Customer-specific stepped machining'],
          },
{
    slug: 'brazed-carbide-form-tool',
    category: 'brazed',
    subcategory: 'bc-special',
    materials: [],
    industries: [],
            name: 'Brazed Carbide Form Tool',
            description: 'Profiled carbide tips brazed to a steel body and ground to the required form.',
            image: brazedTool7.url,
            applications: ['Special form milling and turning operations'],
          },
{
    slug: 'special-carbide-tool',
    category: 'brazed',
    subcategory: 'bc-special',
    materials: [],
    industries: [],
            name: 'Special Carbide Tool',
            description: 'Application-engineered brazed tool manufactured to customer-specific requirements.',
            image: brazedTool8.url,
            applications: ['Customer-specific machining operations'],
          }
];
