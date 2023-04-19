import React from "react";
import "./About.css";
function About(){
    return(
        <div className="abt_con">
            <div className="abt_head">ABOUT</div> 
            <div className="abt_items">
                <div className="abt_img">
                    <img src="./images/Me.png"/>
                </div>
                <div className="abt_para">
                    <p>
                       Since 2021 ,when I started my 2nd Year Engineering , I was very interested in building
                        attractive Websites and now that interest
                        made me a full stack Developer !  I’m very excited 
                        doing projects and  Super cool designs that would
                        be attractive . I’ve always been someone who has both
                        a creative and a logical side.
                    </p>
                </div>
            </div>

        </div>
    );
}
export default About;