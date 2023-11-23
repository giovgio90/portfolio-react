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

        "The TravelStay platform offers simplified reservations for travel and stays, with reviews and tools to facilitate travel planning.":
          "La piattaforma TravelStay offre prenotazioni semplificate per viaggi e soggiorni, con recensioni e strumenti per facilitare la pianificazione del viaggio",

        "Watch it on GitHub": "Guarda su GitHub",

        "The Weather app provides accurate and local weather forecasts with a user-friendly interface for quick reference of weather conditions.":
          "La Weather app fornisce previsioni meteo accurate e locali con un'interfaccia facile da usare per una rapida consultazione delle condizioni meteo",

        "I created a Netflix clone with a visual interface as similar as possible to the original.":
          "Ho creato un clone di Netflix con un'interfaccia visiva il più possibile simile all'originale",

        "I developed a clone of Medium faithful in interface, integrating similar functionality to the original for the navbar.":
          "Ho sviluppato un clone di Medium fedele nell'interfaccia, integrando funzionalità simili all'originale per la navbar",

        "CONTACT ME": "CONTATTAMI",

        "If you are interested in collaboration, have questions, or would like to discuss job opportunities, please feel free to contact me!":
          "Se sei interessato/a ad una collaborazione, hai domande o vuoi discutere di opportunità di lavoro, contattami ai seguenti indirizzi!",

        "Or send me a message and I will get back to you as soon as possible":
          "Oppure mandami un messaggio e ti risponderò il prima possibile",

        NAME: "NOME",
        MESSAGE: "MESSAGGIO",
        SEND: "INVIA",

        "Every line of code is an opportunity, a digital brush for painting interactive worlds and transform the ordinary into the extraordinary.":
          "Ogni riga di codice è un'opportunità, un pennello digitale per dipingere mondi interattivi e trasformare l'ordinario in straordinario",

        "Insert your message": "Inserisci il tuo messaggio",
        "Insert your email": "Inserisci la tua email",
        "Insert your name": "Inserisci il tuo nome",
        "Available for work": "Disponibile lavorativamente",
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
