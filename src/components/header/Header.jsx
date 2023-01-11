import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
import MenuIcon from "../menu/Menu";
import { ArrowRight, ArrowForward } from "@mui/icons-material";

export default function Navbar(props) {
  const [isHover, setIsHover] = useState(false);
  const [isScroll, setIsScroll]= useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      let hide = document.querySelector(".top__content");
            if(window.scrollY > 0  ){
             
                setIsScroll(true);
              
               hide.classList.add("remove")
               console(hide)
                
            }
            else{
                setIsScroll(false)
                hide.classList.remove("remove")
            }
    };
    window.addEventListener("scroll", handleScroll)
    return()=>{
        window.removeEventListener("scroll", handleScroll)
       
    }
  },[])

  return (
   <>   
    <div className="header__container" >
      <div className="header__top transition-all  duration-700">
        <div className="top__content ">
          <span className="header__text ">
            New: Create delightful, in-person payment experiences with Paystack
            Terminal
         
          </span>
          <img src="images/arrow.svg" alt="arrow" className="w-[20px]"/>
        </div>
      </div>
      <header className={`${isScroll && 'header' }`} >
      <div className="pane">
     
      <nav className="nav">
        <div className="navbar__left">
        <div className="logo">
            <img src="images/Paystack_Logo.png" alt="Logo" />
            
          </div>
          
            <ul className="nav-_ul">
              <div className="item">
                <li>
                  <a href="#">
                 
                    Why Paystack 
                    <span className="u-icon-arrow"></span>
                  </a>
                 
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#">Learn
                  <span className="u-icon-arrow"></span>
                  
                  </a>
                </li>
              </div>
            </ul>
          </div>
      
        <div className="navbar__right">
            <ul className="nav-_ul">
              <div className="item">
                <li>
                  <a href="#">
                    Developer
                    <span className="u-icon-arrow"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Support
                    <span className="u-icon-arrow"></span>
                  </a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <button className="try_button2">Create a free Account</button>
                <div className="nav_country">
                  <img className="w-[15px] ml-[5px]" src="images/ng.svg" alt="" />
                  
                </div>
               
              </div>
              
            </ul>
           
          </div>
          <MenuIcon className="ul_nav-icon"/>
        </nav>
      </div>
     
      </header>
    </div>
    
</>
  );
}
