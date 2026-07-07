// **********************fitre des projet par categorie***************************************************

const boutons = document.querySelectorAll(".filtre");
const projets = document.querySelectorAll(".projet");

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {

        document.querySelector(".actif").classList.remove("actif");
        bouton.classList.add("actif");

        const filtre = bouton.dataset.filter;

        projets.forEach(projet => {

            if (filtre === "all" || projet.dataset.category === filtre) {
                projet.style.display = "block";
            } else {
                projet.style.display = "none";
            }

        });

    });
});