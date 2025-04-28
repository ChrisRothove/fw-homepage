import { Project } from "@/types/project"

const webProjects: Project[] = [
  {
    name: "Featherwalk's Custom MTG",
    src: "/public/mtg-list.png",
    tech: "React + typescript",
    desc: "A catalog of custom Magic the Gathering cards I created, both as a vehicle to learn Typescript for React, and as a card design portfolio in case I ever get the chance to interview for such a job.",
    github: "https://github.com/ChrisRothove/mtg-list",
    live: "https://mtg-list-alpha.vercel.app/"
  },
  {
    name: "Pizza Legends",
    src: "/public/pizza-legends.png",
    tech: "Vanilla JS + OOP",
    desc: "This was a classic JRPG project I built following a tutorial, onto which I added a lot of my own content. I never finished the 'story' of the game, but most of the core systems are in place.",
    github: "https://github.com/ChrisRothove/pizza-legends",
    live: "https://www.legends.pizza/"
  },
  {
    name: "GoL Tools (Front-end)",
    src: "/public/gol-tools.png",
    tech: "React + Javascript",
    desc: "A tool I worked on for a role-playing game I was playing with friends. The project is largely unfinished but stands as one of the more complex personal projects I've made in terms of architecture. ",
    github: "https://github.com/ChrisRothove/gol-tools",
    live: "https://gol-tools.vercel.app/"
  },
  {
    name: "GoL Tools (Backend)",
    src: "/public/gol-tools.png",
    tech: "Express + MongoDB",
    desc: "The back-end for the GoL Tools project. This was my first dabbling with MongoDB. It hasn't been improved for a while due to the project being abandoned.",
    github: "https://github.com/ChrisRothove/gol-tools-backend/tree/main",
    live: ""
  }
]

export default webProjects;