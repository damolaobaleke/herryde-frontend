import React from 'react';
import {Link} from 'react-router-dom'
import { Fade } from '@mui/material'
import Live from '../../animations/live'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './Home.css'

const Home=()=>{
    return(
        <div>
            <NavBar/>

            <div className="bg-Sec1">
                <div className="container">
                    <div className="row pt-3 text-left">
                        <div className="col-md-6">
                            <img className="her-circle" srcSet="https://res.cloudinary.com/dqxql5rpf/image/upload/v1646518517/HerRyde/hercircle_csoscr.png" alt=""/> 
                            <Fade in={true} timeout={2200}>
                                <h1 className="mt-5 text-white heading-one">We Keep <span className="her-text">HER</span> <br/> Safe Always...</h1>
                            </Fade>
                           
                            <p className="text-white mt-5 mt-md-0 sec1-p1">The first Nigerian ride-hailing platform built for <br className="line-break"/> women. Whether riding in the backseat or driving up <br className="line-break"/> front, the HerRyde experience is centered around your <br className="line-break"/> safety and comfort.</p>
                        
                            <p className="text-left text-white sec1-p2">Sign up now and experience <br className="line-break"/> riding with peace of mind</p>

                            <div className="d-flex">
                                <Link className="btn btn-drive mr-2 px-5" to="/signup/drive">Drive</Link>
                                <Link className="btn btn-ride mx-2 px-5" to="/signup/ride">Ride</Link>
                            </div>

                            <p className='sec1-p2 text-white mt-3'><Live/></p>
                        </div>
                        
                    
                        <div className="col-md-6">
                            <img className="ride-girl" src="https://res.cloudinary.com/dqxql5rpf/image/upload/v1646436487/HerRyde/AdobeStock_424393893_yr7b4h.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )

}

export default Home;