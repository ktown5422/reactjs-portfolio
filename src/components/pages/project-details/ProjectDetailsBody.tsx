// Usage in ProjectDetailsBody.tsx
"use client";
import AllProjectImage from "../all-projects/AllProjectImage";
import Link from "next/link";
import { StaticImageData } from "next/image";

// Import necessary images for the static data
import image11 from "@/../public/image/real-estate.png";
import image12 from "@/../public/image/Cyber-Bar(1).png";
import image13 from "@/../public/image/schnucksimg.webp";

// Define static project details data
const projectDetailsData = [
  {
    title: "Real Estate App",
    image: image11,
    description: " Next.js, Javascript, Vercel, Clerk, Supabase, Google Cloud Platform, Tailwind CSS",
    width: 1232,
    height: 500,
    link: "https://real-estate-app-inky-two.vercel.app/",
  },
  {
    title: "Cellphone Repair App",
    image: image12,
    description: "React Native, MongoDB, Redux",
    width: 1232,
    height: 500,
    link: "https://github.com/ktown5422/cell-phone-repair-react-native-app", // Redirect to Google when clicked
  },
];

const ProjectDetailsBody = () => {
  if (!projectDetailsData || projectDetailsData.length === 0) {
    return <div>Data is not available</div>;
  }

  return (
    <div className="all-project-body mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      {projectDetailsData.map((detail, index) => (
        <div className="card-style-two project-details p-32px" key={index}>
          <AllProjectImage
            image={detail.image}
            width={detail.width}
            height={detail.height}
            title={detail.title}
            text={detail.description}
            link={detail.link} // Pass the link prop
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsBody;

