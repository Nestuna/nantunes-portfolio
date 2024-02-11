import { Experience, Project, Skill } from './types'

export const about = `
Auparavant professionnel dans le médico-social, je me suis vite intéressé à l’informatique en autodidacte.
A la recherche de nouveaux défis, j’ai entrepris de reprendre des études en informatique qui aboutit á l’obtention de mon titre. Je suis donc maintenant un développeur avec des soft skills développés de par mon background, et de bonnes compétences techniques acquis lors de mon expérience en alternance.
`

// image name must correspond to skill name : /images/[skill].png
export const skills: Skill[] = [
  { name: 'typescript' },
  { name: 'angular' },
  { name: 'react' },
  { name: 'jest' },
  { name: 'webdriverio', title: 'Webdriver I/O' },
  { name: 'python' },
  { name: 'django' },
  { name: 'pytest' },
  { name: 'gitlabci', title: 'Gitlab CI' },
  { name: 'docker' },
]

export const projects: Project[] = [
  {
    year: '2024',
    title: 'Portfolio ',
    projectContext: 'Projet personnel',
    description:
      "Site vitrine pour exposer mes compétences mais aussi pour me ré-initier sur les dernieres versions de **React** et **Next**. J'ai pu notament m'inspirer de l'*atomic design pattern* pour architecturer mon projet, tout en l'adaptant à mon style de code. \
      \n \nJ'ai également pour projet d'intégrer une interface admin pour ajouter du contenu dynamiquement. J'ai déja préparé le terrain avec l'integration de *markdown*",
    stack: ['React', 'Next', 'Chakra UI'],
    repositories: [
      {
        title: 'Web site repository',
        href: 'https://github.com/Nestuna/nantunes-portfolio',
      },
    ],
    projectLink: '',
  },
  {
    year: '2022-2023',
    title: "Refonte UI / UX d'une plateforme vidéo",
    projectContext: 'Projet professionnel chez Ubicast (alternance)',
    description:
      "**Design et developpement** de la refonte UI / UX  intégrale de la navigation de *Nudgis*. \
       \n *Nudgis* est une solution de plateforme vidéo prive d\'e-learning a destination d\'institutions du superieur ou organisation publique ou privée. \n \
       \n \nCela a été l\'occasion de m\'initier à **Angular**, mais aussi à la **construction d\'un projet de A à Z** (y compris la démarche design UI / UX). J\'ai du parfois **modifier l\'API**, et apprendre sa logique. \
       Egalement j\'ai pu monter en competence en TDD, en construisant des **tests unitaires** et **end-to-end**.",

    stack: ['Angular', 'Material', 'Jest', 'Webdriver I/O', 'Django', 'Docker', 'TDD', 'Figma', 'Design UI / UX'],
    repositories: [],
    projectLink: '',
  },
  {
    year: '2020-2021',
    title: "Migration automatisée de contenu d'une plateforme vidéo (Nudgis)",
    projectContext: 'Projet professionnel chez Ubicast (alternance)',
    description:
      "Migration automatisée depuis une platefome vidéo concurrente vers la plateforme *Nudgis*, afin que les clients aient tous le contenu presentable lors du passage à la solution d'Ubicast. \
      \n \n Il a fallu **annalyser l'API de la plateforme concurrente**, et faire en sorte de **reproduire toute l'arboresence** sur la solution d'Ubicast en transférant les médias de facon massive, et de **transférer toutes les méta-données** possibles. \
      Le projet est open-source et accessible publiquement.",
    stack: ['Python', 'Scripting', 'Data fetching', 'Video computing', 'TDD'],
    repositories: [{
      title: 'Scripts app repository',
      href: 'https://github.com/UbiCastTeam/mediasite-migration-scripts/tree/master',
    }],
    projectLink: '',
  },
  {
    year: '2023',
    title: 'Cuistou',
    projectContext: 'Projet universitaire autonome en groupe - EFREI',
    description:
      'Proposer des recettes en accord avec les fruits et légumes de saisons. \n \
      Possibilités d\avoir des recettes de saison mais aussi de voir ce qu\'il est possible de faire avec certains ingrédients',
    stack: ['React', 'Next', 'MUI', 'Express.js', 'MongoDB'],
    repositories: [
      {
        title: 'Client app repository',
        href: 'https://github.com/Nestuna/cuistou',
      },
    ],
    projectLink: '',
  },
  {
    year: '2020',
    title: 'Butterfly - Mobile App',
    projectContext: 'Projet universitaire en duo - CNAM',
    description:
      "Messagerie éphémère et privée. \n \
      Le but est pouvoir créer des conversations privées joignables seulement via un ID unique, et qu'elles soient au bout d'un temps donnée. Le temps peut etre configurée.",
    stack: ['React Native', 'Docker', 'Django Rest', 'MySQL'],
    repositories: [
      {
        title: 'Mobile app repository',
        href: 'https://github.com/Nestuna/butterfly_project_front/tree/master',
      },
      {
        title: 'Server repository',
        href: 'https://github.com/Nestuna/butterfly-server-app',
      },
    ],
    projectLink: '',
  },
  {
    year: '2024',
    title: '[ En projet ] JukeBoxify',
    projectContext: 'Projet personnel',
    description:
      'Permettre à des personnes d’ajouter des morceaux à une liste de lecture Spotify maitre en cours. \
       Pas besoin de plusieurs comptes spotify et d\'être sur le même réseau, juste un seul compte. \
      \n Il suffirait d\'avoir soit un lien, soit un QR Code partagé. Le compte maitre peut configurer les modalites d\'ajout ou d\autres options',
    stack: ['React', 'Next', 'MUI', 'PWA', 'Express.js', 'Prisma', 'MongoDB'],
    repositories: [],
    projectLink: '',
  },
]

