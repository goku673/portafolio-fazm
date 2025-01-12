import React from 'react'
import Progress from './ui/progress';
import Card from './card';
import CardContent from './card-content';

    const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "SQL", level: 70 },
    { name: "NoSQL", level:60},
    { name: "Api Rest Full", level: 65 },
    { name: "Tailwind CSS", level: 90},
    { name: "Docker", level: 40},
    ];

    const skillsKnowledge = [
      { name: "Java", level: 40 },
      { name: "Sprint Boot", level: 40 },
      { name: "React Native", level: 50 },
      ];

    const Skills = () => (
      <div className=" space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl text-gray-800 font-extrabold mb-6">
                Mis Habilidades
            </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                      <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
                </div>
           </CardContent>
        </Card>
        <Card>
           <CardContent>
           <h2 className="text-2xl text-gray-800 font-extrabold mb-6">
                Conocimientos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {skillsKnowledge.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                      <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
                </div>
           </CardContent>
        </Card>
      </div> 
    )

    export default Skills;

