/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sanskriti",
  title: "Hi all, I'm Sanskriti",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with Python / Reactjs / Flask and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eEfXwuBIXL9Bjzz6diu4StGybFCWZbTD/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SanskritiKushik5",
  linkedin: "https://www.linkedin.com/in/sanskriti-kushik-2302/",
  gmail: "sanskritikushik23@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/sanskriti.kushik/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/skkkk__5/',
  twitter: 'https://twitter.com/KushikSanskriti',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Complete backend with Python Frameworks!"),
    emoji(
      "⚡ Learn Data Structures and Algorithms and also work with Competitive Programming!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "far fa-copyright",
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "BootStrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-dyalog"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Usha Mittal Institute of Technology, Mumbai",
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2019 - Present",
      desc: "Learning Data Structures, Operating Systems, Computer Architecture, DBMS and Discrete Mathematics",
      descBullets: [
        "CGPA: 9.96/10.0"
      ]
    },
    {
      schoolName: "Sri Chaitanya Techno School, Vizag",
      subHeader: "Higher Secondary, Science",
      duration: "June 2017 - May 2019",
      desc:
        "Cracked JEE MAINS & MHT-CET",
      descBullets: ["Boards:- 94%"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development (HTML-CSS-JS, )", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development (Flask, Django, NodeJs)",
      progressPercentage: "78%"
    },
    {
      Stack: "Databases (SQL, MongoDB)",
      progressPercentage: "68%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant Web Developer",
      company: "Zeta Group",
      companylogo: "https://i.imgur.com/hSuIm3h.png",
      date: "June 2021 – Present",
      desc:
        "Maintaining Shopify Website - Mumshop",
      descBullets: [
        "Adding products and collections",
        "Adding deals (choice-cheapies) and adjusting tags",
      ]
    },
    {
      role: "Project Intern",
      company: "InternExperience",
      companylogo: "https://i.imgur.com/TAuOhOx.png",
      date: "April 2021 – Present",
      descBullets: [
        "Developed UI with ReactJs",
        "Built Database models and created REST APIs with Django Rest Framework",
      ]
    },
    {
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      companylogo: "https://i.imgur.com/aX7Y1IA.png",
      date: "February 2021 – April-2021",
      desc:
        "Contributed in setting up dark-mode and beautifying the UI in a React Messenger App"
    },
    {
      role: "Open Source Contributor",
      company: "Winter Codess - DSC UMIT",
      companylogo: "https://i.imgur.com/Ps16d3L.png",
      date: "January 2020 – March 2021",
      desc:
        "Contributed in building an e-commerce website (Sports website) using NodeJs, SQL and Bootstrap"
    },
    {
      role: "Web Development and Designing Intern",
      company: "The Sparks Foundation",
      companylogo: "https://i.imgur.com/YPMDh94.png",
      date: "January 2021 – February 2021",
      desc:
        "Graduate Rotational Internship Program (GRIP)",
      descBullets: [
        "Completed a Web development Project",
        "Improved connections in the Industry",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SanskritiKushik5", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      // image: require("https://i.imgur.com/c7dsj3n.png"),
      projectName: "Subscriptz",
      image: "https://i.imgur.com/657oIrM.png",
      projectDesc: "A website where unused subscriptions can be added for the needy ones while one can also claim subscriptions added by others",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://koderz-subscriptz.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("https://i.imgur.com/c7dsj3n.png"),
      projectName: "The Laali Project",
      image: "https://i.imgur.com/xNkLGz0.png",
      projectDesc: "A portal to connect Alumnis, Mentors and Mentees with an admin panel and other functionalities",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://the-laali-project-67.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("https://i.imgur.com/c7dsj3n.png"),
      projectName: "Scienocyde",
      image: "https://i.imgur.com/TZdINcG.png",
      projectDesc: "Science Fair Management System",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://scienocyde.pythonanywhere.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "https://i.imgur.com/N3DHkyf.png",
      projectName: "KrishiKalyan",
      projectDesc: "A portal that will help farmers to take advantage of the schemes availed by the Indian government",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://kkkoderz.pythonanywhere.com/"
        }
      ]
    },
    {
      image: "https://i.imgur.com/XOHneWE.png",
      projectName: "Netflix Clone",
      projectDesc: "Netflix Clone (Frontend) built with ReactJs",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-clone-c4b64.web.app/"
        }
      ]
    },
    {
      image: "https://i.imgur.com/mtGRtfL.png",
      projectName: "WhatsApp Clone",
      projectDesc: "WhatsApp-web Clone built with ReactJs and Firebase",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whatsapp-clone-e616f.web.app/"
        }
      ]
    },
    {
      image: "https://i.imgur.com/zlXDQSl.png",
      projectName: "Weather Dashboard",
      projectDesc: "A Weather Dashboard to update you with the weather of any city in the world!",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/SanskritiKushik5/Weather-Dashboard"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Finalist - Runner Up",
      subtitle:
        "JPMC Code for Good -- 2021 for bulding The Laali Project - Connect Portal",
      image: "https://i.imgur.com/xNkLGz0.png",
      footerLink: [
        {
          name: "Connect Portal",
          url:
            "https://the-laali-project-67.herokuapp.com/"
        },
        {
          name: "Code For Good",
          url:
            "https://cfg2.bemyapp.com/#/event"
        }
      ]
    },
    {
      title: "Best Girls Team",
      subtitle:
        "UtkalHacks 3.0 -- 2021 for bulding Scienocyde",
      image: "https://i.imgur.com/yNoK1F8.png",
      footerLink: [
        {
          name: "Scienocyde",
          url:
            "http://scienocyde.pythonanywhere.com/"
        },
        {
          name: "UtkalHacks 3.0",
          url:
            "https://utkalhacks.tech/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91) 7977463576",
  email_address: "sanskritikushik23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "KushikSanskriti", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
