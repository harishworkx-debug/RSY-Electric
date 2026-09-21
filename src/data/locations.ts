export interface LocationInfo {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  neighborhoods: string[];
}

export const mainLocation: LocationInfo = {
  slug: 'miami-gardens-fl',
  name: 'Miami Gardens',
  fullName: 'Miami Gardens, Florida',
  description:
    'Miami Gardens is the third-largest city in Miami-Dade County and home to Hard Rock Stadium. With a population of over 110,000, it is a vibrant residential community with a mix of single-family homes, townhouses, and condominiums. Many homes in the area were built between the 1960s and 1980s and may benefit from electrical upgrades to meet modern safety standards.',
  neighborhoods: [
    'Norland',
    'Scott Lake',
    'Andover',
    'Carol City',
    'Lake Lucerne',
    'Bunton Park',
    'Rolling Oaks',
    'Norwood',
  ],
};

export const nearbyLocations: LocationInfo[] = [
  {
    slug: 'north-miami-fl',
    name: 'North Miami',
    fullName: 'North Miami, Florida',
    description:
      'North Miami is a residential city just south of Miami Gardens, known for its tree-lined neighborhoods and diverse housing stock. Homeowners in North Miami often need residential electrical services for older homes, new appliances, and hurricane preparedness.',
    neighborhoods: ['Arch Creek', 'Biscayne Shores', 'Keystone Point', 'Sans Souci'],
  },
  {
    slug: 'op-locka-fl',
    name: 'Opa-locka',
    fullName: 'Opa-locka, Florida',
    description:
      'Opa-locka is a small residential city bordering Miami Gardens to the south. The city has a unique architectural heritage and a mix of older and newer homes that may require electrical repair, panel upgrades, and wiring updates.',
    neighborhoods: ['Opa-locka North', 'Opa-locka West'],
  },
  {
    slug: 'miami-fl',
    name: 'Miami',
    fullName: 'Miami, Florida',
    description:
      'Miami is the largest city in South Florida and surrounds Miami Gardens on multiple sides. From Liberty City to Allapattah, Miami neighborhoods include a wide range of residential properties that may need residential electrical repair, lighting installation, and panel upgrades.',
    neighborhoods: ['Liberty City', 'Allapattah', 'Brownsville', 'Little Haiti', 'Wynwood'],
  },
  {
    slug: 'hialeah-fl',
    name: 'Hialeah',
    fullName: 'Hialeah, Florida',
    description:
      'Hialeah is a dense residential city just west of Miami Gardens. With many single-family homes and townhouses built in the mid-20th century, Hialeah homeowners frequently need electrical panel upgrades, outlet repairs, and lighting installation.',
    neighborhoods: ['East Hialeah', 'West Hialeah', 'Hialeah Gardens'],
  },
  {
    slug: 'north-miami-beach-fl',
    name: 'North Miami Beach',
    fullName: 'North Miami Beach, Florida',
    description:
      'North Miami Beach is a residential community east of Miami Gardens with a mix of single-family homes and condos. Homeowners here often seek residential electrical services for EV charger installation, surge protection, and lighting upgrades.',
    neighborhoods: ['Fulford', 'Highland Oaks', 'Keystone Islands'],
  },
  {
    slug: 'aventura-fl',
    name: 'Aventura',
    fullName: 'Aventura, Florida',
    description:
      'Aventura is a planned residential city east of Miami Gardens known for its condominiums and waterfront homes. Residential electrical needs in Aventura include lighting installation, panel service, and EV charger installation for condo parking areas.',
    neighborhoods: ['Aventura Lakes', 'Country Club Estates', 'Waterways'],
  },
  {
    slug: 'doral-fl',
    name: 'Doral',
    fullName: 'Doral, Florida',
    description:
      'Doral is a growing residential community west of Miami Gardens with many newer homes and townhouses. Homeowners in Doral often need residential electrical services for new construction, additions, and EV charger installation.',
    neighborhoods: ['Doral Isles', 'Doral Park', 'Serenade'],
  },
  {
    slug: 'miami-lakes-fl',
    name: 'Miami Lakes',
    fullName: 'Miami Lakes, Florida',
    description:
      'Miami Lakes is a residential town north of Miami Gardens known for its lakes and golf courses. The community has a mix of older and newer homes that may need electrical inspections, panel upgrades, and lighting installation.',
    neighborhoods: ['Royal Lakes', 'Palm Springs', 'Miami Lakes East'],
  },
  {
    slug: 'pembroke-pines-fl',
    name: 'Pembroke Pines',
    fullName: 'Pembroke Pines, Florida',
    description:
      'Pembroke Pines is a large residential city in Broward County just north of Miami Gardens. With a wide range of single-family homes and townhouses, homeowners often need residential electrical repair, outlet replacement, and surge protection.',
    neighborhoods: ['Pembroke Falls', 'Silver Lakes', 'Towngate'],
  },
  {
    slug: 'miramar-fl',
    name: 'Miramar',
    fullName: 'Miramar, Florida',
    description:
      'Miramar is a residential city in Broward County bordering Miami Gardens to the north. The community includes many single-family homes that may benefit from electrical inspections, panel upgrades, and lighting installation.',
    neighborhoods: ['Miramar Isles', 'Sunset Lakes', 'Silver Shores'],
  },
];
