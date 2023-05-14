import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
// import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/2.png';
import porfolioImage2 from '../images/portfolio/3.jpg';
import porfolioImage3 from '../images/portfolio/4.jpg';
import profilepic from '../images/profilepic.jpg'
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'TungJun Ming',
  description: "TungJun Ming's portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm TungJun Ming.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">Full Stack Developer</strong>, currently working
        at <strong className="text-stone-100">UOB Bank</strong> designing and developing landingpages and e-commerece pages.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: '/assets/TungJunMing.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Full Stack Developer with over 7 years of experience analyzing, designing, developing and integrating front-end and back-end-based applications. Possesses knowledge of 
  web applications using HTML, JavaScript, TypeScript, ReactJS, VueJS, AngularJS,
  ExpressJS and MongoDB. Key achievements: created a web application that allowed
  75K users to search for nearby restaurants based on their location with 89% accuracy.`,
  aboutItems: [
    {label: 'Location', text: 'Blk 363E Jalan Keeling Road', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Singapore', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Muay Thai, Piano', Icon: SparklesIcon},
    {label: 'Study', text: 'Nanyang Technological University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'UOB Bank', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Front End Development',
    skills: [
      {
        name: 'React.js',
        level: 10,
      },
      {
        name: 'Vue.js',
        level: 9,
      },
      {
        name: 'Angular.js',
        level: 8,
      },
      {
        name: 'Three.js',
        level: 8,
      },
      {
        name: 'Tailwind.css',
        level: 9,
      },

    ],
  },
  {
    name: 'Back End Development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Django',
        level: 9,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 7,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
    
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Github',
        level: 8,
      },
    ],
    
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-Commerece',
    description: '',
    url: 'https://github.com/kelleymartin872/e-commerece-webshop',
    image: porfolioImage1,
  },
  {
    title: 'Web Chat',
    description: '',
    url: 'https://github.com/kelleymartin872/reimagined-octo-fortnight',
    image: porfolioImage2,
  },
  {
    title: 'IP Messenger',
    description: '',
    url: 'https://github.com/kelleymartin872/cuddly-enigma',
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2014',
    location: 'Nanyang Technological University',
    title: 'Bachelor of Engineering in Computer Science',
    content: <p>
      {/* I entered the HKU in July 2013 and majored Electronic and Communication. I was especially interested in FPGA development and became bach */}
    </p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2021 - Present',
    location: 'UOB Bank',
    title: 'Senior Full Stack Developer',
    content: (
      <p>
        Created a web application that allowed 75K users to search for nearby restaurants based on their location with 89% accuracy. <br/>
        Led the development of a full-stack web application using React, Express, and MongoDB that increased user engagement by 50%Increased daily traffic from 35% to 80% by redesigning existing websites to improve user experience and SEO techniques. <br/>
        Optimized website performance by identifying and resolving front-end and back-end issues, resulting in a 40% decrease in page load time. <br/>
        Recommended changes in development, maintenance and system standards, leading to the adoption of lean principles that increased team effectiveness and efficiency by73%. <br/>
        Achieved an annual savings of $50,000 by performing front-end and backend design and development. <br/>
        Guided and managed a 15-member development team to grow their technical skills via mentoring on operational improvements, coding practices and issue resolutions; improved by 49%. <br/>
      </p>
    ),
  },
  {
    date: 'May 2016 - Oct 2021',
    location: 'Carousell',
    title: 'Junior Full Stack Developer',
    content: (
      <p>
        Developed a full-stack web application using React, Express, and MongoDB that increased user engagement by 30%. <br/>
        Conducted code reviews and provided feedback to team members, resulting in a 15% improvement in code quality. <br/>
        Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in website traffic. <br/>
        Managed a team of 7 junior engineers using Agile methods to deliver software solutions. <br/>
        Implemented understanding of React fundamentals to promote better component lifecycle practices, increasing turnaround speed by 23% with 100% deadline adherence. <br/>
        Mentored junior developers and provided guidance on best practices for React, Express, and MongoDB development, resulting in a 30% improvement in their full-stack development skills. <br/>
      </p>
    ),
  },
  {
    date: 'May 2015 - May 2016',
    location: 'Razer',
    title: 'Junior Front End Developer',
    content: (
      <p>
        Developed responsive user interfaces using React and Redux for a web
application that increased user engagement by 25%. <br/>
Mentored junior developers and provided guidance on best practices for
React development, resulting in a 20% improvement in their React skills. <br/>
Integrated APIs and third-party libraries to enhance website functionality,
resulting in a 20% increase in user satisfaction. <br/>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jim Martin',
      text: 'He is an excellent Full Stack Developer and it is a good opportunity to work with him',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'terriellis120@gmail.com',
      href: 'https://terriellis120@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Blk 363E Jalan Keeling Road',
      href: '',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
