import React from 'react'

export default function MenuIcon(){

    
    function handleClick(){
        let icon = document.getElementById("icon-nav");
         icon.classList.toggle('open')
    }
    return (
        <div className="hamburger">
    <div id="icon-nav" onClick={(handleClick)}>
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
    )
}