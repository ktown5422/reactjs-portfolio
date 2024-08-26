// ProjectDetailsItem.tsx
"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  image: StaticImageData;
  description: string;
  listContent: string[];
  flexDirection?: string;
};

const ProjectDetailsItem = ({
  title,
  image,
  description,
  listContent,
  flexDirection = "",
}: Props) => {
  return (
    <div className={`project-details__item ${flexDirection}`}>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="product-details-image-div"
      >
        <Image
          src={image}
          width={604}
          height={360}
          alt={title}
          className="img-fluid project-details__item-image"
        />
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="project-details__item-content"
      >
        <h5 className="heading-3">{title}</h5>
        <p className="textL project-details__item-content-text">{description}</p>
        <ol>
          {listContent.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsItem;

