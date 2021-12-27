import { motion } from "framer-motion";
import Head from 'next/head'
import {GridItemStyle} from '../layouts/grid-item'

const variants = {
    hidden: {opacity: 0, x: 0, y: 20},
    enter: {opacity: 1, x:0, y:20},
    exit: {opacity: 0, x: 0, y:20}
}

const Layout = ({ children, title}) => (
    <motion.article initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{duration: 0.2, type: 'easeInOut'}}
                    style={{position: 'relative'}}>
                        <>
                        {title && ( <Head>
                            <title>{title} - Farid Guzman</title>
                        </Head>)}
                        {children}
                        <GridItemStyle />
                        </>
                    </motion.article>

)

export default Layout