"use client";
import profileImage from "@/../public/image/mePicimg2.jpg";
import profileShape from "@/../public/image/landing-two-profile-shapepng.png";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Send2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

const focusAreas = ["Product UI", "API design", "Automation"];

const LandingTwoBio = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="card-style-two biography-style "
    >
      <div className="position-relative">
        <Image
          src={profileImage}
          width={260}
          height={260}
          style={{ objectFit: "cover" }}
          alt="Profile Bio"
          className="biography-style__bio-image"
        />
        <Image
          src={profileShape}
          width={272}
          height={272}
          alt="Profile shape"
          className="biography-style__bio-shape"
        />
      </div>
      <Link href={`/contact`}>
        <Send2 size={32} className="biography-style__send-icon" />
      </Link>
      <div className="biography-style__button-text">
        <Link
          href={`/about-us-two`}
          className={`biography-style__button textXL`}
        >
          I’m Kevin Townson
        </Link>
        <p className="biography-style__text textL">
          I design and build software that feels useful on day one, from
          customer-facing React apps to backend workflows that keep products
          moving.
        </p>
        <div className="biography-style__focus-list">
          {focusAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </div>
      <LinkPrimaryTwo
        linkText="Biography"
        link="/about-us"
        className="biography-style__link"
      />
    </motion.div>
  );
};

export default LandingTwoBio;
