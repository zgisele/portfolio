// **********************fitre des projet par categorie***************************************************
const filtres = document.querySelectorAll(".filtre");
const carte_projets = document.querySelectorAll(".carte_projet");

filtres.forEach(filtre => {
    filtre.addEventListener("click", () => {

        // Met à jour le bouton actif
        document.querySelector(".filtre.actif").classList.remove("actif");
        filtre.classList.add("actif");

        // Récupère la catégorie
        const categorie = filtre.dataset.filter;

        carte_projets.forEach(projet => {

            if (categorie === "all" || projet.dataset.category === categorie) {
                projet.style.display = "block";
            } else {
                projet.style.display = "none";
            }

        });

    });
});

// ***************telecharger un cv*********************************************
const btnCV = document.getElementById("telechargeCv");

if (btnCV) {
    btnCV.addEventListener("click", function () {
        const lien = document.createElement("a");

        lien.href = "assets/images/CV_zoundete_k_gisele.pdf";
        lien.download = "CV-Gisele-Zoundete.pdf";

        document.body.appendChild(lien);
        lien.click();
        document.body.removeChild(lien);
    });
}

// ************************************Navigation avec le menu hamberger***************************

const menuHamburger = document.getElementById("menuHamburger");
const menuMobile = document.getElementById("menu");

if (menuHamburger && menuMobile) {
    menuHamburger.addEventListener("click", () => {
        menuMobile.classList.toggle("active");
    });
}
// **************************validation formulaire********************************************

        const formulaire = document.querySelector(".contact-form");

        if (formulaire) {
            formulaire.addEventListener("submit", (e) => {
                e.preventDefault();
            // });
      
    // Récupération des valeurs
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const messageErreur = document.getElementById("messageErreur");


    // Vérification des champs vides
    if(nom === "" || email === "" || message === "") {

        messageErreur.textContent = "Veuillez remplir tous les champs.";
        messageErreur.style.color = "red";

        return;
    }


    // Vérification de l'adresse email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regexEmail.test(email)) {

        messageErreur.textContent = "Veuillez entrer une adresse email valide.";
        messageErreur.style.color = "red";

        return;
    }


    // Si tout est correct
    messageErreur.textContent = "Votre message a été envoyé avec succès !";
    messageErreur.style.color = "green";


    // Réinitialiser le formulaire
    formulaire.reset();

});
  }


// ***************************fenêtre modale*************************************


const projets = {
    echo: {
        titre: "Echo App",
        image: "assets/images/app.jpg",
        description: "Application de streaming audio avec une interface moderne.",
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "https://monsite.com"
    },

    datavizu: {
        titre: "DataVizu",
        image: "assets/images/data.svg",
        description: "Dashboard interactif pour l'analyse des données.",
        technologies: ["HTML", "CSS", "Chart.js"],
        lien: "https://monsite.com"
    },

    fashion: {
        titre: "Fashion Store",
        image: "assets/images/fashion.svg",
        description: "Boutique e-commerce spécialisée dans la mode éthique.",
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "https://monsite.com"
    },
     portfolio: {
        titre: "Portfolio Personnel",
        image: "assets/images/portfolio.svg",
        description: "Site vitrine responsive présentant mon parcours, mes compétences et mes réalisations.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        lien: "https://monsite.com"
    },

    restaurant: {
        titre: "Site Restaurant",
        image: "assets/images/meal.svg",
        description: "Site web responsive permettant de présenter un restaurant, son menu, ses services et son système de réservation.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        lien: "https://monsite.com"
    },

    landing: {
        titre: "Landing Page",
        image: "assets/images/landing.svg",
        description: "Page d'accueil moderne conçue pour présenter un produit ou un service avec une interface claire et attractive.",
        technologies: ["HTML", "CSS", "JavaScript", "UI Design"],
        lien: "https://monsite.com"
    }
};

const modal = document.getElementById("modal");

document.querySelectorAll(".voir-projet").forEach(bouton => {

    bouton.addEventListener("click", function(e){

        e.preventDefault();

        const projet = projets[this.dataset.project];
        if(!projet){
            console.error("Projet introuvable :", this.dataset.project);
            return;
        }

        document.getElementById("modal-title").textContent = projet.titre;
        document.getElementById("modal-image").src = projet.image;
        document.getElementById("modal-description").textContent = projet.description;
        document.getElementById("modal-link").href = projet.lien;

        const liste = document.getElementById("modal-tech");
        liste.innerHTML = "";

        projet.technologies.forEach(tech => {
            const li = document.createElement("li");
            li.textContent = tech;
            liste.appendChild(li);
        });

        modal.style.display = "flex";

    });

});

// document.querySelector(".close").addEventListener("click", () => {
//     modal.style.display = "none";
// });
const closeBtn = document.querySelector(".close");

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});