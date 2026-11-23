const RECETTES = [
  {
    id: "magret-orange-miel",
    fichier: "recette-magret-orange-miel.html",
    titre: "Magret de canard rôti à l'orange et au miel",
    categorie: "Noël",
    accroche: "Peau dorée et croustillante, chair rosée et réduction brillante aux agrumes d'hiver.",
    temps: "25 min",
    difficulte: "Moyen",
    portions: 4,
    image: "https://www.legourmeur.fr/news/wp-content/uploads/2025/12/news-brouillon-auto-magret-orange-scaled.webp",
    ustensiles: ["Poêle en fonte ou inox", "Couteau bien aiguisé", "Zesteur"],
    ingredients: [
      { qte: 2, unite: "", nom: "beaux magrets de canard" },
      { qte: 3, unite: "", nom: "oranges non traitées (jus et zestes)" },
      { qte: 2, unite: "c. à soupe", nom: "miel de fleurs" },
      { qte: 1, unite: "c. à soupe", nom: "vinaigre balsamique" },
      { qte: 1, unite: "branche", nom: "romarin frais" },
      { qte: 1, unite: "pincée", nom: "fleur de sel et poivre du moulin" }
    ],
    etapes: [
      "Quadrillez la peau des magrets en croisillons serrés sans entailler la chair, puis salez généreusement.",
      "Déposez les magrets côté peau dans une poêle froide et faites cuire à feu moyen 9 minutes en vidant régulièrement la graisse fondue.",
      "Retournez côté chair, ajoutez le romarin et poursuivez 4 minutes pour une cuisson rosée. Laissez reposer 5 minutes sous une feuille d'aluminium.",
      "Déglacez la poêle avec le jus des oranges, le miel et le vinaigre. Laissez réduire jusqu'à obtenir un glaçage sirupeux, ajoutez les zestes et nappez les tranches."
    ],
    conseil: "Gardez la graisse de canard filtrée dans un bocal au frais : elle est incomparable pour rissoler des pommes de terre sarladaises le lendemain."
  },
  {
    id: "chapon-marrons-noel",
    fichier: "recette-chapon-marrons-noel.html",
    titre: "Volaille rôtie de Noël aux marrons et pommes dorées",
    categorie: "Noël",
    accroche: "Une grande pièce dorée au beurre d'herbes, entourée de marrons fondants et de petites pommes de terre rôties.",
    temps: "1 h 45",
    difficulte: "Moyen",
    portions: 6,
    image: "https://www.legourmeur.fr/news/wp-content/uploads/2025/12/news-brouillon-auto-chapon-marron-scaled.webp",
    ustensiles: ["Grand plat à rôtir", "Pinceau de cuisine", "Ficelle de boucher"],
    ingredients: [
      { qte: 1, unite: "", nom: "beau poulet fermier ou chapon (env. 2 kg)" },
      { qte: 400, unite: "g", nom: "marrons cuits au naturel" },
      { qte: 800, unite: "g", nom: "petites pommes de terre grenailles" },
      { qte: 70, unite: "g", nom: "beurre demi-sel mou" },
      { qte: 4, unite: "gousses", nom: "ail en chemise" },
      { qte: 3, unite: "branches", nom: "thym et romarin frais" }
    ],
    etapes: [
      "Préchauffez le four à 190 °C. Massez la volaille avec le beurre mou mélangé aux herbes ciselées, sel et poivre.",
      "Déposez-la dans un grand plat avec un verre d'eau au fond et enfournez pour 1 heure en l'arrosant toutes les 20 minutes.",
      "Ajoutez les pommes de terre grenailles, les gousses d'ail et les marrons autour de la volaille, mélangez dans le jus et poursuivez 35 minutes.",
      "Laissez reposer 10 minutes hors du four avant de découper et de servir avec le jus de cuisson."
    ],
    conseil: "Glissez un peu de beurre aux herbes directement sous la peau des blancs avant cuisson pour garantir une chair moelleuse."
  },
  {
    id: "ramen-poulet-hiver",
    fichier: "recette-ramen-poulet-hiver.html",
    titre: "Ramen d'hiver au poulet grillé et œuf mollet",
    categorie: "Inattendu",
    accroche: "Un bol fumant au bouillon parfumé au gingembre et miso, idéal pour changer des repas traditionnels.",
    temps: "40 min",
    difficulte: "Moyen",
    portions: 4,
    image: "https://lacerisesurlemaillot.fr/wp-content/uploads/2021/10/ramen-poulet.jpg",
    ustensiles: ["Grande marmite", "Poêle", "Casserole"],
    ingredients: [
      { qte: 4, unite: "", nom: "filets de poulet fermier" },
      { qte: 300, unite: "g", nom: "nouilles ramen fraîches ou sèches" },
      { qte: 4, unite: "", nom: "œufs extra-frais" },
      { qte: 1.2, unite: "L", nom: "bouillon de volaille maison ou bio" },
      { qte: 2, unite: "c. à soupe", nom: "sauce soja salée" },
      { qte: 20, unite: "g", nom: "gingembre frais râpé" },
      { qte: 150, unite: "g", nom: "champignons bruns émincés" },
      { qte: 3, unite: "", nom: "oignons nouveaux ciselés" }
    ],
    etapes: [
      "Faites frémir le bouillon de volaille avec le gingembre râpé, la sauce soja et les champignons pendant 15 minutes.",
      "Faites cuire les œufs 6 minutes 30 dans l'eau bouillante, plongez-les aussitôt dans l'eau glacée puis écalez-les.",
      "Saisissez les filets de poulet assaisonnés à la poêle jusqu'à ce qu'ils soient bien dorés, puis détaillez-les en tranches.",
      "Cuisez les nouilles à part, répartissez-les dans des bols chauds, versez le bouillon filtré et disposez le poulet, les demi-œufs et les oignons nouveaux."
    ],
    conseil: "Servez dans des bols préalablement réchauffés à l'eau chaude pour que le bouillon reste brûlant jusqu'à la dernière cuillère."
  },
  {
    id: "pates-champignons-creme",
    fichier: "recette-pates-champignons-creme.html",
    titre: "Tagliatelles crémeuses aux champignons et noisettes",
    categorie: "Soir d'hiver",
    accroche: "Des rubans de pâtes enrobés d'une sauce onctueuse aux champignons sautés, persil plat et noisettes torréfiées.",
    temps: "20 min",
    difficulte: "Facile",
    portions: 4,
    image: "https://www.picard.fr/dw/image/v2/AAHV_PRD/on/demandware.static/-/Sites-catalog-picard/default/dwa1316ca3/recettes/plats/R1360.jpg?sw=672&sh=392&q=30",
    ustensiles: ["Grande casserole", "Sauteuse large"],
    ingredients: [
      { qte: 400, unite: "g", nom: "tagliatelles ou fettuccine" },
      { qte: 450, unite: "g", nom: "champignons de Paris et pleurotes" },
      { qte: 25, unite: "cl", nom: "crème liquide entière" },
      { qte: 60, unite: "g", nom: "parmesan râpé" },
      { qte: 40, unite: "g", nom: "noisettes entières torréfiées" },
      { qte: 2, unite: "gousses", nom: "ail haché" },
      { qte: 0.5, unite: "botte", nom: "persil plat frais" }
    ],
    etapes: [
      "Nettoyez et émincez les champignons. Faites-les dorer à feu vif dans une sauteuse avec un filet d'huile d'olive et une noisette de beurre.",
      "Ajoutez l'ail haché en fin de cuisson, versez la crème liquide et laissez épaissir 3 minutes à feu doux.",
      "Faites cuire les pâtes al dente dans un grand volume d'eau salée, puis transférez-les directement dans la sauteuse avec une louche d'eau de cuisson.",
      "Incorporez le parmesan, le persil ciselé et les noisettes concassées avant de servir aussitôt."
    ],
    conseil: "Ne salez les champignons qu'en fin de saisie afin qu'ils dorent au lieu de rendre leur eau."
  },
  {
    id: "mont-dor-four",
    fichier: "recette-mont-dor-four.html",
    titre: "Mont d'Or coulant rôti au four",
    categorie: "Soir d'hiver",
    accroche: "Le fromage emblématique du Haut-Doubs servi chaud dans sa boîte d'épicéa avec pommes de terre vapeur.",
    temps: "30 min",
    difficulte: "Très facile",
    portions: 4,
    image: "https://androuet.com/wp-content/uploads/2026/05/montdor-4.jpg",
    ustensiles: ["Papier aluminium", "Four", "Casserole vapeur"],
    ingredients: [
      { qte: 1, unite: "", nom: "Mont d'Or dans sa boîte en bois (env. 700 g)" },
      { qte: 1, unite: "gousse", nom: "ail pelée et coupée en lamelles" },
      { qte: 10, unite: "cl", nom: "vin blanc sec du Jura" },
      { qte: 1, unite: "kg", nom: "pommes de terre à chair ferme" },
      { qte: 1, unite: "tour", nom: "poivre noir du moulin" }
    ],
    etapes: [
      "Préchauffez le four à 200 °C. Entourez le fond et les côtés de la boîte en bois d'une feuille d'aluminium pour éviter toute fuite.",
      "Creusez un petit puits au centre du fromage, glissez-y les lamelles d'ail et versez le vin blanc.",
      "Enfournez pour 25 minutes jusqu'à ce que la croûte soit bien dorée et l'intérieur totalement liquide.",
      "Servez immédiatement au centre de la table avec les pommes de terre chaudes et une salade verte croquante."
    ],
    conseil: "Accompagnez d'une salade de mâche relevée d'une vinaigrette à la moutarde à l'ancienne pour équilibrer le fondant du fromage."
  },
  {
    id: "croziflette-reblochon",
    fichier: "recette-croziflette-reblochon.html",
    titre: "Croziflette gratinée aux lardons et reblochon",
    categorie: "Soir d'hiver",
    accroche: "Les petits carrés de pâte au sarrasin de Savoie liés à la crème et gratinés sous un demi-reblochon fermier.",
    temps: "45 min",
    difficulte: "Facile",
    portions: 4,
    image: "https://les-epices-curieuses.com/wp-content/uploads/2026/08/gratin-de-crozets-lardons-reblochon-facon-chalet-1110255.jpg",
    ustensiles: ["Plat à gratin", "Poêle", "Casserole"],
    ingredients: [
      { qte: 350, unite: "g", nom: "crozets au sarrasin" },
      { qte: 1, unite: "", nom: "reblochon fermier (env. 450 g)" },
      { qte: 200, unite: "g", nom: "lardons fumés" },
      { qte: 2, unite: "", nom: "oignons jaunes émincés" },
      { qte: 20, unite: "cl", nom: "crème fraîche épaisse" },
      { qte: 10, unite: "cl", nom: "vin blanc sec de Savoie" }
    ],
    etapes: [
      "Faites cuire les crozets 15 minutes dans l'eau bouillante salée puis égouttez-les.",
      "Faites revenir les oignons et les lardons à la poêle jusqu'à coloration, déglacez au vin blanc et ajoutez la crème fraîche.",
      "Mélangez les crozets à cette préparation dans un plat à gratin beurré.",
      "Coupez le reblochon en deux dans l'épaisseur, posez les deux moitiés croûte vers le haut et enfournez 20 minutes à 200 °C."
    ],
    conseil: "Choisissez un reblochon à pastille verte : il garantit une fabrication fermière au lait cru bien plus parfumée à la cuisson."
  },
  {
    id: "pates-epinards-miso",
    fichier: "recette-pates-epinards-miso.html",
    titre: "Pâtes aux épinards frais, miso blanc et champignons",
    categorie: "Inattendu",
    accroche: "Une sauce crémeuse végétale pleine de profondeur grâce au miso blanc, relevée d'épinards tombés et de parmesan.",
    temps: "25 min",
    difficulte: "Facile",
    portions: 4,
    image: "https://cache.marieclaire.fr/data/photo/w1200_h630_ci/6z/spaghettis-aux-poulet-epinards-champignons-et-fromage.jpg",
    ustensiles: ["Sauteuse", "Casserole", "Fouet"],
    ingredients: [
      { qte: 400, unite: "g", nom: "rigatoni ou spaghettis" },
      { qte: 250, unite: "g", nom: "pousses d'épinards frais" },
      { qte: 250, unite: "g", nom: "champignons bruns" },
      { qte: 1.5, unite: "c. à soupe", nom: "pâte de miso blanc doux" },
      { qte: 20, unite: "cl", nom: "crème liquide" },
      { qte: 50, unite: "g", nom: "parmesan râpé" },
      { qte: 1, unite: "gousse", nom: "ail râpé" }
    ],
    etapes: [
      "Faites dorer les champignons tranchés à la poêle avec un filet d'huile d'olive et l'ail râpé.",
      "Délayez le miso blanc dans la crème liquide tiède, versez sur les champignons puis ajoutez les pousses d'épinards lavées.",
      "Laissez les épinards tomber 2 minutes dans la sauce frémissante.",
      "Ajoutez les pâtes cuites al dente et le parmesan, mélangez vivement pour napper chaque pâte."
    ],
    conseil: "Goûtez avant de saler : le miso blanc et le parmesan apportent déjà une belle saveur salée naturelle."
  },
  {
    id: "veloute-potimarron-chataignes",
    fichier: "recette-veloute-potimarron-chataignes.html",
    titre: "Velouté de potimarron aux éclats de châtaignes",
    categorie: "Noël",
    accroche: "Une entrée festive douce et soyeuse, servie avec des châtaignes dorées au beurre.",
    temps: "30 min",
    difficulte: "Facile",
    portions: 4,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    ustensiles: ["Cocotte", "Mixeur plongeant"],
    ingredients: [
      { qte: 1, unite: "kg", nom: "potimarron bio" },
      { qte: 180, unite: "g", nom: "châtaignes cuites" },
      { qte: 1, unite: "", nom: "oignon doux" },
      { qte: 75, unite: "cl", nom: "bouillon de légumes" },
      { qte: 3, unite: "c. à soupe", nom: "crème fraîche épaisse" },
      { qte: 1, unite: "pincée", nom: "noix de muscade râpée" }
    ],
    etapes: [
      "Lavez le potimarron, retirez les graines et coupez-le en cubes sans l'éplucher.",
      "Faites revenir l'oignon émincé dans une cocotte avec une noisette de beurre, ajoutez le potimarron et couvrez de bouillon.",
      "Laissez mijoter 20 minutes à couvert jusqu'à ce que la chair soit fondante.",
      "Mixez finement avec la crème et la muscade, puis servez parsemé de châtaignes poêlées."
    ],
    conseil: "La peau du potimarron devient totalement fondante à la cuisson et donne une couleur orangée intense au velouté."
  },
  {
    id: "buche-chocolat-praline",
    fichier: "recette-buche-chocolat-praline.html",
    titre: "Bûche de Noël croustillante chocolat et praliné",
    categorie: "Noël",
    accroche: "Un entremets frais au praliné noisette, insert croustillant et chocolat noir.",
    temps: "1 h 15",
    difficulte: "Moyen",
    portions: 8,
    image: "https://liliebakery.fr/wp-content/uploads/2022/12/Recette-buche-praline-chocolat-croustillante-Lilie-Bakery.jpg",
    ustensiles: ["Moule à bûche", "Fouet électrique", "Spatule"],
    ingredients: [
      { qte: 200, unite: "g", nom: "chocolat noir pâtissier 70 %" },
      { qte: 150, unite: "g", nom: "pâte de praliné noisette" },
      { qte: 40, unite: "cl", nom: "crème liquide entière très froide" },
      { qte: 80, unite: "g", nom: "crêpes dentelles émiettées" },
      { qte: 60, unite: "g", nom: "chocolat au lait" },
      { qte: 30, unite: "g", nom: "noisettes torréfiées concassées" }
    ],
    etapes: [
      "Faites fondre le chocolat au lait avec le praliné, incorporez les crêpes dentelles émiettées et étalez ce croustillant sur une feuille sulfurisée.",
      "Montez la crème liquide très froide en chantilly souple et incorporez-y délicatement le reste de praliné.",
      "Versez la mousse dans le moule à bûche, déposez le rectangle croustillant par-dessus et placez au congélateur 4 heures minimum.",
      "Démoulez la bûche bien froide, nappez de chocolat noir fondu et décorez de noisettes torréfiées avant de laisser revenir 1 heure au réfrigérateur."
    ],
    conseil: "Préparez cette bûche la veille ou l'avant-veille : vous n'aurez plus qu'à la sortir du réfrigérateur au moment du dessert."
  }
];