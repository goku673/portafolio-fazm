import { Children, cloneElement } from "react";

    const Tabs = ({ value, onValueChange, className, children}) => (
          <div className={className}>
               {Children.map(children, child => {
                return cloneElement(child, { activeTab: value, onValueChange })
               })}
          </div>
        )
    

    export default Tabs;