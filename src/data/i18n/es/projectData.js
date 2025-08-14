const projectData = {
//1
        tutora: {
          title: "Tutora",
          description: "Tutora es una aplicación web full-stack desarrollada para facilitar la gestión de asesorías académicas en entornos escolares. (2025)",
          longDescription:"El sistema permite a los docentes publicar sus horarios de asesoría y a los alumnos reservar sesiones disponibles, generando un registro organizado de las reservaciones realizadas. Este proyecto fue diseñado a partir de una necesidad real identificada en una institución educativa, con el objetivo de mejorar la planificación y comunicación entre docentes y estudiantes. \n\n El backend fue desarrollado con Django, implementando la lógica principal y la gestión de usuarios, mientras que el frontend fue construido con React, ofreciendo una interfaz moderna e intuitiva." ,
          status:"Actualmente trabajando en la implementación de JWT para autenticación."

        },
        //2
        dealership: {
          title: "Best Cars",
          description: "Plataforma para consultar y publicar reseñas de concesionarias de autos, con filtros por estado y gestión de usuarios. (2025)" ,
          longDescription:"Proyecto final de la certificación profesional en desarrollo full stack. \nLa aplicación permite a usuarios explorar concesionarias de autos en distintas regiones de EE.UU., leer reseñas y publicar sus propias opiniones si están registrados. \nSe utilizó Docker para ejecutar el servicio backend que gestiona la información de las concesionarias. Este servicio, desarrollado con Node.js y MongoDB, corre dentro de un contenedor, lo que facilita su configuración y asegura un entorno consistente durante el desarrollo y despliegue.",
          status:"Actualmente trabajando en la implementación de JWT para autenticación."
        },
        //3
        plants: {
          title: "e-plant Shopping",
          description: "Frontend de una tienda de plantas con carrito dinámico y filtro de productos. (2025)",
          longDescription:"Los usuarios pueden explorar productos, agregarlos al carrito, modificar cantidades y ver el costo total actualizado en tiempo real.",
          status:"Frontend desplegado."

        },
        //4
        sentAnalysis: {
          title: "Sentiment Aura Picture",
          description: "App que analiza el sentimiento de un texto con NLTK y crea una animación visual que refleja las emociones detectadas a través de colores dinámicos. (2025)",
          longDescription:"El usuario ingresa un texto en la interfaz, y el backend (con Flask) lo procesa con NLTK VADER para detectar la polaridad y tipo de sentimientos. \nCon base en este análisis, el frontend (Vite + React) genera una imagen animada (SAP) que cambia sus colores y movimiento para representar de manera abstracta el estado emocional del texto. \n La animación y el diseño visual fueron creados utilizando Tailwind CSS. El proyecto fue desplegado en Render, integrando backend y frontend en un solo dominio para ofrecer una experiencia continua y rápida.", 
          status:"En producción."
        },
        //5
        onlineCourse: {
          title: "Online Course",
          description: "Website para inscripción y evaluación de clases.",
          longDescription:""
        },
        //6
        chatbot: {
          title: "Chatbot con OpenAI",
          description: "Creacion de chatbot usando openAI.",
          longDescription:""
        },
        //7
        proyectoBEL: {
          title: "Sistema de Registro para Analizadores Médicos",
          description: "Sistema digital automatizado para gestionar envíos y recepciones de analizadores médicos en la empresa OCISA. (2021)",
          longDescription:"Proyecto final de carrera desarrollado para la empresa OCISA, como parte de las residencias profesionales. Consiste en un sistema digital que automatiza el registro de envío y recepción de analizadores y simuladores médicos utilizados por OCISA en sus mantenimientos preventivos a nivel nacional. \n\n El sistema fue desarrollado con herramientas de Google Workspace: los usuarios llenan un formulario en Google Forms con el estado del equipo, se genera automáticamente una base de datos en Google Sheets, se crea una carpeta en Google Drive con la evidencia del trayecto, se genera un comprobante en PDF mediante Google Docs, se envía por correo, y se agenda la actividad en Google Calendar. Todo el flujo fue automatizado utilizando Google Apps Script. \nEl sistema facilita el control de los equipos en tránsito, evita pérdidas de información y reduce errores manuales, beneficiando directamente al departamento de ingeniería biomédica y de servicio.",
          status:"Implementado con éxito y utilizado en producción; actualmente inactivo por falta de mantenimiento continuo."
        },
        //8
        recetas: {
          title: "Asistente de Recetas en Java",
          description: "Sistema de prescripción médica digital que conecta al médico con la farmacia del hospital, permitiendo generar y gestionar recetas electrónicas de forma eficiente. (2020)",
          longDescription:"Proyecto académico desarrollado en equipo de tres personas durante la carrera de Ingeniería Biomédica. \n El sistema permite a médicos generar recetas electrónicas que se almacenan en una base de datos y se sincronizan con la farmacia del hospital, facilitando el seguimiento de disponibilidad de medicamentos y evitando el uso de papel. Incluye módulos de inicio de sesión, alta e identificación de pacientes, generación de recetas, visualización e inventario de medicamentos.",
          status: "Desarrollado como proyecto académico; sin implementación en producción."
        },
};

export default projectData;