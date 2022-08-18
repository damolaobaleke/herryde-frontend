import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../components/Home/Home'
import Drive from '../components/Drive/Drive'
import Ride from '../components/Ride/Ride'
import BookRide from '../components/Ride/BookaRide'
import './App.css'

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/signup/drive" element={<Drive/>}/>
				<Route path="/signup/ride" element={<Ride/>}/>
				<Route path="/signup/ride/Book-a-ride" element={<BookRide/>}/>
			</Routes>
		</div>
	</BrowserRouter>
  );
}

export default App
