import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items = [
    {
        id: 1,
        title: "AI Driven Interview and Assessment Platform",
        url: "https://skillsprint-vzgq.onrender.com",
        img: "/ai.png",
        type: "image",
        desc: "This is an AI-driven Interview and Assessment Platform built using Wapi_ai, Next.js, and Firebase. It enables users to practice real-time interviews and assessments related to various companies.",
    },
    {
        id: 2,
        title: "Pustak Kendra",
        url: "https://pustak-kendra.onrender.com",
        img: "/pus.png",
        type: "image",
        desc: "A Free Book Library where you can find PDFs of various books, watch video demos for each book, and use a Publisher Dashboard to publish new books.",
    },
    {
        id: 3,
        title: "FarmMitra",
        url: "",
        img: "/f.png",
        type: "image",
        desc: "A Mobile App for Farmers to remove middlemen and help Indian farmers get fair sale value for their produce.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10px", "10px"]);

    const handleDemoClick = () => {
        if (item.url) {
            window.open(item.url, "_blank");
        } else {
            alert("FarmMitra is a mobile app, so an online site is not available.");
        }
    };

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        {item.type === "iframe" ? (
                            <iframe
                                src={item.url}
                                width="100%"
                                height="300px"
                                frameBorder="0"
                                allowFullScreen
                                title={item.title}
                                className="project-iframe"
                            ></iframe>
                        ) : (
                            <img src={item.img} alt={item.title} />
                        )}
                    </div>
                    <motion.div className="textContainer" style={{ y: y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleDemoClick}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
