import ecommerce from "../assets/images/projects/ecommerce.jpg";
import dashboard from "../assets/images/projects/dashboard.jpg";
import restaurant from "../assets/images/projects/restaurant.jpg";
import gym from "../assets/images/projects/gym.jpg";
import weather from "../assets/images/projects/weather.jpg";
import todo from "../assets/images/projects/todo.jpg";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "Modern ecommerce platform with authentication, cart, wishlist and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Admin Dashboard",
    image: dashboard,
    description:
      "Analytics dashboard with beautiful charts and responsive admin interface.",
    technologies: ["React", "Chart.js", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "Restaurant Website",
    image: restaurant,
    description:
      "Restaurant landing page with online reservations and food showcase.",
    technologies: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },

  {
    id: 4,
    title: "Gym Website",
    image: gym,
    description:
      "Fitness website with membership plans and modern UI animations.",
    technologies: ["React", "Framer Motion"],
    github: "#",
    live: "#",
  },

  {
    id: 5,
    title: "Weather App",
    image: weather,
    description:
      "Weather application using OpenWeather API with responsive design.",
    technologies: ["React", "API"],
    github: "#",
    live: "#",
  },

  {
    id: 6,
    title: "Todo App",
    image: todo,
    description:
      "Task management application with local storage and filtering.",
    technologies: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];