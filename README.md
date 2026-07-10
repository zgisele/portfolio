1. **Nom du projet** : Portfolio de développeur web junior

2. **Auteur** : Gisèle ZOUNDETE

3. **Description**



Ce projet est un portfolio web responsive réalisé dans le cadre de l'Activité 2. Il permet de présenter le profil d'un développeur web junior, ses compétences, ses projets et un formulaire de contact.



4\. **Technologies utilisées**



* HTML5
* CSS3 (Flexbox, Grid et Media Queries)
* JavaScript
* Figma (Wireframe et Prototype)





5\. **Instructions d'utilisation**



* Décompresser le fichier ZIP.
* Ouvrir le dossier du projet.
* Lancer le fichier index.html dans un navigateur web.
* Utiliser le menu de navigation pour accéder aux différentes sections.
* Cliquer sur « Voir plus » pour consulter les détails d'un projet.
* Tester l'affichage sur ordinateur, tablette et mobile afin de vérifier le comportement responsive.







\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*



6\. **Mini-rapport Qualité**

&#x20;

plan



1\) Accessibilité - Problème : …

Correction : …

Résultat : …

2\) Performance - Problème : …

Correction : …

Résultat : …

3\) Corrections/robustesse

\- Problème : …

Correction : …

Résultat : …







1\) Accessibilité



Problème :



Certaines images n’avaient pas toujours des descriptions adaptées pour les utilisateurs utilisant des lecteurs d’écran.

Les champs du formulaire n’étaient pas tous correctement associés à leurs labels.

La navigation mobile avec le menu hamburger n’était pas suffisamment accessible.



Correction :



Ajout des attributs alt et title sur les images pour décrire leur contenu.

Ajout des attributs id sur les champs du formulaire et utilisation de for dans les balises <label> pour améliorer l’association entre les labels et les champs.

Mise en place d’un menu hamburger responsive avec une gestion JavaScript permettant d’afficher et masquer le menu sur mobile.



Résultat :



Le site est plus compréhensible pour les outils d’assistance.

La navigation est plus intuitive sur mobile.

Le formulaire est plus facile à utiliser et plus conforme aux bonnes pratiques d’accessibilité.





2\) Performance



Problème :



Les images utilisées dans le site pouvaient ralentir le chargement des pages si leur taille était trop importante.

Le fichier CSS contenait plusieurs règles répétées, notamment dans les media queries responsive.

Certains éléments étaient chargés sans optimisation particulière.



Correction :



Utilisation d’images optimisées au format SVG pour les icônes et illustrations afin de réduire le poids des fichiers.

Réorganisation du CSS en supprimant les répétitions et en regroupant les règles responsive.

Limitation des effets visuels lourds et utilisation d’une structure HTML simple avec peu de dépendances externes.



Résultat :



Temps de chargement amélioré.

Code CSS plus léger et plus facile à maintenir.

Meilleure expérience utilisateur sur ordinateur et mobile.





3\) Corrections / Robustesse



Problème :



Le script JavaScript pouvait provoquer des erreurs lorsque certains éléments n’étaient pas présents sur une page (exemple : formulaire absent sur la page projets).

La validation du formulaire était limitée et ne vérifiait pas tous les cas possibles.

Le menu hamburger et le téléchargement du CV nécessitaient une gestion plus sécurisée.



Correction :



Ajout de vérifications conditionnelles avant l’utilisation des éléments JavaScript (if (element)) pour éviter les erreurs dans la console.

Mise en place d’une validation JavaScript du formulaire : champs obligatoires, format de l’adresse email et messages d’erreur.

Ajout d’une gestion dynamique du bouton de téléchargement du CV et du menu mobile.



Résultat :



Réduction des erreurs JavaScript lors de l’utilisation du site.

Formulaire plus fiable avec un meilleur retour utilisateur.

Fonctionnalités interactives plus stables sur les différentes pages du site.



