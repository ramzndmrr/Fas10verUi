import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanies } from '../store/actions/companyActions';
import "../css/company.css"
export default function CompanyList() {

    const {companies} = useSelector((state) =>state.company);
    const companyDispatch = useDispatch();

    useEffect(()=>{
        companyDispatch(getAllCompanies());
    },[]);
  return (
    <>
      <div className="containers"> 
{
  companies.map((company) =>(
    <div className="cart" key={company.id}>
    <div className="resim">Bu Alana Resim Gelcek</div>
    <div className="content">
      <div className="str">
        <div className="label">Firma Adı :</div>
        <div className="text">{company.name}</div>
      </div>
      <div className="str">
        <div className="label">Firma Adresi :</div>
        <div className="text">{company.address}</div>
      </div>
      <div className="str">
        <div className="label">Bağlantılı Ülkeler:</div>
        <div className="text">{company.countries}</div>
      </div>
      <div className="str">
        <div className="label">Üretim Şekli:</div>
        <div className="text">{company.workType}</div>
      </div>  
    </div>  
  </div>
  ))
}
       
      </div>
    </>
  );
}
