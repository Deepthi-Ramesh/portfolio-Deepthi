import React from "react";
import "./certifications.css";
function Certifications(){
    return(
        <div className="certi-con">
            <div className="certi-head">CERTIFICATIONS</div> 
            <div className="certi-items">
            <div className="certi-para">
                    <p>
                    I have completed my Certification in FUll Stack Development from Infosys Springboard.
                    </p>
                </div>
                <div className="certi-img">
                    <img src="./images/full.png" alt=""/>
                </div> 
                <div className="certi-para">
                    <p>
                        Completion of my React js Course from Codedamn Platform.
                    </p>
                </div>           
                <div className="certi-img">
                    <img src="./images/React.png" alt=""/>
                </div>
            </div>
            <div className="certi-head">ACHIEVEMENTS</div> 
            <div className="certi-intern">Team Leader</div> 
            <div className="certi-items">
            <div className="certi-para">
                    <p>
                    Lead a Team and participated in Smart India Hackathon Software Edition which was held at Hindustan University (HIT) Coimbatore . 
                    Dedicated team leader with the ability to effectively manage and achieve project goals, leveraging my complex understanding of systems engineering concepts.
                    </p>
                </div>         
                <div className="certi-img">
                    <img src="./images/sih.jpeg" alt=""/>
                </div>
            </div>
            <div className="certi-head">EXPERIENCE</div> 
            <div className="certi-items">
            <div className="certi-intern">INTERN @ Techsnap</div> 
            <div className="certi-para">
                    <p>
                    Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.
<br></br>Worked in a time effective and organized manner to get the job done as quickly and efficiently as possible.
                    </p>
                </div>         
            </div>
        </div> 
        
        
    )

}
export default Certifications;