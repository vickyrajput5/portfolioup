import { DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiPhp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaCss3Alt, FaInstagram } from "react-icons/fa6";
// import { CgFigma } from "react-icons/cg";
// import { TbBrandReactNative } from "react-icons/tb";
// import { SiAdobexd } from "react-icons/si";
import pitstoptuning from "../src/images/pitstoptuning.png";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import Dragon from "../src/images/Dragon.png";
import movie1 from "../src/images/movie3.png";
import bidlock from "../src/images/bidlock.png";
import bilbio from "../src/images/bilbio.png";
import monal from "../src/images/Monalword.png";
import ecomword from "../src/images/EcomWord.png";
import packeges from "../src/images/PackagesMall.png";
import packageWord from "../src/images/packagesWord.png";
// import realstate from "../src/images/Realstate.png";
// import nft from "../src/images/NFT.png";
// import barbar from "../src/images/barbarshop.png";
import { BsFiletypePsd } from "react-icons/bs";

export const menu = [
  { name: "Home" },
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Pitstop Tuning Website Development",
    image: pitstoptuning,
    category: "Web",
    data: {
      description: `Pitstop Tuning is a small family-owned business located in Georgia, dedicated to providing 100% customer satisfaction with fast shipping, low prices, and hassle-free returns. This project involved designing and developing a user-friendly e-commerce platform to enhance their online presence and streamline customer interactions.`,
      demoLink: "https://pitstoptuning.com/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        iconColor: "skyblue",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "Javascript",
        icon: <IoLogoJavascript />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 2,
    title: "BidLock Digital Marketplace Development",
    image: bidlock,
    category: "Web",
    data: {
      description: `BidLock, established in 2020, is a transformative digital marketplace connecting buyers with high-quality small business sellers. This project involved developing a platform that offers unbeatable value, safeguards purchases, and enhances quality for diverse clients, from students to Fortune 500 companies. BidLock revolutionizes the buyer-seller dynamic, fostering competition and commitment to drive consumer spending and business growth.`,
      demoLink: "https://bidlock.com/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "JAVASCRIPT",
        icon: <IoLogoJavascript />,
        iconColor: "green",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
      },
      {
        name: "MYSql",
        icon: <SiMysql />,
        iconColor: "limegreen",
      },
    ],
  },

  {
    id: 3,
    title: "Movie & TV Show Explorer",
    image: movie1,
    category: "Web",
    data: {
      description: `Welcome is a dynamic platform created with React.js and powered by the TMDB API, offering users access to millions of movies, TV shows, and people. This project enables users to explore and stay updated on the latest releases, providing an intuitive and engaging experience for discovering new content.`,
      demoLink: "https://movies-c328d.web.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Restaurant Website Development",
    image: Dragon,
    category: "UI/UX",
    data: {
      description: `DRAGONBOL Restaurant, located at Route de sablière, Centre Commercial Printemps Valentine, 13011 Marseille, offers a delightful culinary experience. This project involved creating an engaging and visually appealing website to showcase their exquisite menu, enhance customer interaction, and provide essential information about the restaurant.`,
      demoLink: "https://vickyrajput5.github.io/DARBAN/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
        iconColor: "green",
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "PSD",
        icon: <BsFiletypePsd />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 5,
    title: "Bil-Bio: Built-in Analytics & Customizable Biolink Pages",
    image: bilbio,
    category: "Web",
    data: {
      description: `Bil-Bio offers powerful built-in analytics for daily insights into referrals, geographic data, operating systems, and languages. It also provides a user-friendly platform to create highly customizable bio link pages. Users can personalize their pages with custom colors, branding, and multiple ready-to-use components. The platform includes essential SEO settings and options for password protection, ensuring secure access to sensitive content.`,
      demoLink: "https://bil-bio.vercel.app/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 6,
    title: "Monal Restaurant Pakistan",
    image: monal,
    category: "Wordpress",
    data: {
      description: `This WordPress project showcases Monal Restaurant in Pakistan, offering a full-service dining experience with a diverse Ala Carte menu. The website highlights the Monal Group's comprehensive entertainment options, including M1 Traxx for rides, food, and activities. Additionally, it features the Monal Foundation's dedication to supporting marginalized communities through health, education, and poverty alleviation initiatives.`,
      demoLink: "https://themonal.com/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        iconColor: "green",
      },
      {
        name: "Wordpress",
        icon: <FaWordpress />,
        iconColor: "skyblue",
      },
      {
        name: "MYSql",
        icon: <SiMysql />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 7,
    title: "The Lederhosen Store",
    image: ecomword,
    category: "Wordpress",
    data: {
      description: `The Lederhosen Store offers a vast collection of authentic German lederhosen and dirndls, perfect for celebrating Oktoberfest. This website showcases traditional, top-quality, and unique products for both men and women, catering to enthusiasts of German festivities with a variety of delightful designs.`,
      demoLink: "https://thelederhosen.com/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        iconColor: "green",
      },
      {
        name: "Wordpress",
        icon: <FaWordpress />,
        iconColor: "skyblue",
      },
      {
        name: "MYSql",
        icon: <SiMysql />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 8,
    title: "Packages Mall Website",
    image: packeges,
    category: "Wordpress",
    data: {
      description: `This WordPress project involved creating a user-friendly and visually appealing website for Packages Mall in Lahore. The site features information on over 200 local and international brands, a Multiplex Cinema, a diverse Food Court, entertainment spots, and Carrefour hypermarket. The website ensures seamless navigation, interactive maps, and updates on events, providing an engaging and informative experience for visitors.`,
      demoLink: "https://www.packagesmall.com/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        iconColor: "green",
      },
      {
        name: "Wordpress",
        icon: <FaWordpress />,
        iconColor: "skyblue",
      },
      {
        name: "MYSql",
        icon: <SiMysql />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 9,
    title: "Packages Group Website",
    image: packageWord,
    category: "Wordpress",
    data: {
      description: `This WordPress project involved developing a comprehensive website for Packages Group, established in 1956 as a joint venture between Ali Group of Pakistan and Akerlund & Rausing of Sweden. The site highlights their premium packaging solutions and showcases their enhanced capacities and capabilities to meet the growing demand for packaging products in Pakistan. The website ensures seamless navigation, detailed information, and a professional design to represent the brand's legacy and expertise.`,
      demoLink: "https://www.packages.com.pk/",
    },
    stack: [
      {
        name: "HTML5",
        icon: <IoLogoHtml5 />,
        iconColor: "skyblue",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        iconColor: "green",
      },
      {
        name: "Wordpress",
        icon: <FaWordpress />,
        iconColor: "skyblue",
      },
      {
        name: "MYSql",
        icon: <SiMysql />,
        iconColor: "limegreen",
      },
    ],
  },
  // {
  //   id: 10,
  //   title: "Realstate UI Website",
  //   image: realstate,
  //   category: "UI/UX",
  //   data: {
  //     description: `Elevate engagement and knowledge retention with our Quiz App
  //                     Development project. Seamlessly crafted for interactive learning
  //                     experiences, our app offers customizable quizzes, real-time feedback,
  //                     and captivating visuals. Empower users to test their knowledge anytime,
  //                      anywhere, fostering a dynamic learning environment tailored to their
  //                      needs.`,
  //     demoLink: "https://realstateweb-e49f2.web.app/",
  //   },
  //   stack: [
  //     {
  //       name: "React Native",
  //       icon: <TbBrandReactNative />,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs />,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress />,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb />,
  //       iconColor: "limegreen",
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: "NFT UI Website",
  //   image: nft,
  //   category: "UI/UX",
  //   data: {
  //     description: `Elevate engagement and knowledge retention with our Quiz App
  //                     Development project. Seamlessly crafted for interactive learning
  //                     experiences, our app offers customizable quizzes, real-time feedback,
  //                     and captivating visuals. Empower users to test their knowledge anytime,
  //                      anywhere, fostering a dynamic learning environment tailored to their
  //                      needs.`,
  //     demoLink: "https://nftwebdesign.web.app/",
  //   },
  //   stack: [
  //     {
  //       name: "React Native",
  //       icon: <TbBrandReactNative />,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs />,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress />,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb />,
  //       iconColor: "limegreen",
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: "Barbar Shop UI Website",
  //   image: barbar,
  //   category: "UI/UX",
  //   data: {
  //     description: `Elevate engagement and knowledge retention with our Quiz App
  //                     Development project. Seamlessly crafted for interactive learning
  //                     experiences, our app offers customizable quizzes, real-time feedback,
  //                     and captivating visuals. Empower users to test their knowledge anytime,
  //                      anywhere, fostering a dynamic learning environment tailored to their
  //                      needs.`,
  //     demoLink: "https://barbarshopweb.web.app/",
  //   },
  //   stack: [
  //     {
  //       name: "React Native",
  //       icon: <TbBrandReactNative />,
  //       iconColor: "skyblue",
  //     },
  //     {
  //       name: "NodeJs",
  //       icon: <FaNodeJs />,
  //       iconColor: "green",
  //     },
  //     {
  //       name: "ExpressJs",
  //       icon: <SiExpress />,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: <SiMongodb />,
  //       iconColor: "limegreen",
  //     },
  //   ],
  // },
];

export const experience = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "PSD",
        level: "Experienced",
      },
      {
        skill: "Figma",
        level: "Experienced",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "XD",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "React JS",
        level: "Experienced",
      },
      {
        skill: "Next JS",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "Express JS",
        level: "Experienced",
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
      },
      {
        skill: "PostgreSQL",
        level: "Experienced",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Email",
    icon: <MdOutlineEmail />,
    link: "mailto:waqarmuhammad337@gmail.com",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/vickyrajput5",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/muhammad-waqar-rajput/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/muhammad_waqar_rajput1/?igsh=NW82YWd5MWd6dmZp",
  },
];
