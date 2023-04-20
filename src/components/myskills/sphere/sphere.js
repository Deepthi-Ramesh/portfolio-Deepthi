import React, { useEffect } from "react";
import "./sphere.css";
import TagCloud from "TagCloud";

const Sphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Java",
        "C",
        "NodeJS",
        "GITHUB",
        "C++",
        "MERN",
        "AngularJs"
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
    <div className="app-outer">
      <div className="app-innner">
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </div>
     </div>
    </>
  );
};

export default Sphere;
