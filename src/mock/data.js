import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Home | Tyler Smith', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Tyler Smith',
  subtitle: `I'm an aspiring Full Stack Developer`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Grad photo.jpg',
  paragraphOne: `I am currently a senior computer science student at Kutztown University located in
  Kutztown, Pennslyvania. I have a strong passion for technology, and the impact that it has on the world.
  Being a hard-working, dedicated, and life-long learner has aided me in pursuing a career path in the technology field.`,
  paragraphTwo: `Due to the unforseen circumstances from the pandemic, I still found ways to further my knowledge and experience.
  I took it upon myself to develop my skills by taking several Udemy courses. 
  I took courses on web development that concentrated on HTML, CSS, and JavaScript. 
  Other topics that I am looking to complete in the near future include React JS, Node.js, Express, MongoDB, and some
  advanced CSS topics that also include using Sass.`,
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'datafy.png',
    title: 'Datafy - Spotify Data Visualization',
    info: `A user with authenticate their Spotify account using Spotify's OAuth version of authentication.
    After a successfull authentication they will be able to see their top tracks and artists they listen to as well
    as seeing a graphical represtation of their playlists or a individual song when it comes to certain details of
    each song such as liveness or energy.`,
    info2: ``,
    url: 'https://datafy-app.herokuapp.com/',
    repo: 'https://github.com/DevTyler62/Spotify_Client', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'weather-app.png',
    title: 'Vanilla JavaScript Weather app',
    info: `Search for a city location anywhere on the world to get the current weather of that location.
    The current weather will be displayed as well the next few hours in increments of every 3 hours. The user 
    can also switch between which ever units they desire.`,
    info2: `This was made specifically for mobile devices so you will either need to view it on a moblie device
    or inspect the page and go to the responsive section for a mobile device to see it properly.`,
    url: 'https://skywind.netlify.app/',
    repo: 'https://github.com/DevTyler62/skyWind-weather-app-js', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'newChurch.png',
    title: 'Church Website',
    info: `Local church organization near my hometown did not have a website so I have built one for them.
    Implemented most of the important things that they use. Placeholder information is in place until I recieve
    the proper information to change it. Also made sure that the site is fully responsive on most devices.`,
    info2: `This is an updated version. If you go to view the code the link to the old website that I had did is also
    present there.`,
    url: 'https://providence-church.herokuapp.com/',
    repo: 'https://github.com/DevTyler62/new-church-website', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Intrested in my Work?',
  btn: 'Contact Me',
  email: 'tylercodes653@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/tyler_codes/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tyler-smith-121205196/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/DevTyler62',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
