import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gunish Matta', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Gunish Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Gunish Matta',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Gunish.jpg',
  paragraphOne:
    'I am a Pre Final year Master"s student at Thapar Institute of Engineering and Technology, India. My core competencies include C ,C++ ,Javascript ,React ,Node.js,Express,MongoDB and SQL and I love to learn new technologies. I also love to read Documentation of libraries and frameworks.',
  paragraphTwo:
    'My domain of focus is Web Development but I am familiar with other domains such as Backend Development, Cloud and Blockchain.',
  paragraphThree: 'I also have worked for some freelance projects',
  resume: 'https://drive.google.com/file/d/1DfaUd4bUKP8uqJhRTIB7I8xMM6oQbd9G/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foodrecipeapp.jpg',
    title: 'Food Recipe App',
    info: 'Built using HTML,CSS,React,React Hooks and Edamam API',
    info2: 'It fetches the recipes of your favourite food',
    url: 'https://csb-gkvr5.vercel.app/',
    repo: 'https://github.com/gunishmatta/Food-Recipe-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'autocompletestepper.jpg',
    title: 'AutoFill Stepper React Component',
    info: 'This Stepper component can fill input data from a backend when website is loaded',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'placesapiexample.jpg',
    title: 'An Autocomplete Search bar using Google Places API',
    info: 'I developed this for a client, this search bar uses Google Places API and displays search results around user location',
    info2: 'It also has option for IP Location Bias in case user rejects the location permission.',
    url: 'https://csb-2ow1m.vercel.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'gunishmatta@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Gunishmatta2',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gunishmatta2',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/gunishmatta',
    },
  ],
};
