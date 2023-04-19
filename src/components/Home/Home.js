import React from "react";
import "./Home.css";
import {Icon} from "@iconify/react"

import { useState } from "react";
function Home(){
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return(
     <div className="home_con">
        <div className="home-wrap">
        <div className="home_name">
            <p>Hi ,<br></br>
               I’M <span className="letter">D</span>eepthi ,
               <br></br>
               WEB DEVELOPER</p>
        </div>
        <div className="home_desc">
            <p>FULLSTACK DEVELOPER / FRONTEND DEVELOPER</p>
        </div>
        <div className="scroll-btn">
            <button className="home_btn"
            onClick={()=>{
              document.querySelector('.contact_con').scrollIntoView({
                behavior: 'smooth'
              });}}
            >CONTACT ME !</button>
              <div className="scroll">
     <Icon icon={"material-symbols:arrow-circle-up-rounded"} fontSize={"5rem"} color="rgb(109, 193, 166)"  onClick={scrollToTop} 
     className="res-scroll"
     style={{display: visible ? 'inline' : 'none'}} />
    </div>
        </div>
      
        </div>
        <div className="sticky-sidenav">
                    <div className="icon"  onClick={() => {
                        window.open("https://www.linkedin.com/in/deepthi-m-r-9205911b9/", "_blank")
                      }} ><Icon icon="la:linkedin-in" fontSize={"3rem"} style={{ color:"white"}}/></div>
                    <div className="icon" onClick={() => {
                        window.open("https://github.com/Deepthi-Ramesh", "_blank")
                      }}><Icon icon="mingcute:github-fill" fontSize={"3rem"} style={{ color:"white"}}/></div>
                    <div className="icon"   onClick={() => {
                        window.open("mailto: deepthimr1411@gmail.com", "_blank")
                      }}><Icon icon="tabler:mail-forward"  fontSize={"3rem"}  style={{ color:"white"}}/></div>
                    <div className="icon"  onClick={() => {
                        window.open("/files/Resume.pdf", "_blank")}}><Icon icon="mdi:file-document-edit" fontSize={"3rem"} style={{ color:"white"}}/></div>
        </div>
     </div>
  );
}
export default Home;