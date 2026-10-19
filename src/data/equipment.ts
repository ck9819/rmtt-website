import { Microscope, Cpu, Sparkles, Eye } from 'lucide-react';

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
