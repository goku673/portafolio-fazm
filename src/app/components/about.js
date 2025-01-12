import React from "react"
import Button from "./ui/button";
import Card from "./card";
import CardContent from "./card-content";
import { FileText } from "lucide-react";
import Image from "next/image";

    const messageWelcome = "Bienvenido a mi mundo digital"
    const messageAbout = "Soy un desarrollador web full stack apasionado por crear experiencias digitales excepcionales. Con experiencia en tecnologías front-end y back-end, me especializo en construir aplicaciones web robustas y escalables.";
    const About = () => (
            <Card>
                <CardContent className="flex flex-col md:flex-row items-center p-6">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
                        <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/conexia-400921.appspot.com/o/foto.jpeg?alt=media&token=fbff735d-255a-4b1b-b959-bbb867d55a15" 
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
                        onClick={() => window.open("/Freddy-Amin-Zapata.docx", "_blank")} 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        icon={<FileText className="mr-2 h-4 w-4"/>}
                      >
                        Descargar CV
                      </Button>
                      
                    </div>
                </CardContent>
            </Card>
      )

    export default About;