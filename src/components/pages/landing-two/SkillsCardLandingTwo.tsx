"use client";
import { IconBrandWebflow } from "@tabler/icons-react";
import { Code, Figma, Framer, Html5, Illustrator, JavaScript, Photoshop, Python, Xd } from "iconsax-react";

const SkillsCardLandingTwo = [
  "Javascript",
  "Python",
  "HTML/CSS",
  "Node.js",
  "React.js",
  "Redux",
  "React Native",
  "Next.js",
  "Google Cloud",
];

export const sliderTwo = [
  {
    icon: <JavaScript size="32" />,
  },
  {
    icon: <Python size="32" />,
  },
  {
    icon: <Html5 size="32" />,
  },
  {
    icon: <Code size="32" />,
  },

];

const SkillsCardTwo = () => {
  return (
    <div className="card-style skills-card-landing-two overflow-hidden">
      <span className="heading-4 skills-card-landing-two__title">
        Skills & Tools
      </span>
      <div className="skills-card-landing-two__slider-aria ">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {SkillsCardLandingTwo.map((item) => (
                  <span key={item} className="skills-card__slider-text">
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="marquee-wrapper-icon-slider">
          <div className="marquee-inner to-right">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                {sliderTwo.map(({ icon }, index) => (
                  <span
                    key={`skill-slider-two${index}`}
                    className="skills-card__slider-two__box"
                  >
                    {icon}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardTwo;
