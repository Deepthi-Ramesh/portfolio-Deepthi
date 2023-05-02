import React from "react";
import { useNavigate } from "react-router-dom";
import "./skills.css";
import Sphere from "./sphere/sphere";
//  var htmlContent = require('./index.html');
function Skills(){
    const history = useNavigate();
    return(
        <div className="skills_con">
            <div className="skills_head"> MY SKILLS</div>
            <div className="skills_items">
              <div className="skills_para">
                 <p>
                  I have started growing my technical skills and pratical knowledge on my interests . A software engineer need to have a basic understanding of programming to support customers or coordinate projects.Hopefully, my skills and me can possess that.
                 </p>
                 <div>
            <button className="home_btn"onClick={()=>{
                  history("./skills")
            }}>View More !</button>
        </div> 
              </div>
              <div className="skills_sphere">
                {/* <Sphere /> */}
                {/* <div dangerouslySetInnerHTML={ {__html: htmlContent} } /> */}
                {/* <object data="./index.html" width={500} height={500}></object> */}
                {/* <iframe src="./index.html"></iframe> */}
               <img src="./images/rename.png" alt="" id ="dummy-sphere" /> 
              </div>
            </div>
        </div>
    )
}
export default Skills;
