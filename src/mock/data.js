import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Javier Ignacio Quinteros | Desarrollador',
  lang: 'es',
  description: 'Buscabas un Desarrollador Fullstack?',
};

// HERO DATA
export const heroData = {
  title: 'Primero que nada... ',
  name: 'buenas tardes!',
  subtitle: 'Buscabas un Desarrollador Fullstack?',
  cta: 'NO hagas click aquí!',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatarHigh.webp',
  paragraphOne:
    'Una pregunta difícil, <--- escribí eso y ahí me quedé, congelado, y es que a cualquiera le pasa, tantas ideas me vienen a la mente y no me decido que poner.',
  paragraphTwo:
    'Lo primero, soy sincero, pero también soy hermano, hijo, amigo, estudiante,  y si estás buscando un desarrollador fullstack, entonces justamente soy a quien buscas.',
  paragraphThree:
    'Sobre todo si tienes una oferta de trabajo que involucre un equipo diverso y comprometido con la creación de productos tecnológicos orientados a mejorar la calidad de vida de la comunidad. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Soporte técnico y capacitaciones',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mantención y mejora continua',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Desarrollo de productos tecnológicos multiplataforma',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Siempre estoy escuchando buenas ideas',
  btn: 'ENVÍAME UN CORREO',
  email: 'javier@nora.cl',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
