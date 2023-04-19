import React from "react";
import "./portfolio.css";
import { useState } from "react";
function Griditem(props){
    const [locked, setLocked] = useState(false);
    const {id , img ,url} = props;
    return(
        <>
        <div className="grid_item" onMouseEnter={() => setLocked(true)} onMouseLeave={() => setLocked(false)} >
             <img src={img} alt={id}/>
             { locked && <div className="locked-product" onClick={() => {
                        window.open(url, "_blank")
                      }}
>
                    <div className="view" >view project</div>
                </div>}
        </div>
        </>
    );
}
export default Griditem;