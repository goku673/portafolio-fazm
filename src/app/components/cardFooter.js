    const CardFooter = ({ className, children, ...props }) => (
            <div 
              className={`flex justify-center items-center space-x-4 p-4 border-t border-gray-200 ${className}`}
              {...props}
            >
              {children}
            </div>
        );

    
    export default CardFooter;