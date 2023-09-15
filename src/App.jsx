import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const  client= new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus:false,
    } 
  }});
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/contact"> Contact </Link>
        <Routes>
          <Route path="/" element={<Home/>}>  </Route>
          <Route path="/menu" element={<Menu/>}> </Route>
          <Route path="/contact" element={<Contact/>}>  </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )    
}