import React,{useState} from 'react'
import NavBarRide from '../NavBar/NavBarRideDrive';
import Footer from '../Footer/Footer';
import './Ride.css'


const RidePage=()=>{
    const[nav, setNav]= useState({navStatus:'ride'})
    const[rideForm, setForm] = useState({firstname:"", lastname:"", email:"", phoneNumber:"", city:""})


    return(
        <div>
            <div className="bg-Ride">
                <NavBarRide navStatus={nav.navStatus}/>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-7">

                        </div>

                        <div className="col-md-5">
                            <h3 className="ride-heading my-3">Enjoy the safety, reliability and <br/> comfort of riding with HerRyde</h3>

                            <div className="card py-2 px-2">
                                <div className="card-body">

                                    <form action="" method="POST">
                                        <p className="sign-up-heading-text">Sign up now</p>

                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <input className="form-control py-2 px-3" type="text" placeholder="First name" value={rideForm.firstname} onChange={(e)=> setForm({...rideForm, firstname:e.target.value})} required/>
                                            </div>

                                            <div className="col-md-6">
                                                <input className="form-control py-2 px-3" type="text" placeholder="Last name" value={rideForm.lastname} onChange={(e)=> setForm({...rideForm, lastname:e.target.value})} required/>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                            <input className="form-control mt-2 mb-4 py-2 px-3" type="email" placeholder="Email" name="" id="" value={rideForm.email} onChange={(e)=> setForm({...rideForm, email:e.target.value})}/>

                                            <input className="form-control my-4 py-2 px-3" type="number" placeholder="Phone number" value={rideForm.phoneNumber} onChange={(e)=> setForm({...rideForm, phoneNumber:e.target.value})}/>

                                            <input className="form-control my-4 py-2 px-3" type="text" name="" id="" placeholder="City" value={rideForm.city} onChange={(e)=> setForm({...rideForm, city:e.target.value})} required/>

                                            <input className="btn btn-sign-up px-4" type="submit" value="Sign up"/>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default RidePage;