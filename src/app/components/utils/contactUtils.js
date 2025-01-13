    import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";

    export const itemsContact = [
        { icon: <GitHub className="mr-2 h-4 w-4" />, name: "GitHub", link: "https://github.com/goku6673", method : () => window.open("https://github.com/goku673", "_blank") },
        { icon: <Linkedin className="mr-2 h-4 w-4" />, name: "LinkedIn", link: "https://www.linkedin.com/in/goku6673/", method : () => window.open("https://linkedin.com/in/yourusername", "_blank")},
        { icon: <Mail className="mr-2 h-4 w-4" />, name: "Email", link:"mailto:tu@email.com", method : () => window.location.href = "mailto:zapatamorato@gmail.com" },
    ];