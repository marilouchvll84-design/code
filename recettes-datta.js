// Liste complète des recettes affichées sur le site
const RECETTES = [
  // Magret de canard rôti à l'orange et au miel
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

  // Volaille rôtie de Noël aux marrons
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
    conseil: "Glissez un peu de beurre aux herbes directement sous la