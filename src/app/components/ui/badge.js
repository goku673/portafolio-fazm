    export const variants = {
        default: "bg-blue-500 text-white hover:bg-blue-600", 
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        contactBox: "bg-gray-200 text-gray-800 hover:bg-gray-300 border-black border-2 justify-center rounded-md",
    };

    const Badge = ({ children, variant = "default", className = "", ...props }) => {
        const baseStyles ="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
        const variantStyles = variants[variant] || variants.default;
        return (
            <span className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            {children}
            </span>
        );
    };

    export default Badge;

