import React from 'react';
import Home from './components/routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUpForm from './components/sign-up-form/signup-form.component';



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
