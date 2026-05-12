const ALIMENTS = [
 {
  "id": "cafe",
  "nom": "Café (espresso)",
  "emoji": "☕",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 café",
   "g": 30
  },
  "val": {
   "kcal": 2,
   "prot": 0.1,
   "gluc": 0,
   "lip": 0.1,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "low"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "low"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie",
   "Concentration",
   "Antioxydant",
   "Sport"
  ],
  "astuce": "2-3 tasses/jour maximum. Le café peut réduire l'absorption du fer et de certaines vitamines B."
 },
 {
  "id": "eau_coco",
  "nom": "Eau de coco",
  "emoji": "🥥",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 brique",
   "g": 330
  },
  "val": {
   "kcal": 19,
   "prot": 0.7,
   "gluc": 3.7,
   "lip": 0.2,
   "fibres": 1.1,
   "sucres": 2.6,
   "ig": 54
  },
  "nutri": [
   {
    "n": "Potassium",
    "role": "Cœur, muscles",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   },
   {
    "n": "Sodium",
    "role": "Équilibre hydrique",
    "lvl": "low"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Hydratation",
   "Récupération sportive",
   "Électrolytes",
   "Légèreté"
  ],
  "astuce": "L'eau de coco est l'une des meilleures boissons de récupération après le sport."
 },
 {
  "id": "jus_carotte",
  "nom": "Jus de carotte",
  "emoji": "🥕",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 verre",
   "g": 250
  },
  "val": {
   "kcal": 40,
   "prot": 0.9,
   "gluc": 9.3,
   "lip": 0.2,
   "fibres": 0.4,
   "sucres": 5.1,
   "ig": 43
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vision",
   "Peau",
   "Antioxydant",
   "Immunité"
  ],
  "astuce": "Ajouter un peu d'huile au jus de carotte pour mieux absorber le bêta-carotène."
 },
 {
  "id": "kombucha",
  "nom": "Kombucha",
  "emoji": "🍵",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 bouteille",
   "g": 330
  },
  "val": {
   "kcal": 25,
   "prot": 0.2,
   "gluc": 7,
   "lip": 0,
   "fibres": 0,
   "sucres": 6,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "low"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "low"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Probiotiques",
   "Digestion",
   "Immunité",
   "Énergie"
  ],
  "astuce": "Boisson fermentée riche en probiotiques. Choisir sans sucre ajouté."
 },
 {
  "id": "the_noir",
  "nom": "Thé noir",
  "emoji": "🍵",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 tasse",
   "g": 240
  },
  "val": {
   "kcal": 1,
   "prot": 0,
   "gluc": 0,
   "lip": 0,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Fluor",
    "role": "Dents",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Énergie",
   "Digestion",
   "Cœur"
  ],
  "astuce": "Le thé noir avec du lait réduit l'absorption des antioxydants. Le boire nature."
 },
 {
  "id": "the_vert",
  "nom": "Thé vert",
  "emoji": "🍵",
  "cat": "boisson",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 tasse",
   "g": 240
  },
  "val": {
   "kcal": 1,
   "prot": 0,
   "gluc": 0,
   "lip": 0,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "EGCG (catéchines)",
    "role": "Antioxydant puissant",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Fluor",
    "role": "Dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cerveau",
   "Poids",
   "Cœur"
  ],
  "astuce": "Infuser à 70-80°C pour préserver les catéchines et éviter l'amertume."
 },
 {
  "id": "amande",
  "nom": "Amande",
  "emoji": "🌰",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 579,
   "prot": 21.2,
   "gluc": 21.7,
   "lip": 49.4,
   "fibres": 12.5,
   "sucres": 3.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cœur",
   "Muscles",
   "Peau"
  ],
  "astuce": "30g d'amandes/jour couvrent 50% des besoins en vitamine E."
 },
 {
  "id": "amarante",
  "nom": "Amarante",
  "emoji": "🌾",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 180
  },
  "val": {
   "kcal": 371,
   "prot": 14.5,
   "gluc": 64,
   "lip": 7,
   "fibres": 6.7,
   "sucres": 1.7,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines complètes",
   "Calcium élevé",
   "Fer",
   "Sans gluten"
  ],
  "astuce": "L'amarante est très riche en calcium et en protéines. Idéale pour les vegans."
 },
 {
  "id": "cacahuete",
  "nom": "Cacahuète (arachide)",
  "emoji": "🥜",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "arachides"
  ],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 567,
   "prot": 25.8,
   "gluc": 16.1,
   "lip": 49.2,
   "fibres": 8.5,
   "sucres": 4,
   "ig": 14
  },
  "nutri": [
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Énergie",
   "Satiété",
   "Cerveau"
  ],
  "astuce": "Le beurre de cacahuète naturel (sans sucre ajouté) est excellent pour les sportifs."
 },
 {
  "id": "cacao_poudre",
  "nom": "Cacao en poudre non sucré",
  "emoji": "🍫",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 c.s. (20g)",
   "g": 20
  },
  "val": {
   "kcal": 228,
   "prot": 19.6,
   "gluc": 57.9,
   "lip": 13.7,
   "fibres": 37,
   "sucres": 1.8,
   "ig": 20
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Magnésium",
   "Antioxydants",
   "Humeur",
   "Énergie"
  ],
  "astuce": "Choisir du cacao cru 100% non sucré pour un maximum de minéraux et d'antioxydants."
 },
 {
  "id": "edamame",
  "nom": "Edamame (soja vert)",
  "emoji": "🫘",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "soja"
  ],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 122,
   "prot": 11.9,
   "gluc": 8.9,
   "lip": 5.2,
   "fibres": 5.2,
   "sucres": 2.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines complètes",
   "Os",
   "Grossesse",
   "Énergie"
  ],
  "astuce": "L'edamame est l'une des rares sources végétales de protéines complètes."
 },
 {
  "id": "avoine",
  "nom": "Flocons d'avoine",
  "emoji": "🌾",
  "cat": "cereale",
  "tags": [
   "vegetarien"
  ],
  "allergenes": [
   "gluten"
  ],
  "portion": {
   "label": "1 bol (50g)",
   "g": 50
  },
  "val": {
   "kcal": 389,
   "prot": 16.9,
   "gluc": 66.3,
   "lip": 6.9,
   "fibres": 10.6,
   "sucres": 0.9,
   "ig": 55
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Cholestérol (bêta-glucane)",
   "Énergie durable",
   "Glycémie",
   "Digestion"
  ],
  "astuce": "Les flocons d'avoine le matin avec des fruits : énergie durable jusqu'au déjeuner."
 },
 {
  "id": "germe_ble",
  "nom": "Germe de blé",
  "emoji": "🌱",
  "cat": "cereale",
  "tags": [
   "vegetarien"
  ],
  "allergenes": [
   "gluten"
  ],
  "portion": {
   "label": "2 c.s. (20g)",
   "g": 20
  },
  "val": {
   "kcal": 360,
   "prot": 26.6,
   "gluc": 51.8,
   "lip": 9.7,
   "fibres": 13.2,
   "sucres": 0,
   "ig": 45
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Super-aliment",
   "Vitamine E",
   "Énergie",
   "Fertilité"
  ],
  "astuce": "L'un des aliments les plus riches en vitamine E. 2 c.s. par jour dans les yaourts."
 },
 {
  "id": "graines_chia",
  "nom": "Graines de chia",
  "emoji": "🌱",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 c.s. (30g)",
   "g": 30
  },
  "val": {
   "kcal": 486,
   "prot": 16.5,
   "gluc": 42.1,
   "lip": 30.7,
   "fibres": 34.4,
   "sucres": 0,
   "ig": 1
  },
  "nutri": [
   {
    "n": "Oméga-3 ALA",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Oméga-3",
   "Os",
   "Digestion",
   "Énergie durable"
  ],
  "astuce": "2 c.s. dans de l'eau = gélifiant naturel. Gonflent x10 dans les liquides."
 },
 {
  "id": "graines_citrouille",
  "nom": "Graines de courge",
  "emoji": "🎃",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 559,
   "prot": 30.2,
   "gluc": 10.7,
   "lip": 49.1,
   "fibres": 6,
   "sucres": 1.4,
   "ig": 25
  },
  "nutri": [
   {
    "n": "Zinc",
    "role": "Immunité, prostate",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Zinc",
   "Prostate",
   "Sommeil",
   "Immunité"
  ],
  "astuce": "Les graines de courge sont les meilleures sources végétales de zinc."
 },
 {
  "id": "graines_lin",
  "nom": "Graines de lin moulues",
  "emoji": "🌱",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 c.s. (20g)",
   "g": 20
  },
  "val": {
   "kcal": 534,
   "prot": 18.3,
   "gluc": 28.9,
   "lip": 42.2,
   "fibres": 27.3,
   "sucres": 1.6,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Oméga-3 ALA",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Oméga-3",
   "Cholestérol",
   "Hormones",
   "Transit"
  ],
  "astuce": "Moudre les graines de lin pour absorber leurs nutriments. Entières, elles passent sans être digérées."
 },
 {
  "id": "graines_sesame",
  "nom": "Graines de sésame",
  "emoji": "🌱",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "sesame"
  ],
  "portion": {
   "label": "2 c.s. (20g)",
   "g": 20
  },
  "val": {
   "kcal": 573,
   "prot": 17.7,
   "gluc": 23.4,
   "lip": 49.7,
   "fibres": 11.8,
   "sucres": 0.3,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Calcium exceptionnel",
   "Os",
   "Fer",
   "Magnésium"
  ],
  "astuce": "Les graines de sésame sont l'une des meilleures sources végétales de calcium."
 },
 {
  "id": "graines_tournesol",
  "nom": "Graines de tournesol",
  "emoji": "🌻",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 584,
   "prot": 20.8,
   "gluc": 20,
   "lip": 51.5,
   "fibres": 8.6,
   "sucres": 2.6,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Vitamine B5",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vitamine E",
   "Énergie",
   "Peau",
   "Antioxydant"
  ],
  "astuce": "Une poignée de graines de tournesol couvre les besoins quotidiens en vitamine E."
 },
 {
  "id": "haricot_rouge",
  "nom": "Haricot rouge",
  "emoji": "🫘",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 200
  },
  "val": {
   "kcal": 333,
   "prot": 23.6,
   "gluc": 60,
   "lip": 0.8,
   "fibres": 24.9,
   "sucres": 8,
   "ig": 29
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer",
   "Protéines",
   "Énergie",
   "Glycémie"
  ],
  "astuce": "Ne jamais manger les haricots rouges crus : contiennent une lectine toxique."
 },
 {
  "id": "lentille_verte",
  "nom": "Lentille verte",
  "emoji": "🫘",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 200
  },
  "val": {
   "kcal": 230,
   "prot": 17.9,
   "gluc": 39.9,
   "lip": 0.8,
   "fibres": 15.6,
   "sucres": 3.6,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer végétal",
   "Protéines",
   "Glycémie",
   "Grossesse"
  ],
  "astuce": "Associer les lentilles avec de la vitamine C (citron) pour mieux absorber leur fer."
 },
 {
  "id": "levure_biere",
  "nom": "Levure de bière",
  "emoji": "🟡",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 c.s. (20g)",
   "g": 20
  },
  "val": {
   "kcal": 325,
   "prot": 45,
   "gluc": 30,
   "lip": 2,
   "fibres": 6,
   "sucres": 0,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B5",
    "role": "Hormones",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Chrome",
    "role": "Glycémie",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Super-source vitamines B",
   "Énergie",
   "Peau",
   "Cheveux",
   "Ongles"
  ],
  "astuce": "1-2 cuillères à soupe par jour dans les yaourts ou salades. Incontournable en alimentation végétale."
 },
 {
  "id": "noisette",
  "nom": "Noisette",
  "emoji": "🌰",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 628,
   "prot": 15,
   "gluc": 16.7,
   "lip": 60.8,
   "fibres": 9.7,
   "sucres": 4.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cœur",
   "Peau",
   "Énergie"
  ],
  "astuce": "Les noisettes grillées à sec au four développent plus d'arôme."
 },
 {
  "id": "noix",
  "nom": "Noix",
  "emoji": "🪨",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "6 cerneaux (30g)",
   "g": 30
  },
  "val": {
   "kcal": 654,
   "prot": 15.2,
   "gluc": 13.7,
   "lip": 65.2,
   "fibres": 6.7,
   "sucres": 2.6,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Oméga-3 ALA",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Cerveau",
   "Cœur",
   "Oméga-3",
   "Antioxydants"
  ],
  "astuce": "6 cerneaux de noix par jour couvrent les besoins en oméga-3 végétaux."
 },
 {
  "id": "noix_cajou",
  "nom": "Noix de cajou",
  "emoji": "🥜",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 553,
   "prot": 18.2,
   "gluc": 30.2,
   "lip": 43.9,
   "fibres": 3.3,
   "sucres": 5.9,
   "ig": 22
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie",
   "Immunité",
   "Muscles",
   "Cerveau"
  ],
  "astuce": "Les noix de cajou sont moins caloriques que les autres noix et très riches en minéraux."
 },
 {
  "id": "noix_bresil",
  "nom": "Noix du Brésil",
  "emoji": "🥜",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "2-3 noix",
   "g": 20
  },
  "val": {
   "kcal": 656,
   "prot": 14.3,
   "gluc": 11.7,
   "lip": 66.4,
   "fibres": 7.5,
   "sucres": 2.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Sélénium",
    "role": "Antioxydant, thyroïde",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Sélénium exceptionnel",
   "Thyroïde",
   "Antioxydant",
   "Énergie"
  ],
  "astuce": "2-3 noix du Brésil = 100% des besoins en sélénium. Ne pas dépasser 5/jour."
 },
 {
  "id": "pain_complet",
  "nom": "Pain complet",
  "emoji": "🍞",
  "cat": "cereale",
  "tags": [
   "vegetarien"
  ],
  "allergenes": [
   "gluten"
  ],
  "portion": {
   "label": "2 tranches",
   "g": 70
  },
  "val": {
   "kcal": 247,
   "prot": 8.5,
   "gluc": 47.5,
   "lip": 1.5,
   "fibres": 6.8,
   "sucres": 2.4,
   "ig": 51
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Fibres",
   "Glycémie stable",
   "Digestion"
  ],
  "astuce": "Le pain complet au levain a un index glycémique plus bas que le pain blanc."
 },
 {
  "id": "pates_completes",
  "nom": "Pâtes complètes cuites",
  "emoji": "🍝",
  "cat": "cereale",
  "tags": [
   "vegetarien"
  ],
  "allergenes": [
   "gluten"
  ],
  "portion": {
   "label": "1 assiette",
   "g": 220
  },
  "val": {
   "kcal": 158,
   "prot": 6.3,
   "gluc": 32.2,
   "lip": 0.9,
   "fibres": 4.5,
   "sucres": 1.3,
   "ig": 45
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Fibres",
   "Satiété",
   "Glycémie stable"
  ],
  "astuce": "Les pâtes complètes cuites al dente ont un index glycémique plus bas."
 },
 {
  "id": "pistache",
  "nom": "Pistache",
  "emoji": "🫘",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 poignée (30g)",
   "g": 30
  },
  "val": {
   "kcal": 557,
   "prot": 20.2,
   "gluc": 27.5,
   "lip": 44.4,
   "fibres": 10.3,
   "sucres": 7.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Glycémie",
   "Cœur",
   "Yeux (lutéine)"
  ],
  "astuce": "Les pistaches non salées sont idéales. Parmi les noix les plus riches en protéines."
 },
 {
  "id": "pois_chiche",
  "nom": "Pois chiche",
  "emoji": "🫘",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 200
  },
  "val": {
   "kcal": 364,
   "prot": 19.3,
   "gluc": 60.7,
   "lip": 6,
   "fibres": 17.4,
   "sucres": 10.7,
   "ig": 28
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines végétales",
   "Satiété",
   "Glycémie",
   "Digestion"
  ],
  "astuce": "Les pois chiches germés contiennent plus de nutriments biodisponibles."
 },
 {
  "id": "quinoa",
  "nom": "Quinoa",
  "emoji": "🌾",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 185
  },
  "val": {
   "kcal": 222,
   "prot": 8.1,
   "gluc": 39.4,
   "lip": 3.6,
   "fibres": 5,
   "sucres": 1.6,
   "ig": 53
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines complètes",
   "Énergie",
   "Sans gluten",
   "Minéraux"
  ],
  "astuce": "Rincer le quinoa avant cuisson pour enlever les saponines (amertume naturelle)."
 },
 {
  "id": "riz_blanc",
  "nom": "Riz blanc",
  "emoji": "🍚",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 180
  },
  "val": {
   "kcal": 204,
   "prot": 4.2,
   "gluc": 45,
   "lip": 0.4,
   "fibres": 0.6,
   "sucres": 0.1,
   "ig": 72
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "low"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "low"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie rapide",
   "Digestion facile",
   "Sans gluten",
   "Récupération"
  ],
  "astuce": "Associer le riz blanc avec des légumes et des protéines pour un repas équilibré."
 },
 {
  "id": "riz_brun",
  "nom": "Riz brun complet",
  "emoji": "🌾",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 180
  },
  "val": {
   "kcal": 216,
   "prot": 4.5,
   "gluc": 45,
   "lip": 1.8,
   "fibres": 1.8,
   "sucres": 0.7,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Glycémie stable",
   "Digestion",
   "Magnésium"
  ],
  "astuce": "Le riz brun est plus nutritif que le riz blanc. Le tremper la veille facilite la cuisson."
 },
 {
  "id": "sarrasin",
  "nom": "Sarrasin (blé noir)",
  "emoji": "🌾",
  "cat": "cereale",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion cuite",
   "g": 180
  },
  "val": {
   "kcal": 343,
   "prot": 13.3,
   "gluc": 71.5,
   "lip": 3.4,
   "fibres": 10,
   "sucres": 0,
   "ig": 51
  },
  "nutri": [
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Sans gluten",
   "Protéines complètes",
   "Magnésium",
   "Antioxydant"
  ],
  "astuce": "Le sarrasin est sans gluten malgré son nom. Excellent en galettes ou en kasha."
 },
 {
  "id": "boudin_noir",
  "nom": "Boudin noir",
  "emoji": "🖤",
  "cat": "charcuterie",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 boudin",
   "g": 100
  },
  "val": {
   "kcal": 379,
   "prot": 14,
   "gluc": 14,
   "lip": 30,
   "fibres": 0,
   "sucres": 3,
   "ig": 28
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer exceptionnel",
   "Anémie",
   "Énergie",
   "Vitamines B"
  ],
  "astuce": "Le boudin noir est l'une des meilleures sources de fer alimentaire. 1 fois/semaine."
 },
 {
  "id": "chorizo",
  "nom": "Chorizo",
  "emoji": "🌶️",
  "cat": "charcuterie",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "4 tranches",
   "g": 40
  },
  "val": {
   "kcal": 455,
   "prot": 24.1,
   "gluc": 1.9,
   "lip": 38.3,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Énergie",
   "Fer",
   "Saveur"
  ],
  "astuce": "Très riche en graisses saturées et en sel. À consommer occasionnellement."
 },
 {
  "id": "jambon_blanc",
  "nom": "Jambon blanc cuit",
  "emoji": "🥩",
  "cat": "charcuterie",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 tranches",
   "g": 60
  },
  "val": {
   "kcal": 107,
   "prot": 17.5,
   "gluc": 1.6,
   "lip": 3.2,
   "fibres": 0,
   "sucres": 0.8,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Énergie",
   "Faible en gras",
   "Zinc"
  ],
  "astuce": "Choisir un jambon sans nitrites et avec peu de sel pour limiter les additifs."
 },
 {
  "id": "jambon_sec",
  "nom": "Jambon cru (serrano/parme)",
  "emoji": "🥩",
  "cat": "charcuterie",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 tranches",
   "g": 40
  },
  "val": {
   "kcal": 253,
   "prot": 28.5,
   "gluc": 0,
   "lip": 15,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Énergie",
   "Fer",
   "Saveur"
  ],
  "astuce": "Riche en sel : à consommer avec modération. Maximum 2-3 tranches par jour."
 },
 {
  "id": "saumon_fume",
  "nom": "Saumon fumé",
  "emoji": "🐟",
  "cat": "charcuterie",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "2 tranches",
   "g": 60
  },
  "val": {
   "kcal": 179,
   "prot": 18.3,
   "gluc": 0,
   "lip": 11.5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Oméga-3",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Oméga-3",
   "Cœur",
   "Cerveau",
   "Os"
  ],
  "astuce": "Riche en sel. Alterner avec du saumon frais pour limiter l'apport en sodium."
 },
 {
  "id": "cannelle",
  "nom": "Cannelle",
  "emoji": "🟤",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (3g)",
   "g": 3
  },
  "val": {
   "kcal": 247,
   "prot": 4,
   "gluc": 80.6,
   "lip": 1.2,
   "fibres": 53.1,
   "sucres": 2.2,
   "ig": 5
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "low"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Glycémie",
   "Antioxydant",
   "Anti-inflammatoire",
   "Cerveau"
  ],
  "astuce": "1/2 cuillère à café de cannelle de Ceylan par jour aide à réguler la glycémie."
 },
 {
  "id": "clou_girofle",
  "nom": "Clou de girofle",
  "emoji": "🟤",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. moulue (2g)",
   "g": 2
  },
  "val": {
   "kcal": 274,
   "prot": 6,
   "gluc": 65.5,
   "lip": 13,
   "fibres": 33.9,
   "sucres": 2.4,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant record",
   "Anti-inflammatoire",
   "Dents",
   "Digestion"
  ],
  "astuce": "Le clou de girofle est l'une des épices les plus riches en antioxydants au monde."
 },
 {
  "id": "cumin",
  "nom": "Cumin",
  "emoji": "🟤",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (3g)",
   "g": 3
  },
  "val": {
   "kcal": 375,
   "prot": 17.8,
   "gluc": 44.2,
   "lip": 22.3,
   "fibres": 10.5,
   "sucres": 2.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Digestion",
   "Antioxydant",
   "Fer",
   "Anti-inflammatoire"
  ],
  "astuce": "Le cumin est l'une des épices les plus riches en fer. Excellent pour la digestion."
 },
 {
  "id": "curcuma",
  "nom": "Curcuma",
  "emoji": "🟡",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (3g)",
   "g": 3
  },
  "val": {
   "kcal": 354,
   "prot": 7.8,
   "gluc": 64.9,
   "lip": 9.9,
   "fibres": 21.1,
   "sucres": 3.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Curcumine",
    "role": "Anti-inflammatoire puissant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Anti-inflammatoire",
   "Antioxydant",
   "Cerveau",
   "Articulations"
  ],
  "astuce": "Associer le curcuma avec du poivre noir (pipérine) pour multiplier son absorption par 20."
 },
 {
  "id": "gingembre",
  "nom": "Gingembre frais",
  "emoji": "🫚",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. râpé (5g)",
   "g": 5
  },
  "val": {
   "kcal": 80,
   "prot": 1.8,
   "gluc": 17.8,
   "lip": 0.8,
   "fibres": 2,
   "sucres": 1.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Anti-nausée",
   "Anti-inflammatoire",
   "Digestion",
   "Immunité"
  ],
  "astuce": "Le gingembre frais râpé est plus puissant que le gingembre en poudre."
 },
 {
  "id": "paprika",
  "nom": "Paprika",
  "emoji": "🔴",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (3g)",
   "g": 3
  },
  "val": {
   "kcal": 282,
   "prot": 14.1,
   "gluc": 53.9,
   "lip": 12.9,
   "fibres": 34.9,
   "sucres": 10.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Vision",
   "Immunité",
   "Anti-inflammatoire"
  ],
  "astuce": "Le paprika fumé apporte une saveur unique et des antioxydants puissants."
 },
 {
  "id": "persil",
  "nom": "Persil frais",
  "emoji": "🌿",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 c.s. (10g)",
   "g": 10
  },
  "val": {
   "kcal": 36,
   "prot": 3,
   "gluc": 6.3,
   "lip": 0.8,
   "fibres": 3.3,
   "sucres": 0.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Os",
   "Immunité",
   "Haleine"
  ],
  "astuce": "2 cuillères à soupe de persil frais = 150% des besoins en vitamine K !"
 },
 {
  "id": "thym",
  "nom": "Thym séché",
  "emoji": "🌿",
  "cat": "epice",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (2g)",
   "g": 2
  },
  "val": {
   "kcal": 276,
   "prot": 9.1,
   "gluc": 63.9,
   "lip": 7.4,
   "fibres": 37,
   "sucres": 1.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antibactérien",
   "Toux",
   "Immunité",
   "Antioxydant"
  ],
  "astuce": "La tisane de thym est un excellent remède naturel contre la toux et les bronchites."
 },
 {
  "id": "beaufort",
  "nom": "Beaufort",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g",
   "g": 30
  },
  "val": {
   "kcal": 401,
   "prot": 26.3,
   "gluc": 0.5,
   "lip": 32.6,
   "fibres": 0,
   "sucres": 0.5,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os solides",
   "Protéines",
   "Énergie",
   "Vitamine K2"
  ],
  "astuce": "Le beaufort d'alpage (été) est plus riche en oméga-3 grâce à l'alimentation des vaches en montagne."
 },
 {
  "id": "brie",
  "nom": "Brie",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 334,
   "prot": 20,
   "gluc": 0.5,
   "lip": 27.7,
   "fibres": 0,
   "sucres": 0.3,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques",
   "Protéines",
   "Vitamine K2"
  ],
  "astuce": "Le brie à pâte molle est plus riche en probiotiques que les fromages à pâte dure."
 },
 {
  "id": "camembert",
  "nom": "Camembert",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1/4 camembert",
   "g": 50
  },
  "val": {
   "kcal": 299,
   "prot": 19,
   "gluc": 0.5,
   "lip": 24.5,
   "fibres": 0,
   "sucres": 0.2,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie, peau",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques (croûte)",
   "Protéines",
   "Énergie"
  ],
  "astuce": "La croûte blanche du camembert contient des probiotiques bénéfiques. Ne pas la retirer !"
 },
 {
  "id": "cheddar",
  "nom": "Cheddar",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g (2 tranches)",
   "g": 30
  },
  "val": {
   "kcal": 403,
   "prot": 25,
   "gluc": 0.1,
   "lip": 33.1,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Vitamine A élevée",
   "Protéines",
   "Énergie"
  ],
  "astuce": "Le cheddar mature est plus riche en goût et en vitamine K2 que le cheddar jeune."
 },
 {
  "id": "fromage_chevre_frais",
  "nom": "Chèvre frais",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 218,
   "prot": 13,
   "gluc": 0.5,
   "lip": 18,
   "fibres": 0,
   "sucres": 0.4,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie, peau",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Digestion facile",
   "Moins de lactose",
   "Protéines",
   "Probiotiques"
  ],
  "astuce": "Le fromage de chèvre est plus digestible que le fromage de vache. Idéal pour les intolérances légères au lactose."
 },
 {
  "id": "comte",
  "nom": "Comté",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g (2 tranches)",
   "g": 30
  },
  "val": {
   "kcal": 413,
   "prot": 28.4,
   "gluc": 0.3,
   "lip": 33.3,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents, muscles",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs, globules rouges",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os, énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité, cicatrisation",
    "lvl": "med"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os et dents solides",
   "Protéines complètes",
   "Énergie durable",
   "Vitamine K2"
  ],
  "astuce": "Le comté affiné 18 mois est plus riche en goût et en vitamine K2. 30g/jour suffisent."
 },
 {
  "id": "cottage_cheese",
  "nom": "Cottage cheese",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 pot",
   "g": 100
  },
  "val": {
   "kcal": 98,
   "prot": 11.1,
   "gluc": 3.4,
   "lip": 4.3,
   "fibres": 0,
   "sucres": 2.7,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Très peu calorique",
   "Protéines élevées",
   "Régime",
   "Musculation"
  ],
  "astuce": "Le cottage cheese est idéal pour la musculation et les régimes. Riche en caséine pour la récupération nocturne."
 },
 {
  "id": "emmental",
  "nom": "Emmental",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g (2 tranches)",
   "g": 30
  },
  "val": {
   "kcal": 380,
   "prot": 28.5,
   "gluc": 0.5,
   "lip": 29.1,
   "fibres": 0,
   "sucres": 0.5,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Os",
   "Protéines",
   "Énergie",
   "Croissance"
  ],
  "astuce": "L'emmental est excellent pour les enfants et adolescents en croissance grâce à son calcium."
 },
 {
  "id": "feta",
  "nom": "Féta",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 264,
   "prot": 14.2,
   "gluc": 4.1,
   "lip": 21.3,
   "fibres": 0,
   "sucres": 0.5,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Os",
   "Protéines",
   "Probiotiques",
   "Moins calorique"
  ],
  "astuce": "La vraie féta grecque (AOP) est faite de lait de brebis et de chèvre. Plus digeste que les imitations."
 },
 {
  "id": "fromage_blanc",
  "nom": "Fromage blanc 0%",
  "emoji": "🫙",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 pot",
   "g": 100
  },
  "val": {
   "kcal": 46,
   "prot": 7.8,
   "gluc": 3.8,
   "lip": 0.1,
   "fibres": 0,
   "sucres": 3.8,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Légèreté",
   "Os",
   "Régime"
  ],
  "astuce": "Excellent après le sport pour la récupération musculaire grâce à sa richesse en protéines."
 },
 {
  "id": "fromage_chevre",
  "nom": "Fromage de chèvre",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion (40g)",
   "g": 40
  },
  "val": {
   "kcal": 364,
   "prot": 21.6,
   "gluc": 0.1,
   "lip": 30.5,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Protéines",
   "Probiotiques",
   "Digestion facile"
  ],
  "astuce": "Plus facile à digérer que le fromage de vache. Moins de lactose."
 },
 {
  "id": "gruyere",
  "nom": "Gruyère",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g (2 tranches)",
   "g": 30
  },
  "val": {
   "kcal": 413,
   "prot": 29.8,
   "gluc": 0.4,
   "lip": 32.3,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os très solides",
   "Protéines élevées",
   "Énergie",
   "Immunité"
  ],
  "astuce": "Le gruyère est l'un des fromages les plus riches en calcium et en protéines."
 },
 {
  "id": "kefir",
  "nom": "Kéfir de lait",
  "emoji": "🫙",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 verre",
   "g": 250
  },
  "val": {
   "kcal": 61,
   "prot": 3.5,
   "gluc": 4.5,
   "lip": 3.3,
   "fibres": 0,
   "sucres": 4.5,
   "ig": 27
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Probiotiques puissants",
   "Os",
   "Immunité",
   "Flore intestinale"
  ],
  "astuce": "Le kéfir contient 3x plus de probiotiques que le yaourt. Excellent pour l'immunité."
 },
 {
  "id": "mascarpone",
  "nom": "Mascarpone",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 c.s.",
   "g": 30
  },
  "val": {
   "kcal": 429,
   "prot": 6,
   "gluc": 4.5,
   "lip": 44,
   "fibres": 0,
   "sucres": 2.8,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie",
   "Vitamines liposolubles",
   "Saveur",
   "Cuisine"
  ],
  "astuce": "Très riche en graisses. À utiliser avec parcimonie en cuisine pour les sauces et desserts."
 },
 {
  "id": "mozzarella",
  "nom": "Mozzarella",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1/2 boule",
   "g": 62
  },
  "val": {
   "kcal": 280,
   "prot": 18,
   "gluc": 2.2,
   "lip": 22,
   "fibres": 0,
   "sucres": 1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Os",
   "Protéines",
   "Légèreté relative",
   "Probiotiques"
  ],
  "astuce": "La mozzarella di bufala est plus riche en calcium que la mozzarella de vache."
 },
 {
  "id": "munster",
  "nom": "Munster",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 300,
   "prot": 19,
   "gluc": 0.4,
   "lip": 24.4,
   "fibres": 0,
   "sucres": 0.4,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Vitamine B12 élevée",
   "Protéines",
   "Énergie"
  ],
  "astuce": "Le munster est l'un des fromages les plus riches en vitamine B12. Fort en goût mais léger en calories."
 },
 {
  "id": "fromage_brebis_ossau",
  "nom": "Ossau-Iraty (brebis)",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "30g",
   "g": 30
  },
  "val": {
   "kcal": 400,
   "prot": 22,
   "gluc": 0.5,
   "lip": 34,
   "fibres": 0,
   "sucres": 0.3,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Acides gras CLA",
    "role": "Composition corporelle",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Os",
   "CLA (anti-graisses)",
   "Protéines",
   "Énergie"
  ],
  "astuce": "Les fromages de brebis sont riches en CLA (acide linoléique conjugué), bénéfique pour la composition corporelle."
 },
 {
  "id": "parmesan",
  "nom": "Parmesan (Parmigiano)",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "2 c.s. râpé",
   "g": 20
  },
  "val": {
   "kcal": 431,
   "prot": 38.5,
   "gluc": 0,
   "lip": 29.7,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os, énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Calcium record",
   "Protéines très élevées",
   "Vitamine K2",
   "Os solides"
  ],
  "astuce": "Le parmesan est LE fromage le plus riche en calcium et en protéines. Même en petite quantité râpée !"
 },
 {
  "id": "reblochon",
  "nom": "Reblochon",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 335,
   "prot": 20,
   "gluc": 0.1,
   "lip": 27.8,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques",
   "Protéines",
   "Énergie"
  ],
  "astuce": "Fromage savoyard à pâte molle, riche en calcium et en probiotiques naturels."
 },
 {
  "id": "ricotta",
  "nom": "Ricotta",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 100
  },
  "val": {
   "kcal": 174,
   "prot": 11.3,
   "gluc": 3,
   "lip": 13,
   "fibres": 0,
   "sucres": 0.3,
   "ig": 27
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "low"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Légèreté",
   "Protéines",
   "Os",
   "Digestion facile"
  ],
  "astuce": "La ricotta est l'un des fromages les moins caloriques. Excellente en cuisine sucrée ou salée."
 },
 {
  "id": "roquefort",
  "nom": "Roquefort",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 30
  },
  "val": {
   "kcal": 369,
   "prot": 21.5,
   "gluc": 0.6,
   "lip": 31,
   "fibres": 0,
   "sucres": 0.2,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques (moisissure bleue)",
   "Vitamine B12",
   "Immunité"
  ],
  "astuce": "Le roquefort est riche en bactéries lactiques bénéfiques. À consommer avec modération (sel élevé)."
 },
 {
  "id": "saint_nectaire",
  "nom": "Saint-Nectaire",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 316,
   "prot": 19.5,
   "gluc": 0.3,
   "lip": 26,
   "fibres": 0,
   "sucres": 0.2,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques",
   "Protéines",
   "Vitamine K2"
  ],
  "astuce": "Fromage auvergnat à croûte naturelle, riche en bonnes bactéries lactiques."
 },
 {
  "id": "tomme_savoie",
  "nom": "Tomme de Savoie",
  "emoji": "🧀",
  "cat": "fromage",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 289,
   "prot": 19.5,
   "gluc": 0.2,
   "lip": 23.1,
   "fibres": 0,
   "sucres": 0.2,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Moins gras",
   "Os",
   "Protéines",
   "Probiotiques"
  ],
  "astuce": "La tomme de Savoie est moins grasse que la plupart des fromages. Bonne option dans un régime équilibré."
 },
 {
  "id": "abricot",
  "nom": "Abricot",
  "emoji": "🍑",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "3 abricots",
   "g": 120
  },
  "val": {
   "kcal": 48,
   "prot": 1.4,
   "gluc": 11.1,
   "lip": 0.4,
   "fibres": 2,
   "sucres": 9.2,
   "ig": 57
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Vision",
   "Peau",
   "Antioxydant",
   "Énergie"
  ],
  "astuce": "Les abricots secs sont très concentrés en fer et en bêta-carotène."
 },
 {
  "id": "ananas",
  "nom": "Ananas",
  "emoji": "🍍",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 tranches",
   "g": 160
  },
  "val": {
   "kcal": 50,
   "prot": 0.5,
   "gluc": 13.1,
   "lip": 0.1,
   "fibres": 1.4,
   "sucres": 9.9,
   "ig": 66
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Digestion (bromélaïne)",
   "Immunité",
   "Anti-inflammatoire",
   "Os"
  ],
  "astuce": "La bromélaïne de l'ananas frais aide à digérer les protéines."
 },
 {
  "id": "avocat",
  "nom": "Avocat",
  "emoji": "🥑",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1/2 avocat",
   "g": 100
  },
  "val": {
   "kcal": 160,
   "prot": 2,
   "gluc": 9,
   "lip": 14.7,
   "fibres": 6.7,
   "sucres": 0.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules, grossesse",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Vitamine B5",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Cœur",
   "Peau",
   "Énergie",
   "Grossesse"
  ],
  "astuce": "Les graisses saines de l'avocat améliorent l'absorption des vitamines A, D, E, K."
 },
 {
  "id": "banane",
  "nom": "Banane",
  "emoji": "🍌",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 banane",
   "g": 120
  },
  "val": {
   "kcal": 89,
   "prot": 1.1,
   "gluc": 22.8,
   "lip": 0.3,
   "fibres": 2.6,
   "sucres": 12.2,
   "ig": 52
  },
  "nutri": [
   {
    "n": "Potassium",
    "role": "Cœur, muscles",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux, humeur",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Manganèse",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie rapide",
   "Muscles",
   "Humeur",
   "Sport"
  ],
  "astuce": "La banane bien mûre (avec taches noires) est plus riche en antioxydants."
 },
 {
  "id": "cassis",
  "nom": "Cassis",
  "emoji": "🫐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée",
   "g": 80
  },
  "val": {
   "kcal": 63,
   "prot": 1.4,
   "gluc": 15.4,
   "lip": 0.4,
   "fibres": 4.9,
   "sucres": 6.8,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Champion vitamine C",
   "Antioxydant",
   "Vision",
   "Immunité"
  ],
  "astuce": "Le cassis contient 4x plus de vitamine C que l'orange !"
 },
 {
  "id": "cerise",
  "nom": "Cerise",
  "emoji": "🍒",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 bol",
   "g": 150
  },
  "val": {
   "kcal": 63,
   "prot": 1.1,
   "gluc": 16,
   "lip": 0.2,
   "fibres": 2.1,
   "sucres": 12.8,
   "ig": 22
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Sommeil (mélatonine)",
   "Inflammation",
   "Récupération sportive"
  ],
  "astuce": "Le jus de cerise acide améliore le sommeil grâce à la mélatonine naturelle."
 },
 {
  "id": "citron",
  "nom": "Citron",
  "emoji": "🍋",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 citron",
   "g": 100
  },
  "val": {
   "kcal": 29,
   "prot": 1.1,
   "gluc": 9.3,
   "lip": 0.3,
   "fibres": 2.8,
   "sucres": 2.5,
   "ig": 20
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Immunité",
   "Alcalinisant",
   "Digestion",
   "Peau"
  ],
  "astuce": "Un verre d'eau tiède avec du citron le matin aide la digestion."
 },
 {
  "id": "coing",
  "nom": "Coing",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 coing",
   "g": 180
  },
  "val": {
   "kcal": 57,
   "prot": 0.4,
   "gluc": 15.3,
   "lip": 0.1,
   "fibres": 1.9,
   "sucres": 6.3,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Digestion",
   "Antioxydant",
   "Transit",
   "Anti-inflammatoire"
  ],
  "astuce": "Se consomme toujours cuit. La confiture de coing est excellente pour la digestion."
 },
 {
  "id": "datte",
  "nom": "Datte",
  "emoji": "🌴",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "3 dattes",
   "g": 60
  },
  "val": {
   "kcal": 277,
   "prot": 1.8,
   "gluc": 75,
   "lip": 0.2,
   "fibres": 6.7,
   "sucres": 63.4,
   "ig": 42
  },
  "nutri": [
   {
    "n": "Potassium",
    "role": "Cœur, muscles",
    "lvl": "high"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Cerveau",
   "Accouchement",
   "Digestion"
  ],
  "astuce": "2-3 dattes avant le sport pour l'énergie naturelle sans pic de glycémie."
 },
 {
  "id": "figue",
  "nom": "Figue fraîche",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "3 figues",
   "g": 150
  },
  "val": {
   "kcal": 74,
   "prot": 0.8,
   "gluc": 19.2,
   "lip": 0.3,
   "fibres": 2.9,
   "sucres": 16.3,
   "ig": 61
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Os",
   "Transit",
   "Énergie",
   "Antioxydant"
  ],
  "astuce": "Les figues séchées sont très riches en calcium, idéales pour les intolérants au lactose."
 },
 {
  "id": "fraise",
  "nom": "Fraise",
  "emoji": "🍓",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 barquette",
   "g": 150
  },
  "val": {
   "kcal": 32,
   "prot": 0.7,
   "gluc": 7.7,
   "lip": 0.3,
   "fibres": 2,
   "sucres": 4.9,
   "ig": 40
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant, os",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydants",
   "Peau",
   "Immunité",
   "Cœur"
  ],
  "astuce": "À consommer fraîche et de saison pour un maximum de vitamine C."
 },
 {
  "id": "framboise",
  "nom": "Framboise",
  "emoji": "🫐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 barquette",
   "g": 125
  },
  "val": {
   "kcal": 52,
   "prot": 1.2,
   "gluc": 11.9,
   "lip": 0.7,
   "fibres": 6.5,
   "sucres": 4.4,
   "ig": 25
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydants",
   "Peau",
   "Glycémie",
   "Fibres"
  ],
  "astuce": "Les framboises surgelées conservent très bien leurs antioxydants."
 },
 {
  "id": "fruit_passion",
  "nom": "Fruit de la passion",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "3 fruits",
   "g": 75
  },
  "val": {
   "kcal": 97,
   "prot": 2.2,
   "gluc": 23.4,
   "lip": 0.7,
   "fibres": 10.4,
   "sucres": 11.2,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fibres élevées",
   "Antioxydant",
   "Immunité",
   "Digestion"
  ],
  "astuce": "Très riche en fibres malgré sa petite taille. Excellent pour le transit."
 },
 {
  "id": "goyave",
  "nom": "Goyave",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 goyave",
   "g": 100
  },
  "val": {
   "kcal": 68,
   "prot": 2.6,
   "gluc": 14.3,
   "lip": 1,
   "fibres": 5.4,
   "sucres": 8.9,
   "ig": 31
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Champion vitamine C",
   "Immunité",
   "Peau",
   "Digestion"
  ],
  "astuce": "La goyave contient 4x plus de vitamine C que l'orange !"
 },
 {
  "id": "grenade",
  "nom": "Grenade",
  "emoji": "❤️",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 grenade",
   "g": 200
  },
  "val": {
   "kcal": 83,
   "prot": 1.7,
   "gluc": 18.7,
   "lip": 1.2,
   "fibres": 4,
   "sucres": 13.7,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant puissant",
   "Cœur",
   "Anti-inflammatoire",
   "Prostate"
  ],
  "astuce": "Le jus de grenade frais est l'un des jus les plus riches en antioxydants."
 },
 {
  "id": "kaki",
  "nom": "Kaki",
  "emoji": "🍊",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 kaki",
   "g": 170
  },
  "val": {
   "kcal": 70,
   "prot": 0.6,
   "gluc": 18.6,
   "lip": 0.2,
   "fibres": 3.6,
   "sucres": 12.5,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Vision",
   "Immunité",
   "Peau"
  ],
  "astuce": "Le kaki bien mûr est très doux et riche en bêta-carotène."
 },
 {
  "id": "kiwi",
  "nom": "Kiwi",
  "emoji": "🥝",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 kiwis",
   "g": 150
  },
  "val": {
   "kcal": 61,
   "prot": 1.1,
   "gluc": 14.7,
   "lip": 0.5,
   "fibres": 3,
   "sucres": 9,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vitamine C x2",
   "Digestion",
   "Sommeil",
   "Immunité"
  ],
  "astuce": "Le kiwi contient plus de vitamine C que l'orange à poids égal."
 },
 {
  "id": "litchi",
  "nom": "Litchi",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "10 litchis",
   "g": 100
  },
  "val": {
   "kcal": 66,
   "prot": 0.8,
   "gluc": 16.5,
   "lip": 0.4,
   "fibres": 1.3,
   "sucres": 15.2,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Vitamine C élevée",
   "Immunité",
   "Peau",
   "Antioxydant"
  ],
  "astuce": "Le litchi est très riche en vitamine C. À consommer frais de préférence."
 },
 {
  "id": "mangue",
  "nom": "Mangue",
  "emoji": "🥭",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1/2 mangue",
   "g": 200
  },
  "val": {
   "kcal": 60,
   "prot": 0.8,
   "gluc": 15,
   "lip": 0.4,
   "fibres": 1.6,
   "sucres": 13.7,
   "ig": 51
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Peau",
   "Immunité",
   "Énergie",
   "Vision"
  ],
  "astuce": "La mangue mûre est plus riche en bêta-carotène et en antioxydants."
 },
 {
  "id": "melon",
  "nom": "Melon",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 tranche",
   "g": 200
  },
  "val": {
   "kcal": 34,
   "prot": 0.8,
   "gluc": 8.2,
   "lip": 0.2,
   "fibres": 0.9,
   "sucres": 8,
   "ig": 65
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Hydratation",
   "Vision",
   "Peau",
   "Énergie"
  ],
  "astuce": "Le melon cantaloupe (chair orange) est le plus riche en bêta-carotène."
 },
 {
  "id": "mure",
  "nom": "Mûre",
  "emoji": "🫐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 barquette",
   "g": 125
  },
  "val": {
   "kcal": 43,
   "prot": 1.4,
   "gluc": 9.6,
   "lip": 0.5,
   "fibres": 5.3,
   "sucres": 4.9,
   "ig": 25
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Fibres",
   "Immunité",
   "Cerveau"
  ],
  "astuce": "Les mûres sauvages sont encore plus riches en antioxydants que les cultivées."
 },
 {
  "id": "myrtille",
  "nom": "Myrtille",
  "emoji": "🫐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée",
   "g": 100
  },
  "val": {
   "kcal": 57,
   "prot": 0.7,
   "gluc": 14.5,
   "lip": 0.3,
   "fibres": 2.4,
   "sucres": 10,
   "ig": 53
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Anthocyanes",
    "role": "Antioxydant, cerveau",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Cerveau",
   "Mémoire",
   "Antioxydant",
   "Vision"
  ],
  "astuce": "Les myrtilles sauvages ont 2x plus d'antioxydants que les cultivées."
 },
 {
  "id": "nectarine",
  "nom": "Nectarine",
  "emoji": "🍑",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 nectarine",
   "g": 150
  },
  "val": {
   "kcal": 44,
   "prot": 1.1,
   "gluc": 10.6,
   "lip": 0.3,
   "fibres": 1.7,
   "sucres": 8.5,
   "ig": 43
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Peau",
   "Hydratation",
   "Énergie"
  ],
  "astuce": "Manger avec la peau pour plus de fibres et d'antioxydants."
 },
 {
  "id": "noix_coco",
  "nom": "Noix de coco (pulpe)",
  "emoji": "🥥",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 50
  },
  "val": {
   "kcal": 354,
   "prot": 3.3,
   "gluc": 15.2,
   "lip": 33.5,
   "fibres": 9,
   "sucres": 6.2,
   "ig": 45
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant, os",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie (TCM)",
   "Cerveau",
   "Antioxydant",
   "Immunité"
  ],
  "astuce": "L'huile de coco vierge est riche en triglycérides à chaîne moyenne, bons pour le cerveau."
 },
 {
  "id": "orange",
  "nom": "Orange",
  "emoji": "🍊",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 orange",
   "g": 180
  },
  "val": {
   "kcal": 47,
   "prot": 0.9,
   "gluc": 11.8,
   "lip": 0.1,
   "fibres": 2.4,
   "sucres": 9.4,
   "ig": 40
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, collagène",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Immunité",
   "Antioxydant",
   "Énergie",
   "Peau"
  ],
  "astuce": "Manger l'orange entière plutôt qu'en jus pour conserver fibres et vitamine C."
 },
 {
  "id": "pamplemousse",
  "nom": "Pamplemousse",
  "emoji": "🍊",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1/2 pamplemousse",
   "g": 200
  },
  "val": {
   "kcal": 42,
   "prot": 0.8,
   "gluc": 10.7,
   "lip": 0.1,
   "fibres": 1.6,
   "sucres": 6.9,
   "ig": 25
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Immunité",
   "Poids",
   "Cholestérol",
   "Antioxydant"
  ],
  "astuce": "Attention : le pamplemousse interfère avec certains médicaments. Consulter son médecin."
 },
 {
  "id": "papaye",
  "nom": "Papaye",
  "emoji": "🍈",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 200
  },
  "val": {
   "kcal": 43,
   "prot": 0.5,
   "gluc": 11,
   "lip": 0.3,
   "fibres": 1.7,
   "sucres": 7.8,
   "ig": 60
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Digestion (papaïne)",
   "Immunité",
   "Peau",
   "Anti-inflammatoire"
  ],
  "astuce": "La papaïne est une enzyme digestive puissante. Manger la papaye mûre crue."
 },
 {
  "id": "pasteque",
  "nom": "Pastèque",
  "emoji": "🍉",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 grande tranche",
   "g": 300
  },
  "val": {
   "kcal": 30,
   "prot": 0.6,
   "gluc": 7.6,
   "lip": 0.2,
   "fibres": 0.4,
   "sucres": 6.2,
   "ig": 72
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine A (lycopène)",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Hydratation (92% eau)",
   "Antioxydant",
   "Récupération sportive",
   "Cœur"
  ],
  "astuce": "Le lycopène de la pastèque est très bien absorbé. Manger à température ambiante."
 },
 {
  "id": "peche",
  "nom": "Pêche",
  "emoji": "🍑",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 pêche",
   "g": 150
  },
  "val": {
   "kcal": 39,
   "prot": 0.9,
   "gluc": 9.5,
   "lip": 0.3,
   "fibres": 1.5,
   "sucres": 8.4,
   "ig": 42
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Peau",
   "Hydratation",
   "Digestion"
  ],
  "astuce": "Manger avec la peau pour plus de fibres et d'antioxydants."
 },
 {
  "id": "poire",
  "nom": "Poire",
  "emoji": "🍐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poire",
   "g": 180
  },
  "val": {
   "kcal": 57,
   "prot": 0.4,
   "gluc": 15.5,
   "lip": 0.1,
   "fibres": 3.1,
   "sucres": 9.8,
   "ig": 38
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Fibres",
   "Digestion",
   "Transit",
   "Hydratation"
  ],
  "astuce": "Manger la poire mûre avec la peau pour plus de fibres et de nutriments."
 },
 {
  "id": "pomme",
  "nom": "Pomme",
  "emoji": "🍎",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 pomme",
   "g": 180
  },
  "val": {
   "kcal": 52,
   "prot": 0.3,
   "gluc": 13.8,
   "lip": 0.2,
   "fibres": 2.4,
   "sucres": 10.4,
   "ig": 38
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Fibres (pectine)",
   "Digestion",
   "Glycémie stable",
   "Antioxydant"
  ],
  "astuce": "La pelure contient la majorité des antioxydants. Manger avec la peau !"
 },
 {
  "id": "prune",
  "nom": "Prune",
  "emoji": "🫐",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "3 prunes",
   "g": 150
  },
  "val": {
   "kcal": 46,
   "prot": 0.7,
   "gluc": 11.4,
   "lip": 0.3,
   "fibres": 1.4,
   "sucres": 9.9,
   "ig": 39
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Transit intestinal",
   "Antioxydant",
   "Os",
   "Cœur"
  ],
  "astuce": "Les pruneaux (prunes séchées) sont très efficaces contre la constipation."
 },
 {
  "id": "raisin",
  "nom": "Raisin",
  "emoji": "🍇",
  "cat": "fruit",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 grappe",
   "g": 150
  },
  "val": {
   "kcal": 69,
   "prot": 0.7,
   "gluc": 18.1,
   "lip": 0.2,
   "fibres": 0.9,
   "sucres": 15.5,
   "ig": 53
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant (resvératrol)",
   "Cœur",
   "Énergie",
   "Peau"
  ],
  "astuce": "Le raisin noir est plus riche en resvératrol que le blanc."
 },
 {
  "id": "beurre",
  "nom": "Beurre",
  "emoji": "🧈",
  "cat": "gras",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 noix (10g)",
   "g": 10
  },
  "val": {
   "kcal": 717,
   "prot": 0.9,
   "gluc": 0.1,
   "lip": 81.1,
   "fibres": 0,
   "sucres": 0.1,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "low"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "low"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Vitamines liposolubles",
   "Énergie",
   "Saveur"
  ],
  "astuce": "Le beurre cru ou le ghee sont plus riches en vitamines que le beurre pasteurisé."
 },
 {
  "id": "ghee",
  "nom": "Ghee (beurre clarifié)",
  "emoji": "🧈",
  "cat": "gras",
  "tags": [
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.c. (5g)",
   "g": 5
  },
  "val": {
   "kcal": 900,
   "prot": 0,
   "gluc": 0,
   "lip": 100,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "low"
   },
   {
    "n": "Vitamine K2",
    "role": "Os, artères",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Sans lactose",
   "Vitamines liposolubles",
   "Haute température",
   "Digestion"
  ],
  "astuce": "Le ghee est sans lactose. Excellente graisse de cuisson à haute température."
 },
 {
  "id": "huile_avocat",
  "nom": "Huile d'avocat",
  "emoji": "🥑",
  "cat": "gras",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.s. (15ml)",
   "g": 14
  },
  "val": {
   "kcal": 884,
   "prot": 0,
   "gluc": 0,
   "lip": 100,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cœur",
   "Peau",
   "Supporte la chaleur"
  ],
  "astuce": "L'huile d'avocat supporte des températures très élevées. Idéale pour saisir à la poêle."
 },
 {
  "id": "huile_olive",
  "nom": "Huile d'olive vierge extra",
  "emoji": "🫒",
  "cat": "gras",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.s. (15ml)",
   "g": 14
  },
  "val": {
   "kcal": 884,
   "prot": 0,
   "gluc": 0,
   "lip": 100,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cœur",
   "Anti-inflammatoire",
   "Peau"
  ],
  "astuce": "Choisir une huile d'olive vierge extra première pression à froid — la plus riche en polyphénols."
 },
 {
  "id": "huile_colza",
  "nom": "Huile de colza",
  "emoji": "🫙",
  "cat": "gras",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 c.s. (15ml)",
   "g": 14
  },
  "val": {
   "kcal": 884,
   "prot": 0,
   "gluc": 0,
   "lip": 100,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Oméga-3 ALA",
    "role": "Cœur, cerveau",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Meilleur ratio oméga-3/6",
   "Cœur",
   "Cerveau",
   "Antioxydant"
  ],
  "astuce": "L'huile de colza est la meilleure huile végétale pour l'équilibre oméga-3/oméga-6."
 },
 {
  "id": "huile_noix",
  "nom": "Huile de noix",
  "emoji": "🫙",
  "cat": "gras",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 c.s. (15ml)",
   "g": 14
  },
  "val": {
   "kcal": 884,
   "prot": 0,
   "gluc": 0,
   "lip": 100,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Oméga-3 ALA",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Vitamine E",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Oméga-3",
   "Cerveau",
   "Cœur",
   "Antioxydant"
  ],
  "astuce": "À utiliser crue (assaisonnement) car elle ne supporte pas la chaleur."
 },
 {
  "id": "lait_amande",
  "nom": "Lait d'amande",
  "emoji": "🥛",
  "cat": "laitier",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "fruits_coque"
  ],
  "portion": {
   "label": "1 grand verre",
   "g": 250
  },
  "val": {
   "kcal": 24,
   "prot": 0.5,
   "gluc": 3.2,
   "lip": 1.1,
   "fibres": 0.5,
   "sucres": 2.5,
   "ig": 25
  },
  "nutri": [
   {
    "n": "Vitamine E",
    "role": "Antioxydant, peau",
    "lvl": "med"
   },
   {
    "n": "Calcium",
    "role": "Os (si enrichi)",
    "lvl": "med"
   },
   {
    "n": "Vitamine D",
    "role": "Os (si enrichi)",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Sans lactose",
   "Légèreté",
   "Vitamine E",
   "Antioxydant"
  ],
  "astuce": "Choisir un lait d'amande enrichi en calcium et vitamine D pour compenser le lait de vache."
 },
 {
  "id": "lait_soja",
  "nom": "Lait de soja",
  "emoji": "🥛",
  "cat": "laitier",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "soja"
  ],
  "portion": {
   "label": "1 grand verre",
   "g": 250
  },
  "val": {
   "kcal": 33,
   "prot": 3.3,
   "gluc": 2.8,
   "lip": 1.8,
   "fibres": 0.4,
   "sucres": 2.2,
   "ig": 34
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os (si enrichi)",
    "lvl": "med"
   },
   {
    "n": "Vitamine D",
    "role": "Os (si enrichi)",
    "lvl": "low"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs (si enrichi)",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Alternative lait",
   "Protéines végétales",
   "Sans lactose",
   "Isoflavones"
  ],
  "astuce": "Le lait de soja enrichi est la meilleure alternative végétale au lait de vache."
 },
 {
  "id": "lait_ecreme",
  "nom": "Lait écrémé",
  "emoji": "🥛",
  "cat": "laitier",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 grand verre",
   "g": 250
  },
  "val": {
   "kcal": 35,
   "prot": 3.4,
   "gluc": 5,
   "lip": 0.1,
   "fibres": 0,
   "sucres": 5,
   "ig": 32
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os et dents",
   "Protéines",
   "Faible en gras",
   "Régime"
  ],
  "astuce": "Idéal dans un régime pauvre en graisses. Moins de vitamines liposolubles que le lait entier."
 },
 {
  "id": "lait_entier",
  "nom": "Lait entier",
  "emoji": "🥛",
  "cat": "laitier",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 grand verre",
   "g": 250
  },
  "val": {
   "kcal": 61,
   "prot": 3.2,
   "gluc": 4.8,
   "lip": 3.3,
   "fibres": 0,
   "sucres": 4.8,
   "ig": 27
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os et dents",
   "Croissance",
   "Énergie",
   "Thyroïde"
  ],
  "astuce": "Le lait entier contient plus de vitamines liposolubles (A, D) que le lait écrémé."
 },
 {
  "id": "oeuf",
  "nom": "Œuf entier",
  "emoji": "🥚",
  "cat": "laitier",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "oeufs"
  ],
  "portion": {
   "label": "1 œuf",
   "g": 60
  },
  "val": {
   "kcal": 155,
   "prot": 13,
   "gluc": 1.1,
   "lip": 11,
   "fibres": 0,
   "sucres": 0.4,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Choline",
    "role": "Cerveau, foie",
    "lvl": "high"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines complètes",
   "Cerveau",
   "Immunité",
   "Énergie"
  ],
  "astuce": "Le jaune contient la majorité des vitamines. L'œuf à la coque préserve mieux les nutriments."
 },
 {
  "id": "yaourt_grec",
  "nom": "Yaourt grec (0%)",
  "emoji": "🫙",
  "cat": "laitier",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 pot",
   "g": 150
  },
  "val": {
   "kcal": 57,
   "prot": 9.9,
   "gluc": 3.8,
   "lip": 0.4,
   "fibres": 0,
   "sucres": 3.8,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines élevées",
   "Os",
   "Probiotiques",
   "Régime"
  ],
  "astuce": "Le yaourt grec 0% est excellent après le sport pour la récupération musculaire."
 },
 {
  "id": "yaourt_nature",
  "nom": "Yaourt nature",
  "emoji": "🫙",
  "cat": "laitier",
  "tags": [
   "vegetarien",
   "sansgluten"
  ],
  "allergenes": [
   "lait"
  ],
  "portion": {
   "label": "1 pot",
   "g": 125
  },
  "val": {
   "kcal": 61,
   "prot": 3.8,
   "gluc": 4.9,
   "lip": 3.2,
   "fibres": 0,
   "sucres": 4.9,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Probiotiques",
   "Digestion",
   "Immunité"
  ],
  "astuce": "Le yaourt nature sans sucre ajouté est optimal pour la flore intestinale."
 },
 {
  "id": "ail",
  "nom": "Ail",
  "emoji": "🧄",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 gousse",
   "g": 5
  },
  "val": {
   "kcal": 149,
   "prot": 6.4,
   "gluc": 33.1,
   "lip": 0.5,
   "fibres": 2.1,
   "sucres": 1,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antibactérien",
   "Cœur",
   "Immunité",
   "Anti-inflammatoire"
  ],
  "astuce": "Laisser reposer l'ail écrasé 10 min avant cuisson pour activer l'alliine."
 },
 {
  "id": "algue_nori",
  "nom": "Algue nori",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 feuille",
   "g": 8
  },
  "val": {
   "kcal": 35,
   "prot": 5.8,
   "gluc": 5.1,
   "lip": 0.3,
   "fibres": 0.3,
   "sucres": 0.5,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "low"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Iode",
   "Thyroïde",
   "Minéraux marins",
   "Détox"
  ],
  "astuce": "Source principale d'iode pour les végétariens. À consommer avec modération."
 },
 {
  "id": "artichaut",
  "nom": "Artichaut",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 artichaut",
   "g": 120
  },
  "val": {
   "kcal": 47,
   "prot": 3.3,
   "gluc": 10.5,
   "lip": 0.2,
   "fibres": 5.4,
   "sucres": 0.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Foie",
   "Digestion",
   "Cholestérol",
   "Détox"
  ],
  "astuce": "L'artichaut est excellent pour le foie. L'eau de cuisson peut être bue en tisane."
 },
 {
  "id": "asperge",
  "nom": "Asperge verte",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "6 asperges",
   "g": 120
  },
  "val": {
   "kcal": 20,
   "prot": 2.2,
   "gluc": 3.9,
   "lip": 0.1,
   "fibres": 2.1,
   "sucres": 1.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Acide folique B9",
    "role": "Cellules, grossesse",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Grossesse",
   "Diurétique",
   "Détox",
   "Digestion"
  ],
  "astuce": "L'asperge verte est plus nutritive que la blanche car elle bénéficie du soleil."
 },
 {
  "id": "aubergine",
  "nom": "Aubergine",
  "emoji": "🍆",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 aubergine",
   "g": 200
  },
  "val": {
   "kcal": 25,
   "prot": 1,
   "gluc": 5.9,
   "lip": 0.2,
   "fibres": 3,
   "sucres": 3.5,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant (nasunine)",
   "Cholestérol",
   "Digestion",
   "Cœur"
  ],
  "astuce": "La peau violette contient la nasunine, un antioxydant puissant. Ne pas éplucher."
 },
 {
  "id": "bette",
  "nom": "Bette (blette)",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 19,
   "prot": 1.8,
   "gluc": 3.7,
   "lip": 0.2,
   "fibres": 1.6,
   "sucres": 1.1,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Os",
   "Vision",
   "Énergie",
   "Anti-inflammatoire"
  ],
  "astuce": "Les feuilles et les côtes sont toutes deux comestibles. Cuire à la vapeur."
 },
 {
  "id": "betterave",
  "nom": "Betterave",
  "emoji": "🫀",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 betterave",
   "g": 130
  },
  "val": {
   "kcal": 43,
   "prot": 1.6,
   "gluc": 9.6,
   "lip": 0.2,
   "fibres": 2.8,
   "sucres": 6.8,
   "ig": 64
  },
  "nutri": [
   {
    "n": "Acide folique B9",
    "role": "Cellules, grossesse",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Pression artérielle",
   "Endurance sportive",
   "Grossesse",
   "Détox"
  ],
  "astuce": "Les nitrates de la betterave améliorent les performances sportives."
 },
 {
  "id": "brocoli",
  "nom": "Brocoli",
  "emoji": "🥦",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 34,
   "prot": 2.8,
   "gluc": 7,
   "lip": 0.4,
   "fibres": 2.6,
   "sucres": 1.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Anti-cancer",
   "Immunité",
   "Os",
   "Détox"
  ],
  "astuce": "Cuisson vapeur préserve mieux la vitamine C que l'ébullition."
 },
 {
  "id": "carotte",
  "nom": "Carotte",
  "emoji": "🥕",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 carotte moyenne",
   "g": 80
  },
  "val": {
   "kcal": 41,
   "prot": 0.9,
   "gluc": 9.6,
   "lip": 0.2,
   "fibres": 2.8,
   "sucres": 4.7,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau, immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Vision nocturne",
   "Peau saine",
   "Antioxydant",
   "Digestion"
  ],
  "astuce": "Cuire à l'huile améliore l'absorption du bêta-carotène (vitamine A)."
 },
 {
  "id": "celeri",
  "nom": "Céleri branche",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "celeri"
  ],
  "portion": {
   "label": "2 branches",
   "g": 100
  },
  "val": {
   "kcal": 16,
   "prot": 0.7,
   "gluc": 3,
   "lip": 0.2,
   "fibres": 1.6,
   "sucres": 1.8,
   "ig": 35
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Drainant",
   "Anti-inflammatoire",
   "Pression artérielle",
   "Digestion"
  ],
  "astuce": "Le jus de céleri le matin à jeun est réputé pour ses propriétés drainantes."
 },
 {
  "id": "champignon",
  "nom": "Champignon de Paris",
  "emoji": "🍄",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "5 champignons",
   "g": 100
  },
  "val": {
   "kcal": 22,
   "prot": 3.1,
   "gluc": 3.3,
   "lip": 0.3,
   "fibres": 1,
   "sucres": 2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vitamine D naturelle",
   "Immunité",
   "Énergie",
   "Faible en calories"
  ],
  "astuce": "Exposer les champignons au soleil 15 min augmente leur teneur en vitamine D."
 },
 {
  "id": "chou_blanc",
  "nom": "Chou blanc",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 25,
   "prot": 1.3,
   "gluc": 5.8,
   "lip": 0.1,
   "fibres": 2.5,
   "sucres": 3.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Immunité",
   "Anti-cancer",
   "Digestion",
   "Détox"
  ],
  "astuce": "La choucroute (chou fermenté) est encore plus riche en probiotiques et vitamine C."
 },
 {
  "id": "chou_rouge",
  "nom": "Chou rouge",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 100
  },
  "val": {
   "kcal": 31,
   "prot": 1.4,
   "gluc": 7.4,
   "lip": 0.2,
   "fibres": 2.1,
   "sucres": 3.8,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Anthocyanes",
    "role": "Antioxydant puissant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Immunité",
   "Cœur",
   "Anti-inflammatoire"
  ],
  "astuce": "Le chou rouge cru conserve 2x plus de vitamine C que cuit."
 },
 {
  "id": "chou_fleur",
  "nom": "Chou-fleur",
  "emoji": "🥦",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 25,
   "prot": 1.9,
   "gluc": 5,
   "lip": 0.3,
   "fibres": 2,
   "sucres": 1.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Anti-cancer",
   "Immunité",
   "Cerveau",
   "Digestion"
  ],
  "astuce": "Le chou-fleur rôti au four est plus savoureux et préserve ses antioxydants."
 },
 {
  "id": "chou_bruxelles",
  "nom": "Choux de Bruxelles",
  "emoji": "🥦",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 43,
   "prot": 3.4,
   "gluc": 8.9,
   "lip": 0.3,
   "fibres": 3.8,
   "sucres": 2.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Anti-cancer",
   "Immunité",
   "Os",
   "Détox"
  ],
  "astuce": "Rôtir les choux de Bruxelles les rend moins amers et plus savoureux."
 },
 {
  "id": "concombre",
  "nom": "Concombre",
  "emoji": "🥒",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1/2 concombre",
   "g": 150
  },
  "val": {
   "kcal": 16,
   "prot": 0.7,
   "gluc": 3.6,
   "lip": 0.1,
   "fibres": 0.5,
   "sucres": 1.7,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Hydratation (96% eau)",
   "Digestion",
   "Peau",
   "Légèreté"
  ],
  "astuce": "Manger avec la peau pour plus de vitamine K et de fibres."
 },
 {
  "id": "courge_butternut",
  "nom": "Courge butternut",
  "emoji": "🎃",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 200
  },
  "val": {
   "kcal": 45,
   "prot": 1,
   "gluc": 11.7,
   "lip": 0.1,
   "fibres": 2,
   "sucres": 2.2,
   "ig": 51
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Vision",
   "Peau",
   "Énergie"
  ],
  "astuce": "Rôtir au four avec un filet d'huile d'olive pour un maximum de saveur."
 },
 {
  "id": "courgette",
  "nom": "Courgette",
  "emoji": "🥒",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 courgette",
   "g": 200
  },
  "val": {
   "kcal": 17,
   "prot": 1.2,
   "gluc": 3.1,
   "lip": 0.3,
   "fibres": 1,
   "sucres": 2.5,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Légère",
   "Hydratante",
   "Digestion",
   "Faible en calories"
  ],
  "astuce": "Excellente crue en spirales (zoodles) pour préserver ses nutriments."
 },
 {
  "id": "cresson",
  "nom": "Cresson",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée",
   "g": 50
  },
  "val": {
   "kcal": 11,
   "prot": 2.3,
   "gluc": 1.3,
   "lip": 0.1,
   "fibres": 0.5,
   "sucres": 0.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Super-aliment",
   "Antioxydant",
   "Thyroïde",
   "Os"
  ],
  "astuce": "Le cresson cru en salade est l'une des meilleures sources de vitamine K."
 },
 {
  "id": "endive",
  "nom": "Endive",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "2 endives",
   "g": 200
  },
  "val": {
   "kcal": 17,
   "prot": 1,
   "gluc": 4,
   "lip": 0.1,
   "fibres": 3.8,
   "sucres": 0.5,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Digestion",
   "Légèreté",
   "Foie",
   "Prébiotique"
  ],
  "astuce": "L'inuline de l'endive est un prébiotique excellent pour la flore intestinale."
 },
 {
  "id": "epinard",
  "nom": "Épinards",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 assiette crue",
   "g": 60
  },
  "val": {
   "kcal": 23,
   "prot": 2.9,
   "gluc": 3.6,
   "lip": 0.4,
   "fibres": 2.2,
   "sucres": 0.4,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules, grossesse",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles, énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Calcium",
    "role": "Os, dents",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Santé des os",
   "Énergie",
   "Immunité",
   "Grossesse"
  ],
  "astuce": "La vitamine C des épinards aide à absorber leur fer. Consommer crus ou peu cuits."
 },
 {
  "id": "fenouil",
  "nom": "Fenouil",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 bulbe",
   "g": 200
  },
  "val": {
   "kcal": 31,
   "prot": 1.2,
   "gluc": 7.3,
   "lip": 0.2,
   "fibres": 3.1,
   "sucres": 3.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Digestion",
   "Ballonnements",
   "Antioxydant",
   "Diurétique"
  ],
  "astuce": "Les graines de fenouil en tisane soulagent les troubles digestifs."
 },
 {
  "id": "haricot_vert",
  "nom": "Haricot vert",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 31,
   "prot": 1.8,
   "gluc": 7.1,
   "lip": 0.1,
   "fibres": 3.4,
   "sucres": 3.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Légèreté",
   "Antioxydant",
   "Glycémie",
   "Digestion"
  ],
  "astuce": "Cuire al dente à la vapeur pour préserver la vitamine K et la couleur."
 },
 {
  "id": "igname",
  "nom": "Igname",
  "emoji": "🍠",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 118,
   "prot": 1.5,
   "gluc": 27.9,
   "lip": 0.2,
   "fibres": 4.1,
   "sucres": 0.5,
   "ig": 51
  },
  "nutri": [
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie",
   "Hormones",
   "Ménopause",
   "Digestion"
  ],
  "astuce": "Intéressante pour les femmes en ménopause (phytoestrogènes naturels)."
 },
 {
  "id": "kale",
  "nom": "Kale (chou frisé)",
  "emoji": "🥬",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poignée",
   "g": 50
  },
  "val": {
   "kcal": 49,
   "prot": 4.3,
   "gluc": 8.8,
   "lip": 0.9,
   "fibres": 3.6,
   "sucres": 2.3,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation, os",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Super-aliment",
   "Antioxydant",
   "Os",
   "Immunité"
  ],
  "astuce": "Masser le kale cru avec un peu d'huile d'olive pour l'attendrir avant de le manger."
 },
 {
  "id": "laitue",
  "nom": "Laitue romaine",
  "emoji": "🥗",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 assiette",
   "g": 80
  },
  "val": {
   "kcal": 17,
   "prot": 1.2,
   "gluc": 3.3,
   "lip": 0.3,
   "fibres": 2.1,
   "sucres": 1.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Légèreté",
   "Hydratation",
   "Digestion",
   "Antioxydant"
  ],
  "astuce": "La laitue romaine est plus nutritive que la laitue iceberg."
 },
 {
  "id": "mais",
  "nom": "Maïs",
  "emoji": "🌽",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 épi",
   "g": 150
  },
  "val": {
   "kcal": 96,
   "prot": 3.4,
   "gluc": 21,
   "lip": 1.5,
   "fibres": 2.7,
   "sucres": 4.5,
   "ig": 65
  },
  "nutri": [
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Énergie",
   "Fibres",
   "Antioxydant",
   "Vision"
  ],
  "astuce": "Le maïs cuit libère plus de lutéine, bon pour les yeux."
 },
 {
  "id": "manioc",
  "nom": "Manioc",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 160,
   "prot": 1.4,
   "gluc": 38.1,
   "lip": 0.3,
   "fibres": 1.8,
   "sucres": 1.7,
   "ig": 46
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Digestion",
   "Satiété",
   "Sans gluten"
  ],
  "astuce": "Toujours bien cuire le manioc : cru il contient des composés toxiques."
 },
 {
  "id": "oignon",
  "nom": "Oignon",
  "emoji": "🧅",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 oignon",
   "g": 110
  },
  "val": {
   "kcal": 40,
   "prot": 1.1,
   "gluc": 9.3,
   "lip": 0.1,
   "fibres": 1.7,
   "sucres": 4.2,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   },
   {
    "n": "Chrome",
    "role": "Glycémie",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant (quercétine)",
   "Cœur",
   "Immunité",
   "Glycémie"
  ],
  "astuce": "L'oignon rouge est plus riche en antioxydants que l'oignon blanc."
 },
 {
  "id": "patate_douce",
  "nom": "Patate douce",
  "emoji": "🍠",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 patate douce",
   "g": 200
  },
  "val": {
   "kcal": 86,
   "prot": 1.6,
   "gluc": 20.1,
   "lip": 0.1,
   "fibres": 3,
   "sucres": 4.2,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Magnésium",
    "role": "Muscles",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Vision",
   "Peau",
   "Antioxydant"
  ],
  "astuce": "La patate douce cuite avec la peau conserve plus de fibres et de nutriments."
 },
 {
  "id": "petit_pois",
  "nom": "Petit pois",
  "emoji": "🟢",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 100
  },
  "val": {
   "kcal": 81,
   "prot": 5.4,
   "gluc": 14.5,
   "lip": 0.4,
   "fibres": 5.1,
   "sucres": 5.9,
   "ig": 48
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines végétales",
   "Énergie",
   "Immunité",
   "Digestion"
  ],
  "astuce": "Les petits pois surgelés sont aussi nutritifs que les frais."
 },
 {
  "id": "poireau",
  "nom": "Poireau",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poireau",
   "g": 150
  },
  "val": {
   "kcal": 61,
   "prot": 1.5,
   "gluc": 14.2,
   "lip": 0.3,
   "fibres": 1.8,
   "sucres": 3.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine K",
    "role": "Coagulation",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "med"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Manganèse",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Digestion",
   "Prébiotique",
   "Cœur",
   "Détox"
  ],
  "astuce": "La partie verte du poireau contient plus de nutriments que le blanc."
 },
 {
  "id": "poivron_rouge",
  "nom": "Poivron rouge",
  "emoji": "🫑",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 poivron",
   "g": 160
  },
  "val": {
   "kcal": 31,
   "prot": 1,
   "gluc": 7.3,
   "lip": 0.3,
   "fibres": 2.1,
   "sucres": 5,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, collagène",
    "lvl": "high"
   },
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Champion vitamine C",
   "Antioxydant",
   "Vision",
   "Peau"
  ],
  "astuce": "Le poivron rouge contient 3x plus de vitamine C que l'orange !"
 },
 {
  "id": "pomme_de_terre",
  "nom": "Pomme de terre",
  "emoji": "🥔",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 pomme de terre",
   "g": 150
  },
  "val": {
   "kcal": 77,
   "prot": 2,
   "gluc": 17.5,
   "lip": 0.1,
   "fibres": 2.2,
   "sucres": 0.8,
   "ig": 65
  },
  "nutri": [
   {
    "n": "Potassium",
    "role": "Cœur, pression",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Énergie, os",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Énergie durable",
   "Potassium",
   "Satiété"
  ],
  "astuce": "Cuire avec la peau pour préserver les nutriments. Éviter les fritures."
 },
 {
  "id": "potiron",
  "nom": "Potiron",
  "emoji": "🎃",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 200
  },
  "val": {
   "kcal": 26,
   "prot": 1,
   "gluc": 6.5,
   "lip": 0.1,
   "fibres": 0.5,
   "sucres": 2.8,
   "ig": 75
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vision",
   "Peau",
   "Antioxydant",
   "Légèreté"
  ],
  "astuce": "Très faible en calories mais riche en bêta-carotène. Idéal en régime."
 },
 {
  "id": "radis",
  "nom": "Radis",
  "emoji": "🔴",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "10 radis",
   "g": 100
  },
  "val": {
   "kcal": 16,
   "prot": 0.7,
   "gluc": 3.4,
   "lip": 0.1,
   "fibres": 1.6,
   "sucres": 1.9,
   "ig": 15
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "low"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Détox du foie",
   "Digestion",
   "Légèreté",
   "Antioxydant"
  ],
  "astuce": "Les fanes de radis sont comestibles et riches en vitamine C."
 },
 {
  "id": "tomate",
  "nom": "Tomate",
  "emoji": "🍅",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 tomate",
   "g": 120
  },
  "val": {
   "kcal": 18,
   "prot": 0.9,
   "gluc": 3.9,
   "lip": 0.2,
   "fibres": 1.2,
   "sucres": 2.6,
   "ig": 30
  },
  "nutri": [
   {
    "n": "Vitamine C",
    "role": "Immunité, antioxydant",
    "lvl": "med"
   },
   {
    "n": "Vitamine A (lycopène)",
    "role": "Antioxydant, peau",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "low"
   }
  ],
  "bienfaits": [
   "Antioxydant",
   "Cœur",
   "Peau",
   "Prostate"
  ],
  "astuce": "Le lycopène est mieux absorbé quand la tomate est cuite avec un peu d'huile."
 },
 {
  "id": "topinambour",
  "nom": "Topinambour",
  "emoji": "🌿",
  "cat": "legume",
  "tags": [
   "vegan",
   "vegetarien",
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 73,
   "prot": 2,
   "gluc": 17.4,
   "lip": 0,
   "fibres": 1.6,
   "sucres": 9.6,
   "ig": 50
  },
  "nutri": [
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Potassium",
    "role": "Cœur",
    "lvl": "high"
   },
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Prébiotique (inuline)",
   "Fer",
   "Énergie",
   "Flore intestinale"
  ],
  "astuce": "Riche en inuline, excellent prébiotique. Peut provoquer des gaz chez certaines personnes."
 },
 {
  "id": "agneau",
  "nom": "Agneau",
  "emoji": "🥩",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 côtelette",
   "g": 120
  },
  "val": {
   "kcal": 294,
   "prot": 24.5,
   "gluc": 0,
   "lip": 21,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer",
   "Zinc",
   "Protéines",
   "Énergie"
  ],
  "astuce": "L'agneau est plus riche en oméga-3 que le bœuf grâce à son alimentation herbivore."
 },
 {
  "id": "anchois",
  "nom": "Anchois",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "5 filets",
   "g": 30
  },
  "val": {
   "kcal": 210,
   "prot": 28.9,
   "gluc": 0,
   "lip": 9.7,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Oméga-3",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Oméga-3",
   "Os",
   "Cœur",
   "Cerveau"
  ],
  "astuce": "Riches en oméga-3 et en calcium (avec les arêtes). Attention à la teneur en sel."
 },
 {
  "id": "bar",
  "nom": "Bar (loup de mer)",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 filet",
   "g": 180
  },
  "val": {
   "kcal": 97,
   "prot": 18.4,
   "gluc": 0,
   "lip": 2.5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Thyroïde",
   "Énergie",
   "Os"
  ],
  "astuce": "Poisson maigre et délicat. Excellent au four avec des herbes aromatiques."
 },
 {
  "id": "boeuf_haché",
  "nom": "Bœuf haché 5%",
  "emoji": "🥩",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 steak",
   "g": 150
  },
  "val": {
   "kcal": 137,
   "prot": 21.4,
   "gluc": 0,
   "lip": 5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Fer héminique",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer facilement absorbé",
   "Immunité",
   "Muscles",
   "Énergie"
  ],
  "astuce": "Le fer héminique de la viande rouge s'absorbe 2-3x mieux que le fer végétal."
 },
 {
  "id": "cabillaud",
  "nom": "Cabillaud (morue)",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 filet",
   "g": 180
  },
  "val": {
   "kcal": 82,
   "prot": 17.8,
   "gluc": 0,
   "lip": 0.7,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Thyroïde",
   "Énergie",
   "Os"
  ],
  "astuce": "Le cabillaud est l'un des poissons les plus maigres et riches en protéines."
 },
 {
  "id": "canard",
  "nom": "Canard (magret)",
  "emoji": "🦆",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 magret",
   "g": 150
  },
  "val": {
   "kcal": 190,
   "prot": 23.5,
   "gluc": 0,
   "lip": 10,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Fer élevé",
   "Protéines",
   "Énergie",
   "Saveur"
  ],
  "astuce": "Le magret sans peau est riche en fer héminique très bien absorbé."
 },
 {
  "id": "coquilles_stj",
  "nom": "Coquilles Saint-Jacques",
  "emoji": "🦪",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "mollusques"
  ],
  "portion": {
   "label": "6 noix",
   "g": 180
  },
  "val": {
   "kcal": 88,
   "prot": 16.8,
   "gluc": 3.2,
   "lip": 1.4,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Thyroïde",
   "Immunité",
   "Énergie"
  ],
  "astuce": "Excellentes sources de protéines maigres et de sélénium. Saisir rapidement à la poêle."
 },
 {
  "id": "crevette",
  "nom": "Crevette",
  "emoji": "🦐",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "crustaces"
  ],
  "portion": {
   "label": "1 portion",
   "g": 100
  },
  "val": {
   "kcal": 99,
   "prot": 24,
   "gluc": 0.2,
   "lip": 0.3,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Thyroïde",
   "Immunité",
   "Énergie"
  ],
  "astuce": "Les crevettes sont peu caloriques et très riches en protéines."
 },
 {
  "id": "dinde",
  "nom": "Dinde",
  "emoji": "🍗",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 escalope",
   "g": 150
  },
  "val": {
   "kcal": 135,
   "prot": 29.9,
   "gluc": 0,
   "lip": 1,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Tryptophane",
   "Sommeil",
   "Énergie"
  ],
  "astuce": "La dinde est riche en tryptophane, précurseur de la sérotonine (hormone du bonheur)."
 },
 {
  "id": "dorade",
  "nom": "Dorade",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 filet",
   "g": 180
  },
  "val": {
   "kcal": 96,
   "prot": 18,
   "gluc": 0,
   "lip": 2.8,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Thyroïde",
   "Os",
   "Énergie"
  ],
  "astuce": "Excellent au four avec du citron et des herbes. Riche en protéines maigres."
 },
 {
  "id": "foie_volaille",
  "nom": "Foie de volaille",
  "emoji": "🫀",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 100
  },
  "val": {
   "kcal": 172,
   "prot": 26.5,
   "gluc": 0.9,
   "lip": 5.9,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine A",
    "role": "Vision, peau",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Acide folique B9",
    "role": "Cellules",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Vitamine B2",
    "role": "Énergie",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Super-aliment",
   "Énergie",
   "Immunité",
   "Anémie"
  ],
  "astuce": "Le foie de volaille est l'aliment le plus dense en nutriments. 1 fois/semaine suffit."
 },
 {
  "id": "huitre",
  "nom": "Huître",
  "emoji": "🦪",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "mollusques"
  ],
  "portion": {
   "label": "6 huîtres",
   "g": 90
  },
  "val": {
   "kcal": 68,
   "prot": 7.1,
   "gluc": 3.9,
   "lip": 2.5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Zinc",
    "role": "Immunité, cicatrisation",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Iode",
    "role": "Thyroïde",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Zinc exceptionnel",
   "Immunité",
   "Thyroïde",
   "Libido"
  ],
  "astuce": "6 huîtres couvrent plus de 300% des besoins journaliers en zinc."
 },
 {
  "id": "lapin",
  "nom": "Lapin",
  "emoji": "🐰",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 173,
   "prot": 33,
   "gluc": 0,
   "lip": 3.8,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Très maigre",
   "Protéines élevées",
   "Énergie",
   "Régime"
  ],
  "astuce": "L'une des viandes les plus maigres. Idéal en régime hypocalorique."
 },
 {
  "id": "maquereau",
  "nom": "Maquereau",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 filet",
   "g": 150
  },
  "val": {
   "kcal": 205,
   "prot": 18.6,
   "gluc": 0,
   "lip": 13.9,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Oméga-3",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Cœur",
   "Cerveau",
   "Os",
   "Anti-inflammatoire"
  ],
  "astuce": "Le maquereau est l'un des poissons les plus riches en oméga-3 et des moins chers."
 },
 {
  "id": "porc_filet",
  "nom": "Porc (filet)",
  "emoji": "🥩",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 143,
   "prot": 26.2,
   "gluc": 0,
   "lip": 3.5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B1",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Vitamine B1",
   "Énergie",
   "Muscles",
   "Immunité"
  ],
  "astuce": "Le filet de porc est l'une des viandes les moins grasses."
 },
 {
  "id": "poulet_blanc",
  "nom": "Poulet (blanc)",
  "emoji": "🍗",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 blanc",
   "g": 150
  },
  "val": {
   "kcal": 165,
   "prot": 31,
   "gluc": 0,
   "lip": 3.6,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine B6",
    "role": "Système nerveux",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "med"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Énergie",
   "Immunité",
   "Muscles"
  ],
  "astuce": "Le poulet rôti sans peau est l'une des meilleures sources de protéines maigres."
 },
 {
  "id": "poulpe",
  "nom": "Poulpe",
  "emoji": "🐙",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "mollusques"
  ],
  "portion": {
   "label": "1 portion",
   "g": 150
  },
  "val": {
   "kcal": 82,
   "prot": 14.9,
   "gluc": 2.2,
   "lip": 1,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Cuivre",
    "role": "Globules rouges",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Cuivre",
   "Antioxydant",
   "Très maigre"
  ],
  "astuce": "Très riche en cuivre. Congeler avant cuisson pour attendrir."
 },
 {
  "id": "sardine",
  "nom": "Sardine",
  "emoji": "🐡",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 boîte",
   "g": 100
  },
  "val": {
   "kcal": 208,
   "prot": 24.6,
   "gluc": 0,
   "lip": 11.5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Calcium",
    "role": "Os (avec arêtes)",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Oméga-3",
    "role": "Cœur, cerveau",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Os",
   "Cœur",
   "Cerveau",
   "Énergie"
  ],
  "astuce": "Les sardines en conserve avec arêtes : excellente source de calcium et vitamine D."
 },
 {
  "id": "saumon",
  "nom": "Saumon",
  "emoji": "🐟",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 pavé",
   "g": 150
  },
  "val": {
   "kcal": 208,
   "prot": 20,
   "gluc": 0,
   "lip": 13,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "high"
   },
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Oméga-3",
    "role": "Cœur, cerveau",
    "lvl": "high"
   }
  ],
  "bienfaits": [
   "Cœur",
   "Cerveau",
   "Immunité",
   "Os"
  ],
  "astuce": "La cuisson vapeur ou au four préserve mieux les oméga-3 que la friture."
 },
 {
  "id": "thon_frais",
  "nom": "Thon (frais)",
  "emoji": "🐠",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [
   "poisson"
  ],
  "portion": {
   "label": "1 steak",
   "g": 150
  },
  "val": {
   "kcal": 144,
   "prot": 23.4,
   "gluc": 0,
   "lip": 5,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Vitamine D",
    "role": "Os, immunité",
    "lvl": "med"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "high"
   },
   {
    "n": "Phosphore",
    "role": "Os",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines",
   "Immunité",
   "Énergie",
   "Os"
  ],
  "astuce": "Limiter à 2 fois/semaine à cause du mercure."
 },
 {
  "id": "veau",
  "nom": "Veau",
  "emoji": "🥩",
  "cat": "viande",
  "tags": [
   "sansgluten",
   "sanslactose"
  ],
  "allergenes": [],
  "portion": {
   "label": "1 escalope",
   "g": 150
  },
  "val": {
   "kcal": 172,
   "prot": 26.5,
   "gluc": 0,
   "lip": 7,
   "fibres": 0,
   "sucres": 0,
   "ig": 0
  },
  "nutri": [
   {
    "n": "Vitamine B12",
    "role": "Nerfs",
    "lvl": "high"
   },
   {
    "n": "Zinc",
    "role": "Immunité",
    "lvl": "high"
   },
   {
    "n": "Fer",
    "role": "Transport oxygène",
    "lvl": "med"
   },
   {
    "n": "Vitamine B3",
    "role": "Énergie",
    "lvl": "high"
   },
   {
    "n": "Sélénium",
    "role": "Antioxydant",
    "lvl": "med"
   }
  ],
  "bienfaits": [
   "Protéines maigres",
   "Fer",
   "Zinc",
   "Énergie"
  ],
  "astuce": "Le veau est plus maigre que le bœuf. Riche en protéines de haute qualité."
 }
];

