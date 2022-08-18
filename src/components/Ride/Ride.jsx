import React,{useState, useEffect} from 'react'
import Constants from '../../constants/constants'
import NavBarRide from '../NavBar/NavBarRideDrive';
import { Fade, Zoom} from '@mui/material'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Footer from '../Footer/Footer';
import './Ride.css'


const RidePage=()=>{
    const[nav, setNav]= useState({navStatus:'ride'})
    const[rideForm, setForm] = useState({firstname:"", lastname:"", email:"", phoneNumber:"", city:"", herRydeStatus:Constants.RIDER})

    useEffect(()=>{
        const firebaseConfig = {
            apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID ,
        };
        
        const firebaseApp = initializeApp(firebaseConfig);
    },[])

    const onFormSubmit= async(e)=>{
        e.preventDefault()
       
        const db = getFirestore();

        try {
            const userDocRef = await addDoc(collection(db, 'users'), {
                email: rideForm.email,
                firstName: rideForm.firstname,
                lastName:rideForm.lastname,
                phoneNumber:rideForm.phoneNumber,
                city:rideForm.city,
                herRydeStatus:rideForm.herRydeStatus
            });

            if(userDocRef.id.length > 1){
                console.log('Document written with ID: ', userDocRef.id);
                alert("Submitted successfuly!")

                //either send email, set toast to true
                setForm({...rideForm, firstname:"",lastname:"", email:"", phoneNumber:"", city:""})
            }
           

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return(
        <div>
            <div className="bg-Ride">
                <NavBarRide navStatus={nav.navStatus}/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-7">

                        </div>

                        <div className="col-md-5">
                            <div className="card py-2 px-2">
                                <div className="card-body">

                                    <h3 className="ride-heading my-3">Enjoy the safety, reliability and  comfort of riding with HerRyde</h3>
                                    <p>Sign up now to be the first to know when we&#39;re in your city</p>

                                    <div className="d-flex mt-2">
                                       <a className="btn app-store-btn pr-4 pr-md-0" href="https://apps.apple.com/ng/app/herryde-women-driving-women/id1626250462" target="_blank" rel="noreferrer">
                                            <div className="row">
                                                <div className="col-2">
                                                    <i style={{color:'white', background:'cover', paddingTop:'8px', paddingLeft:'2px', transform:'scale(2.5)'}} className="fa fa-solid fa-brands fa-apple"></i>
                                                </div>
                                                <div className="col-9">
                                                    Available on the <br /><span style={{fontWeight:'900'}}>App store</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="btn play-store-btn" href="https://play.google.com/store/apps/details?id=herryde.passenger" target="_blank" rel="noreferrer">
                                            <div className="row">

                                                <div className="col-2">
                                                    <i style={{color:'white', background:'cover', paddingTop:'8px', paddingLeft:'2px', transform:'scale(2.5)'}} className="fa-solid fa-brands fab fa-google-play"></i>
                                                </div>

                                                <div className="col-9">
                                                    Get it on<span style={{fontWeight:'900'}}><br/>Google Play</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <form onSubmit={onFormSubmit} action="" method="POST">
                                        <p className="sign-up-heading-text mt-2">Sign up now</p>

                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <input className="form-control py-2 px-3" type="text" placeholder="First name" value={rideForm.firstname} onChange={(e)=> setForm({...rideForm, firstname:e.target.value})} required/>
                                            </div>

                                            <div className="col-md-6">
                                                <input className="form-control py-2 px-3 mt-4 mt-md-0" type="text" placeholder="Last name" value={rideForm.lastname} onChange={(e)=> setForm({...rideForm, lastname:e.target.value})} required/>
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

                           {/* Transitions can only have 1 child */}
                            {/* <div className="book-a-ride-text text-center my-3">
                                OR BOOK A RIDE BELOW
                            </div>

                            <Zoom in={true} style={{ transitionDelay: nav.navStatus === 'ride' ? '100ms' : '0ms' }}>
                                <div>
                                    <iframe className='mt-2' style={{borderRadius:'10px', border:'1px solid #521a7a'}}  width="100%" height="410" src="https://herryde.ondelight.app/" allowFullScreen allow="geolocation"></iframe>
                                </div>
                            </Zoom> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}

export default RidePage