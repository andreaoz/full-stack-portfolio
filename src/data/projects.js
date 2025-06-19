  // Datos de proyectos con traducciones
  const getProjects = (t) => [
    {
      id: 1,
      title: t.projectData.tutora.title,
      description: t.projectData.tutora.description,
      technologies: ["React", "Django", "Python", "JavaScript"],
      category: "Full Stack",
      image: "https://www.shutterstock.com/image-vector/green-blackboard-math-formulas-chalk-600nw-2403570639.jpg",
      github: "https://github.com/tuusuario/social-dashboard",
      demo: "https://social-dashboard-demo.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo3",
      video: "https://youtube.com/watch?v=ejemplo3"
    },
    {
      id: 2,
      title: t.projectData.taskApp.title,
      description: t.projectData.taskApp.description,
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/task-app",
      demo: "https://task-app-demo.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo2",
      video: "https://youtube.com/watch?v=ejemplo2"
    },
    {
      id: 3,
      title: t.projectData.socialDashboard.title,
      description: t.projectData.socialDashboard.description,
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/social-dashboard",
      demo: "https://social-dashboard-demo.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo3",
      video: "https://youtube.com/watch?v=ejemplo3"
    },
    {
      id: 4,
      title: t.projectData.ecommerce.title,
      description: t.projectData.ecommerce.description,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://demo-ecommerce.vercel.app",
      documentation: "https://docs.google.com/document/d/ejemplo",
      video: "https://youtube.com/watch?v=ejemplo"
    }
  ];

  export default getProjects;