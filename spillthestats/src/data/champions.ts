import asheImage from "../assets/square-ashe.webp";
import caitlynImage from "../assets/square-caitlyn.webp";
import jhinImage from "../assets/square-jhin.webp";
import samiraImage from "../assets/square-samira.webp";
import yunaraImage from "../assets/square-yunara.webp";

const dataDragonBaseUrl = "https://ddragon.leagueoflegends.com/cdn/16.22.1";

interface Recommendation {
  name: string;
  image: string;
}

interface Champion {
  slug: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  runes: Recommendation[];
  items: Recommendation[];
}

const rune = (name: string, iconPath: string): Recommendation => ({
  name,
  image: `https://ddragon.leagueoflegends.com/cdn/img/${iconPath}`,
});

const item = (name: string, id: number): Recommendation => ({
  name,
  image: `${dataDragonBaseUrl}/img/item/${id}.png`,
});

const precisionRunes = [
  rune("Triunfo", "perk-images/Styles/Precision/Triumph.png"),
  rune("Leyenda: Presteza", "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png"),
  rune("Golpe de gracia", "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png"),
];

const inspirationRunes = [
  rune("Calzado mágico", "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"),
  rune("Entrega de galletas", "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png"),
];

const marksmanItems = [
  item("Grebas del berserker", 3006),
  item("Filo del infinito", 3031),
  item("Recuerdos de Lord Dominik", 3036),
  item("Cañón de fuego rápido", 3094),
  item("Sed de sangre", 3072),
];

const samiraItems = [
  item("Grebas del berserker", 3006),
  item("Filo del infinito", 3031),
  item("Recuerdos de Lord Dominik", 3036),
  item("El coleccionista", 6676),
  item("Sed de sangre", 3072),
];

export const champions: Champion[] = [
  {
    slug: "jhin",
    name: "Jhin",
    image: jhinImage,
    description: "Tirador de largo alcance que convierte cada disparo en una amenaza.",
    tags: ["Bot", "Daño", "Control"],
    runes: [
      rune("Pies veloces", "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"),
      ...precisionRunes,
      ...inspirationRunes,
    ],
    items: marksmanItems,
  },
  {
    slug: "ashe",
    name: "Ashe",
    image: asheImage,
    description: "Tiradora de utilidad que ralentiza enemigos y apoya a su equipo.",
    tags: ["Bot", "Daño", "Utilidad"],
    runes: [
      rune("Ataque intensificado", "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"),
      ...precisionRunes,
      ...inspirationRunes,
    ],
    items: marksmanItems,
  },
  {
    slug: "caitlyn",
    name: "Caitlyn",
    image: caitlynImage,
    description: "Tiradora de largo alcance que domina la línea con trampas.",
    tags: ["Bot", "Daño", "Alcance"],
    runes: [
      rune("Pies veloces", "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png"),
      ...precisionRunes,
      ...inspirationRunes,
    ],
    items: marksmanItems,
  },
  {
    slug: "samira",
    name: "Samira",
    image: samiraImage,
    description: "Tiradora agresiva que mezcla ataques a distancia y cuerpo a cuerpo.",
    tags: ["Bot", "Daño", "Movilidad"],
    runes: [
      rune("Conquistador", "perk-images/Styles/Precision/Conqueror/Conqueror.png"),
      rune("Triunfo", "perk-images/Styles/Precision/Triumph.png"),
      rune("Leyenda: Linaje", "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png"),
      rune("Último esfuerzo", "perk-images/Styles/Precision/LastStand/LastStand.png"),
      rune("Sabor a sangre", "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png"),
      rune("Cazador de tesoros", "perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png"),
    ],
    items: samiraItems,
  },
  {
    slug: "yunara",
    name: "Yunara",
    image: yunaraImage,
    description: "Tiradora que combina ataques precisos con poder espiritual.",
    tags: ["Bot", "Daño", "Movilidad"],
    runes: [
      rune("Ataque intensificado", "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png"),
      ...precisionRunes,
      ...inspirationRunes,
    ],
    items: marksmanItems,
  },
];
