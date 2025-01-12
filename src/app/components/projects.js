import React from 'react'
import Button from './ui/button';
import Card from './card';
import CardContent from './card-content';
import Badge from './ui/badge';
import { GitlabIcon as GitHub, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  { 
    title: "Social Net", 
    description: "A full-stack e-commerce solution with real-time inventory management.",
    technologies: ["Next.js", "Tailwind CSS", "Html", "JavaScript","Node.js","Sequelice", "Express", "Docker"],
    link: "https://github.com/goku673/portafolio-fazm",
    urlProyect: "https://movie-amine.onrender.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/socialNet.jpeg?alt=media&token=03e0ce52-8076-44bb-a0eb-0bc1eb54e7f2"
  },
  { 
    title: "Portafolio fazm", 
    description: "A full-stack e-commerce solution with real-time inventory management.",
    technologies: ["Next.js", "Tailwind CSS", "Html", "JavaScript"],
    link: "https://github.com/goku673/portafolio-fazm",
    urlProyect: "https://movie-amine.onrender.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/WhatsApp%20portafolio.jpeg?alt=media&token=dc64f25b-b855-405c-92aa-e6eb92caa346"
  },
  { 
    title: "E-commerce Movie", 
    description: "A full-stack e-commerce solution with real-time inventory management.",
    technologies: ["React+Vite", "Node.js", "MySQL", "Taildwind CSS", "Sequelize", "Html"],
    link: "https://github.com/goku673/Ecommerce-Movie",
    urlProyect: "https://movie-amine.onrender.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/WhatsApp%20ImageNaruto.jpeg?alt=media&token=d06faf01-de66-45cc-8a76-40ce479c1642"
  },
  { 
    title: "Shoping-clothes", 
    description: "A collaborative task management tool with real-time updates.",
    technologies: ["React-Vite", "MongoDB", "Mongoose", "Taildwind CSS", "Html"],
    link: "https://github.com/goku673/Shoping-clothes",
    urlProyect: "https://shoping-clothes-freddy-franco.vercel.app/",
    image: "https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/WhatsApp%20Image%20shophing%20Clotes.jpeg?alt=media&token=935455e5-d711-4893-9ac8-c170984f948a"
  },
  { 
    title: "Weather Forecast Dashboard", 
    description: "An interactive weather dashboard with data visualization.",
    technologies: ["Next.js", "Tailwind CSS", "Html"],
    link: "https://github.com/goku673/gradiente-geometrioco",
    urlProyect: "https://gradiente-geometrico-g5.vercel.app",
    image: "https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/gradiente%20Geometrico.jpeg?alt=media&token=a073ab57-e650-4e03-952f-b847049a547d"
  }
]

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden">
         <Image 
            src={project.image} 
            alt={project.title} 
            width={800} 
            height={192} 
            className="w-full h-48 object-cover"
            />
          <CardContent className="p-6">
            <h3 className="text-xl text-gray-800 font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="outline">{tech}</Badge>
              ))}
            </div>
            <div className="flex justify-between">
            <Button 
              className="rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 border-black border-2" 
              onClick={() => window.open(project.link, '_blank')}>
              <GitHub className="mr-2 h-4 w-4" /> Ver Código
            </Button>
            <Button
              className="rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 border-black border-2"
              onClick={() => window.open(project.urlProyect, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />Ir a Proyecto
            </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Projects;

//----------------------------------------------------------------en futuros proyectos podemos ajusta tambien un variant par los botones