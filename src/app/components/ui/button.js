 import React from 'react'
 import { GitlabIcon as GitHub } from 'lucide-react';
    const Button = ( {onClick, icon, className, children }) => (
          <button onClick={onClick} className={`flex items-center mb-2 px-3 py-3  ${className}`}>
            {icon ? icon : ""}   
            {children}
          </button>
        )

          Button.displayName = "button";
    export default Button;