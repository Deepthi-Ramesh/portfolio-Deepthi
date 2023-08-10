import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import "./contact.css";
function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementsByClassName("alert").innerHTML="Alert";
    emailjs.sendForm(
        'service_9nutsld',
         'template_0cv60ye',
          form.current, 
          'xhH4yfrE9ey0IPJun')
      .then((result) => {
          console.log(result.text);
          alert("Sent");
          
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
      <div className="contact_con">
        <div className="contact_home">
            <div className="contact_head">CONTACT ME!</div>
            <div className="contact_items">
              <div className="contact_para">
              I’m interested in freelance opportunities – especially ambitious or large projects . If you really impressed with skills , please contact me.
              </div>
              <form className='wrap-form' ref={form} onSubmit={sendEmail}>
                <div className="form">
                    <input type="text" placeholder="Name" name="user_name" required/>
                </div>
                <div className="form">
                <input type="email" placeholder="Email" name="user_email" required/>
                </div>
                <div className="form2">
                    <textarea type="text" placeholder="Message" id="message" name="message" required ></textarea>
                </div>
                <div>
                <button className="contact_btn" type="submit">Send Me</button>
                <p className='alert'></p>
                </div>
                </form>
            </div>
       </div>  
       <div className='map'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3885.9399091691225!2d80.2742883737737!3d13.102993311986614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA2JzEzLjAiTiA4MMKwMTYnMzcuMSJF!5e0!3m2!1sen!2sin!4v1691581823355!5m2!1sen!2sin" width="500" height="400"  allowFullScreen="" loading="lazy"  title="mylocation" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>  
</div>
    )
}
export default Contact;