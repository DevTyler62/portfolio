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
  paragraphOne: `I am a senior computer science student at Kutztown University located in
  Kutztown Pennslyvania. I am very passionate about technology and the impact that it has on the world.
  This made me want to purse this career path to build products that others can use to benifit there
  own lives. `,
  paragraphTwo: `I was searching for an internship for the summer of 2020 but it was diffcult 
  due to unfortunate events brought upon by the pandemic. During this time 
  I took it upon myself to learn and furthur develop my skills whiel also still working my usual part time job, 
  so I purchased some Udemy courses. I have finsied taking courses on JavaScript and 
  HTML5 and CSS3 with responsive web design. The Spotify project I had did was written using React JS, now that
  was my first time using that framework so I am most likely not following some of the best practices. I have a course on
  React JS that I have started a little and do plan to learn more about React and making my next projects better. 
  I have a desire to learn more about UI/UX's to better develop the look of my applications as well as working with 
  databases and connecting my applications with them.`,
  paragraphThree: `I have briefly worked with multiple langauges and services thorughout my
  time at college such as C, C++, Java, JavaScript, ADA, React JS, HTML, CSS, PHP, and MASM. Some of the 
  services that I have used is Micorsoft Visual Studio Code and Visual Studio, Eclispe for IDE's, Heroku and Netlify
  for places to deploy my applications to the web, GitHub to store my code for my prjects as well as working with
  Git as version controlling. 
  
  `,
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
