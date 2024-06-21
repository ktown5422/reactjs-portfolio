"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import { Be, Instagram } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";
import { IconBrandLinkedin } from "@tabler/icons-react";

const ProfileCardAbout = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-profile about-card p-32px profile-card"
    >
      <div className="profile-icons">
        <ProfileIcon icon={<IconBrandLinkedin size="40" />} socialLink="http://www.linkedin.com/in/kevin-townson" />
        <ProfileIcon icon={<Instagram size="40" />} socialLink="https://www.instagram.com/techmankev/" />
      </div>
      <div>
        <p className="textM about-profile__text">Follow Me</p>
      </div>
    </motion.div>
  );
};

export default ProfileCardAbout;
