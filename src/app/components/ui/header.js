import React from 'react';
import { motion } from 'framer-motion';

    const Header = ({ nameDev, profession }) => (
            <div className="mb-12">
                <motion.h1
                    initial={ { opacity: 0, y: -20} }
                    animate={ { opacity: 1, y: 0} }
                    transition={ { duration: 1 } }
                    className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    {nameDev}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-center text-gray-400 mt-2"
                >
                    {profession}
                </motion.p>
            </div>
         )
    

  export default Header;