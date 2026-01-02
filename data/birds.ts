import { z } from "zod";

import { ambassadorImageSchema } from "@alveusgg/data/build/ambassadors/images";
import { partialDateStringSchema } from "@alveusgg/data/build/types";

import { species, speciesSchema } from "./species";

import ace from "../assets/birds/ace.jpg";
import alejandro from "../assets/birds/alejandro.jpg";
import bruno from "../assets/birds/bruno.jpg";
import buzz from "../assets/birds/buzz.jpg";
import caesar from "../assets/birds/caesar.jpg";
import cash from "../assets/birds/cash.jpg";
import crystal from "../assets/birds/crystal.jpg";
import frank from "../assets/birds/frank.jpg";
import freya from "../assets/birds/freya.jpg";
import inca from "../assets/birds/inca.jpg";
import kinsey from "../assets/birds/kinsey.jpg";
import maverick from "../assets/birds/maverick.jpg";
import midas from "../assets/birds/midas.jpg";
import minerva from "../assets/birds/minerva.jpg";
import msRubyG from "../assets/birds/ms-ruby-g.jpg";
import oasis from "../assets/birds/oasis.jpg";
import patriot from "../assets/birds/patriot.jpg";
import puck from "../assets/birds/puck.jpg";
import ringo from "../assets/birds/ringo.jpg";
import sayyida from "../assets/birds/sayyida.jpg";
import scoop from "../assets/birds/scoop.jpg";
import shakespeare from "../assets/birds/shakespeare.jpg";
import sprinkles from "../assets/birds/sprinkles.jpg";
import sterling from "../assets/birds/sterling.jpg";
import tammy from "../assets/birds/tammy.jpg";
import uxmal from "../assets/birds/uxmal.jpg";

export const birdSchema = z.object({
  name: z.string(),
  commands: z.array(z.string()).readonly(),
  image: ambassadorImageSchema.extend({
    src: z.url(),
  }),
  species: speciesSchema,
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  arrival: partialDateStringSchema.nullable(),
  reason: z.string(),
  story: z.string(),
});

export type Bird = z.infer<typeof birdSchema>;

