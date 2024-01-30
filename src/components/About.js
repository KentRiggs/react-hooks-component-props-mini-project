import React from "react";

function About(props) {
const placeholder = "https://via.placeholder.com/215";  
    return (
        <aside> 
        <img src={props.img || placeholder} alt="blog logo"/>
        <p>{props.about}</p>  
        </aside>
    )    
}

export default About