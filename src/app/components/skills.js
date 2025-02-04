import React from "react"
import Progress from "./ui/progress";
import Card from "./card";
import CardContent from "./card-content";
import { skills, skillsKnowledge } from "./utils/skillsUtils";
    const Skills = () => (
      <div className=" space-y-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl text-gray-800 font-extrabold mb-6">
            My Skills
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
            Areas of Knowledge
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

