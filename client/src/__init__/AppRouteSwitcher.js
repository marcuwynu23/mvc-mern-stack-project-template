/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Help from "../Pages/Help";
import Contact from "../Pages/Contact";
import About from "../Pages/About";


export default function AppRouteSwitcher() {
	return <div>
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/about' element={<About />} />
				<Route exact path='/help' element={<Help />} />
				<Route exact path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</div>
}