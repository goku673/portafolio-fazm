import Button from "./button";
import { motion } from "framer-motion";
    const TabsTrigger = ({ value, activeTab, onValueChange, children}) => {
        const isActive = value === activeTab;
        return (
            <Button
                key={value}
                className={`
                    relative px-4 py-2  text-sm font-medium transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
                    ${isActive 
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white"
                    }
                `}
                onClick={() => onValueChange(value)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${value}`}
               >
                {children}
                {isActive && (
                    <motion.div
                        layoutId="active-tab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
         </Button>
        )
    }

    export default TabsTrigger;