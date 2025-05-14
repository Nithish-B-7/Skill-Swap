"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Parallax.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ imageUrl, videoUrl, heading }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="img-container">
      <div ref={ref}>
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="parallax-media"
          />
        ) : (
          <img
            src={imageUrl}
            alt={heading}
            className="parallax-media"
          />
        )}
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {heading}
      </motion.h2>
    </section>
  );
}

export default function Parallax() {
  const images = [
    { videoUrl: "/src/assets/video-1.mp4", heading: "Collaborate & Grow" },
    { videoUrl: "/src/assets/video-2.mp4", heading: "Share Your Passion" },
    { videoUrl: "/src/assets/video-3.mp4", heading: "Build Connections" },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 100,
    restDelta: 0.001,
  });

  return (
    <div id="example" className="parallax-wrapper">
      <motion.div className="progress" style={{ scaleX }} />
      {images.map((item, index) => (
        <Image
          key={index}
          imageUrl={item.imageUrl}
          videoUrl={item.videoUrl}
          heading={item.heading}
        />
      ))}
    </div>
  );
}
