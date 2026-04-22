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
        I build React and Next.js applications with polished interfaces,
        practical data flows, and product decisions that make the software
        easier to use. My strongest work sits between frontend craft and
        full-stack execution.
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
