import React,{useState}from "react";
import { Icon } from '@iconify/react';
import { InlineIcon } from '@iconify/react';
import "./Header.css"
function Header(){
  const [clicked,setclicked] =useState(false)
  return(
     <div className="nav_con">
        <div className="nav_logo">
          <img src="./images/logo1.png" className="logo_img" alt=""/>
        </div>
        <div className="nav_bar">
          <ul className={clicked ? 'nav_items active': 'nav_items'}>
          <li onClick={()=>{
            document.querySelector('.home_con').scrollIntoView({
              behavior: 'smooth'
            });
          }}>HOME</li>
          <li onClick={()=>{
            document.querySelector('.abt_con').scrollIntoView({
              behavior: 'smooth'
            });
          }} >ABOUT</li>
          <li onClick={()=>{
            document.querySelector('.portfolio_con').scrollIntoView({
              behavior: 'smooth'
            });
          }}>PORTFOLIO</li>
          <li onClick={()=>{
            document.querySelector('.contact_con').scrollIntoView({
              behavior: 'smooth'
            });
          }}>CONTACT</li>
          </ul>
        </div>
        <div className="menu-icon" onClick={()=>(setclicked(!clicked))}>
            {clicked ? <InlineIcon icon="ep:close-bold"  fontSize={"3rem"}/> : <Icon icon="ci:hamburger-md" className="hamburger"  fontSize={"3rem"} />}
            </div>
     </div>
  );
}
export default Header;