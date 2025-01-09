    const TabsContent = ({ value, activeTab, className, children}) => (
          <div className={className} style={{ display: value === activeTab ? "block": "none"}}>
            {children} 
          </div>
    )

    export default TabsContent;