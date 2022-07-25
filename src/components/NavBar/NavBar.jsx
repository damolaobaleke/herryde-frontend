import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'


const NavBar=()=>{
    const[prevNavState, setNavBar]= useState(false)

    useEffect(()=>{
     
    },[])

   
    return(
        <nav className={`navbar navbar-home navbar-expand-md sticky-top`}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="nav-brand-img" srcSet="https://res.cloudinary.com/dqxql5rpf/image/upload/c_scale,w_842/v1646436485/HerRyde/Artboard_2_sjan5v.svg" alt="brand-logo"/></Link>
                
                <button className="navbar-fixed-side navbar-fixed-side-left" role="navigation" type="button" data-toggle="collapse" data-target="#navlinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{color: '#521a7a',fontSize:'28px'}}></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navlinks">
                    
                    <div className="dropdown navbar-nav ml-auto">
                        <button className="btn btn-sign-up dropdown-toggle px-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sign Up
                        </button>
                        <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
                            <Link className="nav-link"to="/signup/drive">Drive</Link>
                            <Link className="nav-link"to="/signup/ride">Ride</Link>
                        </div>
                    </div>


                </div>
            </div>
        </nav> 
    )

}
export default NavBar;