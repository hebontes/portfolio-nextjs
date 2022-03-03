export const projects = [
  {
    title: "React Video Chat app",
    description:
      "Simple esponsive WebRTC Video Chat written in React/Node using socket.io",
    image: "/images/webrtc.jpg",
    tags: ["React", "Node", "Socket.io", "WebRTC"],
    source: "https://github.com/gukanozadze/video-chat-front",
    visit: "https://focused-wozniak-40243b.netlify.app/",
    id: 1,
  },
  {
    title: "Reverbrap",
    description:
      "Responsive Music Web App that let's you add artists and music",
    image: "/images/reverbrap.png",
    tags: ["React", "Node", "MongoDB", "Youtube API"],
    source: "https://reverbpap.com",
    visit: "",
    id: 11,
  },

  {
    title: "Custom CRM",
    description: "Interconnecting tables, users, support, pdf and details",
    image: "/images/customcrm.png",
    tags: ["React", "Redux", "Node", "Tailwind"],
    source: "",
    visit: "",
    id: 2,
  },
  {
    title: "Scholarsite",
    description: "Platform for students",
    image: "/images/scholarsite.png",
    tags: ["React", "NestJS", "Typescript", "GatsbyJS"],
    source: "",
    visit: "",
    id: 3,
  },
  {
    title: "OnsightPRO",
    description:
      "Private real estate Manager, with strong encryption and security.",
    image: "/images/onsightpro.png",
    tags: ["React", "NextJS", "Node", "MongoDB"],
    source: "",
    visit: "",
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2014, text: 'Wrote first "hello world" project in C++' },
  { year: 2015, text: "Discovered javascript and web development" },
  { year: 2016, text: "Started working as a javascript developer" },
  { year: 2017, text: 'Worked as a Junior React/NodeJS Web developer' },
  { year: 2018, text: "Started freelancing career" },
  { year: 2019, text: "Completed 30+ projects" },
  { year: 2020, text: "Worked as a Middle Full-stack Developer" },
  { year: 2021, text: "developed" },
];

export const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};