import React from 'react';
import Home from './components/routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';



const App = () => {
		return (
			<Routes>
				<Route path='/' element={<Navigation/>} >
					<Route index element={<Home/>} />
				</Route>
			</Routes>
	);
};

export default App;
