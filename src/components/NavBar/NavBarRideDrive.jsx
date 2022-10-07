/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBarDrive.css'


const NavBarRideDrive=(props)=>{
    const[prevNavState, setNavBar]= useState(false)

    useEffect(()=>{
     
    },[])

    const toggleNav=()=>{
        let nav = document.querySelector('.navbar-drive')
        if(window.scrollY > nav.clientHeight){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', toggleNav)


    return(
        <nav className={`navbar navbar-drive navbar-expand-md sticky-top ${prevNavState ? 'scroll-active' : ''}`}>
            <div className="container">

                <Link className="navbar-brand" to="/"><img className="nav-brand-img" 
                    srcSet={props.navStatus !== 'ride' ? 'https://res.cloudinary.com/dqxql5rpf/image/upload/v1646436485/HerRyde/Artboard_2_sjan5v.svg': 'https://res.cloudinary.com/dqxql5rpf/image/upload/v1646541014/HerRyde/WhiteHerryde_jlmuf6.svg'} 
                    alt="brand-logo"/>
                </Link>
                
                <button className="navbar-fixed-side navbar-fixed-side-left" role="navigation" type="button" data-toggle="collapse" data-target="#navlinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{color: '#521a7a',fontSize:'28px'}}></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navlinks">
                       
                    <Link className={`nav-link ${props.navStatus !== 'ride' ? 'nav-link-drive' : 'nav-link-ride'}`} to="/signup/drive">Drive</Link>
                
                    <Link className={`nav-link ${props.navStatus !== 'ride' ? 'nav-link-drive' : 'nav-link-ride'}`} to="/signup/ride">Ride</Link>

                    <Link className={`nav-link ${'nav-link-book-ride'}`} to="/signup/ride/Book-a-ride">Book a Ride</Link>
                             
                    {/* <a target='_blank' rel='noreferrer' className={`nav-link ${props.navStatus !== 'ride' ? 'nav-link-drive' : 'nav-link-ride'}`} href="https://herryde.ondelight.app/">Book a ride</a>*/}
                </div>
            </div>
        </nav> 
    )

}
export default NavBarRideDrive