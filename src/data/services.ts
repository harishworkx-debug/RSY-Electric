import { images } from './business';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  overview: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
  benefits: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'residential-electrician-miami-gardens-fl',
    title: 'Residential Electrician Miami Gardens',
    shortTitle: 'Residential Electrician',
    h1: 'Residential Electrician in Miami Gardens, FL',
    metaTitle: 'Residential Electrician Miami Gardens, FL | RSY Electric',
    metaDescription: 'Connect with a residential electrician in Miami Gardens, FL for safe, reliable home electrical service. Call 305-206-1431 for help today.',
    description: 'Full-service residential electrician serving Miami Gardens homeowners with safe, code-compliant electrical work.',
    image: images.heroElectrician,
    imageAlt: 'Residential electrician examining a home electrical panel in Miami Gardens, Florida',
    icon: 'Home',
    overview:
      'When you need a residential electrician in Miami Gardens, Florida, RSY Electric helps you connect with experienced local service providers who handle the full range of home electrical needs. From troubleshooting flickering lights to installing new circuits for a kitchen remodel, a qualified residential electrician keeps your home safe, functional, and up to code.',
    sections: [
      {
        heading: 'What a Residential Electrician Does for Your Miami Gardens Home',
        body: 'A residential electrician handles every aspect of your home\'s electrical system. That includes diagnosing and repairing faulty wiring, installing new outlets and switches, upgrading electrical panels, adding lighting fixtures, setting up ceiling fans, installing EV chargers, performing safety inspections, and adding whole-home surge protection. In Miami Gardens, where many homes were built decades ago, aging wiring and outdated panels are common concerns that a residential electrician can assess and address.',
      },
      {
        heading: 'Why Miami Gardens Homeowners Choose Professional Electrical Help',
        body: 'Electrical work is not a do-it-yourself project. Faulty wiring is one of the leading causes of home fires, and improper installations can lead to shocks, damaged appliances, and failed inspections. By connecting with a qualified residential electrician through RSY Electric, you get someone who understands local codes, pulls permits when needed, and stands behind the quality of the work. Whether you live in a single-family home near Hard Rock Stadium or a townhouse off Miami Gardens Drive, professional electrical service protects your family and your property.',
      },
      {
        heading: 'Common Signs You Need a Residential Electrician',
        body: 'Call a residential electrician if you notice flickering or dimming lights, breakers that trip frequently, warm or discolored outlet covers, burning smells near switches or panels, two-prong outlets that need upgrading to three-prong GFCI, or any buzzing or humming from your electrical panel. If your home still has a fuse box or a panel under 100 amps, an upgrade may be needed to safely support modern appliances, air conditioning, and electronics.',
      },
    ],
    faqs: [
      {
        question: 'How do I connect with a residential electrician in Miami Gardens?',
        answer: 'Call 305-206-1431 and we will help connect you with an available residential electrical service provider serving the Miami Gardens area.',
      },
      {
        question: 'What types of homes do residential electricians in Miami Gardens service?',
        answer: 'Residential electricians service single-family homes, townhouses, condos, and mobile homes throughout Miami Gardens and nearby neighborhoods.',
      },
      {
        question: 'Can a residential electrician help with an older home\'s wiring?',
        answer: 'Yes. Many Miami Gardens homes were built in the 1960s and 1970s and may have aluminum wiring or undersized panels. A residential electrician can evaluate your system and recommend safe, code-compliant upgrades.',
      },
    ],
    benefits: [
      'Safe, code-compliant electrical work',
      'Troubleshooting for flickering lights and tripping breakers',
      'Panel upgrades for older homes',
      'Installation of new circuits, outlets, and fixtures',
      'Whole-home safety inspections',
    ],
  },
  {
    slug: 'electrical-repair-miami-gardens-fl',
    title: 'Electrical Repair Miami Gardens',
    shortTitle: 'Electrical Repair',
    h1: 'Electrical Repair in Miami Gardens, FL',
    metaTitle: 'Electrical Repair Miami Gardens, FL | Fast Home Electrical Fixes',
    metaDescription: 'Need electrical repair in Miami Gardens, FL? Connect with local residential electrical repair providers. Call 305-206-1431 for help today.',
    description: 'Fast, reliable electrical repair for Miami Gardens homes — from faulty outlets to breaker panel issues.',
    image: images.multimeterPanel,
    imageAlt: 'Electrician using a multimeter to diagnose a residential electrical panel in Miami Gardens',
    icon: 'Wrench',
    overview:
      'Electrical problems in your home can range from a minor nuisance like a dead outlet to a serious safety hazard like a sparking panel. When you need electrical repair in Miami Gardens, Florida, RSY Electric connects you with local residential electrical repair providers who can diagnose the issue and get your home\'s electrical system working safely again.',
    sections: [
      {
        heading: 'Common Residential Electrical Repairs in Miami Gardens',
        body: 'Homeowners in Miami Gardens call for electrical repair when they experience outlets that stop working, light switches that feel warm to the touch, circuit breakers that trip repeatedly, GFCI outlets that will not reset, flickering or dimming lights, burning smells from outlets or the panel, and loose or damaged receptacles. South Florida\'s humidity and frequent thunderstorms can also damage outdoor outlets, weatherproof covers, and pool equipment circuits, all of which a residential electrician can repair.',
      },
      {
        heading: 'The Repair Process for Your Home',
        body: 'When you connect with a residential electrical repair provider through RSY Electric, the process typically starts with a thorough diagnostic to identify the root cause of the problem. Once the issue is found, the electrician explains what needs to be repaired, provides a clear scope of work, and completes the repair using code-compliant materials. Whether it is replacing a damaged outlet, fixing a loose connection in a junction box, or repairing a circuit that keeps tripping, the goal is a safe, lasting fix.',
      },
      {
        heading: 'Don\'t Ignore Electrical Warning Signs',
        body: 'Electrical problems do not fix themselves, and they often get worse over time. A breaker that trips occasionally can become a breaker that trips every day. A slight burning smell can become a melted wire. If you notice any warning signs — warm outlets, flickering lights, buzzing from the panel, or a mild shock when touching an appliance — call for professional electrical repair right away. Your safety is not worth the risk of waiting.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can I get electrical repair help in Miami Gardens?',
        answer: 'Call 305-206-1431 and we will connect you with an available residential electrical repair provider in the Miami Gardens area as quickly as possible.',
      },
      {
        question: 'What does electrical repair typically involve?',
        answer: 'Most residential electrical repairs involve diagnosing the problem, replacing damaged components like outlets, switches, or breakers, and ensuring all connections are tight and code-compliant.',
      },
      {
        question: 'Is a flickering light something to worry about?',
        answer: 'It can be. Flickering lights may indicate a loose connection, an overloaded circuit, or a problem with the panel. A residential electrician can diagnose the cause and recommend the right repair.',
      },
    ],
    benefits: [
      'Fast diagnosis of electrical problems',
      'Safe repair of faulty outlets and switches',
      'Breaker and panel troubleshooting',
      'GFCI and AFCI outlet repair',
      'Weatherproofing for outdoor circuits',
    ],
  },
  {
    slug: 'outlet-repair-miami-gardens-fl',
    title: 'Outlet Repair Miami Gardens',
    shortTitle: 'Outlet Repair',
    h1: 'Outlet Repair in Miami Gardens, FL',
    metaTitle: 'Outlet Repair Miami Gardens, FL | GFCI & Receptacle Repair',
    metaDescription: 'Outlet repair in Miami Gardens, FL for dead, loose, or sparking receptacles. Connect with a residential electrical repair provider. Call 305-206-1431.',
    description: 'Repair and replacement of dead, loose, or unsafe outlets in Miami Gardens homes.',
    image: images.outletCloseup,
    imageAlt: 'Close-up of residential electrical outlets in a Miami Gardens home',
    icon: 'Plug',
    overview:
      'Outlets are among the most used parts of your home\'s electrical system, and when one stops working or feels loose, it is more than an inconvenience — it can be a safety hazard. RSY Electric connects Miami Gardens homeowners with residential electrical providers who repair and replace outlets to keep your home safe and functional.',
    sections: [
      {
        heading: 'Signs You Need Outlet Repair',
        body: 'Common signs that an outlet needs repair or replacement include plugs that fall out easily, outlets that feel warm or look discolored, a burning smell, sparking when plugging something in, outlets that have stopped working entirely, and two-prong outlets that should be upgraded to grounded three-prong or GFCI outlets. In Miami Gardens, where many homes were built before GFCI requirements were established, upgrading bathroom, kitchen, and outdoor outlets to GFCI is one of the most common and important repairs.',
      },
      {
        heading: 'GFCI Outlet Repair and Replacement',
        body: 'Ground Fault Circuit Interrupter (GFCI) outlets are required in kitchens, bathrooms, garages, and outdoor locations because they shut off power instantly if they detect a ground fault, protecting you from electrical shock. If your GFCI outlet will not reset, trips frequently, or the test button does not work, it needs to be replaced. A residential electrician can install a new GFCI outlet and verify that it is wired correctly and providing the protection your family needs.',
      },
      {
        heading: 'Upgrading Two-Prong Outlets',
        body: 'Many older homes in Miami Gardens still have two-prong outlets, which means the wiring is not grounded. Using adapters or replacing the outlet with a three-prong receptacle without actually grounding the circuit is dangerous and not code-compliant. A residential electrician can evaluate your wiring and either install a proper ground or add GFCI-protected outlets, which provide shock protection even without a ground wire.',
      },
    ],
    faqs: [
      {
        question: 'Why did my outlet stop working suddenly?',
        answer: 'A sudden failure could be caused by a tripped GFCI, a blown connection inside the outlet, or a tripped breaker. A residential electrician can diagnose and repair the issue safely.',
      },
      {
        question: 'Can I replace an outlet myself?',
        answer: 'Electrical outlet repair and replacement should always be done by a qualified residential electrician to ensure safe, code-compliant wiring and proper grounding.',
      },
      {
        question: 'How much does outlet repair cost in Miami Gardens?',
        answer: 'Costs vary depending on the type of outlet and the extent of the repair. Call 305-206-1431 to connect with a local provider who can assess your needs.',
      },
    ],
    benefits: [
      'Safe replacement of damaged outlets',
      'GFCI installation for kitchens and bathrooms',
      'Upgrade from two-prong to grounded outlets',
      'Repair of loose or sparking receptacles',
      'Weatherproof outdoor outlet covers',
    ],
  },
  {
    slug: 'switch-repair-miami-gardens-fl',
    title: 'Switch Repair Miami Gardens',
    shortTitle: 'Switch Repair',
    h1: 'Switch Repair in Miami Gardens, FL',
    metaTitle: 'Switch Repair Miami Gardens, FL | Light Switch Repair & Replacement',
    metaDescription: 'Light switch repair in Miami Gardens, FL for flickering, warm, or broken switches. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Repair and replacement of faulty light switches in Miami Gardens homes.',
    image: images.lightSwitch,
    imageAlt: 'Modern light switch on a wall in a Miami Gardens residence',
    icon: 'ToggleRight',
    overview:
      'A light switch that crackles, feels warm, or does not turn on the light reliably is more than annoying — it can indicate a loose connection or worn-out switch that may be unsafe. RSY Electric connects Miami Gardens homeowners with residential electrical providers who repair and replace light switches of all types.',
    sections: [
      {
        heading: 'Common Switch Problems in Miami Gardens Homes',
        body: 'Light switches can fail in several ways. A switch may feel warm to the touch, make a crackling or popping sound when flipped, only work intermittently, feel loose in the wall, or not work at all. In some cases, a switch controls the wrong fixture or a three-way switch setup stops working correctly. These problems are usually caused by worn internal contacts, loose wire connections, or outdated switch mechanisms that a residential electrician can repair or replace.',
      },
      {
        heading: 'Types of Switches a Residential Electrician Can Install',
        body: 'Beyond standard single-pole switches, a residential electrician can install three-way and four-way switches for hallways and staircases, dimmer switches for dining rooms and bedrooms, smart switches that work with home automation systems, timer switches for exhaust fans and outdoor lighting, and motion-sensor switches for convenience and energy savings. If you are upgrading your Miami Gardens home, a residential electrician can recommend the right switch type for each location.',
      },
      {
        heading: 'Dimmer Switch Installation',
        body: 'Dimmer switches let you set the mood and save energy, but they must be matched to the type of lighting you have. LED bulbs require LED-compatible dimmers, and installing the wrong type can cause flickering, buzzing, or premature bulb failure. A residential electrician can install the correct dimmer for your fixtures and ensure it is rated for the wattage of your lights.',
      },
    ],
    faqs: [
      {
        question: 'Why is my light switch warm?',
        answer: 'A warm switch can indicate a loose connection or an overloaded circuit. This is a potential safety hazard, and you should have a residential electrician inspect and repair it.',
      },
      {
        question: 'Can a residential electrician install a smart switch?',
        answer: 'Yes. A residential electrician can install most smart switches, though some require a neutral wire that older homes may not have. An electrician can evaluate your wiring and recommend compatible options.',
      },
      {
        question: 'How long does switch repair take?',
        answer: 'Most switch repairs or replacements take under an hour. Call 305-206-1431 to connect with a local provider.',
      },
    ],
    benefits: [
      'Safe repair of warm or crackling switches',
      'Dimmer switch installation',
      'Three-way and four-way switch repair',
      'Smart switch installation',
      'Timer and motion-sensor switches',
    ],
  },
  {
    slug: 'lighting-installation-miami-gardens-fl',
    title: 'Lighting Installation Miami Gardens',
    shortTitle: 'Lighting Installation',
    h1: 'Lighting Installation in Miami Gardens, FL',
    metaTitle: 'Lighting Installation Miami Gardens, FL | Indoor & Outdoor Lighting',
    metaDescription: 'Lighting installation in Miami Gardens, FL for indoor, outdoor, recessed, and decorative lighting. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Professional installation of indoor and outdoor lighting for Miami Gardens homes.',
    image: images.pendantLights,
    imageAlt: 'Modern pendant lighting installed in a Miami Gardens home',
    icon: 'Lightbulb',
    overview:
      'New lighting can transform the look and feel of your home while improving safety and energy efficiency. Whether you want recessed can lights in the living room, pendant lights over the kitchen island, or security floodlights in the backyard, RSY Electric connects Miami Gardens homeowners with residential electrical providers who install lighting of all types.',
    sections: [
      {
        heading: 'Indoor Lighting Installation for Miami Gardens Homes',
        body: 'Indoor lighting options include recessed can lights for a clean, modern look, pendant lights and chandeliers for dining areas and entryways, under-cabinet lighting for kitchens, track lighting for living rooms, and LED retrofit kits that replace old fixtures with energy-efficient alternatives. A residential electrician runs the wiring, installs the fixtures, and ensures everything is properly supported and connected to the right circuit.',
      },
      {
        heading: 'Outdoor and Landscape Lighting',
        body: 'Outdoor lighting improves curb appeal and security for your Miami Gardens home. A residential electrician can install floodlights with motion sensors, pathway lighting, landscape accent lighting, deck and patio lighting, and pool area lighting. All outdoor fixtures and wiring must be rated for wet locations and protected by GFCI circuits to meet code and withstand South Florida\'s rain and humidity.',
      },
      {
        heading: 'Energy-Efficient LED Lighting',
        body: 'Upgrading to LED lighting is one of the most cost-effective improvements you can make. LED bulbs use up to 80% less energy than incandescent bulbs, last much longer, and produce less heat — an important benefit in South Florida\'s climate. A residential electrician can install LED fixtures or retrofit your existing fixtures with LED kits, and can also install dimmer switches that are compatible with your LED lights.',
      },
    ],
    faqs: [
      {
        question: 'Can a residential electrician install recessed lighting in an existing ceiling?',
        answer: 'Yes. A residential electrician can cut holes, run wiring, and install recessed can lights in most existing ceilings. For insulated ceilings, IC-rated fixtures are used for safety.',
      },
      {
        question: 'Do I need a permit for lighting installation in Miami Gardens?',
        answer: 'Permit requirements vary by project scope. A residential electrician can determine whether a permit is needed and handle the permitting process for you.',
      },
      {
        question: 'Can outdoor lighting withstand Miami Gardens weather?',
        answer: 'Yes, as long as the fixtures and wiring are rated for wet locations and installed with proper GFCI protection. A residential electrician ensures all outdoor installations meet these requirements.',
      },
    ],
    benefits: [
      'Recessed can light installation',
      'Pendant and chandelier installation',
      'Outdoor and landscape lighting',
      'LED retrofit and energy upgrades',
      'Security floodlight installation',
    ],
  },
  {
    slug: 'electrical-panel-service-miami-gardens-fl',
    title: 'Electrical Panel Service Miami Gardens',
    shortTitle: 'Electrical Panel Service',
    h1: 'Electrical Panel Service in Miami Gardens, FL',
    metaTitle: 'Electrical Panel Service Miami Gardens, FL | Panel Upgrade & Repair',
    metaDescription: 'Electrical panel service in Miami Gardens, FL for panel upgrades, breaker replacement, and inspections. Connect with a residential provider. Call 305-206-1431.',
    description: 'Electrical panel upgrade, repair, and inspection for Miami Gardens homes.',
    image: images.breakerPanel,
    imageAlt: 'Residential circuit breaker panel being serviced in a Miami Gardens home',
    icon: 'Zap',
    overview:
      'Your electrical panel is the heart of your home\'s electrical system. It distributes power to every circuit and protects your home from overloads. If your panel is outdated, damaged, or too small for your needs, RSY Electric connects Miami Gardens homeowners with residential electrical providers who can upgrade, repair, or inspect your panel.',
    sections: [
      {
        heading: 'When You Need an Electrical Panel Upgrade',
        body: 'Many Miami Gardens homes still have panels rated at 100 amps or less, which may not be enough for modern appliances, air conditioning, electric dryers, and EV chargers. Signs you may need a panel upgrade include breakers that trip frequently, a panel that feels warm, flickering lights when appliances turn on, a panel with visible damage or rust, or a panel that uses fuses instead of circuit breakers. Upgrading to a 200-amp panel gives you room for future additions and ensures your home can safely handle its electrical load.',
      },
      {
        heading: 'Panel Repair and Breaker Replacement',
        body: 'Not every panel problem requires a full upgrade. A residential electrician can replace individual breakers that have failed, repair loose connections, tighten bus bar connections, and address corrosion caused by South Florida\'s humidity. If your panel has a recalled brand such as Federal Pacific or Zinsco, a full panel replacement is strongly recommended, as these panels have known safety defects that can lead to fires.',
      },
      {
        heading: 'Subpanel Installation',
        body: 'If you are adding a room, a pool, or an EV charger and your main panel does not have enough space for new breakers, a residential electrician can install a subpanel. A subpanel connects to your main panel and provides additional circuit capacity for a specific area of your home, which is often more cost-effective than replacing the entire main panel.',
      },
    ],
    faqs: [
      {
        question: 'How long does a panel upgrade take?',
        answer: 'A typical panel upgrade takes one day. The electrician will coordinate with the utility company if the meter needs to be pulled.',
      },
      {
        question: 'How do I know if my panel needs replacing?',
        answer: 'Signs include frequent breaker trips, warm or damaged panel surfaces, flickering lights, or a panel rated under 100 amps. A residential electrician can inspect your panel and recommend whether repair or replacement is needed.',
      },
      {
        question: 'Do I need a permit for a panel upgrade in Miami Gardens?',
        answer: 'Yes, electrical panel upgrades require a permit and inspection. A residential electrician handles the permitting process as part of the service.',
      },
    ],
    benefits: [
      'Upgrade from 100-amp to 200-amp service',
      'Replacement of recalled or unsafe panels',
      'Individual breaker replacement',
      'Subpanel installation for additions',
      'Panel safety inspections',
    ],
  },
  {
    slug: 'residential-wiring-miami-gardens-fl',
    title: 'Residential Wiring Miami Gardens',
    shortTitle: 'Residential Wiring',
    h1: 'Residential Wiring in Miami Gardens, FL',
    metaTitle: 'Residential Wiring Miami Gardens, FL | Home Wiring & Rewiring',
    metaDescription: 'Residential wiring in Miami Gardens, FL for new circuits, rewiring, and wiring repair. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'New wiring, rewiring, and wiring repair for Miami Gardens homes.',
    image: images.wiringExposed,
    imageAlt: 'Exposed residential electrical wiring during a home renovation in Miami Gardens',
    icon: 'Cable',
    overview:
      'Whether you are building an addition, finishing a garage, or dealing with old and unsafe wiring, RSY Electric connects Miami Gardens homeowners with residential electrical providers who handle every type of home wiring project, from a single new circuit to a whole-house rewire.',
    sections: [
      {
        heading: 'New Circuit Wiring',
        body: 'When you add an appliance, a room, or a feature that needs more power, a residential electrician runs new circuits from your panel to the new location. This includes dedicated circuits for air conditioners, electric ranges, dryers, water heaters, and EV chargers. Each new circuit is sized correctly for the load, uses the right wire gauge, and is protected by an appropriately rated breaker.',
      },
      {
        heading: 'Whole-House Rewiring',
        body: 'Homes built before 1980 in Miami Gardens may have wiring that is no longer considered safe. Aluminum wiring, common in homes built in the 1960s and 1970s, can oxidize and loosen at connection points, creating a fire hazard. Cloth-insulated wiring, found in even older homes, can become brittle and crack. A whole-house rewire replaces all the old wiring with modern copper NM cable, giving you safe, reliable power throughout your home.',
      },
      {
        heading: 'Wiring for Additions and Remodels',
        body: 'If you are adding a bedroom, converting a garage to a living space, or remodeling a kitchen, a residential electrician handles all the new wiring for that space. This includes outlets, lighting, switches, smoke detectors, and any dedicated circuits for appliances. All wiring is installed to current code and inspected to ensure it passes municipal requirements.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my home needs rewiring?',
        answer: 'If your home has aluminum wiring, cloth-insulated wiring, or wiring that is over 40 years old, a residential electrician can inspect it and recommend whether rewiring is needed.',
      },
      {
        question: 'How long does a whole-house rewire take?',
        answer: 'A whole-house rewire typically takes several days to a week depending on the size of the home and the complexity of the wiring.',
      },
      {
        question: 'Can a residential electrician add a circuit for a new appliance?',
        answer: 'Yes. A residential electrician can run a dedicated circuit from your panel to any new appliance, ensuring it is properly sized and protected.',
      },
    ],
    benefits: [
      'New circuit installation for appliances',
      'Whole-house rewiring for older homes',
      'Aluminum wiring remediation',
      'Wiring for additions and remodels',
      'Smoke detector wiring',
    ],
  },
  {
    slug: 'ceiling-fan-installation-miami-gardens-fl',
    title: 'Ceiling Fan Installation Miami Gardens',
    shortTitle: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Miami Gardens, FL',
    metaTitle: 'Ceiling Fan Installation Miami Gardens, FL | Ceiling Fan Repair',
    metaDescription: 'Ceiling fan installation in Miami Gardens, FL for indoor and outdoor fans. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Installation and repair of ceiling fans in Miami Gardens homes.',
    image: images.ceilingFan,
    imageAlt: 'Modern ceiling fan installed in a Miami Gardens home',
    icon: 'Fan',
    overview:
      'Ceiling fans are essential in South Florida homes, keeping air moving and reducing the load on your air conditioner. Whether you want a new fan in the living room, a replacement for a wobbly fan, or an outdoor-rated fan for the patio, RSY Electric connects Miami Gardens homeowners with residential electrical providers who install and repair ceiling fans.',
    sections: [
      {
        heading: 'Ceiling Fan Installation Basics',
        body: 'Installing a ceiling fan is more complex than installing a light fixture because fans vibrate and weigh more. A residential electrician installs a fan-rated junction box that can support the weight and movement, runs wiring if needed, assembles the fan, and secures it properly. The electrician also ensures the fan is balanced and that the wall switch or remote control is set up correctly.',
      },
      {
        heading: 'Outdoor Ceiling Fans',
        body: 'Many Miami Gardens homes have covered patios and lanais where an outdoor-rated ceiling fan can make a big difference in comfort. Outdoor fans use moisture-resistant materials and are rated for damp or wet locations. A residential electrician installs the fan with a weatherproof box and GFCI-protected wiring to ensure it is safe and durable in South Florida\'s humid environment.',
      },
      {
        heading: 'Ceiling Fan Repair',
        body: 'If your ceiling fan wobbles, makes noise, does not respond to the remote, or has stopped working entirely, a residential electrician can diagnose and repair the problem. Common repairs include rebalancing the blades, replacing the fan capacitor, fixing the pull chain switch, and repairing the wall control. If the fan is beyond repair, the electrician can remove it and install a new one.',
      },
    ],
    faqs: [
      {
        question: 'Can I install a ceiling fan where a light fixture currently is?',
        answer: 'Only if the existing junction box is fan-rated. A residential electrician can evaluate the box and replace it with a fan-rated box if needed.',
      },
      {
        question: 'Do I need a special box for a ceiling fan?',
        answer: 'Yes. Ceiling fans require a fan-rated junction box that is designed to support the weight and vibration of the fan. Standard light fixture boxes are not sufficient.',
      },
      {
        question: 'Can a ceiling fan be installed outdoors?',
        answer: 'Yes, as long as the fan is rated for damp or wet locations and is installed with weatherproof wiring and a GFCI-protected circuit.',
      },
    ],
    benefits: [
      'Fan-rated box installation',
      'Indoor and outdoor ceiling fans',
      'Ceiling fan balancing and repair',
      'Remote control setup',
      'Wall switch and dimmer integration',
    ],
  },
  {
    slug: 'ev-charger-installation-miami-gardens-fl',
    title: 'EV Charger Installation Miami Gardens',
    shortTitle: 'EV Charger Installation',
    h1: 'EV Charger Installation in Miami Gardens, FL',
    metaTitle: 'EV Charger Installation Miami Gardens, FL | Home EV Charging Station',
    metaDescription: 'EV charger installation in Miami Gardens, FL for Level 2 home charging stations. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Level 2 EV charger installation for Miami Gardens homes.',
    image: images.evCharger,
    imageAlt: 'Home EV charger mounted on a wall in a Miami Gardens garage',
    icon: 'BatteryCharging',
    overview:
      'If you drive an electric vehicle, a Level 2 home charging station lets you charge overnight and start each day with a full battery. RSY Electric connects Miami Gardens homeowners with residential electrical providers who install EV chargers safely and to code.',
    sections: [
      {
        heading: 'Level 2 Home Charging Stations',
        body: 'A Level 2 EV charger uses a 240-volt circuit, similar to an electric dryer or oven, and can charge most EVs in 4 to 8 hours. A residential electrician installs a dedicated circuit from your electrical panel to the charger location, mounts the charging unit, and verifies that the circuit is properly sized for the charger\'s amperage rating. Most home chargers are rated at 32 or 40 amps, which requires a 40- or 50-amp circuit.',
      },
      {
        heading: 'Panel Capacity and Upgrades',
        body: 'Before installing an EV charger, a residential electrician evaluates whether your electrical panel has enough capacity for the additional load. If your panel is already near its limit, you may need a panel upgrade or a subpanel to safely support the charger. The electrician also considers whether a load management system can share capacity between the charger and other large appliances, which can sometimes avoid the need for a panel upgrade.',
      },
      {
        heading: 'Indoor and Outdoor Installation',
        body: 'EV chargers can be installed in a garage, carport, or on an exterior wall. For outdoor installations, the charger and wiring must be rated for wet locations and protected by a GFCI circuit. A residential electrician ensures the installation meets all manufacturer requirements and local codes, and can help you position the charger for the most convenient charging setup.',
      },
    ],
    faqs: [
      {
        question: 'How much does EV charger installation cost in Miami Gardens?',
        answer: 'Costs vary based on the distance from the panel to the charger, whether a panel upgrade is needed, and the charger model. Call 305-206-1431 to connect with a local provider for an assessment.',
      },
      {
        question: 'How long does it take to charge an EV at home?',
        answer: 'A Level 2 charger typically charges most EVs in 4 to 8 hours, depending on the battery size and the charger\'s amperage.',
      },
      {
        question: 'Do I need to upgrade my panel for an EV charger?',
        answer: 'Not always. A residential electrician can evaluate your panel capacity and determine whether an upgrade is needed or if a load management system can accommodate the charger.',
      },
    ],
    benefits: [
      'Level 2 charger installation',
      'Dedicated 240-volt circuit',
      'Panel capacity evaluation',
      'Indoor and outdoor installation',
      'GFCI protection for outdoor chargers',
    ],
  },
  {
    slug: 'electrical-inspection-miami-gardens-fl',
    title: 'Electrical Inspection Miami Gardens',
    shortTitle: 'Electrical Inspection',
    h1: 'Electrical Inspection in Miami Gardens, FL',
    metaTitle: 'Electrical Inspection Miami Gardens, FL | Home Electrical Safety Inspection',
    metaDescription: 'Electrical inspection in Miami Gardens, FL for home safety, real estate, and insurance. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Whole-home electrical safety inspections for Miami Gardens homeowners.',
    image: images.inspection,
    imageAlt: 'Electrician inspecting residential wiring in a Miami Gardens home',
    icon: 'Search',
    overview:
      'An electrical inspection gives you a clear picture of your home\'s electrical system — what is safe, what needs attention, and what should be upgraded. RSY Electric connects Miami Gardens homeowners with residential electrical providers who perform thorough electrical safety inspections.',
    sections: [
      {
        heading: 'When to Get an Electrical Inspection',
        body: 'Common reasons to schedule an electrical inspection include buying or selling a home, after a major storm or hurricane, if your home is more than 40 years old, before adding a large appliance or EV charger, after a renovation, or if your insurance company requires an inspection. An inspection can identify hidden hazards before they become dangerous and give you peace of mind that your home\'s electrical system is safe.',
      },
      {
        heading: 'What an Electrical Inspection Covers',
        body: 'A residential electrician inspects the main panel for proper labeling, breaker condition, and loose connections, checks outlets for proper grounding and polarity, tests GFCI and AFCI protection, evaluates wiring condition, checks for aluminum wiring or other known hazards, inspects the grounding system, and verifies that smoke detectors are properly wired. After the inspection, you receive a report detailing findings and recommendations.',
      },
      {
        heading: 'Insurance and Real Estate Inspections',
        body: 'In South Florida, insurance companies often require a four-point inspection before issuing or renewing a homeowners policy, and the electrical system is one of the four points. An electrical inspection can identify issues that need to be addressed before a sale closes, helping buyers and sellers avoid surprises. A residential electrician can provide the documentation needed for insurance and real estate transactions.',
      },
    ],
    faqs: [
      {
        question: 'How long does an electrical inspection take?',
        answer: 'A whole-home electrical inspection typically takes 1 to 2 hours depending on the size of the home and the complexity of the system.',
      },
      {
        question: 'Do I need an inspection if my home is new?',
        answer: 'Newer homes generally do not need an inspection unless you are adding a major load. Homes over 40 years old should be inspected to check for aging wiring and outdated panels.',
      },
      {
        question: 'Will the inspection include a report?',
        answer: 'Yes, a residential electrician provides a detailed report of findings and recommended repairs or upgrades.',
      },
    ],
    benefits: [
      'Whole-home safety inspection',
      'Insurance and real estate inspections',
      'Aluminum wiring assessment',
      'Grounding and bonding check',
      'Detailed findings report',
    ],
  },
  {
    slug: 'surge-protection-miami-gardens-fl',
    title: 'Surge Protection Miami Gardens',
    shortTitle: 'Surge Protection',
    h1: 'Surge Protection in Miami Gardens, FL',
    metaTitle: 'Surge Protection Miami Gardens, FL | Whole-Home Surge Protection',
    metaDescription: 'Whole-home surge protection in Miami Gardens, FL for lightning and power surge protection. Connect with a residential electrical provider. Call 305-206-1431.',
    description: 'Whole-home surge protection for Miami Gardens homes.',
    image: images.surgeProtector,
    imageAlt: 'Surge protector device for a Miami Gardens home electrical system',
    icon: 'Shield',
    overview:
      'South Florida is the lightning capital of the United States, and power surges can damage or destroy your appliances, electronics, and HVAC equipment in an instant. RSY Electric connects Miami Gardens homeowners with residential electrical providers who install whole-home surge protection.',
    sections: [
      {
        heading: 'Why Miami Gardens Homes Need Surge Protection',
        body: 'A power surge is a sudden spike in voltage that can damage anything plugged into your electrical system. Surges are caused by lightning strikes, utility grid switching, and large appliances cycling on and off. In Miami Gardens, where thunderstorms are frequent and intense, a lightning strike near your home can send a massive surge through your electrical system. Whole-home surge protection installed at the panel diverts that surge safely to ground before it reaches your devices.',
      },
      {
        heading: 'Whole-Home vs. Power Strip Surge Protectors',
        body: 'Power strip surge protectors only protect devices plugged into them, and they do not stop surges that enter through other paths like phone lines, cable TV, or AC lines. A whole-home surge protector is installed at your electrical panel and protects every circuit in your home. For the best protection, a residential electrician can install both a whole-home surge protector at the panel and point-of-use surge protectors for sensitive electronics like computers and home theater equipment.',
      },
      {
        heading: 'Surge Protector Installation',
        body: 'A whole-home surge protector is installed inside or next to your electrical panel and wired to the main bus. The electrician connects it to the grounding system so that surges are safely diverted. Most whole-home surge protectors include indicator lights that show they are functioning and a joule rating that indicates how much energy they can absorb. A residential electrician can recommend the right unit for your home and ensure it is installed correctly.',
      },
    ],
    faqs: [
      {
        question: 'Does whole-home surge protection protect against lightning?',
        answer: 'Whole-home surge protection significantly reduces the risk of lightning-related damage, but no system can protect against a direct lightning strike. It is an important layer of protection for South Florida homes.',
      },
      {
        question: 'How long does a whole-home surge protector last?',
        answer: 'Most whole-home surge protectors last 3 to 5 years, though their lifespan depends on how many surges they absorb. A residential electrician can check the indicator lights during an inspection.',
      },
      {
        question: 'Do I still need power strip surge protectors?',
        answer: 'For the best protection, use both. A whole-home protector handles large surges at the panel, while point-of-use protectors provide additional protection for sensitive electronics.',
      },
    ],
    benefits: [
      'Whole-home surge protector installation',
      'Protection for appliances and HVAC',
      'Point-of-use surge protection',
      'Lightning and storm surge defense',
      'Surge protector replacement',
    ],
  },
  {
    slug: 'generator-electrical-service-miami-gardens-fl',
    title: 'Generator Electrical Service Miami Gardens',
    shortTitle: 'Generator Electrical Service',
    h1: 'Generator Electrical Service in Miami Gardens, FL',
    metaTitle: 'Generator Electrical Service Miami Gardens, FL | Home Generator Wiring',
    metaDescription: 'Generator electrical service in Miami Gardens, FL for standby generator wiring and transfer switch installation. Connect with a residential provider. Call 305-206-1431.',
    description: 'Standby generator wiring and transfer switch installation for Miami Gardens homes.',
    image: images.generator,
    imageAlt: 'Home backup generator for a Miami Gardens residence',
    icon: 'PlugZap',
    overview:
      'When hurricanes and tropical storms knock out power in Miami Gardens, a home generator keeps your refrigerator, lights, AC, and medical devices running. RSY Electric connects homeowners with residential electrical providers who handle the electrical side of generator installation, including transfer switches and wiring.',
    sections: [
      {
        heading: 'Standby Generator Electrical Wiring',
        body: 'A standby generator is permanently installed outside your home and connected to your electrical system through an automatic transfer switch. When the power goes out, the transfer switch detects the outage, starts the generator, and switches your home to generator power. When utility power is restored, the switch transfers back and the generator shuts down. A residential electrician handles all the electrical wiring, the transfer switch installation, and the connection to your panel.',
      },
      {
        heading: 'Transfer Switch Installation',
        body: 'A transfer switch is the critical component that safely connects your generator to your home\'s electrical system. It prevents backfeeding — a dangerous condition where generator power flows back into the utility lines and can injure line workers. A residential electrician installs either an automatic transfer switch for standby generators or a manual transfer switch for portable generators, and ensures the switch is rated for the generator\'s output and the circuits you want to power.',
      },
      {
        heading: 'Generator Circuit Selection',
        body: 'Most homes do not need to power every circuit during an outage. A residential electrician helps you select which circuits the generator will support — typically the refrigerator, lighting, air conditioning, medical equipment, and a few outlets — and wires the transfer switch accordingly. This approach lets you use a smaller, more affordable generator while still covering your essential needs.',
      },
    ],
    faqs: [
      {
        question: 'Does a residential electrician install the generator itself?',
        answer: 'A residential electrician handles the electrical wiring, transfer switch, and panel connection. The generator unit itself is typically delivered and placed by a generator supplier, and the electrician makes the final electrical connections.',
      },
      {
        question: 'What size generator do I need for my Miami Gardens home?',
        answer: 'Generator size depends on how many circuits you want to power. A residential electrician can help calculate your load and recommend an appropriately sized generator.',
      },
      {
        question: 'What is a transfer switch and why do I need one?',
        answer: 'A transfer switch safely connects your generator to your home\'s electrical system and prevents dangerous backfeeding into utility lines. It is required for any generator connection to your home\'s wiring.',
      },
    ],
    benefits: [
      'Automatic transfer switch installation',
      'Manual transfer switch for portable generators',
      'Generator circuit selection and wiring',
      'Panel connection for standby generators',
      'Load calculation for proper sizing',
    ],
  },
];

export const serviceIcons: Record<string, any> = {};
