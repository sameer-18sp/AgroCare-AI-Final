import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h1>About AgroCare AI</h1>
        <p>
          AgroCare AI is dedicated to transforming the agricultural landscape through intelligent, AI-powered technologies.
          Our goal is to support farmers with real-time disease detection, actionable insights, and tools to promote smarter,
          greener farming.
        </p>
        <p>
          With a blend of cutting-edge machine learning and deep expertise in plant science, AgroCare AI delivers
          innovative solutions that help increase productivity and sustainability across all levels of farming.
          Be a part of the revolution in smart agriculture.
        </p>
        <h2>Contact Us</h2>
        <p><a href="mailto:agrocareai@gmail.com">agrocareai@gmail.com</a></p>
      </div>
    </div>
  );
};

export default AboutUs;