export const experiences: Record<'pro' | 'training', Experience[]> = {
  pro: [
    {
      year: '2020 - 2023 (3 ans)',
      title: 'Développeur Fullstack Apprenti',
      organisation: 'Ubicast',
      // each item of array mark a line. So `,` is like a breakline
      description:
      'Solutions d\’e-learning clé en main : Enregistreur optimisé  (Miris)  et Plateforme Vidéo (Nudgis).  \
      \n**Missions** :  \n \
      \n-   Design et refonte UI / UX  intégrale de la navigation de Nudgis  \n \
      \n-   Automatisation de la migration du contenu vidéo d\’une plateforme externe  vers Nudgis. \n \
      Remote Partiel',
      skills: [
        'Angular',
        'Typescript',
        'Django',
        'Jest',
        'WebdriverIO',
        'Gitlab CI',
        'Docker',
        'Figma',
      ],
    },
    {
      year: '2020',
      title: 'Développeur mobile stagiaire',
      organisation: 'MUUZ Excellence / Projet MVP EKTOR',
      description:
      'Participation à l\'élaboration du MVP (prototype) de l\'application mobile EKTOR: Application de prévision des ventes et des besoins RH pour restaurateurs. \
      \n **Mission** : \
       \n- Construction et architectures de certaines vues mobiles \n \
       \n- Developpement d’une partie de l’API Rest \n \
       Full Remote',
      skills: ['React Native', 'Django Rest', 'Développement Mobile'],
    },
    {
      year: '2017 - 2019',
      title: 'Téléopérateur et assistant de régulation médical',
      organisation: 'SOS Médecins Paris',
      description:'Prise d’appels et régulation médicale pour l\'envoi d\'un médecin à domicile ou redirection vers les services d\'urgence.',
      skills: [
        "Communication d'équipe",
        'Gestion de situations critiques',
        'Réactivité',
      ],
    },
  ],
  training: [
    {
      year: '2023',
      title: 'Master Informatique - Développement Web - Alternance',
      organisation: 'EFREI Paris',
      skills: [
        'React',
        'Express.js',
        'Python',
        'Devops',
        'Gestion de projet',
        'Management',
      ],
      description: '',
    },
    {
      year: '2021',
      title: 'Licence Générale - Informatique - Alternance',
      organisation: 'CNAM',
      skills: ['Programmation orientée objet', 'Modelisation des données'],
      description: '',
    },
    {
      year: '2020',
      title: 'DUT Informatique - Année Spéciale (1 an)',
      organisation: 'Université Sorbonne Paris Nord',
      skills: [
        'PostgreSQL',
        'Python',
        'Algorithmes',
        'Programmation orientée objet',
        'HTML / CSS',
      ],
      description: '',
    },
    {
      year: '2014',
      title: 'Licence en Psycholgie',
      organisation: 'Université Sorbonne Paris Nord',
      skills: ['Management', 'Communication', 'Consolidation d’équipe'],
      description: '',
    },
  ],
}
