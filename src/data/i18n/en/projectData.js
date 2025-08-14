const projectData = {
//1
    tutora: {
      title: "Tutora",
      description: "Tutora is a web application developed to facilitate the management of academic tutoring in schools. (2025)",
      longDescription: "The system allows teachers to post their tutoring schedules and students to book available sessions, generating an organized record of reservations. This project was designed based on a real need identified in an educational institution, with the aim of improving planning and communication between teachers and students. \n\n The backend was developed with Django, implementing the main logic and user management, while the frontend was built with React, offering a modern and intuitive interface.",
      status: "Currently working on implementing JWT for authentication."
    },
    //2
    dealership: {
      title: "Best Cars",
      description: "Platform to search and publish car dealership reviews, with state filters and user management. (2025)",
      longDescription: "Final project of the professional certification in full stack development. The application allows users to explore car dealerships in different regions of the U.S., read reviews, and post their own opinions if registered. \n\nDocker was used to run the backend service that manages dealership information. This service, developed with Node.js and MongoDB, runs inside a container, which facilitates its configuration and ensures a consistent environment during development.",
      status: "Currently working on implementing JWT for authentication."
    },
    //3
    plants: {
      title: "e-plant Shopping",
      description: "Frontend for a plant shop with a dynamic cart and product filter. (2025)",
      longDescription: "Users can browse products, add them to the cart, update quantities, and see the total cost updated in real-time.",
      status: "Frontend deployed."
    },
    //4
    sentAnalysis: {
      title: "Sentiment Aura Picture",
      description: "App that analyzes the sentiment of a text using NLTK and creates a visual animation reflecting the detected emotions through dynamic colors. (2025)",
      longDescription: "The user enters a text into the interface, and the backend (built with Flask) processes it using NLTK VADER to detect polarity and sentiment types. \nBased on this analysis, the frontend (Vite + React) generates an animated image (SAP) that changes its colors and movement to abstractly represent the emotional state of the text. \nThe animation and visual design were created using Tailwind CSS. The project was deployed on Render, integrating backend and frontend into a single domain to provide a smooth and fast experience.",
      status: "In production."
    },
    //5
    onlineCourse: {
      title: "Online Course",
      description: "Website for class registration and evaluation.",
      longDescription: ""
    },
    //6
    chatbot: {
      title: "Chatbot with OpenAI",
      description: "Chatbot creation using OpenAI.",
      longDescription: ""
    },
    //7
    proyectoBEL: {
      title: "Registration System for Medical Analyzers",
      description: "Automated digital system to manage shipments and receptions of medical analyzers at OCISA. (2021)",
      longDescription: "Project developed for the company OCISA, as part of professional residencies. It consists of a digital system that automates the registration of shipment and reception of analyzers and medical simulators used by OCISA in preventive maintenance nationwide. \n\n The system was developed with Google Workspace tools: users fill out a Google Forms form with the equipment status, a database is automatically generated in Google Sheets, a folder in Google Drive is created with evidence of the shipment, a PDF receipt is generated via Google Docs, it is sent by email, and the activity is scheduled in Google Calendar. The entire workflow was automated using Google Apps Script. \nThe system facilitates equipment tracking, prevents information loss, and reduces manual errors, directly benefiting the biomedical engineering and service departments.",
      status: "Successfully implemented and used in production; currently inactive due to lack of ongoing maintenance."
    },
    //8
    recetas: {
      title: "Java Prescription Assistant",
      description: "Digital medical prescription system that connects the doctor with the hospital pharmacy, enabling efficient creation and management of electronic prescriptions. (2020)",
      longDescription: "Academic project developed by a team of three people during the Biomedical Engineering degree. \nThe system allows doctors to create electronic prescriptions that are stored in a database and synchronized with the hospital pharmacy, making it easier to track medication availability and eliminating the use of paper. It includes modules for login, patient registration and identification, prescription generation, and medication inventory viewing.",
      status: "Developed as an academic project; not implemented in production."
    },
};

export default projectData;
