const projectData = {
  //1
  tutora: {
    title: "Tutora",
    description: "Tutora est une application web développée pour faciliter la gestion des séances de tutorat académique dans les environnements scolaires. (2025)",
    longDescription: "Le système permet aux enseignants de publier leurs horaires de tutorat et aux étudiants de réserver des créneaux disponibles, créant ainsi un registre organisé des réservations effectuées. Ce projet a été conçu à partir d’un besoin réel identifié dans une institution éducative, dans le but d’améliorer la planification et la communication entre enseignants et étudiants. \n\n Le backend a été développé avec Django, gérant la logique principale et la gestion des utilisateurs, tandis que le frontend a été construit avec React, offrant une interface moderne et intuitive.",
    status: "Actuellement en train de travailler sur l’implémentation de JWT pour l’authentification."
  },
  //2
  dealership: {
    title: "Best Cars",
    description: "Plateforme pour consulter et publier des avis sur des concessions automobiles, avec filtres par État et gestion des utilisateurs. (2025)",
    longDescription: "Projet final de la certification professionnelle en développement full-stack. \nL’application permet aux utilisateurs d’explorer les concessions automobiles dans différentes régions des États-Unis, de lire des avis et de publier leurs propres opinions s’ils sont enregistrés. \nDocker a été utilisé pour exécuter le service backend qui gère les informations sur les concessions. Ce service, développé avec Node.js et MongoDB, fonctionne dans un conteneur, ce qui facilite sa configuration et garantit un environnement cohérent pendant le développement et le déploiement.",
    status: "Actuellement en train de travailler sur l’implémentation de JWT pour l’authentification."
  },
  //3
  plants: {
    title: "e-plant Shopping",
    description: "Frontend d’une boutique de plantes avec panier dynamique et filtre de produits. (2025)",
    longDescription: "Les utilisateurs peuvent explorer les produits, les ajouter au panier, modifier les quantités et voir le coût total mis à jour en temps réel.",
    status: "Frontend déployé."
  },
  //4
  sentAnalysis: {
    title: "Sentiment Aura Picture",
    description: "Application qui analyse le sentiment d’un texte avec NLTK et crée une animation visuelle reflétant les émotions détectées via des couleurs dynamiques. (2025)",
    longDescription: "L’utilisateur saisit un texte dans l’interface, et le backend (avec Flask) le traite avec NLTK VADER pour détecter la polarité et le type de sentiments. \nSur la base de cette analyse, le frontend (Vite + React) génère une image animée (SAP) qui change ses couleurs et son mouvement pour représenter de manière abstraite l’état émotionnel du texte. \nL’animation et le design visuel ont été créés avec Tailwind CSS. Le projet a été déployé sur Render, intégrant backend et frontend sur un seul domaine pour offrir une expérience fluide et rapide.",
    status: "En production."
  },
  //5
  onlineCourse: {
    title: "Online Course",
    description: "Site web pour l’inscription et l’évaluation des cours.",
    longDescription: ""
  },
  //6
  chatbot: {
    title: "Chatbot avec OpenAI",
    description: "Création d’un chatbot utilisant OpenAI.",
    longDescription: ""
  },
  //7
  proyectoBEL: {
    title: "Système d’Enregistrement pour Analyseurs Médicaux",
    description: "Système digital automatisé pour gérer les envois et réceptions d’analyseurs médicaux chez OCISA. (2021)",
    longDescription: "Projet final de licence développé pour l’entreprise OCISA, dans le cadre des résidences professionnelles. Il s’agit d’un système digital qui automatise l’enregistrement des envois et réceptions d’analyseurs et de simulateurs médicaux utilisés par OCISA pour la maintenance préventive à l’échelle nationale. \n\n Le système a été développé avec les outils Google Workspace : les utilisateurs remplissent un formulaire Google Forms avec l’état de l’équipement, une base de données est automatiquement générée dans Google Sheets, un dossier est créé dans Google Drive avec les preuves du trajet, un reçu PDF est généré via Google Docs, envoyé par email, et l’activité est planifiée dans Google Calendar. Tout le flux a été automatisé à l’aide de Google Apps Script. \nLe système facilite le suivi des équipements en transit, évite les pertes d’informations et réduit les erreurs manuelles, bénéficiant directement aux départements d’ingénierie biomédicale et de service.",
    status: "Implémenté avec succès et utilisé en production ; actuellement inactif en raison du manque de maintenance continue."
  },
  //8
  recetas: {
    title: "Assistant de Recettes en Java",
    description: "Système de prescription médicale digital qui connecte le médecin avec la pharmacie de l’hôpital, permettant de créer et gérer efficacement des ordonnances électroniques. (2020)",
    longDescription: "Projet académique développé en équipe de trois personnes pendant la licence en ingénierie biomédicale. \nLe système permet aux médecins de générer des ordonnances électroniques qui sont stockées dans une base de données et synchronisées avec la pharmacie de l’hôpital, facilitant le suivi de la disponibilité des médicaments et supprimant l’utilisation du papier. Il inclut des modules de connexion, d’inscription et d’identification des patients, de génération d’ordonnances et de consultation de l’inventaire des médicaments.",
    status: "Développé comme projet académique ; non déployé en production."
  },
};

export default projectData;
