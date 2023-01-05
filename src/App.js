import React from 'react';
import Home from './components/routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';



const App = () => {
		return (
			<Routes>
				<Route path='/' element={<Navigation/>} >
					<Route index element={<Home/>} />
					<Route path='sign-in'  element={<SignIn/>} />
				</Route>
			</Routes>
	);
};

export default App;
