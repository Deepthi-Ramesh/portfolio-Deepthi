import React, { useEffect } from "react";
import "./sphere.css";
import TagCloud from "TagCloud";

const Sphere = () => {

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      let radii;
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

      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }
      const options = {
        radius: radiusValue(),
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
