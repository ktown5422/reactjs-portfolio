import CardMotionOne from "@/components/framer-motion/CardMotionOne";
import { Dribbble, Instagram } from "iconsax-react";
import ProfileIcon from "../landing-one/ProfileIcon";
import AllProjectsTwo from "./AllProjectsTwo";
import ExperienceCardItemLandingTwo from "./ExperienceCardItemLandingTwo";
import LandingTwoAllBlogs from "./LandingTwoAllBlogs";
import LandingTwoAllService from "./LandingTwoAllService";
import LandingTwoBio from "./LandingTwoBio";
import LandingTwoGetInTouch from "./LandingTwoGetInTouch";
import LatestCardLandingTwo from "./LatestCardLandingOne";
import ProductDesign from "./ProductDesign";
import SkillsCardTwo from "./SkillsCardLandingTwo";
import { IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const LandingTwoBody = () => {
  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="landing-two-body">
        <div className="landing-two-body__1st">
          <ProductDesign />
          <LandingTwoBio />
        </div>
        <div className="landing-two-body__2nd">
          <div className="second-up-section">
            <div className="all-project-and-skills">
              <CardMotionOne>
                <AllProjectsTwo />
              </CardMotionOne>
              <CardMotionOne>
                <SkillsCardTwo />
              </CardMotionOne>
            </div>

            <div className="latest-works-and-others">
              <LatestCardLandingTwo />
              <CardMotionOne>
                <div className="experience-and-profile">
                  <div className="experience">
                    <ExperienceCardItemLandingTwo
                      counterNumber={3}
                      text="YEARS EXPERIENCE"
                      counterElement="+"
                    />
                    <ExperienceCardItemLandingTwo
                      counterNumber={2}
                      text="PROFFESSIONAL
                    PROJECTS"
                      counterElement="0"
                    />
                  </div>
                  <div className="profile profile-icons card-style-two p-32px">
                    <ProfileIcon icon={<IconBrandLinkedin size="40" />} socialLink="https://www.linkedin.com/in/kevin-townson/" />
                    <ProfileIcon
                      icon={<IconBrandYoutube size="40" />}
                      socialLink="https://www.youtube.com/@TechManKev"
                    />
                  </div>
                </div>
              </CardMotionOne>
            </div>
          </div>
          <div className="second-down-section">
            <LandingTwoAllService />
            <LandingTwoGetInTouch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTwoBody;
