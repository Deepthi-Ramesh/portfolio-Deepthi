import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { Icon } from '@iconify/react';
function Footer(){
  const history = useNavigate();
    return(
      <div className="footer_con">
             <div className="text">Let's be in touch !</div>
             <div className="social-media">
                    <div 
                    className="icon"  
                    onClick={() => {
                        window.open("https://www.linkedin.com/in/deepthi-m-r-9205911b9/", "_blank")
                      }} >
                        <Icon icon="la:linkedin-in" fontSize={"2.5rem"} className="size-icon" style={{ color:"black"}}/></div>
                    <div className="icon"  onClick={() => {
                        window.open("https://github.com/Deepthi-Ramesh", "_blank")
                      }}><Icon icon="mingcute:github-fill" fontSize={"2.5rem"} className="size-icon" style={{ color:"black"}}/></div>
                    <div className="icon"  onClick={() => {
                        window.open("mailto: deepthimr1411@gmail.com", "_blank")
                      }}><Icon icon="tabler:mail-forward"  fontSize={"2.5rem"} className="size-icon" style={{ color:"black"}}/></div>
                    <div className="icon"  onClick={() => {
                        window.open("https://www.instagram.com/its_me_deepuz/", "_blank")
                      }}><Icon icon="entypo-social:instagram" fontSize={"2.5rem"} className="size-icon" style={{ color:"black"}}/></div>
                 </div>
            
                 <div className="foot-2-loc">
                  <div className="foot-name">
                     <div className="location">
                     <Icon icon="carbon:location-filled" />
                       India</div>
                     <div className="copyrights">
                     © 2023  Inc.All Rights Reserved</div>
                  </div>
                    
                     <div className="termsandConditions">
                   <ul>
            <li
             onClick={()=>{
            document.querySelector('.abt_con').scrollIntoView({
              behavior: 'smooth'
            });}}
            >About</li>
            <li   onClick={()=>{
            document.querySelector('.skills_con').scrollIntoView({
              behavior: 'smooth'
            });}}
            >Skills</li>
             <li   onClick={()=>{
               history("./skills")
             }}
            >Certifications</li>
            <li onClick={()=>{
            document.querySelector('.contact_con').scrollIntoView({
              behavior: 'smooth'
            });}}
            >Contact</li>
        </ul>
    </div>
                 </div>
   
      </div>
    );
}
 
export default Footer;