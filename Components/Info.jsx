import React from "react";
import InformationCard from "./InformationCard";
import {
  faLaptopCode,
  faMobileAndroid,
  faCode,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Technotrench, a premier IT services and consultancy firm, specializes
          in crafting innovative solutions for businesses. Driven by a passion
          for technology, we firmly believe in software&apos;s transformative
          power. Our internship program stands as a cornerstone of our
          commitment to shaping the future of the industry. We prioritize
          practical knowledge, offering hands-on learning through live projects
          and real-world examples. Join us at Technotrench and unlock your
          potential in the dynamic world of technology.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Web Development"
          description="Technotrench offers a web development internship that provides invaluable practical work experience and an immersive introduction to crafting and enhancing web-based systems. Dive into engaging challenges and real-world projects, gaining hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment. Apply now to unlock your potential!"
          icon={faLaptopCode}
        />

        <InformationCard
          title="Android development"
          description="Android, the user-friendly open-source operating system, has revolutionized the way we interact with internet applications and conduct essential tasks on our mobile devices. At Technotrench, we understand the increasing preference for mobile usage and offer the perfect starting point for your app development journey. Discover the simplicity of creating your first app with us and unlock a world of boundless possibilities in the realm of mobile innovation."
          icon={faMobileAndroid}
        />

        <InformationCard
          title="Java Programming"
          description="Become a Java programming master from the comfort of your own home and unlock incredible job prospects with our certification program. Join our comprehensive 4-week internship program, where you'll learn everything from web application development to deployment using Java. Build a solid foundation for your career with hands-on training and real-world application in a supportive and collaborative environment."
          icon={faCode}
        />
        <InformationCard
          title="C++ Programming"
          description="Gain mastery in C++ programming from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment using C++. Establish a strong base for your career and real-world implementation within a supportive and collaborative setting."
          icon={faCode}
        />
        <InformationCard
          title="Python Programming"
          description="Join our 4-week comprehensive internship program and master the fundamentals of programming in Python from the convenience of your own home. Gain the skills and knowledge to apply for exciting job opportunities in the field. In this program, you will learn everything from web development to the deployment of Python-based web applications. Get certified and enhance your career prospects. Don't miss this opportunity to excel in Python programming!"
          icon={faCode}
        />
        <InformationCard
          title="Data Science"
          description="Remote data science internships at Technotrench provide a unique opportunity to gain valuable experience in the midst of the virtual workforce while remaining fully immersed in one of the top organizations in the field. Our data analysis internships are among the most sought-after and competitive opportunities within the broader data science landscape. Join us and embark on a journey of discovery and growth in the ever-evolving realm of data science."
          icon={faChartLine}
        />
      </div>
    </div>
  );
}

export default Info;
