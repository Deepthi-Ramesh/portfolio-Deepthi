import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import Appcomponent from "./Appcomponent";
function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_9nutsld',
         'template_0cv60ye',
          form.current, 
          'xhH4yfrE9ey0IPJun')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="contact_con">
            <div className="contact_head">CONTACT ME!</div>
            <div className="contact_items">
              <div className="contact_para">
              I’m interested in freelance opportunities – especially ambitious or large projects . If you really impressed with skills , please contact me.
              </div>
              <form className='wrap-form' ref={form} onSubmit={sendEmail}>
                <div className="form">
                    <input type="text" placeholder="Name" name="user_name"/>
                </div>
                <div className="form">
                <input type="email" placeholder="Email" name="user_email"/>
                </div>
                <div className="form2">
                    <textarea type="text" placeholder="Message" id="message" name="message" ></textarea>
                </div>
                <div>
                <button className="contact_btn" type="submit">Send Me</button>
                </div>
                </form>
            </div>
           
</div>
    )
}
export default Contact;