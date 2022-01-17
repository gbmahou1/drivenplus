import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from "react";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import Subscriptions from "./Subscriptions";
import SubscriptionsId from "./Subscription/Id";
import Home from "./Home";
import { useState } from "react";
import { AuthContext, AuthProvider } from "./Providers/auth";
import { useContext } from "react";

function App() {


  return (

	<AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/sign-up" element={<RegisterPage />}></Route>
				<Route path="/subscriptions" element={<Subscriptions />}></Route>
				<Route path="/subscriptions/:idPlano" element={<SubscriptionsId />}></Route>
				<Route path="/home" element={<Home/>}></Route>
			</Routes>
		</BrowserRouter>
	</AuthProvider>

  );
}

export default App;
