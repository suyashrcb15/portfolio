import "./hero.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
    repeat:Infinity,
    }
  }
};

const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
      staggerChildren:0.1,
    },
  },
};

const Hero = ({contactRef,portfolioRef}) => {
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }};
    const scrollToPortfolio = () => {
      if (portfolioRef.current) {
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
      }};
  return (
    <div className="hero">
    <div className="wrapper">
    <motion.div className="textContainer" variants={textVariants} initial="initial"animate="animate">
    <motion.div variants={textVariants}>
  <h2 className="animated-text">SUYASH TIWARI</h2>
</motion.div>      
      <motion.h1 variants={textVariants}>FullStack Developer</motion.h1>
      <motion.div variants={textVariants} className="buttons">
        <button variants={textVariants} onClick={scrollToPortfolio}>See the Latest Work</button>
        <button className="contactBtn" variants={textVariants} onClick={scrollToContact}>Contact Me</button>
      </motion.div>
      <motion.img variants={textVariants} src="/scroll.png"alt="" initial="hidden" animate="scrollButton"></motion.img>
    </motion.div>
    </div>
    <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Coding Development Technology
      </motion.div>

      <div className="imageContainer">
        <img src="/coding.svg" alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero
