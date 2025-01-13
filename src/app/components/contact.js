import React from "react";
import Button from "./ui/button";
import Card from "./card";
import CardContent from "./card-content";
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";
import { variants } from "./ui/badge";
   
    const itemsContact = [
        { icon: <GitHub className="mr-2 h-4 w-4" />, name: "GitHub", link: "https://github.com/goku6673", method : () => window.open("https://github.com/goku673", "_blank") },
        { icon: <Linkedin className="mr-2 h-4 w-4" />, name: "LinkedIn", link: "https://www.linkedin.com/in/goku6673/", method : () => window.open("https://linkedin.com/in/yourusername", "_blank")},
        { icon: <Mail className="mr-2 h-4 w-4" />, name: "Email", link:"mailto:tu@email.com", method : () => window.location.href = "mailto:zapatamorato@gmail.com" },
    ]
    const Contact = () => (
            <Card>
                <CardContent className="p-6">
                    <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Conectemos</h2>
                    <div className="flex flex-col space-y-4">
                    {itemsContact.map(item => (
                        <Button
                        key={item.name}
                        className={variants.contactBox}
                        onClick={item.method}
                        >
                        {item.icon} {item.name}
                        </Button>
                    ))}
                    </div>
                </CardContent>
            </Card>
       )

    export default Contact;
