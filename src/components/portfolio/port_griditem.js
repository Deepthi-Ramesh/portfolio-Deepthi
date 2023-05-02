import React from "react";
import "./portfolio.css";
import { useEffect, useState } from "react";
function Griditem(props){
    const [locked, setLocked] = useState(false);
    const {id , img ,url} = props;
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width:800px)").matches )

useEffect(() => {
  window
  .matchMedia("(min-width: 600px)")
  .addEventListener('change', e => setMatches( e.matches ));
   }, []);
    return(
        <>
        {matches ? (<div className="grid_item" onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)} >
        <img src={img} alt={id}/>
        { locked && <div className="locked-product" onClick={() => {
                   window.open(url, "_blank")
                 }}
>
               <div className="view" >view project</div>
           </div>}
   </div>):(<div className="grid_item"  onClick={() => {window.open(url, "_blank")}}>
        <img src={img} alt={id}/>
         </div >
    ) }

        </>
    );
}
export default Griditem;