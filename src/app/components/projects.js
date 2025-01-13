import React from "react"
import Button from "./ui/button";
import Card from "./card";
import CardContent from "./card-content";
import Badge from "./ui/badge";
import { GitlabIcon as GitHub, ExternalLink } from "lucide-react";
import Image from "next/image";
import CardFooter from "./cardFooter";
import { projects} from "@/app/components/utils/projectsUtils";


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
          </CardContent>
          <CardFooter>
            <Button 
                className="rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 border-black border-2" 
                onClick={() => window.open(project.link, "_blank")}>
                <GitHub className="mr-2 h-4 w-4" /> Ver Código
              </Button>
              <Button
                className="rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 border-black border-2"
                onClick={() => window.open(project.urlProyect, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />Ir a Proyecto
              </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Projects;

//----------------------------------------------------------------en futuros proyectos podemos ajusta tambien un variant par los botones