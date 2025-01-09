  const Progress = ({ value = 0, max = 100, className = '', ...props }) => {
    const percentage = (value / max) * 100;

    return (
        <div className={`w-full bg-gray-200 rounded-full  h-2.5 ${className}`} {...props}>
        <div 
            className="bg-black rounded-l h-2.5 transition-all duration-300 ease-in-out"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
        />
        </div>
    )
    }

    export default Progress;
