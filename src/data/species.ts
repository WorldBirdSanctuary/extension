import { z } from "zod";

import { speciesSchema as baseSpeciesSchema } from "@alveusgg/data/build/ambassadors/species";

export const speciesSchema = z.object({
  name: z.string(),
  scientificName: z.string(),
  description: z.string(),
  range: z.string(),
  habitat: z.string(),
  diet: z.string(),
  iucn: baseSpeciesSchema.shape.iucn,
});

export type Species = z.infer<typeof speciesSchema>;

export const species = {
  aquilaChrysaetos: {
    name: "Golden Eagle",
    scientificName: "Aquila chrysaetos",
    description:
      "Golden Eagles are dark brown with a golden sheen on the back of the head and neck. Juvenile birds have neatly defined white patches at the base of the tail and in the wings.",
    range: "Throughout the Northern Hemisphere",
    habitat:
      "Open and semi open areas- primarily in mountains, canyonlands, rimrock terrain, and riverside cliffs and bluffs",
    diet: "Mainly small to medium-sized mammals, including hares, rabbits, ground squirrels, prairie dogs, and marmots. They will also take down larger animals, such as mountain goats and foxes.",
    iucn: {
      id: 22696060,
      assessment: 202078899,
      status: "LC",
    },
  },

  buboScandiacus: {
    name: "Snowy Owl",
    scientificName: "Bubo scandiacus",
    description:
      "Snowy Owls are large, white birds with varying amounts of black or brown markings on the body and wings.",
    range:
      "Arctic tundra of North America and Eurasia, will winter further south into southern Canada",
    habitat:
      "Treeless places and wide-open spaces, such as the tundra and open grasslands",
    diet: "Small mammals, particularly lemmings",
    iucn: {
      id: 22689055,
      assessment: 205475036,
      status: "VU/decreasing",
    },
  },
  buboVirginianus: {
    name: "Great Horned Owl",
    scientificName: "Bubo virginianus",
    description:
      "Great Horned Owls are mottled gray-brown, with reddish brown faces and a neat white patch on the throat that can be seen when they hoot. They have prominent feather tufts on their heads.Great Horned Owls are mottled gray-brown, with reddish brown faces and a neat white patch on the throat that can be seen when they hoot. They have prominent feather tufts on their heads.",
    range: "Throughout North, Central, and parts of South America",
    habitat:
      "Wide variety of wooded habitats, swamps, deserts, rocky areas, farmlands, and urban areas.",
    diet: "Primarily mammals and birds, however they will prey on anything from small insects and fish to large birds, such as geese and even other birds of prey",
    iucn: {
      id: 61752071,
      assessment: 132039486,
      status: "LC",
    },
  },

  buteoAugur: {
    name: "Augur Buzzard",
    scientificName: "Buteo augur",
    description:
      "Light morph Augur Buzzards have black backs and facial markings with white undersides. Dark morph Augur Buzzards have black undersides and faces. They have white flight feathers with dark tips, and reddish-brown tails.",
    range: "Ethiopia to southern Angola and central Namibia",
    habitat:
      "Open or light wooded upland areas but can also range into lowland deserts and more mountainous areas",
    diet: "Small, terrestrial mammals and reptiles, but they will also hunt terrestrial birds and eat carrion",
    iucn: {
      id: 22732019,
      assessment: 281975339,
      status: "LC/decreasing",
    },
  },
  buteoJamaicensis: {
    name: "Red-Tailed Hawk",
    scientificName: "Buteo jamaicensis",
    description:
      'Red-tailed Hawks are large, stocky raptors known for their brick- red tails and dark "belly band" of feathers. They have dark brown  eyes and backs, with dark patagial markings visible on the underside of their wings in flight. Juveniles feature brown-barred tails, more mottling on the chest, and pale yellow eyes.',
    range: "Throughout North America and parts of Central America",
    habitat:
      "Nearly all open habitats, including deserts, grasslands, fields, and parks",
    diet: "Generalists who hunt primarily small mammals, such as rodents and rabbits. They will also eat reptiles, small birds, and even carrion",
    iucn: {
      id: 22695933,
      assessment: 264594226,
      status: "LC/increasing",
    },
  },
  buteoLineatus: {
    name: "Red-Shouldered Hawk",
    scientificName: "Buteo lineatus",
    description:
      'Adults have dark-and-white checkered wings and warm reddish barring on the breast. They have a rufous patch over their "shoulder." The tail is black with narrow white bands. Immatures are brown above and white below streaked with brown. All ages show narrow, pale crescents near the wingtips in flight.',
    range:
      "Eastern North America, along the coast of California, and northeastern-central Mexico",
    habitat:
      "Deciduous or mixed forests near water, bottomland hardwood forests, and wooded wetlands",
    diet: "Mainly small mammals, reptiles, and amphibians, and occasionally small birds",
    iucn: {
      id: 22695883,
      assessment: 281002671,
      status: "LC/increasing",
    },
  },

  bycanistesBrevis: {
    name: "Silvery-Cheeked Hornbill",
    scientificName: "Bycanistes brevis",
    description:
      "The Silvery-cheeked Hornbill is a large, black-and-white bird with distinctive silvery-grey facial feathers, a pale bill, and a casque. Males have larger casques than females.",
    range: "Eastern and Southern Africa, in three separated populations",
    habitat:
      "Low to high elevations in forest, and adjacent areas of lush woodland and cultivation",
    diet: "Mainly fruits, especially cherry-sized drupes and figs, also insects, small birds, rodents, and small reptiles",
    iucn: {
      id: 22682570,
      assessment: 130081772,
      status: "LC/decreasing",
    },
  },

  cathartesAura: {
    name: "Turkey Vulture",
    scientificName: "Cathartes aura",
    description:
      'Turkey Vultures may appear black from a distance, but up close, their feathers are a dark brown. They are easily recognized by their featherless red heads and pale bills. In flight, they hold their wings in a slight "V" shape when viewed head-on. Their distinctive silvery flight feathers contrast sharply with the darker body, helping to set them apart from other vulture species.',
    range: "Southern Canada to the southern most parts of South America.",
    habitat:
      "Diverse habitats, but prefer open and semi open areas like grasslands, more open forests, deserts, and farmland",
    diet: "Scavengers, feeding on carrion",
    iucn: {
      id: 22697627,
      assessment: 131941613,
      status: "LC",
    },
  },

  coragypsAtratus: {
    name: "Black Vulture",
    scientificName: "Coragyps atratus",
    description:
      "Black Vultures are uniformly black with a bare head. Their primary flight feathers are silver underneath.",
    range: "Southeast United States through most of South America",
    habitat:
      "Low elevations, they breed in dense woodlands but usually forage in open habitats and along roads",
    diet: "Primarily scavengers, feeding on carrion.",
    iucn: {
      id: 22697624,
      assessment: 281039099,
      status: "LC",
    },
  },

  dromaiusNovaehollandiae: {
    name: "Emu",
    scientificName: "Dromaius novaehollandiae",
    description:
      "Emus are tall, brown birds with thin black feathers on their neck and head. They may also have bare patches of blue skin on their neck and head. They have large, powerful legs for walking long distances.",
    range: "Most of mainland Australia",
    habitat: "Most commonly in areas of savannah woodland and forest",
    diet: "Omnivores that primarily eat seeds, flowers, fruits, and roots, insects, and small vertebrates",
    iucn: {
      id: 22678117,
      assessment: 131902466,
      status: "LC",
    },
  },

  falcoSparverius: {
    name: "American Kestrel",
    scientificName: "Falco sparverius",
    description:
      "American Kestrels are a small falcon with a black vertical stripe under each eye, called a malar stripe. They are typically rusty brown in color with variations in the wings of male and females. Males have slate blue wings and cap, while females' wings are reddish brown with both slate blue and brown on their head.",
    range: "Throughout North, Central, and South America",
    habitat: "Open areas with short ground vegetation and sparse trees",
    diet: "Mostly insects and other invertebrates, as well as small rodents and birds",
    iucn: {
      id: 22696395,
      assessment: 140950605,
      status: "LC/decreasing",
    },
  },
  falcoPeregrinus: {
    name: "Peregrine Falcon",
    scientificName: "Falco peregrinus",
    description:
      "Adults are slate gray above with barred underparts and a dark head with thick malar stripes down their cheeks. Juveniles are browner with vertical streaks instead of horizontal bars on the breast.",
    range: "Every continent except Antarctica",
    habitat:
      "Diverse open environments including coasts, tundras, grasslands, and deserts, favoring high nesting sites like cliffs and skyscrapers",
    diet: "Mostly birds",
    iucn: {
      id: 45354964,
      assessment: 206217909,
      status: "LC/increasing",
    },
  },

  haliaeetusLeucocephalus: {
    name: "Bald Eagle",
    scientificName: "Haliaeetus leucocephalus",
    description:
      "Adult Bald Eagles have white heads and tails with dark brown bodies and wings. Their legs and bills are bright yellow. Immature birds have mostly dark heads and tails; their brown wings and bodies are mottled with white in varying amounts.",
    range: "Throughout North America",
    habitat:
      "Forested areas adjacent to large bodies of water, staying away from heavily developed areas when possible",
    diet: "Primarily fish, mammals, reptiles, and carrion",
    iucn: {
      id: 22695144,
      assessment: 264598530,
      status: "LC/increasing",
    },
  },

  harpiaHarpyja: {
    name: "Harpy Eagle",
    scientificName: "Harpia harpyja",
    description:
      "Harpy Eagles are large, dark gray-black colored eagles with long double-crest feathers on their heads. Their belly feathers are mostly white, and they have a black bib that extends to their neck. The tail is dark gray with white bands. Juvenile birds are mostly pale gray over their entire body and head.",
    range: "Parts of Central and South America",
    habitat:
      "Tropical lowland rainforest, typically in the upper canopy of the trees",
    diet: "Tree-dwelling mammals including sloths, monkeys, and opossums; large birds such as macaws and curassows; and reptiles like iguanas and snakes",
    iucn: {
      id: 22695998,
      assessment: 197957213,
      status: "VU/decreasing",
    },
  },

  lophuraEdwardsi: {
    name: "Vietnam Pheasant",
    scientificName: "Lophura edwardsi",
    description:
      "Male pheasants have a deep blue body, a white crest, and a red face mask. Females are brown with a red face mask.",
    range: "Endemic to central Vietnam",
    habitat:
      "Lowland forests, under-growth of damp mountainous forests, and vine-covered hillsides",
    diet: "Variety of seeds, fruits, and small invertebrates",
    iucn: {
      id: 45354985,
      assessment: 249120158,
      status: "CR",
    },
  },

  megascopsAsio: {
    name: "Eastern Screech-Owl",
    scientificName: "Megascops asio",
    description:
      "Eastern Screech Owls are small owls with feather tufts and heavily mottled coloration to help them camouflage against tree bark. They have two color morphs: gray and red.",
    range: "Throughout the eastern United States and northeastern Mexico",
    habitat: "Almost any habitat with sufficient tree cover",
    diet: "Most kinds of small animals including birds, mammals, invertebrates, frogs, and lizards",
    iucn: {
      id: 155660662,
      assessment: 152331179,
      status: "LC/decreasing",
    },
  },

  neophronPercnopterus: {
    name: "Egyptian Vulture",
    scientificName: "Neophron percnopterus",
    description:
      "The adult plumage is white, with black flight feathers in the wings and a yellow bare face. Juveniles start mostly brown with blue faces, and take 5-6 years to slowly get their full adult plumage.",
    range: "Iberian Peninsula, North Africa, West Asia and India",
    habitat: "Open areas, such as grasslands and savannas",
    diet: "Primarily carrion, but they will also feed on fecal matter, insects, eggs, and vegetation",
    iucn: {
      id: 22695180,
      assessment: 205187871,
      status: "EN/decreasing",
    },
  },

  pelecanusErythrorhynchos: {
    name: "American White Pelican",
    scientificName: "Pelecanus erythrorhynchos",
    description:
      "They are a large white bird with black flight feathers and a large yellow-orange bill.",
    range:
      "Breeding in interior North America up to the Northern Territories of Canada, moving south and to the coasts, as far as Costa Rica, in winter.",
    habitat: "Waterways including lakes, rivers, and coastlines",
    diet: "Mainly fish",
    iucn: {
      id: 22697611,
      assessment: 281856383,
      status: "LC/increasing",
    },
  },

  pulsatrixPerspicillata: {
    name: "Spectacled Owl",
    scientificName: "Pulsatrix perspicillata",
    description:
      "Spectacled Owls are dark brown with a tan chest and abdomen. They have white markings on their throat and face.",
    range: "Southern Mexico, Central American, and South America",
    habitat: "Primarily lowland tropical rainforest",
    diet: "Small mammals, birds, reptiles, amphibians, and invertebrates",
    iucn: {
      id: 22689180,
      assessment: 130161018,
      status: "LC/decreasing",
    },
  },

  strixAluco: {
    name: "Tawny Owl",
    scientificName: "Strix aluco",
    description:
      "Tawny owls are typically mottled brown or gray and have no plumicorns (ear tuffs).",
    range: "Throughout Europe and parts of north Africa and Asia",
    habitat:
      "Deciduous and mixed forests, preferring locations with access to water",
    diet: "Predominantly small mammals, but can also include small birds, insects, frogs, and even fish",
    iucn: {
      id: 22725469,
      assessment: 264546097,
      status: "LC",
    },
  },
  strixVaria: {
    name: "Barred Owl",
    scientificName: "Strix varia",
    description:
      "Barred Owls are mottled brown and white overall, with dark brown, almost black, eyes. The underparts are mostly marked with vertical brown bars on a white background, while the upper breast is crossed with horizontal brown bars",
    range:
      "Historically found in southern Canada, eastern United States, and parts of Mexico, expanding to the Pacific Northwest and down to California",
    habitat: "Densely forested areas, usually near a source of water",
    diet: "Small mammals, birds, reptiles, amphibians, invertebrates, and even small fish",
    iucn: {
      id: 22689094,
      assessment: 264599155,
      status: "LC/increasing",
    },
  },

  tytoFurcata: {
    name: "American Barn Owl",
    scientificName: "Tyto furcata",
    description:
      "American Barn Owls are a medium sized owl with gray and cinnamon colored backsides and white undersides. Females will have some tan on their undersides. These owls have a white, heart shaped face",
    range: "Throughout North, Central, and South America",
    habitat:
      "Open habitats, including grasslands, deserts, marshes, agricultural fields, ranchlands, and brushy fields",
    diet: "Small mammals, particularly rodents such as mice and rats",
    iucn: {
      id: null,
      assessment: null,
      status: "NE",
    },
  },

  vulturGryphus: {
    name: "Andean Condor",
    scientificName: "Vultur gryphus",
    description:
      "Andean Condors have large black bodies, a white ruff around their neck, and a bare head. Males have a large caruncle on top of their head and golden eyes. Females lack a caruncle and have red eyes.",
    range:
      "Andes Mountains in Colombia, Ecuador, Peru, Bolivia, south to Argentina and Chile",
    habitat: "Open, mountainous regions and coastlines",
    diet: "Primarily scavengers, feeding on carrion",
    iucn: {
      id: 22697641,
      assessment: 181325230,
      status: "VU/decreasing",
    },
  },
} as const satisfies Record<string, Species>;
