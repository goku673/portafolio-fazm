"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./components/ui/loading";
import Header from "./components/ui/header";
import Tabs from "./components/ui/tabs";
import TabsList from "./components/ui/tabsList";
import TabsTrigger from "./components/ui/tabsTrigger";
import TabsContent from "./components/ui/tabsContent";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Projects from "./components/projects";

  const nameDev = "Freddy Amin Zapata Morato";
  const profession = "Full Stack Web Developer";
  const tabsData = [
    { value: "about", label: "About Me", component : <About/> },
    { value: "projects", label: "Projects", component : <Projects/> },
    { value: "skills", label: "Skills", component : <Skills/> },
    { value: "contact", label: "Contact", component : <Contact/> },
  ]
  const Home = () =>{
        const [activeTab, setActiveTab] = useState("about");
        const [isloading, setIsLoading] = useState(true);
        
        useEffect(() => {
          setTimeout(() => setIsLoading(false),2000)
        },[]);

        if (isloading) return <Loading/>;

        return (
                <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                  <div className="container mx-auto px-4 py-8">
                    <Header 
                      nameDev={nameDev} 
                      profession={profession}
                    />
                    <Tabs
                      value={activeTab}
                      onValueChange={setActiveTab} 
                      className="w-full"
                    >
                      <TabsList className="grid bg-slate-200 h-full grid-cols-4 mb-8 rounded-md">
                        {tabsData.map(tab => (
                          <TabsTrigger 
                            key={tab.value} 
                            value={tab.value}
                            activeTab={activeTab} 
                            onValueChange={setActiveTab}
                            >
                              {tab.label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {tabsData.map( tab => (
                          <TabsContent 
                             key={tab.label}
                             value={tab.value}  
                          >
                            {tab.component}
                          </TabsContent>
                        ))}
                    </Tabs>
                  </div>
               </div>
              )
  }

  export default Home;