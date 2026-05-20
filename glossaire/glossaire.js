// ============================================================
// FICHIER : glossaire/glossaire.js
// DESCRIPTION : Index complet des vitamines, minéraux et
//               oligo-éléments avec définitions et conseils
// ============================================================

const GLOSSAIRE = {

  intro: {
    vitamines: "Les vitamines sont des substances organiques indispensables au bon fonctionnement de l'organisme. Le corps ne peut pas les fabriquer seul — il faut les apporter par l'alimentation. Il existe 13 vitamines essentielles : liposolubles (A, D, E, K) stockées dans les graisses, et hydrosolubles (C et groupe B) à renouveler quotidiennement.",
    mineraux: "Les minéraux sont des éléments inorganiques indispensables à la vie. On distingue les macroéléments (calcium, magnésium, potassium, sodium, phosphore) dont le corps a besoin en grande quantité, et les oligo-éléments dont les besoins sont infimes mais essentiels.",
    oligos: "Les oligo-éléments sont des minéraux présents en très faible quantité dans l'organisme mais indispensables à de nombreuses réactions biochimiques. Une carence même légère peut avoir des conséquences importantes sur la santé."
  },

  vitamines: [
    {
      id:'vitA', nom:'Vitamine A', emoji:'🟠',
      autresNoms:['Rétinol','Bêta-carotène (précurseur)'],
      famille:'Liposoluble (stockée dans les graisses)', ajr:'800 µg/jour',
      role:"Essentielle pour la vision nocturne, l'intégrité de la peau et des muqueuses, le système immunitaire et la croissance cellulaire. Le bêta-carotène (forme végétale) est un puissant antioxydant.",
      sources_top:['Foie de volaille','Carotte','Patate douce','Épinards','Mangue'],
      carence:"Cécité nocturne (premier signe), peau sèche et rugueuse, infections répétées, retard de croissance.",
      exces:"Toxique en excès (forme rétinol uniquement). Nausées, maux de tête, fragilité osseuse. Le bêta-carotène végétal n'est pas toxique.",
      conseil:"Cuire les légumes oranges avec un peu d'huile pour améliorer l'absorption du bêta-carotène.",
      synergies:['Vitamine D','Vitamine E','Zinc'],
      antagonistes:['Vitamine K en excès']
    },
    {
      id:'vitB1', nom:'Vitamine B1', emoji:'🟡',
      autresNoms:['Thiamine'],
      famille:'Hydrosoluble (non stockée)', ajr:'1,1 mg/jour',
      role:"Clé du métabolisme des glucides — transforme les sucres en énergie. Indispensable au bon fonctionnement du système nerveux et du cœur.",
      sources_top:['Levure de bière','Porc','Flocons d\'avoine','Lentilles','Quinoa'],
      carence:"Béribéri (maladie neurologique grave), fatigue intense, troubles de la mémoire, perte d'appétit. Fréquente chez les grands consommateurs d'alcool.",
      exces:"Pas de toxicité connue (excès éliminé par les urines).",
      conseil:"La cuisson prolongée et l'alcool détruisent la vitamine B1. La levure de bière en est la source la plus concentrée.",
      synergies:['Vitamine B5','Vitamine B6','Magnésium'],
      antagonistes:['Alcool','Café (en excès)']
    },
    {
      id:'vitB2', nom:'Vitamine B2', emoji:'🟡',
      autresNoms:['Riboflavine'],
      famille:'Hydrosoluble (non stockée)', ajr:'1,4 mg/jour',
      role:"Participe à la production d'énergie dans chaque cellule. Essentielle pour la peau, les yeux, les cheveux et le métabolisme des graisses.",
      sources_top:['Foie de volaille','Levure de bière','Amandes','Œufs','Champignons'],
      carence:"Lèvres gercées, langue rouge et enflammée, irritation des yeux, peau sèche, anémie.",
      exces:"Non toxique. L'excès est éliminé dans les urines (qui deviennent jaune vif).",
      conseil:"Très sensible à la lumière — conserver les aliments riches en B2 à l'abri de la lumière.",
      synergies:['Vitamine B3','Vitamine B5','Zinc'],
      antagonistes:['Lumière (photosensible)']
    },
    {
      id:'vitB3', nom:'Vitamine B3', emoji:'🟡',
      autresNoms:['Niacine','Acide nicotinique','Vitamine PP'],
      famille:'Hydrosoluble (non stockée)', ajr:'16 mg/jour',
      role:"Joue un rôle central dans la production d'énergie cellulaire. Aide à maintenir un taux de cholestérol normal, protège la peau et soutient le système nerveux.",
      sources_top:['Levure de bière','Thon','Poulet','Dinde','Cacahuètes'],
      carence:"Pellagre : dermatite, diarrhée, démence. Fatigue, dépression, troubles digestifs.",
      exces:"À très hautes doses (médicaments) : bouffées de chaleur, lésions hépatiques.",
      conseil:"Le maïs contient de la niacine sous forme non absorbable — les populations vivant uniquement de maïs développaient la pellagre.",
      synergies:['Vitamine B2','Vitamine B6','Fer'],
      antagonistes:[]
    },
    {
      id:'vitB5', nom:'Vitamine B5', emoji:'🟡',
      autresNoms:['Acide pantothénique'],
      famille:'Hydrosoluble (non stockée)', ajr:'6 mg/jour',
      role:"Indispensable à la synthèse des hormones et à la production d'énergie. Favorise la cicatrisation, aide à gérer le stress.",
      sources_top:['Foie de volaille','Levure de bière','Champignons','Graines de tournesol','Avocat'],
      carence:"Rare car présente dans presque tous les aliments. Fatigue, crampes, irritabilité.",
      exces:"Non toxique.",
      conseil:"Son nom vient du grec 'pantothen' signifiant 'partout' — elle est présente dans presque tous les aliments.",
      synergies:['Vitamine B1','Vitamine B2','Vitamine B9','Vitamine B12'],
      antagonistes:['Café','Sucre raffiné']
    },
    {
      id:'vitB6', nom:'Vitamine B6', emoji:'🟡',
      autresNoms:['Pyridoxine'],
      famille:'Hydrosoluble (non stockée)', ajr:'1,4 mg/jour',
      role:"Impliquée dans plus de 100 réactions enzymatiques. Essentielle au métabolisme des protéines, à la formation des globules rouges et à la production de sérotonine (hormone du bonheur).",
      sources_top:['Levure de bière','Poulet','Banane','Pomme de terre','Thon'],
      carence:"Irritabilité, dépression, anémie, crampes musculaires, peau sèche.",
      exces:"À très hautes doses (suppléments) : neuropathies (dommages nerveux).",
      conseil:"La pilule contraceptive peut diminuer les niveaux de B6 — les femmes sous contraception orale peuvent avoir besoin d'en consommer davantage.",
      synergies:['Vitamine B2','Vitamine B9','Magnésium'],
      antagonistes:['Alcool','Café']
    },
    {
      id:'vitB9', nom:'Vitamine B9', emoji:'🟡',
      autresNoms:['Acide folique','Folate'],
      famille:'Hydrosoluble (non stockée)', ajr:'200 µg/jour (400 µg femmes enceintes)',
      role:"Indispensable à la division cellulaire et à la synthèse de l'ADN. Cruciale pendant la grossesse pour prévenir les malformations du tube neural. Participe à la formation des globules rouges.",
      sources_top:['Foie de volaille','Épinards','Levure de bière','Lentilles','Asperges'],
      carence:"Anémie mégaloblastique, fatigue, malformations fœtales (spina bifida), troubles cognitifs.",
      exces:"Peut masquer une carence en B12. À surveiller avec les suppléments.",
      conseil:"La cuisson détruit jusqu'à 50% des folates — privilégier les légumes crus ou peu cuits.",
      synergies:['Vitamine B5','Vitamine B6','Vitamine B12','Vitamine C'],
      antagonistes:['Alcool','Tabac','Aspirine (en excès)']
    },
    {
      id:'vitB12', nom:'Vitamine B12', emoji:'🟡',
      autresNoms:['Cobalamine'],
      famille:'Hydrosoluble (stockée dans le foie)', ajr:'2,4 µg/jour',
      role:"Unique vitamine contenant un minéral (cobalt). Essentielle au système nerveux, à la formation des globules rouges et à la synthèse de l'ADN. Le foie peut en stocker pour 2 à 5 ans.",
      sources_top:['Foie de bœuf','Huîtres','Sardines','Bœuf','Thon'],
      carence:"Anémie pernicieuse, fatigue extrême, troubles neurologiques irréversibles, dépression. Risque élevé chez les végétaliens.",
      exces:"Non toxique.",
      conseil:"Présente UNIQUEMENT dans les produits animaux. Les végétaliens doivent absolument se supplémenter.",
      synergies:['Vitamine B5','Vitamine B9','Calcium'],
      antagonistes:['Alcool','Tabac']
    },
    {
      id:'vitC', nom:'Vitamine C', emoji:'🔴',
      autresNoms:['Acide ascorbique'],
      famille:'Hydrosoluble (non stockée)', ajr:'80 mg/jour',
      role:"Puissant antioxydant protégeant les cellules. Indispensable à la synthèse du collagène (peau, os, tendons). Renforce le système immunitaire et améliore l'absorption du fer végétal de 3 fois.",
      sources_top:['Goyave','Cassis','Poivron rouge','Kiwi','Persil frais'],
      carence:"Scorbut : fatigue, gencives qui saignent, cicatrisation lente, douleurs articulaires.",
      exces:"À très hautes doses : troubles digestifs, calculs rénaux. Non toxique aux doses alimentaires.",
      conseil:"Détruite par la chaleur et l'oxygène. Consommer les fruits et légumes frais et crus pour un maximum de vitamine C.",
      synergies:['Vitamine A','Vitamine E','Fer','Calcium'],
      antagonistes:['Cuivre (en très hautes doses)']
    },
    {
      id:'vitD', nom:'Vitamine D', emoji:'☀️',
      autresNoms:['Calciférol','Vitamine du soleil'],
      famille:'Liposoluble (stockée dans les graisses)', ajr:'5 µg/jour (15 µg recommandés)',
      role:"Hormone plus que vitamine — synthétisée par la peau sous l'action des UV. Indispensable à l'absorption du calcium et du phosphore. Régule le système immunitaire, les muscles et l'humeur.",
      sources_top:['Huile de foie de morue','Saumon','Sardines','Maquereau','Champignons (soleil)'],
      carence:"Rachitisme chez l'enfant, ostéoporose, fatigue chronique, dépression, infections fréquentes. Carence très répandue dans les pays peu ensoleillés.",
      exces:"Toxique à très hautes doses (suppléments excessifs) : calcification des organes.",
      conseil:"20 minutes de soleil par jour sur les bras et le visage suffisent en été. En hiver, la supplémentation est souvent recommandée.",
      synergies:['Vitamine K2','Calcium','Magnésium','Phosphore'],
      antagonistes:['Vitamine E (hautes doses)']
    },
    {
      id:'vitE', nom:'Vitamine E', emoji:'🟢',
      autresNoms:['Tocophérol','Alpha-tocophérol'],
      famille:'Liposoluble (stockée dans les graisses)', ajr:'12 mg/jour',
      role:"Principal antioxydant liposoluble — protège les membranes cellulaires des dommages oxydatifs. Soutient le système immunitaire, favorise la circulation sanguine et protège la peau.",
      sources_top:['Germe de blé','Graines de tournesol','Amandes','Huile d\'olive','Noisettes'],
      carence:"Rare chez l'adulte en bonne santé. Faiblesse musculaire, troubles visuels, immunité affaiblie.",
      exces:"Anticoagulant à hautes doses — peut interagir avec les médicaments anticoagulants.",
      conseil:"Les huiles végétales (tournesol, olive) sont les meilleures sources. La vitamine E protège aussi les autres vitamines de l'oxydation.",
      synergies:['Vitamine A','Vitamine C','Sélénium'],
      antagonistes:['Vitamine K (antagoniste)']
    },
    {
      id:'vitK', nom:'Vitamine K', emoji:'🟢',
      autresNoms:['Phytoménadione (K1)','Ménaquinone (K2)'],
      famille:'Liposoluble (stockée dans le foie)', ajr:'75 µg/jour',
      role:"K1 (légumes verts) : indispensable à la coagulation sanguine. K2 (fromages, œufs) : dirige le calcium vers les os et l'éloigne des artères. Rôle crucial dans la santé cardiovasculaire.",
      sources_top:['Épinards','Kale','Persil','Brocoli','Comté (K2)'],
      carence:"Saignements anormaux, mauvaise cicatrisation, fragilité osseuse.",
      exces:"Non toxique sous forme alimentaire.",
      conseil:"La K2 est souvent négligée : présente dans les fromages affinés, le natto, les œufs. Essentielle en complément de la vitamine D.",
      synergies:['Vitamine D','Calcium'],
      antagonistes:['Vitamine A en excès','Vitamine E (antagoniste)','Anticoagulants']
    }
  ],

  mineraux: [
    {
      id:'calcium', nom:'Calcium', emoji:'🦷', symbole:'Ca',
      famille:'Macrominéral', ajr:'800 mg/jour (1200 mg seniors)',
      role:"Minéral le plus abondant du corps (99% dans les os et dents). Essentiel à la solidité osseuse, la contraction musculaire (dont le cœur), la transmission nerveuse et la coagulation sanguine.",
      sources_top:['Parmesan','Sardines (arêtes)','Comté','Graines de sésame','Amandes'],
      carence:"Ostéoporose, crampes musculaires, caries, irritabilité nerveuse. Carence silencieuse très répandue.",
      exces:"Calculs rénaux, calcification artérielle si sans vitamine K2.",
      conseil:"Le calcium seul ne suffit pas — il faut la vitamine D pour l'absorber et la vitamine K2 pour le diriger vers les os.",
      synergies:['Vitamine D','Vitamine K2','Magnésium','Phosphore'],
      antagonistes:['Fer','Zinc']
    },
    {
      id:'magnesium', nom:'Magnésium', emoji:'💪', symbole:'Mg',
      famille:'Macrominéral', ajr:'375 mg/jour',
      role:"Intervient dans plus de 300 réactions enzymatiques. Essentiel à la production d'énergie (ATP), la contraction musculaire, la régulation de la glycémie et la qualité du sommeil. Anti-stress naturel.",
      sources_top:['Cacao en poudre','Graines de courge','Amandes','Épinards','Quinoa'],
      carence:"Très répandue. Crampes, fatigue, anxiété, insomnie, palpitations, maux de tête.",
      exces:"Diarrhée à hautes doses (suppléments). Non toxique par l'alimentation.",
      conseil:"Le stress, l'alcool et le café épuisent le magnésium. Le cacao pur est la source la plus concentrée et la plus agréable !",
      synergies:['Vitamine B6','Vitamine D','Calcium','Potassium'],
      antagonistes:['Calcium en excès']
    },
    {
      id:'potassium', nom:'Potassium', emoji:'🍌', symbole:'K',
      famille:'Macrominéral', ajr:'2000 mg/jour',
      role:"Régule l'équilibre hydrique et la pression artérielle. Essentiel au bon fonctionnement du cœur, des muscles et des reins. Contrebalance les effets néfastes du sodium sur la tension.",
      sources_top:['Avocat','Épinards','Banane','Pomme de terre','Haricots rouges'],
      carence:"Crampes, fatigue musculaire, arythmies cardiaques, hypertension, constipation.",
      exces:"Dangereux uniquement par suppléments ou insuffisance rénale.",
      conseil:"Manger plus de fruits et légumes et réduire le sel est la meilleure stratégie pour optimiser le ratio potassium/sodium.",
      synergies:['Magnésium','Vitamine B6'],
      antagonistes:['Sodium en excès']
    },
    {
      id:'sodium', nom:'Sodium', emoji:'🧂', symbole:'Na',
      famille:'Macrominéral', ajr:'Maximum 2000 mg/jour (= 5g de sel)',
      role:"Régule l'équilibre des fluides corporels, la transmission nerveuse et la contraction musculaire. Travaille en duo avec le potassium pour maintenir l'équilibre cellulaire.",
      sources_top:['Sel de table','Charcuteries','Fromages','Pain','Plats industriels'],
      carence:"Rare. Confusion, crampes, fatigue dans les cas extrêmes.",
      exces:"Hypertension artérielle, maladies cardiovasculaires, rétention d'eau, ostéoporose. 80% du sel consommé provient des aliments transformés.",
      conseil:"L'OMS recommande moins de 5g de sel par jour. Cuisiner maison permet de contrôler son apport.",
      synergies:[],
      antagonistes:['Potassium']
    },
    {
      id:'fer', nom:'Fer', emoji:'🩸', symbole:'Fe',
      famille:'Macrominéral', ajr:'14 mg/jour (18 mg femmes)',
      role:"Composant central de l'hémoglobine (transport de l'oxygène). Essentiel à la production d'énergie, au système immunitaire et au développement cognitif.",
      sources_top:['Foie de bœuf','Huîtres','Boudin noir','Graines de courge','Lentilles'],
      carence:"Anémie ferriprive : fatigue, pâleur, essoufflement, chute de cheveux. La plus fréquente des carences nutritionnelles.",
      exces:"Toxique en excès (hémochromatose). Ne pas se supplémenter sans avis médical.",
      conseil:"Le fer héminique (viande) s'absorbe 2-3x mieux que le fer végétal. La vitamine C triple l'absorption du fer végétal.",
      synergies:['Vitamine C','Vitamine A','Cuivre'],
      antagonistes:['Calcium','Zinc','Tanins du thé et café']
    },
    {
      id:'phosphore', nom:'Phosphore', emoji:'🔋', symbole:'P',
      famille:'Macrominéral', ajr:'700 mg/jour',
      role:"2ème minéral le plus abondant (85% dans les os). Composant de l'ATP (énergie cellulaire), de l'ADN et des membranes cellulaires.",
      sources_top:['Graines de courge','Parmesan','Foie de bœuf','Quinoa','Saumon'],
      carence:"Rare car présent dans presque tous les aliments. Fatigue, fragilité osseuse.",
      exces:"Excès fréquent (additifs alimentaires E4XX) — perturbe l'absorption du calcium.",
      conseil:"Trop de phosphore (sodas, plats industriels) nuit aux os en appauvrissant le calcium.",
      synergies:['Vitamine D','Calcium','Magnésium'],
      antagonistes:['Calcium en excès']
    }
  ],

  oligos: [
    {
      id:'zinc', nom:'Zinc', emoji:'🛡️', symbole:'Zn',
      famille:'Oligo-élément', ajr:'10 mg/jour',
      role:"Impliqué dans plus de 300 enzymes. Pilier du système immunitaire, de la cicatrisation, de la synthèse des protéines et de l'ADN. Essentiel au goût, à l'odorat et à la fertilité.",
      sources_top:['Huîtres','Foie de volaille','Bœuf','Graines de courge','Noix de cajou'],
      carence:"Infections fréquentes, cicatrisation lente, chute de cheveux, perte du goût et de l'odorat.",
      exces:"À hautes doses : nausées, carence en cuivre, immunité affaiblie.",
      conseil:"Les huîtres sont de loin la meilleure source de zinc (6 huîtres = 3x les besoins journaliers !). Les végétaliens sont souvent déficients.",
      synergies:['Vitamine A','Vitamine B6','Cuivre'],
      antagonistes:['Fer','Calcium']
    },
    {
      id:'selenium', nom:'Sélénium', emoji:'🔬', symbole:'Se',
      famille:'Oligo-élément', ajr:'55 µg/jour',
      role:"Puissant antioxydant en synergie avec la vitamine E. Indispensable au bon fonctionnement de la thyroïde, au système immunitaire et à la protection contre certains cancers.",
      sources_top:['Noix du Brésil','Thon','Sardines','Œufs','Poulet'],
      carence:"Fatigue chronique, fragilité immunitaire, troubles thyroïdiens, douleurs musculaires.",
      exces:"Toxique en excès (sélénose) : chute de cheveux, ongles cassants. Ne pas dépasser 5 noix du Brésil/jour.",
      conseil:"2-3 noix du Brésil par jour couvrent 100% des besoins en sélénium.",
      synergies:['Vitamine E','Vitamine C','Iode'],
      antagonistes:[]
    },
    {
      id:'iode', nom:'Iode', emoji:'🦋', symbole:'I',
      famille:'Oligo-élément', ajr:'150 µg/jour (250 µg grossesse)',
      role:"Composant essentiel des hormones thyroïdiennes qui régulent le métabolisme, la croissance, le développement cérébral et la température corporelle.",
      sources_top:['Algues (nori)','Cabillaud','Crevettes','Yaourt','Œufs'],
      carence:"Goitre (gonflement de la thyroïde), hypothyroïdie, prise de poids, fatigue, dépression. Retard mental chez l'enfant si carence pendant la grossesse.",
      exces:"Peut paradoxalement bloquer la thyroïde. Attention aux algues en grande quantité.",
      conseil:"Le sel iodé a été introduit pour prévenir les carences. Les végétaliens doivent surveiller leur apport.",
      synergies:['Sélénium','Vitamine A'],
      antagonistes:[]
    },
    {
      id:'cuivre', nom:'Cuivre', emoji:'🟤', symbole:'Cu',
      famille:'Oligo-élément', ajr:'1 mg/jour',
      role:"Essentiel à la formation des globules rouges, au bon fonctionnement du système nerveux, à la formation du collagène et à la santé des os.",
      sources_top:['Foie de bœuf','Huîtres','Graines de sésame','Cacao','Noix de cajou'],
      carence:"Anémie, fragilité osseuse, dépigmentation des cheveux, fatigue, troubles nerveux.",
      exces:"Toxique en excès. Maladie de Wilson (accumulation génétique de cuivre).",
      conseil:"Le cuivre travaille en équipe avec le fer pour la formation des globules rouges. Un excès de zinc peut provoquer une carence en cuivre.",
      synergies:['Fer','Zinc','Vitamine C'],
      antagonistes:['Zinc en excès']
    },
    {
      id:'manganese', nom:'Manganèse', emoji:'⚗️', symbole:'Mn',
      famille:'Oligo-élément', ajr:'2 mg/jour',
      role:"Composant de la superoxyde dismutase (SOD), une enzyme antioxydante puissante. Essentiel au métabolisme osseux, à la glycémie et à la cicatrisation.",
      sources_top:['Noix de pécan','Flocons d\'avoine','Graines de chia','Ananas','Framboises'],
      carence:"Fragilité osseuse, troubles de la glycémie, retard de cicatrisation, fatigue.",
      exces:"Rare par l'alimentation. Toxique professionnellement (mines, soudure).",
      conseil:"Les céréales complètes et les fruits rouges sont d'excellentes sources souvent négligées.",
      synergies:['Zinc','Magnésium'],
      antagonistes:['Calcium en excès','Fer']
    },
    {
      id:'chrome', nom:'Chrome', emoji:'⚙️', symbole:'Cr',
      famille:'Oligo-élément', ajr:'40 µg/jour',
      role:"Potentialise l'action de l'insuline et régule la glycémie. Aide au métabolisme des glucides, des lipides et des protéines. Réduit les fringales sucrées.",
      sources_top:['Levure de bière','Brocoli','Huîtres','Raisin','Pomme'],
      carence:"Résistance à l'insuline, fringales sucrées, fatigue après les repas.",
      exces:"Non toxique sous forme alimentaire.",
      conseil:"Le sucre raffiné et le stress épuisent les réserves de chrome. La levure de bière en est la source la plus concentrée.",
      synergies:['Vitamine B3','Magnésium'],
      antagonistes:[]
    },
    {
      id:'fluor', nom:'Fluor', emoji:'🦷', symbole:'F',
      famille:'Oligo-élément', ajr:'3,5 mg/jour',
      role:"Renforce l'émail dentaire et participe à la santé osseuse. Prévient les caries en formant la fluorapatite (plus résistante aux acides).",
      sources_top:['Thé vert','Thé noir','Poisson','Crevettes','Eau fluorée'],
      carence:"Caries dentaires fréquentes, fragilité de l'émail, ostéoporose.",
      exces:"Fluorose dentaire (taches blanches sur les dents), fluorose osseuse à très hautes doses.",
      conseil:"Le thé (vert et noir) est la source alimentaire la plus riche en fluor.",
      synergies:['Calcium','Vitamine D'],
      antagonistes:[]
    },
    {
      id:'omega3', nom:'Oméga-3', emoji:'🐟', symbole:'ω-3',
      famille:'Acide gras essentiel', ajr:'2 g/jour (ALA) — 250 mg/jour (EPA+DHA)',
      role:"Acides gras essentiels que le corps ne peut pas fabriquer. Anti-inflammatoires puissants. Essentiels au cerveau (60% de matières grasses), à la vision, au cœur et à l'équilibre émotionnel.",
      sources_top:['Maquereau','Sardines','Saumon','Graines de chia','Noix'],
      carence:"Inflammation chronique, troubles de l'humeur et dépression, problèmes cardiovasculaires, peau sèche.",
      exces:"À très hautes doses : effet anticoagulant. Non toxique aux doses alimentaires.",
      conseil:"EPA et DHA (poissons gras) sont bien plus efficaces que l'ALA végétal (noix, chia). Idéalement manger du poisson gras 2-3 fois par semaine.",
      synergies:['Vitamine D','Vitamine E'],
      antagonistes:['Oméga-6 en excès']
    },
    {
      id:'choline', nom:'Choline', emoji:'🧠', symbole:'C₅H₁₃NO',
      famille:'Nutriment essentiel (vitamine B-like)', ajr:'400 mg/jour (550 mg hommes)',
      role:"Essentielle au fonctionnement du cerveau et de la mémoire. Protège le foie contre la stéatose. Cruciale pour le développement fœtal du cerveau.",
      sources_top:['Œufs (jaune)','Foie de bœuf','Poulet','Thon','Edamame'],
      carence:"Stéatose hépatique (foie gras), troubles de la mémoire, fatigue musculaire.",
      exces:"Odeur corporelle de poisson à très hautes doses.",
      conseil:"Un seul jaune d'œuf apporte 150mg de choline. C'est pourquoi manger des œufs entiers (pas seulement les blancs) est important pour la santé cérébrale.",
      synergies:['Vitamine B12','Acide folique B9'],
      antagonistes:[]
    }
  ]
};
