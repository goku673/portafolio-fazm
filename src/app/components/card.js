    const Card = ({ className, children, ...props }) => (
        <div 
            className={`bg-white text-white p-6 rounded-lg shadow-lg ${className || ''}`}
            {...props}
        >
            {children}
        </div>
        );
    
    
    export default Card;