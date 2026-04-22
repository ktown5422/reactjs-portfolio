"use client";
import titleShape from "@/../public/image/landing-two-title-shape.png";
import { motion } from "framer-motion";
import Image from "next/image";

const heroMetrics = [
  { value: "20+", label: "shipped projects" },
  { value: "3+", label: "years building" },
  { value: "GCP", label: "cloud ready" },
];

const ProductDesign = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style-two product-design p-32px"
    >
      <div className="product-design__status-row">
        <span className="product-design__status-pill">Available for 2026 builds</span>
        <span className="product-design__signal" aria-hidden="true" />
      </div>
      <span className="product-design__sub-title heading-4">
        Software engineer
      </span>
      <h1 className="heading-2 product-design__title">
        Building sharp web apps with React, Next.js, and cloud systems.
      </h1>
      <p className="product-design__intro textM">
        I turn product ideas into fast, resilient interfaces with clean code,
        clear UX, and enough craft to make the details feel intentional.
      </p>
      <div className="product-design__metrics">
        {heroMetrics.map((metric) => (
          <div className="product-design__metric" key={metric.label}>
            <span className="product-design__metric-value">{metric.value}</span>
            <span className="product-design__metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
      <Image
        src={titleShape}
        width={60}
        height={60}
        alt="Title shape"
        className="product-design__shape scale-up-down light-mood-image-shape"
      />
    </motion.div>
  );
};

export default ProductDesign;
