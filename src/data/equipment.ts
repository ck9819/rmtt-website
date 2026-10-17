import { Microscope, Gauge, Cpu, Layers, Sparkles, Eye } from 'lucide-react';

export const equipment = [
  {
    num: '01',
    id: 'saacke',
    homeFeatured: true,
    facilityEquipment: true,
    shortName: "SAACKE 5-axis CNC Grinding",
    summary: "5-axis grinding for rotary cutting tools",
    facilityName: "SAACKE 5-Axis Tool Grinding Machines",
    icon: Cpu,
    name: 'SAACKE 5-axis CNC Grinding',
    detail:
      'SAACKE 5-axis tool grinding machines are part of the RMTT manufacturing facility.',
    // TODO: confirm with client
    // specs: ['5-axis simultaneous interpolation', 'Sub-micron geometric accuracy', 'Internal coolant hole grinding', 'Repeatable setups via digital machine memory'],
  },
  {
    num: '02',
    id: 'vollmer',
    homeFeatured: true,
    facilityEquipment: true,
    shortName: "VOLLMER Wire EDM",
    summary: "PCD & CBN edge machining with precision lapping finish",
    facilityName: "Vollmer Wire EDM Machine",
    icon: Sparkles,
    name: 'VOLLMER Wire EDM',
    detail:
      'VOLLMER Wire EDM is part of the RMTT manufacturing facility for PCD tooling.',
    // TODO: confirm with client
    // specs: ['PCD & CBN compatible', 'Edge geometry to ±0.002mm', 'Precision lapping post-EDM', 'No heat-affected zone'],
  },
  {
    num: '03',
    id: 'helicheck',
    homeFeatured: true,
    facilityEquipment: true,
    shortName: "Walter Helicheck",
    summary: "Optical non-contact tool measurement & inspection",
    facilityName: "Walter Helicheck Measuring Machine",
    icon: Eye,
    name: 'Walter Helicheck Optical Measurement',
    detail:
      'The RMTT facility includes a Walter Helicheck measuring machine.',
    // TODO: confirm with client
    // specs: ['Non-contact optical measurement', 'Full geometry verification', '100% outgoing inspection', 'Digital measurement records per tool'],
  },
  {
    num: '04',
    id: 'swiss-grinding',
    homeFeatured: true,
    facilityEquipment: true,
    shortName: "Swiss Cylindrical Grinding",
    summary: "High-precision body & shank grinding systems",
    facilityName: "Swiss Cylindrical Grinding Systems",
    icon: Gauge,
    name: 'Swiss Cylindrical Grinding',
    detail:
      'The RMTT facility includes Swiss cylindrical grinding systems.',
    // TODO: confirm with client
    // specs: ['h5/h6 shank tolerance', 'Runout < 0.003mm', 'Alumina and CBN wheels', 'Suitable for all carbide grades'],
  },
  {
    num: '05',
    id: 'honing',
    homeFeatured: false,
    facilityEquipment: true,
    facilityName: "Advanced Edge Honing and Polishing Equipment",
    icon: Layers,
    name: 'Edge Preparation & Honing',
    detail:
      'The RMTT facility includes advanced edge honing and polishing equipment.',
    // TODO: confirm with client
    // specs: ['Drag finishing and brush honing', 'K-factor 0.8–2.0 µm Rk', 'Consistent edge radius control', 'Pre-coating surface preparation'],
  },
  {
    num: '06',
    id: 'coating',
    homeFeatured: false,
    facilityEquipment: false,
    icon: Microscope,
    name: 'PVD Coating Solutions',
    detail:
      'The catalogue describes application-specific wear-resistant PVD coatings.',
    // TODO: confirm with client
    // specs: ['AlTiN — steel and cast iron', 'TiSiN — hardened steel (>55 HRC)', 'DLC — aluminium and non-ferrous', 'nACo — general high-performance'],
  },
];

export const homeEquipment = equipment.filter(item => item.homeFeatured);
export const facilityEquipment = equipment.filter(item => item.facilityEquipment);
