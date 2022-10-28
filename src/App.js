import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import CategoryList from './component/CategoryList';
import TopLink from './component/TopLink';
import BusinessList from './component/BusinessList';
import CompanyList from './component/CompanyList';
import TextileList from './component/TextileList';
import Offer from './component/Offer';


function App() {
  return (
  <div>
    <TopLink></TopLink>
    <Routes>
       {/* <Route path='/' element={<BusinessList />} /> */}
       <Route path="/businessList" element={<BusinessList />} />
       <Route path="/companiesList" element={<CompanyList />} />
       <Route path="/textileList" element={<TextileList />} />
       <Route path="/business/:id" element={<Offer/>} />
    </Routes>
  </div>
  );
}

export default App;