export const birds = {
  ace: {
    name: "Ace",
    commands: ["ace"],
    image: {
      src: ace,
      alt: "Ace the American Kestrel",
      position: "40% 20%",
    },
    species: species.falcoSparverius,
    sex: "Male",
    birth: "2016",
    arrival: "2016-09-01",
    reason: "Human imprint",
    story:
      "Ace was brought to the Ojai Raptor Center in California as a chick, showing signs of human imprinting. He had no fear of people and would beg for food from the staff—clear signs that he had been raised by a person. When young birds aren't raised by their own species (or carefully designed foster methods), they can become \"mal-imprinted,\" meaning they don't learn how to behave like their wild counterparts and can't survive on their own. Ace was deemed non-releasable and found a new home at the World Bird Sanctuary. From the beginning, he formed a strong bond with his trainers and showed a spunky, independent personality. Like many young kestrels, Ace had a short attention span and often added excitement to shows by landing in unexpected places or getting distracted by bugs or shiny objects. To help him focus, Ace was trained in lure flying—chasing a swinging lure in the air. He loved it and often impressed audiences with his fast, agile flight and dramatic maneuvers. As he's gotten older, Ace has slowed down a bit and retired from his high-flying days. Now, he enjoys participating in programs by being walked around on the glove, where he still gets to meet people and be the center of attention—just at a more relaxed pace. Ace serves as an ambassador for his species, helping educate the public about raptors and the importance of keeping wildlife wild.",
  },
  alejandro: {
    name: "Alejandro",
    commands: ["alejandro"],
    image: {
      src: alejandro,
      alt: "Alejandro the Harpy Eagle",
      position: "40% 20%",
    },
    species: species.harpiaHarpyja,
    sex: "Male",
    birth: "1998-11-28",
    arrival: "2020-10-14",
    reason: "Conservation and education ambassador",
    story:
      'Alejandro was hatched at the San Diego Zoo as part of a conservation effort to help save his species. Though he has been paired with female Harpy Eagles in the past, he has been unsuccessful in producing offspring as he prefers to be around people over other eagles. Alejandro now lives with us at the World Bird Sanctuary where he thrives as an ambassador educating the public about Harpy Eagles and raptor conservation. With his friendly personality, he quickly took to training and made his public debut just months after arriving. He charms audiences all around the Midwest with his charismatic "squeak honks" and head bobs as guests meet this impressively powerful raptor up close! Alejandro lives behind the scenes in a large aviary where he gets all of the best sticks to build his nests. Due to the trust Alejandro has built with his trainers, we are hoping in the next few years for his genetics to still be able to directly contribute to Harpy Eagle conservation by collecting samples from him for artificial insemination.',
  },
  bruno: {
    name: "Bruno",
    commands: ["bruno"],
    image: {
      src: bruno,
      alt: "Bruno the Eastern Screech-Owl",
    },
    species: species.megascopsAsio,
    sex: null,
    birth: "2021",
    arrival: "2021-06-10",
    reason: "Human imprint",
    story:
      "Bruno was found as a tiny chick in someone's yard, with his eyes still closed. The person kept him for 9 days, feeding him chicken nuggets and ground beef before contacting us. By the time he arrived at our Raptor Hospital, Bruno had imprinted on humans—meaning he saw people as his own kind and didn't know he was an owl. Because of this, Bruno can't survive in the wild. He was also underweight from his unusual diet, so our team gave him the care he needed to get healthy. Once he was strong enough, he joined our Education Department to begin his training. As a fuzzy youngster, Bruno loved running around and climbing everything in sight! When he was old enough, he started flight training and flew in our Owl Prowls. Since Bruno seemed to prefer being carried over flying, he no longer flies in programming. Today, Bruno travels around the Midwest as a walk-on ambassador, helping teach people about owls. He's known for his calm nature—and his love of baths, often taking several a day!",
  },
  buzz: {
    name: "Buzz",
    commands: ["buzz"],
    image: {
      src: buzz,
      alt: "Buzz the Tawny Owl",
      position: "40% 30%",
    },
    species: species.strixAluco,
    sex: "Female",
    birth: "2013",
    arrival: null,
    reason: "Human imprint, education ambassador",
    story:
      "Buzz hatched here at the World Bird Sanctuary to become an ambassador for her species. Since baby birds learn who they are from their caregivers, our staff raised Buzz to ensure she'd be comfortable around people when doing her important work in education. She did a great job meeting audiences from the glove and quickly became a favorite during programs. Buzz didn't start flight training until she was 2 years old, which made things a bit tricky at first. With time and practice, she began flying in our popular Owl Prowls. Her flying career continued on and off for several years as she slowly built her confidence and skills. Today, Buzz is retired from flying but still shines in our educational programs during the cooler months. She even participates in our \"Handle an Exotic Raptor\" experience, stepping onto guests gloves like a pro. In warmer months, she lives on Avian Avenue with her brother, where visitors can stop by and say hello. Buzz is best known for her dependable nature, go-getter attitude—and her serious love of food!",
  },
  caesar: {
    name: "Caesar",
    commands: ["caesar"],
    image: {
      src: caesar,
      alt: "Caesar the Augur Buzzard",
      position: "40% 20%",
    },
    species: species.buteoAugur,
    sex: "Male",
    birth: "1998",
    arrival: "2019-04-30",
    reason: "Human imprint, education ambassador",
    story:
      "Caesar has had quite the journey! He was hatched right here at the World Bird Sanctuary and began his life as a falconry bird. After several years in that role, he moved to Busch Gardens Tampa as an education ambassador, and  then continued his work at Busch Wildlife Sanctuary. In 2019, Caesar returned home to Missouri to enjoy a well- earned retirement.  These days, you can find Caesar living his best life on Avian Avenue. He loves carrying around sticks, tending to his nest, \"incubating\" tennis balls, calling out to visitors, and charming his favorite staff members. Since Caesar was hand-raised, he never quite learned he's a bird — he's pretty sure one of his trainers would make the perfect mate! He's a big fan of people and loves interacting with visitors, especially kids. He's known for running along the length of his aviary to playfully follow guests back and forth, turning a simple walk into a fun game. Smart and full of personality, Caesar also takes part in his own care by voluntarily stepping on the scale and entering his crate when asked. With his goofy charm and sweet nature, he's a favorite among both staff and guests.",
  },
  cash: {
    name: "Cash",
    commands: ["cash"],
    image: {
      src: cash,
      alt: "Cash the Black Vulture",
      position: "50% 30%",
    },
    species: species.coragypsAtratus,
    sex: "Male",
    birth: "2022",
    arrival: "2022-10-07",
    reason: "Human imprint",
    story:
      "Cash was found as a curious juvenile—trying to break into someone's house! After two days of unsuccessfully trying to shoo him away (and after he successfully took over their shed), the flustered homeowner contacted us for help. When we arrived, Cash was calmly sitting in the finder's lap, clearly thinking he had found his new home. He was brought to our Raptor Hospital, where he immediately began food-begging from staff and eagerly following them around. It quickly became clear that Cash was a human imprint—meaning he had been raised without proper exposure to adult vultures during a critical developmental window. Young birds need to learn species-specific behaviors from their parents, appropriate foster birds, or look-alike puppets. Without that guidance, they don't develop the skills they need to survive in the wild. Cash was deemed non-releasable—but he found a new purpose! Cash joined our education team and quickly became a star. He now travels around the St. Louis area, teaching audiences all about Black Vultures. Playful and inquisitive, Cash loves spending time with his trainers, showing off natural vulture behaviors like running, flying, and even galloping!",
  },
  crystal: {
    name: "Crystal",
    commands: ["crystal"],
    image: {
      src: crystal,
      alt: "Crystal the Snowy Owl",
      position: "50% 20%",
    },
    species: species.buboScandiacus,
    sex: "Female",
    birth: "2011",
    arrival: "2012-03-27",
    reason: "Blind in one eye, wing injury",
    story:
      "Crystal is a beautiful Snowy Owl who was taken to a local wildlife rehabber in Kansas after she was found injured as a juvenile. She had most likely been in a collision that left her with a broken wing and serious damage to her right eye. When you see her, you'll notice that one of her pupils is permanently larger than the other. Since she cannot fly well and is blind in one eye, Crystal would unfortunately not survive on her own in the wild. She found a home here at the World Bird Sanctuary. Snowy Owls are naturally solitary birds outside of breeding season, and Crystal seems perfectly happy with her own space. She especially loves spending time in her outdoor aviary during the colder months and really thrives when it snows! She enjoys watching visitors pass by and always keeps a watchful eye on our staff when they're nearby. In the summer, though, Crystal heads to a cool, climate-controlled space behind the scenes—Missouri heat is a bit too much for this arctic native!",
  },
  frank: {
    name: "Frank",
    commands: ["frank"],
    image: {
      src: frank,
      alt: "Frank the Peregrine Falcon",
      position: "40% 20%",
    },
    species: species.falcoPeregrinus,
    sex: "Male",
    birth: "2024",
    arrival: "2024-06-17",
    reason: "Wing injury",
    story:
      "Frank was found at an industrial complex with a broken shoulder and had clearly been grounded for a while—he was thin, and his talons were worn from walking on concrete. He was a young peregrine falcon, still with baby fuzz on his head, just learning to fly. Peregrines need lots of exercise to build the strength needed for release, so once Frank's wing healed, he began flight training. Unfortunately, he couldn't get the lift needed to survive in the wild and was deemed non-releasable. Frank quickly transitioned into ambassador life and debuted in his first program just a week later! Small in size but big in personality, he's known for his confidence, charm, and love of chatting with his keepers—he's definitely a staff favorite.",
  },
  freya: {
    name: "Freya",
    commands: ["freya"],
    image: {
      src: freya,
      alt: "Freya the Great Horned Owl",
      position: "40% 30%",
    },
    species: species.buboVirginianus,
    sex: "Female",
    birth: "2019",
    arrival: "2019-04-15",
    reason: "Human imprint",
    story:
      "Freya's story began when a homeowner discovered a baby Great Horned Owl alone in their yard, with no known nests nearby. After two days without any sign of her parents, she was brought to our Raptor Hospital. As soon as we opened the box, Freya began food-begging from staff. She even climbed into a team member's lap and fell asleep during her initial exam—clear signs that she had unfortunately imprinted on humans. While there's no way to know for sure, it's likely someone found her as a chick, tried to raise her for a while, and then left her in someone's yard. Whether they originally intended to keep her as a pet or thought they were helping, this human interaction came during a critical stage of development. Baby birds have a window of development where they learn what species of animal they are and what behaviors are needed for survival. Without that, they can become mal-imprinted and unable to survive in the wild. Freya made a full physical recovery and joined our ambassador team as a permanent resident at our Sanctuary. She now travels around St. Louis to teach people all about our area's largest owl species and what to do if you find an injured or orphaned baby bird.",
  },
  inca: {
    name: "Inca",
    commands: ["inca"],
    image: {
      src: inca,
      alt: "Inca the Andean Condor",
      position: "40% 10%",
    },
    species: species.vulturGryphus,
    sex: "Female",
    birth: "2004-04-15",
    arrival: "2023-04-18",
    reason: "Conservation and education ambassador",
    story:
      'Inca was hatched at the San Diego Zoo Safari Park and made her way to the Mayagüez Zoo in Puerto Rico as a juvenile, where she was paired with a male condor. When the zoo eventually closed, Inca and her mate were transferred to the World Bird Sanctuary. Sadly, her mate passed away shortly after due to a chronic health condition. At first, Inca was shy and reserved, spending most of her time perched high above, keeping her distance from staff. But with patience, gentle care, and the help of enrichment activities, she began  to come out of her shell. Slowly, she started engaging with toys and began participating in trust- based training sessions with her keepers.  Over time, Inca blossomed into one of our sweetest and most playful condors. She now eagerly greets staff for enrichment and training, and she absolutely loves when people—or even other birds—stop by for a visit. Known for her joyful "zoomies," Inca will often run and hop excitedly around the aviary while her keepers clean, showing off her energetic personality. She\'s not shy about showing off her impressive wingspan either, often soaring across her aviary just to get a closer look at visitors and staff. From a quiet newcomer to a vibrant ambassador, Inca reminds us every day how resilience and compassion can help even the most reserved animals shine.',
  },
  kinsey: {
    name: "Kinsey",
    commands: ["kinsey"],
    image: {
      src: kinsey,
      alt: "Kinsey the Turkey Vulture",
      position: "30% 20%",
    },
    species: species.cathartesAura,
    sex: "Male",
    birth: "2016",
    arrival: "2016-09-01",
    reason: "Human imprint",
    story:
      "Kinsey came to our Raptor Hospital as a juvenile with a fractured right humerus, likely caused by a collision. Unfortunately, by the time he arrived, the bone had already healed incorrectly—a common challenge with vultures, who can often survive longer with injuries since they scavenge rather than hunt. While this resilience is remarkable, it sometimes means injuries can't be corrected by the time help arrives. Since Kinsey's wing no longer allowed for proper flight, he was deemed non-releasable. However, his young age and gentle nature made him a great candidate for becoming an education ambassador. He now shines in educational programs at our amphitheater and enjoys walks around the public site. One of his favorite activities is hopping onto stumps, spreading his wings wide, and basking in the sun—delighting guests with his calm confidence and quiet charm.",
  },
  maverick: {
    name: "Maverick",
    commands: ["maverick"],
    image: {
      src: maverick,
      alt: "Maverick the Bald Eagle",
      position: "50% 10%",
    },
    species: species.haliaeetusLeucocephalus,
    sex: "Male",
    birth: "2023",
    arrival: "2023-05-28",
    reason: "Blind in left eye",
    story:
      "Maverick's story began with a fall from his nest as a chick—and for one to two weeks, he waited for someone to find him. By the time he was found, he was in critical condition: unable to lift his head, severely dehydrated, emaciated, and suffering from lead poisoning and parasites. His exam revealed a fractured right shoulder that had healed on its own, and blindness in his left eye. He was immediately placed on oxygen, and treatment began. At first, no one thought he would make it—but Maverick proved everyone wrong. After a month in our hospital, he was finally healthy! His left eye, however, could not be fixed. That blindness meant he wouldn't be able to hunt effectively as he was still young and had not yet learned the skills needed to hunt and overcome his visual impairment. Maverick joined our Education Department, beginning a new journey as an ambassador for his species. After everything he'd been through, he was wary of humans at first—but with patience and trust, he blossomed into a confident bird who now loves attention. He often calls out to his favorite trainers just to say hello! Today, Maverick soars over audiences during educational programs, inspiring visitors with his story of resilience and teaching them about the challenges Bald Eagles face in the wild.",
  },
  midas: {
    name: "Midas",
    commands: ["midas"],
    image: {
      src: midas,
      alt: "Midas the Golden Eagle",
      position: "50% 20%",
    },
    species: species.aquilaChrysaetos,
    sex: null,
    birth: "2013",
    arrival: "2023-09-03",
    reason: "Blind in left eye",
    story:
      "Midas was first found in Wyoming with a thorn lodged in his left eye and suffering from lead poisoning. Unfortunately, the injury left him blind in that eye. After he recovered from his lead poisoning, he was sent to a falconer to regain his strength and flying skills, and to test if he could still hunt well enough for release. Sadly, his vision loss made it too hard for him to land accurately or catch prey beyond 20 yards, meaning he couldn't survive in the wild. The facility reached out to the World Bird Sanctuary to find Midas a home, and we were happy to welcome him to our Sanctuary. Thanks to his previous training with the falconer, Midas quickly excelled as an ambassador in our education programs. He just needed time to get to know his new trainers. Now, Midas is a calm and relaxed Golden Eagle who joins us at major eagle events across the Midwest. He's usually quiet, but when dinner is near or he spots a favorite staff member, you might hear his excited, whiny Golden Eagle call!",
  },
  minerva: {
    name: "Minerva",
    commands: ["minerva"],
    image: {
      src: minerva,
      alt: "Minerva the American Barn Owl",
      position: "70% 50%",
    },
    species: species.tytoFurcata,
    sex: "Female",
    birth: "2012-02-12",
    arrival: null,
    reason: "Education ambassador",
    story:
      "Minerva was hatched at the World Bird Sanctuary as an ambassador for her species. American Barn Owls were once endangered in Missouri so Minerva's work as an ambassador is vital to help keep wild barn owls protected. Minerva was hand-raised by our staff to ensure she feels safe, calm, and confident around people—essential qualities for an ambassador owl. Since her training started so young, Minerva quickly became one of our most dependable and confident fliers. She's a crowd favorite, often soaring over audiences during educational programs, and is a top pick for off-site events thanks to her consistent and graceful flight patterns. While owls are known for their silent flight, Minerva adds her own flair with cheerful screeches—on the glove and in the air! She also has a strong personality when it comes to food. Minerva is our only American Barn Owl with gourmet tastes—she happily eats rats and mice but will stubbornly refuse anything else, often spitting it out and waiting for something better. Minerva's presence helps us educate and inspire people every day, and we're honored to have her as part of our ambassador team.",
  },
  msRubyG: {
    name: "Ms. Ruby G",
    commands: ["msrubyg", "rubyg", "ruby"],
    image: {
      src: msRubyG,
      alt: "Ms. Ruby G the Red-Shouldered Hawk",
      position: "40% 20%",
    },
    species: species.buteoLineatus,
    sex: "Female",
    birth: null,
    arrival: "2020-03-13",
    reason: "Right wing injury",
    story:
      "Ms. Ruby G was found on the ground near an apartment complex, close to a tree where she had previously nested. She was brought to our Kathryn G. Favre Foundation Raptor Hospital, where we discovered the tip of her right wing was missing and her flight feathers were badly damaged—likely from a collision that broke part of her wing and harmed her feather follicles. The biggest surprise during her exam? She had an egg! She laid it overnight, and since she wasn't healthy enough to care for it, we placed it in an incubator. Once she recovered, Ms. Ruby G was able to raise her own chick—and even foster a second one at the same time. Both fosters were successfully released! While her chicks were able to return to the wild, Ms. Ruby G's feathers never grew in properly for sustained  flight. Luckily, she found a new purpose as a full-time foster mom. Ms. Ruby G now helps foster baby Red- shouldered Hawks that come through our hospital, and once helped raise a young Harris's Hawk too.  Ms. Ruby G continues to be a phenomenal foster mom and raises chicks every year until they're ready to be released. She has one of the most important roles the Sanctuary.",
  },
  oasis: {
    name: "Oasis",
    commands: ["oasis"],
    image: {
      src: oasis,
      alt: "Oasis the Egyptian Vulture",
      position: "30% 10%",
    },
    species: species.neophronPercnopterus,
    sex: "Female",
    birth: "2022-05-13",
    arrival: "2022-09-02",
    reason: "Conservation and education ambassador",
    story:
      "Oasis was hatched at the San Diego Zoo Safari Park as part of a collaborative conservation program started by the World Bird Sanctuary. Her parents came from both organizations, making her a true symbol of teamwork in species recovery efforts. She arrived at the World Bird Sanctuary before her first birthday to begin training as an education ambassador. At first, Oasis was shy and cautious around people. But with trust-based training and positive reinforcement, she slowly gained confidence. While flight training was part of her early routine, Oasis decided flying wasn't quite her thing—she prefers walking or being carried by her trainers. By adapting her training to fit her unique personality, Oasis has become a confident, curious member of our team. Today, she travels throughout the St. Louis area, helping to educate the public about vultures and the challenges they face in the wild.",
  },
  patriot: {
    name: "Patriot",
    commands: ["patriot"],
    image: {
      src: patriot,
      alt: "Patriot the Bald Eagle",
      position: "70% 20%",
    },
    species: species.haliaeetusLeucocephalus,
    sex: "Female",
    birth: "1995-03-17",
    arrival: "1995-04-18",
    reason: "Lung damage, human imprint",
    story:
      "Patriot hatched in the Clarence Cannon National Wildlife Refuge. At just a month old, a windstorm sent her nest tree crashing into the Mississippi River. Luckily, U.S. Fish and Wildlife Service agents found Patriot though she was barely alive—cold, soaked, and the sole survivor of her siblings. She was rushed to World Bird Sanctuary's Raptor Hospital, where she received intensive care for hypothermia and pneumonia. For the first several days, staff didn't know if she was going to make it, but Patriot slowly grew stronger and healthier. She survived but with severe pneumonia. For a young bird, this may have been a death sentence, but Patriot had a lot of help. Though the damage to her young lungs has left her with lifelong lung damage, she has become an incredible ambassador for her species. Her story touched hearts nationwide, and the public chose the name \"America's Patriot.\" Today, she's one of our largest Bald Eagles and travels the country as a powerful ambassador, inspiring thousands with her strength and spirit.",
  },
  puck: {
    name: "Puck",
    commands: ["puck"],
    image: {
      src: puck,
      alt: "Puck the Red-Tailed Hawk",
      position: "50% 10%",
    },
    species: species.buteoJamaicensis,
    sex: "Male",
    birth: "2023",
    arrival: "2023-10-16",
    reason: "Head injury, vision impairment",
    story:
      "Puck's journey began on a rough note—he was found injured on the side of a Missouri road after being struck by a vehicle. Thankfully, a Missouri Department of Conservation officer spotted him and rushed him to our Kathryn G. Favre Foundation Raptor Hospital. There, our team found that Puck had suffered a head injury, wounds on his right wing, and a damaged right eye. Though his wing healed, his eye could not be saved, and  his head injury had lasting effects that would prevent him from successfully hunting in the wild. Deemed non- releasable, Puck showed great potential for life under professional care. He quickly adapted to training—  stepping to the glove, flying on cue, and entering carriers with ease. Now, he's one of our most confident raptors, traveling the Midwest to educate and inspire with his remarkable story of resilience.",
  },
  ringo: {
    name: "Ringo",
    commands: ["ringo"],
    image: {
      src: ringo,
      alt: "Ringo the Vietnam Pheasant",
      position: "60% 20%",
    },
    species: species.lophuraEdwardsi,
    sex: "Male",
    birth: "2019",
    arrival: "2019-09-23",
    reason: "Conservation efforts",
    story:
      "Ringo and Tammy were hatched by a private pheasant breeder before coming to the World Bird Sanctuary, where they were carefully paired for their unique and valuable genetics not found in other conservation breeding programs. Genetic diversity is vital to maintaining healthy populations —helping prevent health issues that can result from inbreeding. While Ringo and Tammy prefer to stay hidden among the foliage when people are nearby, they can often be seen confidently exploring their habitat when things are quiet. Since joining us, they've successfully produced many offspring, contributing significantly to the future of their species. Some of their chicks have joined the Species Survival Plan, where they are paired with other genetically important birds at facilities across the U.S. Others will travel even farther—participating in a breed-and-release program in Vietnam. World Bird Sanctuary is proud to play a role in the first reintroductions of Vietnam Pheasants back into their native forests. After decades of habitat recovery from deforestation and the effects of Agent Orange, this species—once believed extinct in the wild—is finally returning home. Thanks to Ringo and Tammy, the future of their species shines a little brighter.",
  },
  sayyida: {
    name: "Sayyida",
    commands: ["sayyida"],
    image: {
      src: sayyida,
      alt: "Sayyida the Barred Owl",
    },
    species: species.strixVaria,
    sex: "Female",
    birth: null,
    arrival: "2020-10-14",
    reason: "Right wing injury, missing left eye",
    story:
      "Sayyida was found on a roadside about an hour southeast of the World Bird Sanctuary after likely being struck by a vehicle. At our Raptor Hospital, she was treated for serious injuries: a collapsed eye, damaged feathers, bruising, and head injuries. With dedicated care, Sayyida slowly regained her strength. Her left eye had to be removed, but like many adult  owls, she adapted beautifully, relying on her incredible hearing to navigate her world. Unfortunately, her right- wing feathers never grew back, leaving her unable to fly.  While she recovered, an orphaned Barred Owl chick arrived at the hospital. Sayyida immediately showed interest, gently tending to the baby as if it were her own. Her natural maternal instincts shone through, and her very first foster chick thrived under her care. Since then, Sayyida has raised over 80 orphaned and injured Barred Owl chicks, giving each one a second chance at life in the wild. She continues to foster young owls every season and has even built a loyal following on our Twitch and YouTube livestreams. Sayyida is truly our Super Mom—a remarkable example of resilience, love, and the power of new beginnings.",
  },
  scoop: {
    name: "Scoop",
    commands: ["scoop"],
    image: {
      src: scoop,
      alt: "Scoop the American White Pelican",
      position: "40% 30%",
    },
    species: species.pelecanusErythrorhynchos,
    sex: "Male",
    birth: null,
    arrival: "2004-02-24",
    reason: "Wing amputation",
    story:
      "Scoop was found in a pond in West Alton, Missouri, with an old wing injury that couldn't be repaired. To keep him comfortable, we had to amputate part of his wing. Unfortunately, that meant he had to stay here with us but luckily, Scoop quickly found a new purpose as an ambassador for his species! From the very start, Scoop's confidence and charm stood out. He mastered his training , learning to stand on stations, voluntarily weigh, go into a crate, and touch his beak to a target stick at a rapid pace. His big personality made him a natural educator, and he loved showing off his impressive beak and signature pelican waddle during programs and even on local news stations. Now retired on Avian Avenue, Scoop enjoys the good life—swimming in his pond, napping in the sun, and relaxing on top of his waterfall. He still insists on being the boss, often \"supervising\" staff as they work. Scoop remains a true example of resilience, confidence, and character.",
  },
  shakespeare: {
    name: "Shakespeare",
    commands: ["shakespeare"],
    image: {
      src: shakespeare,
      alt: "Shakespeare the Barred Owl",
      position: "60% 30%",
    },
    species: species.strixVaria,
    sex: "Male",
    birth: "2004",
    arrival: "2004-04-22",
    reason: "Human imprint",
    story:
      "Shakespeare came to our Kathryn G. Favre Foundation Raptor Hospital as a fluffy little owlet. It didn't take long for our staff to realize that he was a human imprint—meaning he had been raised by people before arriving here. When baby birds grow up without their parents, foster parents or species-specific puppets, they don't learn how to be their true bird selves. For Shakespeare, that meant he never learned how to be an owl. Instead, he thinks he's one of us! Because he wouldn't be able to survive in the wild, Shakespeare joined our ambassador team. For years, he visited local schools and helped students learn all about Barred Owls. He was a natural teacher—at first. Eventually, though, Shakespeare decided he preferred visitors coming to him rather than traveling to them. So he officially retired from our traveling programs and moved into an aviary on Avian Avenue. Now, he enjoys a quieter life where his favorite people come by to say hello—and, of course, cater to his every whim. During hooting season, Shakespeare loves to sing for his favorite staff members. As a very vocal owl, he sometimes even starts up conversations with wild owls nearby—you might hear them calling back and forth in the evenings!",
  },
  sprinkles: {
    name: "Sprinkles",
    commands: ["sprinkles"],
    image: {
      src: sprinkles,
      alt: "Sprinkles the Emu",
      position: "50% 20%",
    },
    species: species.dromaiusNovaehollandiae,
    sex: "Male",
    birth: "2019-03-11",
    arrival: "2019-03-22",
    reason: "Education ambassador",
    story:
      "Sprinkles has been part of the World Bird Sanctuary family since he was less than a day old. A longtime friend of the Sanctuary, who breeds emus, allowed some of our staff to help raise chicks each year. It was our very own Assistant Executive Director who gently pulled Sprinkles out from under his father and brought him to his new home. Sprinkles was raised alongside two of his siblings right here at the Sanctuary. After just a few days, it was decided that a couple of the chicks would stay with us permanently. A special, extra-large habitat was built just for them—and before they were big enough to move outside, they could often be seen running around indoors! Sprinkles' confidence and personality made him a perfect candidate for ambassador work and training. He now helps us educate visitors about emus and their unique behaviors. When he's not charming guests, Sprinkles enjoys grazing in his habitat, zooming around just for fun, and splashing in his pool. He's truly one of the most energetic and entertaining animals at the Sanctuary—and we're so lucky to have him as part of our flock!",
  },
  sterling: {
    name: "Sterling",
    commands: ["sterling"],
    image: {
      src: sterling,
      alt: "Sterling the Silvery-Cheeked Hornbill",
      position: "50% 20%",
    },
    species: species.bycanistesBrevis,
    sex: "Female",
    birth: "2009",
    arrival: "2023-01-09",
    reason: "Education ambassador",
    story:
      "Sterling was hatched at the Central Florida Zoo and began her journey as an animal ambassador before eventually finding her forever home here at the World Bird Sanctuary. From day one, Sterling made her preferences known—she immediately bonded with her favorite people, greeting them with cheerful calls. Like many hornbills, she can be a bit picky! Hornbills use their casques—the large, bony structure on her head. to amplify sound, strengthen their beaks, and communicate during mating or territorial displays. Sterling's casque helps her keep her title as the loudest bird at the Sanctuary—her booming calls can be heard from afar whenever she recognizes her favorite keepers. She enjoys training sessions, happily practicing behaviors like targeting, shifting, and weighing— especially when blueberries are her reward! Sterling's big personality and strong bonds with her trainers make her one of the most memorable and beloved residents at the Sanctuary.",
  },
  tammy: {
    name: "Tammy",
    commands: ["tammy"],
    image: {
      src: tammy,
      alt: "Tammy the Vietnam Pheasant",
      position: "70% 20%",
    },
    species: species.lophuraEdwardsi,
    sex: "Female",
    birth: "2019",
    arrival: "2019-09-23",
    reason: "Conservation efforts",
    story:
      "Ringo and Tammy were hatched by a private pheasant breeder before coming to the World Bird Sanctuary, where they were carefully paired for their unique and valuable genetics not found in other conservation breeding programs. Genetic diversity is vital to maintaining healthy populations —helping prevent health issues that can result from inbreeding. While Ringo and Tammy prefer to stay hidden among the foliage when people are nearby, they can often be seen confidently exploring their habitat when things are quiet. Since joining us, they've successfully produced many offspring, contributing significantly to the future of their species. Some of their chicks have joined the Species Survival Plan, where they are paired with other genetically important birds at facilities across the U.S. Others will travel even farther—participating in a breed-and-release program in Vietnam. World Bird Sanctuary is proud to play a role in the first reintroductions of Vietnam Pheasants back into their native forests. After decades of habitat recovery from deforestation and the effects of Agent Orange, this species—once believed extinct in the wild—is finally returning home. Thanks to Ringo and Tammy, the future of their species shines a little brighter.",
  },
  uxmal: {
    name: "Uxmal",
    commands: ["uxmal"],
    image: {
      src: uxmal,
      alt: "Uxmal the Spectacled Owl",
      position: "60% 30%",
    },
    species: species.pulsatrixPerspicillata,
    sex: "Female",
    birth: "1992-07-02",
    arrival: "2022-04-21",
    reason: "Education ambassador",
    story:
      "Uxmal is a very special owl with a long and meaningful career in education! She was hatched at Riverbanks Zoo & Garden in South Carolina, where she was hand-raised by the staff. This early care helped her become what's called a \"human imprint\"—meaning she's comfortable around people. When baby birds grow up around humans, they learn to see us as part of their world, which helps them stay relaxed and stress-free in educational settings. Once she was old enough, Uxmal moved to the Dallas Zoo, where she served as an animal ambassador, teaching the public about owls for an incredible 20 years! After her retirement, she spent some time at Busch Gardens Tampa before finally joining us here at the World Bird Sanctuary. We were amazed to find out where she came from—and even more surprised to learn that we had once cared for one of her siblings! It didn't take long for the staff and volunteers to fall in love with Uxmal. She not only looks like her sister but shares the same gentle and charming personality. Uxmal is incredibly laid-back and loves the attention of everyone who walks by. In fact, she has a deep, rhythmic chitter and hoot that she uses to let people know that she wants them to walk over to her. Since she's a senior bird, Uxmal spends her winters nice and cozy in a warm, indoor aviary behind the scenes. During the warmer months, you can find her out on Avian Avenue, ready to greet anyone who stops by.",
  },
} as const satisfies Record<string, Bird>;
