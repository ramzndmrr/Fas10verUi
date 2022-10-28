import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessService from "../services/businessService";
import CompanyList from "./CompanyList";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik,Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function Offer() {
  let { id } = useParams();
  const [business, setBusiness] = useState({});
  // const [company, setCompany] = useState({});

   const initialValues = { businessId: "", textileId: "", contractPrice: "" };
  const schema = Yup.object({
    businessId: Yup.string().required("business id verilmek zorunda"),
    textileId: Yup.string().required("atölye id vetilmek zorunda"),
    contractPrice: Yup.number().required("fason fiyatı giriniz"),
  });




  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
  useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
    schema,
  });



  useEffect(() => {
    let businessService = new BusinessService();
    businessService
      .getOneBusiness(id)
      .then((resp) => setBusiness(resp.data.data));
    // setCompany(business.company)
    // console.log(company.name)
  }, []);

  return (
    <div className="containers">
   
   <div className="formik">
   <form onSubmit={handleSubmit}>
      <input
        id='businessId'
        type='businessId'
        value={values.businessId}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errors.businessId && touched.businessId && (
        <div className='error'> {errors.businessId}</div>
      )}

      <input
        id='textileId'
        type='textileId'
        value={values.textileId}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {errors.textileId && touched.textileId && (
        <div className='error'> {errors.textileId}</div>
      )}

      <input
        id='contractPrice'
        type='contractPrice'
        value={values.contractPrice}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {errors.contractPrice && touched.contractPrice && (
        <div className='error'> {errors.contractPrice}</div>
      )}

  
      <input type='submit' value='submit' />
      {JSON.stringify(values)}
    </form>
   </div>




      <div className="cart" key={business.id}>
        <div className="resim">Bu Alana Resim Gelcek</div>
        <div className="content">
          <div className="str">
            <div className="label">Id:</div>
            <div className="text">{business.id}</div>
          </div>

          <div className="str">
            <div className="label">Ürün tip :</div>
            <div className="text">{business.type}</div>
          </div>
          <div className="str">
            <div className="label">Ürün Categorisi:</div>
            <div className="text">{business.category}</div>
          </div>
          <div className="str">
            <div className="label">Ürün Açıklaması:</div>
            <div className="text desc">{business.description}</div>
          </div>
          <div className="str">
            <div className="label">Ürün Adeti:</div>
            <div className="text">{business.piece}</div>
          </div>
          <div className="str">
            <div className="label">Fason Fiyatı:</div>
            <div className="text">{business.contractPrice} tl</div>
          </div>
        </div>
        {/* <div className="btn"><Button><Link to={`/business/${business.id}`}>FAS10VER</Link></Button></div> */}
      </div>
    </div>
  );
}
