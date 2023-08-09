import TagCloud from "TagCloud";
import React, { useEffect } from "react";
import "./sphere.css";

export const text = [
    "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Java",
        "C",
        "NodeJS",
        "GITHUB",
        "MYSQL",
        "MERN",
        "AngularJs",

] 

function Sphere() {
  useEffect(() => {
      const container = document.querySelector(".tagcloud");

      console.log(container);
      console.log(text);
      console.log("TagCloud", TagCloud);

      const options = {
        radius: 240,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, text, options);
  }, []);

  return (
    <div>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
}

export default Sphere;