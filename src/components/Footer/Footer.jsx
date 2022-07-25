import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer=()=>{
    useEffect(()=>{
        
    },[])
   


    return(

    <footer className="footer">
        <div className="container">
            <div className="row justify-content-center py-0 py-md-4">

                <div className="col-md-4">
                    <img className="footer-logo" src="https://res.cloudinary.com/dqxql5rpf/image/upload/v1646436485/HerRyde/Artboard_2_sjan5v.svg" alt=""/>
                    <p className="footer-p1">Putting Women&#39;s safety first</p>

                    <ul className="list-inline mb-0 mt-4">
                        <span className="">
                            <a className="list-inline-item pr-4 pr-md-2" href="https://instagram.com/herrydehq" target="_blank" rel='noreferrer'><i style={{color:'#521a7a', fontSize:'30px'}} className="fa fa-brands fa-instagram"></i></a>
                            <a className="list-inline-item px-3 px-md-2" href="https://twitter.com/HerrydeHQ" target="_blank"  rel='noreferrer'><i style={{color:'#521a7a', fontSize:'30px'}} className="fa fa-brands fa-twitter"></i></a>
                            <a className="list-inline-item px-3 px-md-2" href="https://www.facebook.com/HerrydeHQ/" target="_blank"  rel='noreferrer'><i style={{color:'#521a7a', fontSize:'30px'}} className="fa fa-brands fa-facebook-square"></i></a>
                            
                        </span>
                    </ul>
                </div>


                <div className="col-md-4">
                    <p className="mt-4 mb-1  mt-md-3 ftr-colmn-two">Contact:</p>
                    <ul className="list-inline d-flex flex-column py-2 ftr-colmn-two ">
                        
                        <li className="py-2"><i style={{color:'#521a7a'}} className="fa fa-solid fa-envelope"></i><a className="mx-2" target="_blank"  rel='noreferrer' style={{color:'#521a7a', textDecoration:'none'}} href="mailto:contact@herryde.com"> contact@herryde.com</a></li>
                        <li className="py-2 mt-0 mt-md-3"><i style={{color:'#521a7a'}} className="fa fa-solid fa-phone"></i> <a className="mx-2" target="_blank"  rel='noreferrer' style={{color:'#521a7a', textDecoration:'none'}} href="tel:+2349134267818"> +2349134267818</a></li>   
                    </ul>
                </div>

                <div className="col-md-4">
                    <p className="text-center ftr-colmn-three">&#169; 2022 HerRyde Ltd. All rights reserved</p>  
                </div>

            </div>
        </div>
    </footer>
    )

}

export default Footer;