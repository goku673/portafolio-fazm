const CardContent = ({ className, children, ...props }) => {
  return (
    <div 
      className={`p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardContent
