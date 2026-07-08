// **********************fitre des projet par categorie***************************************************

// const boutons = document.querySelectorAll(".filtre");
// const projets = document.querySelectorAll(".projet");

// boutons.forEach(bouton => {
//     bouton.addEventListener("click", () => {

//         document.querySelector(".actif").classList.remove("actif");
//         bouton.classList.add("actif");

//         const filtre = bouton.dataset.filter;

//         projets.forEach(projet => {

//             if (filtre === "all" || projet.dataset.category === filtre) {
//                 projet.style.display = "block";
//             } else {
//                 projet.style.display = "none";
//             }

//         });

//     });
// });


// const hamburger = document.querySelector(".menu_hamburger");
// const menu = document.querySelector("nav");

// hamburger.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });


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