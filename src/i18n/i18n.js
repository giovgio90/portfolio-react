import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        HOME: "HOME",
        "ABOUT ME": "ABOUT ME",
      },
    },
    it: {
      translation: {
        HOME: "HOME",
        "ABOUT ME": "SU DI ME",
        PORTFOLIO: "PORTFOLIO",
        CONTACT: "CONTATTI",
        Welcome: "Benvenuti",
        to: "nel",
        my: "mio",
        "Profile.": "Profilo.",
        "My Curriculum Vitae": "Il mio Curriculum Vitae",

        "Who is Giovanni Giordano": "Chi è Giovanni Giordano",

        "Hello! I'm a passionate Front-End Developer successfully completing the course at EPICODE,":
          "Ciao a tutti! Sono un appassionato sviluppatore Front-End che ha completato con successo il corso presso EPICODE,",

        "where I've gained advanced skills in the world of web development.":
          "dove ho acquisito competenze avanzate nel mondo dello sviluppo web.",

        "My passion for aesthetically pleasing and functional design has driven me to delve deeper":
          "La mia passione per il design esteticamente gradevole e funzionale mi ha spinto",

        "into my abilities in HTML, CSS, and JavaScript, transforming ideas into":
          "ad approfondire le mie capacità in HTML, CSS e JavaScript, trasformando le idee in",

        "incredible digital experiences.": "incredibili esperienze digitali.",

        "My educational journey has allowed me to dive into the intricacies of Front-End development, exploring the":
          "Il mio percorso formativo mi ha permesso di immergermi nelle complessità dello sviluppo front-end, esplorando la",

        "creation of engaging and optimized user interfaces. I've solidified my knowledge in using the Bootstrap":
          "creazione di interfacce utente coinvolgenti e ottimizzate. Ho consolidato le mie conoscenze nell'utilizzo del framework Bootstrap",

        "framework and React library, harnessing their potential to develop responsive and interactive interfaces.":
          "e la libreria React, sfruttando il loro potenziale per sviluppare interfacce reattive e interattive.",

        "Throughout the course, I've had the opportunity to work on complex projects, honing my skills in":
          "Durante il corso ho avuto l'opportunità di lavorare su progetti complessi, affinando le mie capacità di",

        "problem-solving and adapting to various challenges. Collaborating with other development enthusiasts has":
          "risoluzione dei problemi e di adattamento alle varie sfide. La collaborazione con altri colleghi di sviluppo mi ha",

        "helped me understand the importance of communication and synergy within a team.":
          "aiutato a capire l'importanza della comunicazione e della sinergia all'interno di un team.",

        "I'm constantly seeking new opportunities to apply and deepen my skills, continuing to grow both":
          "Sono costantemente alla ricerca di nuove opportunità per applicare e approfondire le mie competenze, continuando a crescere sia",

        "professionally and personally in the vast world of front-end development.":
          " professionalmente nel vasto mondo dello sviluppo front-end.",

        "Thank you for taking the time to get to know a bit about me!":
          "Grazie per aver trovato il tempo di conoscere un po' di me!",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
