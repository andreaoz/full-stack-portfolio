  // Datos de proyectos con traducciones
  const getProjects = (t) => [
    {
      id: 1,
      title: t.projectData.tutora.title,
      description: t.projectData.tutora.description,
      longDescription: t.projectData.tutora.longDescription,
      technologies: ["React", "Django", "Python", "JavaScript", "Bootstrap"],
      category: "EdTech",
      image: "/media/tutora-home.png",
      github: "https://github.com/andreaoz/tutora",
      demo:"",
      documentation: "",
      video: ""
    },
    {
      id: 2,
      title: t.projectData.dealership.title,
      description: t.projectData.dealership.description,
      longDescription: t.projectData.dealership.longDescription,
      technologies: ["React", "HTML", "CSS", "Bootstrap", "Django", "Node.js", "Express", "MongoDB", "Docker"],
      category: "Full Stack",
      image: "/media/best-cars.png",
      github: "https://github.com/andreaoz/best_cars_project.git",
      demo: "",
      documentation: "",
      video: "https://drive.google.com/file/d/1r2Lr75awTAcWWvmADS-sZLUyjjPhluy2/view?usp=sharing",
      shortVideo: "/media/BestCarsClip.MP4"
    },
    {
      id: 3,
      title: t.projectData.plants.title,
      description: t.projectData.plants.description,
      longDescription: t.projectData.plants.longDescription,
      technologies: ["React", "Vite", "Redux", "JavaScript", "CSS"],
      category: "E-commerce",
      image: "/media/plant-site.png",
      github: "https://github.com/andreaoz/e-plantShopping.git",
      demo: "https://e-plant-shopping-one-kappa.vercel.app/",
      documentation: "",
      video: "https://res.cloudinary.com/dbtvmyrts/video/upload/v1754594220/PlantsClip_vwtnlk.mp4",
      shortVideo: "https://res.cloudinary.com/dbtvmyrts/video/upload/v1754594220/PlantsClip_vwtnlk.mp4",
        },
      {
      id: 4,
      title: t.projectData.sentAnalysis.title,
      description: t.projectData.sentAnalysis.description,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "NLP",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://demo-ecommerce.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo",
      video: "https://youtube.com/watch?v=ejemplo"
    },
     {
      id: 5,
      title: t.projectData.onlineCourse.title,
      description: t.projectData.onlineCourse.description,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://demo-ecommerce.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo",
      video: "https://youtube.com/watch?v=ejemplo"
    },
         {
      id: 6,
      title: t.projectData.chatbot.title,
      description: t.projectData.chatbot.description,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "AI Integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://demo-ecommerce.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo",
      video: "https://youtube.com/watch?v=ejemplo"
    },
      {
      id: 7,
      title: t.projectData.proyectoBEL.title,
      description: t.projectData.proyectoBEL.description,
      longDescription: t.projectData.proyectoBEL.longDescription,
      technologies: ["Google Apps Script", "Google Forms", "Google Sheets", "Google Drive", "Google Docs", "Google Calendar"],
      category: "Automation",
      image: "/media/analizadores.png",
      github: "",
      demo: "",
      documentation: "https://drive.google.com/file/d/1Xs9pri7hueVuiyJrjF3bNDw4lE8oTZIe/view?usp=sharing",
      video: ""
    },
          {
      id: 8,
      title: t.projectData.recetas.title,
      description: t.projectData.recetas.description,
      longDescription: t.projectData.recetas.longDescription,
      technologies: ["Java", "MySQL", "NetBeans", "phpMyAdmin"],
      category: "HealthTech",
      image: "/media/recetas.png",
      github: "",
      demo: "",
      video: "",
      documentation: "https://drive.google.com/file/d/1RQyXuVcYjegje88488ChdGHQqZDDGN_C/view?usp=sharing"
    },
  ];

  export default getProjects;


