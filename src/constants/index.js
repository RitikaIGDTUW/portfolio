import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    shopnest,
    jobit,
    tripguide,
    harmoni,
    sashakt,
    threejs,
    image
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      edu:'IGDTUW',
      post: 'BTech CSE',
      title: "CGPA: 9.45",
      icon: web,
    },
    {
      edu:'Delhi Jain Public School',
      post: 'Senior Secondary',
      title: "94.80%",
      icon: mobile,
    },
    {
      edu:'Delhi Jain Public School',
      post: 'Secondary',
      title: "97.40%",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Leetcode and Programming ",
      company_name: "coding",
      
      iconBg: "#383E56",
      
      points: [
        "Solved 450+ LeetCode problems across various data structures and algorithms. ",
        "Consistently improving problem-solving skills, and participated in coding contests.",
        "Enhanced coding efficiency through regular practice.",
        
      ],
    },
    {
      title: "Finalist, IEEE Hackathon ",
      company_name: " WIEMPOWER 2025",
      
      iconBg: "#E6DEDD",
      
      points: [
        "Reached the Finals, surpassing 200+ teams with a cutting-edge solution for women’s empowerment.",
        "Demonstrated excellence in innovation, technical skills, and impactful problem-solving.",
        
      ],
    },
    {
      title: "Semi-Finalist, Smart India Hackathon",
      company_name: "(SIH) 2024",
      
      iconBg: "#383E56",
      
      points: [
        "Advanced to the Semi-Finals, outperforming 200+ teams with an innovative tech-driven solution.",
        "Showcased strong teamwork, critical thinking, and problem-solving abilities in a high-pressure environment.",
       
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Completed a 2-month internship at IGDTUW, gaining hands-on experience in Python and Machine Learning by implementing solutions to automate data analysis processes.",
      name: "Python and Machine Learning Intern (2024)",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Conducted data-driven research leveraging machine learning models to analyze and predict trends in gender violence, contributing to targeted preventive strategies and improved data interpretability for policymakers",
      name: "Predictive Analysis of Crime Against Women in India  (Research Paper)",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Ujjwal Udaan",
      description:
        "Designed and developed a platform to empower prostitutes by educating them about legal rights, providing a chatbot for assistance, teaching essential skills, and fostering a discussion forum to form support groups.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "daisy UI",
          color: "pink-text-gradient",
        },
        {
          name:"nodejs",
          color:"blue-text-gradient",
        },
        {
          name: "open AI api",
          color: "green-text-gradient",
        }
      ],
      image:image,
      source_code_link: "https://github.com/RitikaIGDTUW/womenempower",
      site_link: "https://womenempower-dksq.onrender.com/",
    },
    {
      name: "Shopnest",
      description:
        "Designed and developed a comprehensive e-commerce platform, allowing users to browse products, manage wishlists and cart, submit ratings, and reviews, enhancing the overall shopping experience. Implemented user authentication, facilitating login and registration",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image:shopnest,
      source_code_link: "https://github.com/RitikaIGDTUW/Shopnest",
      site_link: "https://shopnest-qrz8.onrender.com/products",
    },
    {
      name: "Harmoni",
      description:
        "Developed a real-time chat application with seamless messaging, modern UI components, and efficient database management for an enhanced user experience. Implemented authentication and user management for secure communication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "web sockets",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: harmoni,
      source_code_link: "https://github.com/RitikaIGDTUW/Harmoni",
      site_link: "https://harmoni-floi.onrender.com/",
    },
    {
      name: "Sashakt-Sathi",
      description:
        " Developed Sashakt Saathi, a comprehensive platform aimed at empowering women by providing personalized  legal resources. Integrated actionable legal guidance, up-to-date helplines, and interactive features like animated videos to explain constitutional rights, ensuring awareness among women",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sashakt,
      source_code_link: "https://github.com/RitikaIGDTUW/Sashakt-Sathi/",
      site_link: "https://github.com/RitikaIGDTUW/Sashakt-Sathi/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };