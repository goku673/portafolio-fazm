import React from "react"
import Button from "./ui/button";
import Card from "./card";
import CardContent from "./card-content";
import { FileText } from "lucide-react";
import Image from "next/image";

    const messageWelcome = "Welcome to my digital world."
    const messageAbout = "Hello! I am a 22-year-old full-stack web developer. I love transforming ideas into functional and attractive web applications. With skills in both client-side and server-side technologies, I am committed to creating digital experiences that make a difference. Explore my portfolio and discover what I can do!";
    const About = () => (
            <Card>
                <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                        <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/Pica-enhance-20250121215814.png?alt=media&token=ab6fa48f-6115-4926-9c4f-e7f7ed0a33b8" 
                        alt="mi nombre" 
                        width={200} 
                        height={200} 
                        className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <h2 className="text-2xl text-gray-600 font-sans mb-4 font-bold">
                        {messageWelcome}
                      </h2>
                      <p className="text-gray-400 mb-4 font-sans">
                      {messageAbout}  
                      </p>
                      <Button 
                        onClick={() => window.open("/freddy-amin-zapata-moato-fazm.pdf", "_blank")} 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        icon={<FileText className="mr-2 h-4 w-4"/>}
                      >
                        Download CV
                      </Button>
                      
                    </div>
                </CardContent>
            </Card>
      )

    export default About;