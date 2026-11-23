document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nouvelle-tache");
  const btnAjouter = document.getElementById("btn-ajouter");
  const liste = document.getElementById("liste-taches");

  if (!input || !btnAjouter || !liste) return;

  const CLE_STOCKAGE = "boite_a_recettes_liste_courses";
  let aliments = JSON.parse(localStorage.getItem(CLE_STOCKAGE) || "[]");

  // Barre d'outils au-dessus de la liste (compteur + vider cochés)
  const barreOutils = document.createElement("div");
  barreOutils.className = "liste-outils";
  liste.parentNode.insertBefore(barreOutils, liste);

  function sauvegarder() {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(aliments));
  }

  function afficherListe() {
    const restants = aliments.filter((item) => !item.fait).length;
    const faits = aliments.length - restants;

    if (aliments.length === 0) {
      barreOutils.innerHTML = "";
      liste.innerHTML = '<li class="liste-vide">Votre liste de courses est vide pour le moment.</li>';
      return;
    }

    barreOutils.innerHTML = `
      <span class="compteur-courses">${restants} article${restants > 1 ? "s" : ""} à prendre (${aliments.length} au total)</span>
      ${faits > 0 ? '<button type="button" id="btn-vider-faits" class="btn-texte-rouge">Retirer les articles cochés</button>' : ""}
    `;

    liste.innerHTML = aliments
      .map(
        (item, index) => `
        <li class="item-course ${item.fait ? "est-fait" : ""}">
          <label class="label-course">
            <input type="checkbox" data-index="${index}" ${item.fait ? "checked" : ""}>
            <span class="texte-course">${item.nom}</span>
          </label>
          <button type="button" class="btn-supprimer" data-index="${index}" aria-label="Supprimer ${item.nom}">Supprimer</button>
        </li>
      `
      )
      .join("");

    const btnViderFaits = document.getElementById("btn-vider-faits");
    if (btnViderFaits) {
      btnViderFaits.addEventListener("click", () => {
        aliments = aliments.filter((item) => !item.fait);
        sauvegarder();
        afficherListe();
      });
    }
  }

  function ajouterAliment() {
    const valeur = input.value.trim();
    if (!valeur) return;

    aliments.push({
      nom: valeur,
      fait: false
    });

    sauvegarder();
    afficherListe();
    input.value = "";
    input.focus();
  }

  btnAjouter.addEventListener("click", ajouterAliment);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ajouterAliment();
    }
  });

  liste.addEventListener("change", (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
      const idx = Number(e.target.dataset.index);
      if (aliments[idx]) {
        aliments[idx].fait = e.target.checked;
        sauvegarder();
        afficherListe();
      }
    }
  });

  liste.addEventListener("click", (e) => {
    if (e.target.matches(".btn-supprimer")) {
      const idx = Number(e.target.dataset.index);
      aliments.splice(idx, 1);
      sauvegarder();
      afficherListe();
    }
  });

  afficherListe();
});