import React from "react";
import "./About.css";
function About(){
    return(
        <div className="abt_con">
            <div className="abt_head">ABOUT</div> 
            <div className="abt_items">
                <div className="abt_img">
                    <img src="./images/Me.png" alt=""/>
                </div>
                <div className="abt_para">
                    <p>
                    My fascination in creating beautiful websites began in 2021, when I began my second year of engineering, and it has since led to my being a full stack developer! Creating projects and extremely stunning designs makes me very happy. I've always been a creative person who also has a logical side.
                    </p>
                </div>
            </div>

        </div>
    );
}
export default About;