const NUTRIMENTS = [
 {
  "id": "vitA",
  "nom": "Vitamine A",
  "cat": "vitamine",
  "emoji": "🟠",
  "ajr": "800 µg/j",
  "bienfaits": [
   "Vision nocturne",
   "Peau et muqueuses",
   "Système immunitaire",
   "Croissance cellulaire"
  ],
  "sources": {
   "vege": [
    "Carotte",
    "Patate douce",
    "Épinards",
    "Kale",
    "Brocoli",
    "Poivron rouge",
    "Courge butternut"
   ],
   "fruit": [
    "Mangue",
    "Abricot",
    "Melon",
    "Papaye",
    "Kaki"
   ],
   "prot": [
    "Foie de volaille",
    "Œufs",
    "Saumon"
   ],
   "grains": [],
   "fats": [
    "Beurre"
   ]
  },
  "carence": [
   "Cécité nocturne",
   "Peau sèche",
   "Infections fréquentes",
   "Fatigue"
  ],
  "compat_plus": [
   "Vitamine D",
   "Vitamine E",
   "Zinc",
   "Fer"
  ],
  "compat_minus": [
   "Vitamine K (excès)"
  ]
 },
 {
  "id": "vitB1",
  "nom": "Vitamine B1 (Thiamine)",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "1,1 mg/j",
  "bienfaits": [
   "Énergie (métabolisme glucides)",
   "Système nerveux",
   "Cœur"
  ],
  "sources": {
   "vege": [
    "Petits pois",
    "Asperges"
   ],
   "fruit": [],
   "prot": [
    "Porc",
    "Poulet",
    "Thon"
   ],
   "grains": [
    "Flocons d'avoine",
    "Riz brun",
    "Lentilles",
    "Quinoa",
    "Levure de bière",
    "Pain complet"
   ],
   "fats": []
  },
  "carence": [
   "Fatigue",
   "Troubles nerveux",
   "Béribéri",
   "Perte d'appétit"
  ],
  "compat_plus": [
   "Vitamine B5",
   "Vitamine B6",
   "Magnésium"
  ],
  "compat_minus": [
   "Alcool",
   "Café"
  ]
 },
 {
  "id": "vitB2",
  "nom": "Vitamine B2 (Riboflavine)",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "1,4 mg/j",
  "bienfaits": [
   "Énergie",
   "Peau et yeux",
   "Métabolisme des graisses",
   "Globules rouges"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Champignons"
   ],
   "fruit": [],
   "prot": [
    "Foie de volaille",
    "Œufs",
    "Lait",
    "Yaourt",
    "Saumon"
   ],
   "grains": [
    "Amandes",
    "Levure de bière"
   ]
  },
  "carence": [
   "Lèvres gercées",
   "Fatigue oculaire",
   "Peau irritée",
   "Anémie"
  ],
  "compat_plus": [
   "Vitamine B3",
   "Vitamine B5",
   "Zinc"
  ],
  "compat_minus": [
   "Lumière (photosensible)"
  ]
 },
 {
  "id": "vitB3",
  "nom": "Vitamine B3 (Niacine)",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "16 mg/j",
  "bienfaits": [
   "Énergie cellulaire",
   "Peau",
   "Cholestérol",
   "Système nerveux"
  ],
  "sources": {
   "vege": [
    "Champignons",
    "Pomme de terre"
   ],
   "fruit": [],
   "prot": [
    "Poulet",
    "Dinde",
    "Thon",
    "Saumon",
    "Foie de volaille",
    "Bœuf",
    "Porc"
   ],
   "grains": [
    "Cacahuètes",
    "Levure de bière"
   ]
  },
  "carence": [
   "Pellagre",
   "Fatigue",
   "Dépression",
   "Troubles digestifs"
  ],
  "compat_plus": [
   "Vitamine B2",
   "Vitamine B6",
   "Fer"
  ],
  "compat_minus": []
 },
 {
  "id": "vitB5",
  "nom": "Vitamine B5",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "6 mg/j",
  "bienfaits": [
   "Énergie",
   "Hormones",
   "Cicatrisation",
   "Anti-stress"
  ],
  "sources": {
   "vege": [
    "Champignons",
    "Brocoli",
    "Patate douce"
   ],
   "fruit": [
    "Avocat"
   ],
   "prot": [
    "Foie de volaille",
    "Œufs",
    "Poulet",
    "Saumon"
   ],
   "grains": [
    "Graines de tournesol",
    "Levure de bière"
   ]
  },
  "carence": [
   "Fatigue",
   "Crampes",
   "Maux de tête",
   "Dépression"
  ],
  "compat_plus": [
   "Vitamine B1",
   "Vitamine B2",
   "Vitamine B9",
   "Vitamine B12"
  ],
  "compat_minus": [
   "Café",
   "Sucre raffiné"
  ]
 },
 {
  "id": "vitB6",
  "nom": "Vitamine B6",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "1,4 mg/j",
  "bienfaits": [
   "Système nerveux",
   "Protéines",
   "Globules rouges",
   "Immunité",
   "Humeur"
  ],
  "sources": {
   "vege": [
    "Pomme de terre",
    "Épinards",
    "Poivron rouge"
   ],
   "fruit": [
    "Banane",
    "Avocat"
   ],
   "prot": [
    "Poulet",
    "Dinde",
    "Thon",
    "Saumon",
    "Foie de volaille"
   ],
   "grains": [
    "Levure de bière",
    "Noix",
    "Graines"
   ]
  },
  "carence": [
   "Irritabilité",
   "Anémie",
   "Crampes",
   "Dépression"
  ],
  "compat_plus": [
   "Vitamine B2",
   "Vitamine B9",
   "Magnésium"
  ],
  "compat_minus": [
   "Alcool",
   "Café"
  ]
 },
 {
  "id": "vitB9",
  "nom": "Vitamine B9 (Acide folique)",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "200 µg/j",
  "bienfaits": [
   "Division cellulaire",
   "Grossesse",
   "Globules rouges",
   "ADN"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Asperges",
    "Brocoli",
    "Laitue romaine",
    "Artichaut",
    "Betterave",
    "Choux de Bruxelles",
    "Cresson"
   ],
   "fruit": [
    "Oranges",
    "Kiwi",
    "Avocat",
    "Papaye",
    "Grenade"
   ],
   "prot": [
    "Foie de volaille",
    "Œufs"
   ],
   "grains": [
    "Lentilles",
    "Pois chiches",
    "Edamame",
    "Levure de bière",
    "Haricot rouge"
   ]
  },
  "carence": [
   "Anémie",
   "Malformations fœtales",
   "Fatigue",
   "Troubles cognitifs"
  ],
  "compat_plus": [
   "Vitamine B5",
   "Vitamine B6",
   "Vitamine B12",
   "Vitamine C"
  ],
  "compat_minus": [
   "Alcool",
   "Tabac",
   "Aspirine"
  ]
 },
 {
  "id": "vitB12",
  "nom": "Vitamine B12",
  "cat": "vitamine",
  "emoji": "🟡",
  "ajr": "2,4 µg/j",
  "bienfaits": [
   "Système nerveux",
   "Globules rouges",
   "Énergie",
   "ADN"
  ],
  "sources": {
   "vege": [],
   "fruit": [],
   "prot": [
    "Foie de volaille",
    "Bœuf haché",
    "Thon frais",
    "Saumon",
    "Sardines",
    "Maquereau",
    "Crevettes",
    "Huîtres",
    "Œufs",
    "Lait entier",
    "Yaourt nature"
   ],
   "grains": [],
   "fats": []
  },
  "carence": [
   "Anémie pernicieuse",
   "Fatigue",
   "Troubles nerveux",
   "Dépression"
  ],
  "compat_plus": [
   "Vitamine B5",
   "Vitamine B9",
   "Calcium"
  ],
  "compat_minus": [
   "Alcool",
   "Tabac"
  ]
 },
 {
  "id": "vitC",
  "nom": "Vitamine C",
  "cat": "vitamine",
  "emoji": "🔴",
  "ajr": "80 mg/j",
  "bienfaits": [
   "Immunité",
   "Antioxydant",
   "Collagène",
   "Absorption du fer"
  ],
  "sources": {
   "vege": [
    "Poivron rouge",
    "Poivron vert",
    "Brocoli",
    "Chou rouge",
    "Choux de Bruxelles",
    "Persil frais",
    "Cresson",
    "Kale"
   ],
   "fruit": [
    "Goyave",
    "Kiwi",
    "Oranges",
    "Fraises",
    "Framboises",
    "Citron",
    "Mangue",
    "Papaye",
    "Ananas",
    "Pamplemousse"
   ],
   "prot": [],
   "grains": [],
   "fats": []
  },
  "carence": [
   "Scorbut",
   "Fatigue",
   "Gencives fragiles",
   "Cicatrisation lente"
  ],
  "compat_plus": [
   "Vitamine A",
   "Vitamine E",
   "Fer",
   "Calcium"
  ],
  "compat_minus": [
   "Cuivre (hautes doses)"
  ]
 },
 {
  "id": "vitD",
  "nom": "Vitamine D",
  "cat": "vitamine",
  "emoji": "☀️",
  "ajr": "5 µg/j",
  "bienfaits": [
   "Os et dents",
   "Immunité",
   "Muscles",
   "Humeur",
   "Anti-cancer"
  ],
  "sources": {
   "vege": [
    "Champignons (exposés soleil)"
   ],
   "fruit": [],
   "prot": [
    "Saumon",
    "Sardines",
    "Maquereau",
    "Hareng",
    "Thon frais",
    "Foie de volaille",
    "Œufs"
   ],
   "grains": [
    "Céréales enrichies"
   ],
   "fats": [
    "Beurre"
   ]
  },
  "carence": [
   "Rachitisme",
   "Ostéoporose",
   "Fatigue",
   "Dépression",
   "Infections fréquentes"
  ],
  "compat_plus": [
   "Vitamine K",
   "Calcium",
   "Magnésium",
   "Phosphore"
  ],
  "compat_minus": [
   "Vitamine E (hautes doses)"
  ]
 },
 {
  "id": "vitE",
  "nom": "Vitamine E",
  "cat": "vitamine",
  "emoji": "🟢",
  "ajr": "12 mg/j",
  "bienfaits": [
   "Antioxydant",
   "Peau",
   "Immunité",
   "Circulation sanguine"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Brocoli"
   ],
   "fruit": [
    "Avocat",
    "Kiwi",
    "Mangue"
   ],
   "prot": [
    "Saumon"
   ],
   "grains": [
    "Amandes",
    "Noisettes",
    "Graines de tournesol",
    "Graines de courge",
    "Graines de chia",
    "Noix de cajou"
   ],
   "fats": [
    "Huile d'olive",
    "Huile de colza",
    "Huile de noix"
   ]
  },
  "carence": [
   "Faiblesse musculaire",
   "Troubles visuels",
   "Immunité affaiblie"
  ],
  "compat_plus": [
   "Vitamine A",
   "Vitamine C",
   "Sélénium"
  ],
  "compat_minus": [
   "Vitamine K (antagoniste)"
  ]
 },
 {
  "id": "vitK",
  "nom": "Vitamine K",
  "cat": "vitamine",
  "emoji": "🟢",
  "ajr": "75 µg/j",
  "bienfaits": [
   "Coagulation sanguine",
   "Os",
   "Artères"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Kale",
    "Brocoli",
    "Chou rouge",
    "Choux de Bruxelles",
    "Laitue romaine",
    "Cresson",
    "Poireau",
    "Persil frais",
    "Haricot vert"
   ],
   "fruit": [
    "Avocat",
    "Kiwi"
   ],
   "prot": [
    "Foie de volaille"
   ],
   "grains": [
    "Noix de cajou"
   ],
   "fats": [
    "Huile d'olive",
    "Huile de colza"
   ]
  },
  "carence": [
   "Saignements excessifs",
   "Fragilité osseuse"
  ],
  "compat_plus": [
   "Vitamine D",
   "Calcium"
  ],
  "compat_minus": [
   "Vitamine A (excès)",
   "Vitamine E (antagoniste)"
  ]
 },
 {
  "id": "Ca",
  "nom": "Calcium",
  "cat": "mineral",
  "emoji": "🦷",
  "ajr": "800 mg/j",
  "bienfaits": [
   "Os et dents",
   "Muscles",
   "Transmission nerveuse",
   "Coagulation"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Kale",
    "Brocoli",
    "Cresson",
    "Algue nori"
   ],
   "fruit": [
    "Figues",
    "Oranges"
   ],
   "prot": [
    "Lait entier",
    "Yaourt nature",
    "Comté",
    "Mozzarella",
    "Sardines (arêtes)",
    "Saumon"
   ],
   "grains": [
    "Amandes",
    "Graines de chia",
    "Levure de bière"
   ]
  },
  "carence": [
   "Ostéoporose",
   "Crampes",
   "Caries",
   "Tension nerveuse"
  ],
  "compat_plus": [
   "Vitamine D",
   "Vitamine K",
   "Magnésium",
   "Phosphore"
  ],
  "compat_minus": [
   "Fer (concurrence)",
   "Zinc (concurrence)"
  ]
 },
 {
  "id": "Mg",
  "nom": "Magnésium",
  "cat": "mineral",
  "emoji": "💪",
  "ajr": "375 mg/j",
  "bienfaits": [
   "Énergie",
   "Muscles et nerfs",
   "Glycémie",
   "Sommeil",
   "Stress"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Artichaut",
    "Brocoli",
    "Algue nori"
   ],
   "fruit": [
    "Banane",
    "Avocat",
    "Dattes"
   ],
   "prot": [
    "Saumon",
    "Edamame"
   ],
   "grains": [
    "Cacao en poudre",
    "Amandes",
    "Noix",
    "Noix de cajou",
    "Graines de chia",
    "Graines de tournesol",
    "Graines de courge",
    "Quinoa",
    "Lentilles",
    "Riz brun",
    "Levure de bière"
   ]
  },
  "carence": [
   "Crampes",
   "Fatigue",
   "Anxiété",
   "Insomnie",
   "Tremblements"
  ],
  "compat_plus": [
   "Vitamine B6",
   "Vitamine D",
   "Calcium",
   "Potassium"
  ],
  "compat_minus": [
   "Calcium (excès perturbe Mg)"
  ]
 },
 {
  "id": "K_min",
  "nom": "Potassium",
  "cat": "mineral",
  "emoji": "🍌",
  "ajr": "2000 mg/j",
  "bienfaits": [
   "Équilibre hydrique",
   "Tension artérielle",
   "Muscles",
   "Cœur"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Pomme de terre",
    "Betterave",
    "Brocoli",
    "Poivron rouge"
   ],
   "fruit": [
    "Banane",
    "Avocat",
    "Kiwi",
    "Orange",
    "Melon",
    "Pastèque",
    "Grenade",
    "Dattes"
   ],
   "prot": [
    "Saumon",
    "Thon frais",
    "Huîtres"
   ],
   "grains": [
    "Lentilles",
    "Haricot rouge",
    "Quinoa",
    "Graines de chia"
   ]
  },
  "carence": [
   "Crampes",
   "Fatigue",
   "Arythmie",
   "Hypertension"
  ],
  "compat_plus": [
   "Magnésium",
   "Vitamine B6"
  ],
  "compat_minus": [
   "Sodium (excès de sel nuit au potassium)"
  ]
 },
 {
  "id": "Fe",
  "nom": "Fer",
  "cat": "mineral",
  "emoji": "🩸",
  "ajr": "14 mg/j",
  "bienfaits": [
   "Transport oxygène",
   "Énergie",
   "Immunité",
   "Concentration"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Kale",
    "Cresson",
    "Persil frais",
    "Algue nori"
   ],
   "fruit": [
    "Figues fraîches",
    "Abricot",
    "Dattes"
   ],
   "prot": [
    "Foie de volaille",
    "Bœuf haché",
    "Agneau",
    "Sardines",
    "Huîtres",
    "Moules"
   ],
   "grains": [
    "Lentilles vertes",
    "Haricot rouge",
    "Pois chiche",
    "Graines de courge",
    "Cacao en poudre",
    "Levure de bière"
   ]
  },
  "carence": [
   "Anémie",
   "Fatigue extrême",
   "Pâleur",
   "Essoufflement",
   "Cheveux cassants"
  ],
  "compat_plus": [
   "Vitamine C (améliore absorption)",
   "Vitamine A",
   "Cuivre"
  ],
  "compat_minus": [
   "Calcium (bloque absorption)",
   "Zinc (compétition)"
  ]
 },
 {
  "id": "Zn",
  "nom": "Zinc",
  "cat": "mineral",
  "emoji": "🛡️",
  "ajr": "10 mg/j",
  "bienfaits": [
   "Immunité",
   "Cicatrisation",
   "Goût et odorat",
   "ADN",
   "Fertilité"
  ],
  "sources": {
   "vege": [
    "Kale",
    "Brocoli",
    "Champignons"
   ],
   "fruit": [],
   "prot": [
    "Huîtres",
    "Bœuf haché",
    "Agneau",
    "Crevettes",
    "Foie de volaille"
   ],
   "grains": [
    "Quinoa",
    "Noix de cajou",
    "Amandes",
    "Graines de courge",
    "Pistaches",
    "Levure de bière"
   ]
  },
  "carence": [
   "Infections fréquentes",
   "Cicatrisation lente",
   "Chute de cheveux",
   "Perte de goût"
  ],
  "compat_plus": [
   "Vitamine A",
   "Vitamine B6",
   "Cuivre"
  ],
  "compat_minus": [
   "Fer (compétition)",
   "Calcium (compétition)"
  ]
 },
 {
  "id": "Se",
  "nom": "Sélénium",
  "cat": "oligo",
  "emoji": "🔬",
  "ajr": "55 µg/j",
  "bienfaits": [
   "Antioxydant puissant",
   "Thyroïde",
   "Immunité",
   "Protection cellulaire"
  ],
  "sources": {
   "vege": [
    "Champignons",
    "Ail"
   ],
   "fruit": [],
   "prot": [
    "Noix du Brésil",
    "Thon frais",
    "Saumon",
    "Sardines",
    "Maquereau",
    "Œufs",
    "Poulet blanc",
    "Dinde",
    "Bœuf haché",
    "Crevettes"
   ],
   "grains": [
    "Graines de tournesol",
    "Levure de bière"
   ]
  },
  "carence": [
   "Fatigue",
   "Fragilité immunitaire",
   "Troubles thyroïdiens",
   "Douleurs musculaires"
  ],
  "compat_plus": [
   "Vitamine E",
   "Vitamine C",
   "Iode"
  ],
  "compat_minus": []
 },
 {
  "id": "I",
  "nom": "Iode",
  "cat": "oligo",
  "emoji": "🦋",
  "ajr": "150 µg/j",
  "bienfaits": [
   "Thyroïde",
   "Métabolisme",
   "Développement cérébral",
   "Croissance"
  ],
  "sources": {
   "vege": [
    "Algue nori",
    "Cresson"
   ],
   "fruit": [],
   "prot": [
    "Cabillaud",
    "Thon frais",
    "Crevettes",
    "Huîtres",
    "Lait entier",
    "Yaourt nature",
    "Œufs"
   ],
   "grains": [
    "Sel iodé"
   ]
  },
  "carence": [
   "Goitre",
   "Hypothyroïdie",
   "Fatigue",
   "Prise de poids",
   "Dépression"
  ],
  "compat_plus": [
   "Sélénium",
   "Vitamine A"
  ],
  "compat_minus": []
 },
 {
  "id": "Cu",
  "nom": "Cuivre",
  "cat": "oligo",
  "emoji": "🟤",
  "ajr": "1 mg/j",
  "bienfaits": [
   "Globules rouges",
   "Système nerveux",
   "Os",
   "Antioxydant"
  ],
  "sources": {
   "vege": [
    "Champignons",
    "Épinards"
   ],
   "fruit": [
    "Avocat",
    "Noix de coco"
   ],
   "prot": [
    "Foie de volaille",
    "Huîtres",
    "Crevettes"
   ],
   "grains": [
    "Noix de cajou",
    "Graines de tournesol",
    "Noix",
    "Cacao en poudre",
    "Graines de courge"
   ]
  },
  "carence": [
   "Anémie",
   "Fragilité osseuse",
   "Fatigue",
   "Troubles nerveux"
  ],
  "compat_plus": [
   "Fer",
   "Zinc",
   "Vitamine C"
  ],
  "compat_minus": [
   "Zinc (compétition)"
  ]
 },
 {
  "id": "Mn",
  "nom": "Manganèse",
  "cat": "oligo",
  "emoji": "⚗️",
  "ajr": "2 mg/j",
  "bienfaits": [
   "Antioxydant",
   "Métabolisme osseux",
   "Glycémie",
   "Cicatrisation"
  ],
  "sources": {
   "vege": [
    "Épinards",
    "Artichaut",
    "Brocoli"
   ],
   "fruit": [
    "Ananas",
    "Myrtilles",
    "Framboises",
    "Fraises"
   ],
   "prot": [],
   "grains": [
    "Flocons d'avoine",
    "Quinoa",
    "Graines de chia",
    "Noix de pécan",
    "Noisettes",
    "Levure de bière"
   ]
  },
  "carence": [
   "Fragilité osseuse",
   "Troubles glycémiques",
   "Fatigue"
  ],
  "compat_plus": [
   "Zinc",
   "Magnésium"
  ],
  "compat_minus": [
   "Calcium (excès réduit absorption)"
  ]
 },
 {
  "id": "P",
  "nom": "Phosphore",
  "cat": "mineral",
  "emoji": "🔋",
  "ajr": "700 mg/j",
  "bienfaits": [
   "Os et dents",
   "Énergie (ATP)",
   "Membranes cellulaires",
   "Reins"
  ],
  "sources": {
   "vege": [
    "Lentilles",
    "Pois chiches"
   ],
   "fruit": [],
   "prot": [
    "Saumon",
    "Thon frais",
    "Cabillaud",
    "Sardines",
    "Poulet blanc",
    "Dinde",
    "Bœuf haché",
    "Lait entier",
    "Comté",
    "Œufs"
   ],
   "grains": [
    "Graines de courge",
    "Graines de tournesol",
    "Quinoa",
    "Noix de cajou",
    "Amandes",
    "Levure de bière"
   ]
  },
  "carence": [
   "Fragilité osseuse",
   "Fatigue",
   "Douleurs musculaires"
  ],
  "compat_plus": [
   "Vitamine D",
   "Calcium",
   "Magnésium"
  ],
  "compat_minus": [
   "Calcium (déséquilibre si excès P)"
  ]
 },
 {
  "id": "omega3",
  "nom": "Oméga-3",
  "cat": "oligo",
  "emoji": "🐟",
  "ajr": "2 g/j",
  "bienfaits": [
   "Cœur",
   "Cerveau",
   "Anti-inflammatoire",
   "Dépression",
   "Yeux"
  ],
  "sources": {
   "vege": [],
   "fruit": [],
   "prot": [
    "Saumon",
    "Maquereau",
    "Sardines",
    "Hareng",
    "Thon frais",
    "Saumon fumé"
   ],
   "grains": [
    "Noix",
    "Graines de lin moulues",
    "Graines de chia"
   ],
   "fats": [
    "Huile de colza",
    "Huile de noix"
   ]
  },
  "carence": [
   "Problèmes cardiovasculaires",
   "Troubles de l'humeur",
   "Inflammation",
   "Peau sèche"
  ],
  "compat_plus": [
   "Vitamine D",
   "Vitamine E"
  ],
  "compat_minus": [
   "Oméga-6 en excès"
  ]
 },
 {
  "id": "choline",
  "nom": "Choline",
  "cat": "oligo",
  "emoji": "🧠",
  "ajr": "400 mg/j",
  "bienfaits": [
   "Cerveau et mémoire",
   "Foie",
   "Développement fœtal",
   "Neurotransmetteurs"
  ],
  "sources": {
   "vege": [
    "Brocoli",
    "Choux de Bruxelles"
   ],
   "fruit": [],
   "prot": [
    "Œufs (jaune)",
    "Foie de volaille",
    "Bœuf haché",
    "Poulet blanc",
    "Thon frais",
    "Saumon"
   ],
   "grains": [
    "Edamame",
    "Graines de tournesol"
   ]
  },
  "carence": [
   "Troubles de la mémoire",
   "Stéatose hépatique",
   "Fatigue",
   "Troubles cognitifs"
  ],
  "compat_plus": [
   "Vitamine B12",
   "Acide folique B9"
  ],
  "compat_minus": []
 },
 {
  "id": "Cr",
  "nom": "Chrome",
  "cat": "oligo",
  "emoji": "⚙️",
  "ajr": "40 µg/j",
  "bienfaits": [
   "Glycémie",
   "Métabolisme glucides",
   "Sensibilité à l'insuline"
  ],
  "sources": {
   "vege": [
    "Brocoli",
    "Oignon",
    "Tomate"
   ],
   "fruit": [
    "Raisin",
    "Pomme"
   ],
   "prot": [
    "Bœuf haché",
    "Foie de volaille",
    "Huîtres"
   ],
   "grains": [
    "Levure de bière",
    "Pain complet",
    "Flocons d'avoine"
   ]
  },
  "carence": [
   "Résistance à l'insuline",
   "Fatigue",
   "Fringales sucrées"
  ],
  "compat_plus": [
   "Vitamine B3",
   "Magnésium"
  ],
  "compat_minus": []
 }
];
