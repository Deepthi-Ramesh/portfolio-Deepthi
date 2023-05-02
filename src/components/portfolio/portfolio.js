import React from "react";
import Griditem from "./port_griditem";
import "./portfolio.css";
import { images } from "../data";
function Portfolio(){
   
    return(
        <div className="portfolio_con">
           <p className="portfolio_head">MY PORTFOLIO</p>
           <p className="portfolio_abt">A precised gallery of my projects are chosen by me. These are the gems to show off my skills to the recruiters. Usually I use to create the codes that can also be used in the future.</p>
           <div className="grid_con">
              {images.map(item=>{
                return(
                 <Griditem 
                   id={item.id}
                   img={item.image}
                   url={item.link}
                    />
                )
            
              })}
                  
           </div>
       
       
      
        </div>
    );
}
export default Portfolio;