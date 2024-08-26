// AllProjectImage.tsx
"use client";
import linkImage from "@/../public/image/all-project-link.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  width: number;
  height: number;
  title?: string;
  text?: string;
  link?: string; // Optional link property
};

const AllProjectImage = ({ image, height, width, title, text, link = "/project-details" }: Props) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="image-body max-h-60 overflow-hidden"
    >
      {/* Link component without <a> */}
      <Link href={link}>
        {/* Image wrapped directly in Link */}
        <Image
          src={image}
          width={width}
          height={height}
          alt={title || "All Projects image"}
          className="image-body__image img-fluid max-h-60 object-cover"
        />
      </Link>
      <Link href={link} className="all-project-link">
        <span className="all-project-link__text-area">
          <span className="link-title heading-2">{title}</span>
          <span className="textL link-text">{text}</span>
        </span>
        <span className="all-project-link__image">
          <Image
            src={linkImage}
            width={175}
            height={100}
            alt="All Project Link image"
            className="img-fluid"
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default AllProjectImage;

