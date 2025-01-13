import React from "react";
import Button from "./ui/button";
import Card from "./card";
import CardContent from "./card-content";
import { itemsContact } from "./utils/contactUtils";
import { variants } from "./ui/badge";

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
