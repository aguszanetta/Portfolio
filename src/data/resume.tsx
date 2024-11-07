import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Agustin Ivan Zanetta",
  initials: "AIZ",
  url: "https://agustinzanetta.com",
  location: "La Plata, Buenos Aires",
  locationLink: "https://maps.app.goo.gl/errATmJFH96bDFc59",
  description:
    " Ingeniero en Sistemas de Información y Developer Web. \
    Me apasiona el mundo de la programación y me encanta enfrentar desafíos que me permitan seguir aprendiendo y creciendo profesionalmente 🚀.",
  summary:
    "Me considero una persona responsable, proactiva y resolutiva, siempre dispuesto a aportar soluciones innovadoras en los proyectos que desarrollo. \
    Disfruto trabajar en equipo, adaptarme a los cambios y aprender en el camino para lograr resultados eficientes y de alto impacto. \
    Actualmente, estoy en busca de oportunidades como Desarrollador Backend, Frontend, o roles como Analista Funcional / De Sistemas y Tester.",
  avatarUrl: "/Perfil.png",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "Node Js",
    "Express Js",
    "React Native",
    "MySQL",
    "MariaDB",
    "Bootstrap",
    "Socket.io",
    "API REST",
    "JIRA"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aguszanetta8@gmail.com",
    tel: "+54 2215754448",
    social: {
      CV: {
        name: "CV",
        url: "/CV Agustin Ivan Zanetta.pdf",
        icon: Icons.cv,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/agustin-ivan-zanetta/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aguszanetta",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "aguszanetta8@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/laptop.png",
      start: "Marzo 2021",
      end: "Actualidad",
      description:
        "Desde 2021, junto a dos amigos, trabajo como desarrollador freelance enfocado en la creación de sistemas de gestión web. \
        En cada proyecto, me encargo de la comunicación con el cliente, elicitación de requerimientos, desarrollo backend y frontend, \
        diseño de bases de datos, testeo manual, configuración de hosting, y puesta en producción. \
        También gestionamos el mantenimiento del sistema y la incorporación de nuevas funcionalidades según las necesidades del cliente.",
    },
    {
      company: "Carestino",
      badges: [],
      href: "https://carestino.com",
      location: "Híbrido",
      title: "Analista de Business Technology",
      logoUrl: "/Carestino.png",
      start: "Julio 2023",
      end: "Junio 2024",
      description:
        "Documentación, gestión y pruebas manuales de requerimientos. Análisis de procesos. \
        Participación en el aseguramiento de la calidad de los desarrollos solicitados. \
        Capacitación a los usuarios sobre el sistema de gestión. Comunicación de releases a los usuarios.",
    }
  ],
  education: [
    {
      id: 1,
      school: "Universidad Tecnológica Nacional",
      href: "http://www.frlp.utn.edu.ar/",
      degree: "Ingeniería en Sistemas de Información",
      logoUrl: "/utn.png",
      start: "2018",
      end: "2023",
      description:
        "Elegí esta carrera porque desde que tenia 16 años me interesaba e intrigaba todo lo que había detras de un sitio web o un juego de computadora. \
        Una vez dentro de la universidad, mientras cursaba los primeros años me di cuenta que el área que mas me gustaba era la programación. \
        Considero que fue una gran etapa en mi vida de la que me llevé aprendizajes, experiencias y amigos."
    },
    /*{
      school: "EF SET",
      href: "https://www.efset.org//",
      degree: "English Certificate 43/100 (B1 Intermediate)",
      logoUrl: "/waterloo.png",
      start: "2024",
      end: "2024",
    },*/
    {
      id: 2,
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "SQL: Creación de Bases de Datos",
      logoUrl: "/udemy2.png",
      start: "2021",
      end: "2021",
      description:
        "Este curso me permitió profundizar en los conceptos fundamentales de las bases de datos,\
         proporcionándome una comprensión más detallada sobre su estructura, diseño y optimización. \
         Aprendí a crear y gestionar bases de datos relacionales utilizando SQL, a establecer relaciones entre tablas, \
         y a implementar consultas eficientes. Además, adquirí las habilidades necesarias para organizar y almacenar grandes \
         volúmenes de datos de manera efectiva, lo que me permitió desarrollar soluciones más robustas y escalables para aplicaciones web."
    },
    {
      id: 3,
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "PHP 7 y MySQL",
      logoUrl: "/udemy.png",
      start: "2021",
      end: "2021",
      description:
        "Además de aprender sobre el desarrollo frontend, quise expandir mis habilidades hacia el desarrollo backend y la gestión de bases de datos. \
        Esto me motivó a estudiar PHP 7 y MySQL, con el objetivo de comprender cómo crear aplicaciones web dinámicas y escalables. \
        A través de este curso, aprendí a integrar bases de datos con el servidor, a gestionar la comunicación entre el frontend y el backend, \
        y a construir sistemas web completos, funcionales y optimizados."
    },
    {
      id: 4,
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Diseño Web Profesional",
      logoUrl: "/udemy.png",
      start: "2020",
      end: "2020",
      description:
        "Mi interés por el diseño y desarrollo web surgió a medida que fui descubriendo el área de la programación y sus distintas ramas. \
        Motivado por esa curiosidad, decidí profundizar mis conocimientos a través de un curso especializado, \
        donde adquirí habilidades clave en diseño visual, usabilidad y desarrollo frontend, con el objetivo de crear sitios web funcionales, \
        atractivos y accesibles."
    },
  ],
  projects: [
    {
      title: "Nimbus Salud",
      href: "https://www.nimbussalud.com.ar/",
      dates: "Marzo 2021 - Diciembre 2022",
      active: true,
      description:
        "Desarrollé un sistema de gestión para Nimbus Salud, dirigido a asociaciones y círculos médicos, permitiendo la carga de novedades, \
        gestión de convenios, facturación y liquidación de médicos. \
        Los profesionales médicos pueden acceder al sistema para consultar esta información de manera segura y organizada.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "PHP",
        "MariaDB",
        "Bootstrap"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.nimbussalud.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/NimbusSalud.png",
      //video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Chacabuco Entregas SH",
      href: "https://www.chacabucoentregas.com.ar/",
      dates: "June 2021 - Junio 2022",
      active: true,
      description:
        "Desarrollé un sistema de gestión para Chacabuco Entregas, una empresa dedicada al servicio de entrega de cereales y oleaginosos. \
        La plataforma permite a la empresa gestionar sus pedidos diarios de forma digital, \
        reemplazando el sistema anterior basado en archivos de Excel, \
        lo que mejora la organización y accesibilidad de la información tanto para la empresa como para sus clientes.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "PHP",
        "MariaDB",
        "Bootstrap"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.chacabucoentregas.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
        /*{
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },*/
      ],
      image: "/ChacabucoEntregas.png",
      //video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Parabrisas 141",
      href: "https://llm.report",
      dates: "Septiembre 2023 - Actualidad",
      active: true,
      description:
        "Desarrollé un sistema de gestión para Parabrisas 141, un taller especializado en la reparación de vehículos. \
        La plataforma permite gestionar los turnos diarios, controlar el stock de cristales y mantener una lista de precios actualizada. \
        También facilita el pedido de cristales a la distribuidora, digitalizando los procesos que anteriormente se gestionaban en papel y Excel, \
        lo que ayudó a mejorar la organización y eficiencia del taller",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "PHP",
        "MariaDB",
        "Bootstrap"
      ],
      links: [
        {
          type: "Website",
          href: "https://parabrisas141.com.ar/",
          icon: <Icons.globe className="size-3" />,
        },
        /*{
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },*/
      ],
      image: "/Parabrisas141.png",
      //video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Betaglass S.A.",
      href: "https://automatic.chat",
      dates: "Enero 2022 - Actualidad",
      active: true,
      description:
        "Desarrollé una plataforma web para Beta Glass, una distribuidora de cristales. La plataforma permite a productores de seguros, \
        talleres colocadores, y aseguradoras de toda Argentina gestionar pedidos de cristales en caso de siniestros. \
        Facilita el seguimiento de cada pedido y optimiza la comunicación entre los diferentes actores, \
        reduciendo errores y mejorando la eficiencia del proceso.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Node Js",
        "Express Js",
        "MariaDB",
        "Bootstrap",
        "Socket.io",
        "JWT"
      ],
      links: [
        {
          type: "Website",
          href: "https://betaglass.com.ar",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Betaglass.png",
      //video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
