import React from 'react'
import Progress from './ui/progress';
import Card from './card';
import CardContent from './card-content';

    const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "GraphQL", level: 65 },
    ]

    const Skills = () => ( 
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
    )

    export default Skills;

