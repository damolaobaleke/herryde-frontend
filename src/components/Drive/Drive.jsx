import React, {useEffect, useState} from 'react'
import Constants from '../../constants/constants'
import { Slide } from '@mui/material';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import NavBarDrive from '../NavBar/NavBarRideDrive'
import Footer from '../Footer/Footer'
import './Drive.css';


const DrivePage=()=>{
    const[driveForm, setForm] = useState({firstname:"", lastname:"", email:"", phoneNumber:"", city:"", carStatus:"", herRydeStatus:Constants.DRIVER})


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

    const onFormSubmit= async (e)=>{
        e.preventDefault();
       
        const db = getFirestore();

        try {
            const userRef = await addDoc(collection(db, "users"), {
                email: driveForm.email,
                firstName: driveForm.firstname,
                lastName:driveForm.lastname,
                phoneNumber:driveForm.phoneNumber,
                city:driveForm.city,
                herRydeStatus:driveForm.herRydeStatus,
                carStatus:driveForm.carStatus
            });
            console.log("Document written with ID: ", userRef.id);

            if(userRef.id.length > 1){
                alert("Submitted successfuly!")

                //either send email, set toast to true
            }

        } catch (e) {
            console.error("Error adding document: ", e);
        }
          
    }

    return(
        <div>
            <NavBarDrive navStatus="drive"/>
            
            <div className="container">
                <div className="row ml-md-2 mt-5">
                    <div className="col-md-5">
                        <h1 className="drive-heading-one">Drive with HerRyde</h1>

                        <p>BreakTheBias and earn while driving with <br/> HerRyde</p>

                        <p style={{fontWeight:'bold'}}>Sign up now</p>

                        <form onSubmit={onFormSubmit} action="" method="POST">
                            <div className="my-3">
                               <input className="mx-1 car-radio-btn" type="radio" name="car" id="car" value="haveCar" onChange={(e)=> setForm({...driveForm, carStatus:e.target.value})}/>
                               <label className="mr-3" htmlFor="car">I have a car</label>
                               
                               <input className="ml-3  car-radio-btn" type="radio" name="car" id="car" value="needCar" onChange={(e)=> setForm({...driveForm, carStatus:e.target.value})} />
                               <label className="ml-1" htmlFor="car">I need a car</label>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-5">
                                    <input className="form-control py-2 px-3" type="text" placeholder="First name" value={driveForm.firstname} onChange={(e)=> setForm({...driveForm, firstname:e.target.value})} required/>
                                </div>

                                <div className="col-md-4">
                                    <input className="form-control py-2 px-3 mt-4 mt-md-0" type="text" placeholder="Last name" value={driveForm.lastname} onChange={(e)=> setForm({...driveForm, lastname:e.target.value})} required/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-9">
                                    <input className="form-control mt-2 mb-4 py-2 px-3" type="email" placeholder="Email" name="" id="" value={driveForm.email} onChange={(e)=> setForm({...driveForm, email:e.target.value})}/>

                                    <input className="form-control my-4 py-2 px-3" type="number" placeholder="Phone number" value={driveForm.phoneNumber} onChange={(e)=> setForm({...driveForm, phoneNumber:e.target.value})}/>

                                    <input className="form-control my-4 py-2 px-3" type="text" name="" id="" placeholder="City" value={driveForm.city} onChange={(e)=> setForm({...driveForm, city:e.target.value})} required/>

                                    <input className="btn btn-drive px-4" type="submit" value="Sign up"/>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/*Find better image*/}
                    <div className="col-md-7">
                        <Slide direction="left" in={true} timeout={1000}>
                            <img className="drive-image mt-2 mb-5 border" src="https://res.cloudinary.com/dqxql5rpf/image/upload/v1646668442/HerRyde/AdobeStock_58800850_jhxojh.jpg" alt=""/>
                       </Slide>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )

}

export default DrivePage;