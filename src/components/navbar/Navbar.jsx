import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () =>{
    return (
        <div className = "navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}}transition={{duration:0.5}}>Suyash Workspace</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/suyash-tiwari-r73833/" target="_blank" rel="noopener noreferrer"><img src="/linkedIn.png" alt="LinkedIn"/></a>
                <a href="https://github.com/suyashrcb15" target="_blank" rel="noopener noreferrer"><img src="/Github.png" alt="Github"/></a>
                <a href="https://leetcode.com/u/user1851jH/" target="_blank" rel="noopener noreferrer"><img src="/leetcode.png" alt="Leetcode"/></a>
                <a href="https://www.codechef.com/users/suyash151815" target="_blank" rel="noopener noreferrer"><img src="/codechef.png" alt="GFG"/></a>
            </div>
        </div>
        </div>
    )
}
export default Navbar