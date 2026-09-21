
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
          section: "Actualités",},{
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
