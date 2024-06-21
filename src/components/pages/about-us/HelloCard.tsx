"use client";
import image from "@/../public/image/shape-11.png";
import { motion } from "framer-motion";
import Image from "next/image";

const HelloCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card card-hello"
    >
      <span className="heading-3">Hello,</span>
      <h2 className="heading-3">I’m Kevin Townson, a</h2>
      <span className="heading-3">Software Engineer.</span>
      <p className="textL">
        I enjoy working with creative people to make useful and interesting software. What I really like about coding is solving tough problems and coming up with new ideas. It makes me happy to turn difficult challenges into great digital projects, using both my tech skills and creativity.
      </p>
      <Image
        src={image}
        width={99}
        height={99}
        alt="Shape"
        className="card-hello__shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default HelloCard;
