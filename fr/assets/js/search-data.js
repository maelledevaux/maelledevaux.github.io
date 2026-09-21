
const currentUrl = window.location.href;
const siteUrl = "https://maelledevaux.github.io";
let updatedUrl = currentUrl.replace("https://maelledevaux.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-à-propos",
    title: "à propos",
    section: "Menu de navigation",
    handler: () => {
      window.location.href = "/fr/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Menu de navigation",
          handler: () => {
            window.location.href = "/fr/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "notes, avancées et réflexions sur mes travaux de recherche",
          section: "Menu de navigation",
          handler: () => {
            window.location.href = "/fr/blog/";
          },
        },{id: "nav-enseignement",
          title: "enseignement",
          description: "Voici la liste des mes activités de monitorat.",
          section: "Menu de navigation",
          handler: () => {
            window.location.href = "/fr/teaching/";
          },
        },{id: "post-youtube",
        
          title: "YouTube",
        
        description: "la chaîne dédiée à mon activité de recherche",
        section: "Articles",
        handler: () => {
          
            window.location.href = "/fr/blog/2026/youtube-project/";
          
        },
      },{id: "news-ce-site-entre-en-développement-computer",
          title: 'Ce site entre en développement. :computer:',
          description: "",
          section: "Actualités",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projets",handler: () => {
              window.location.href = "/fr/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'Envoyer un email',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open("mailto:%6D%61%65%6C%6C%65%64%65%76%61%75%78@%75%6E%69%73%74%72%61.%66%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/maelle-devaux", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=msj95QcAAAAJ", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Réseaux sociaux',
        handler: () => {
          window.open("https://youtube.com/@maelledevaux", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Passer au thème clair',
      description: 'Change le thème du site en clair',
      section: 'Thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Passer au thème sombre',
      description: 'Change le thème du site en sombre',
      section: 'Thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Utiliser le thème du système',
      description: 'Change le thème du site selon les préférences du système',
      section: 'Thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
