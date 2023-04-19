import React from "react";
import "./contact.css";
import Appcomponent from "./Appcomponent";
function Contact(){
    return(
        <div className="contact_con">
            <div className="contact_head">CONTACT ME!</div>
            <div className="contact_items">
              <div className="contact_para">
              I’m interested in freelance opportunities – especially ambitious or large projects . If you really impressed with skills , please contact me.


              </div>
                <div className="form">
                    <input type="text" placeholder="Name"/>
                </div>
                <div className="form">
                <input type="email" placeholder="Email"/>
                </div>
                <div className="form2">
                    <textarea type="text" placeholder="Message" id="message" ></textarea>
                </div>
                <div>
                <button className="contact_btn">Send Me</button>
                </div>
                
            </div>
           
</div>
    )
}
export default Contact;