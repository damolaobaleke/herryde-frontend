import React, {useState} from 'react'
import NavBarRide from '../NavBar/NavBarRideDrive'
import './BookRide.css'

const Booking=()=>{
    const[nav, setNav]= useState({navStatus:'book-a-ride'})

    return(
        <div className="bg-book-a-ride">
            <NavBarRide navStatus={nav.navStatus}/>

            <div className='container'>
                <div className="row jusify-content-center">
                    <div className="col-md-12">
                        <iframe className='mt-5' style={{borderRadius:'5px', border:'1px solid #521a7a'}}  width="100%" height="800" src="https://herryde.ondelight.app/" allowFullScreen allow="geolocation"></iframe>     
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Booking