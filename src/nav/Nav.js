import React from 'react'
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/helmet.png";
import deadEye from "../assets/blade.png";
import stack from "../assets/fist.png";
import envelop from "../assets/envelope.png";
import "../styles/nav.css";


export default function Nav() {
    const location = useLocation();

    const getNavPositionClass = () => {
        switch (location.pathname){
            case "/": 
                return "nav-about";
            case "/skills": 
                return "nav-skills";
            case "/projects": 
                return "nav-projects";
            case "/contact": 
                return "nav-contact";
            default: 
                return "";
        }
    }

    const getPageTitle = () => {
        switch (location.pathname){
            case "/": 
                return "ABOUT";
            case "/skills": 
                return "SKILLS";
            case "/projects": 
                return "PROJECTS";
            case "/contact": 
                return "CONTACT";
            default: 
                return "";
        }
    }

    const navPositionClass = getNavPositionClass();
    const PageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link"
    
        return(
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText}/>
                {isCurrent && <h1 className='page-title'>{PageTitle}</h1>}
            </Link>
        );
    };



    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/",
                astronautHelmet,
                "astronaut helmet icon",
                "nav-about"
            )}
            {renderNavLink(
                "/skills",
                deadEye,
                "deadEye icon",
                "nav-skills"
            )}
            {renderNavLink(
                "/projects",
                stack,
                "stack icon",
                "nav-projects"
            )}
            {renderNavLink(
                "/contact",
                envelop,
                "envelop icon",
                "nav-contact"
            )}
            </nav>
    )

}
