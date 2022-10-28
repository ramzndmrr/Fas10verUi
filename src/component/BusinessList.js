import React from "react";
import { useState, useEffect } from "react";
import BusinessService from "../services/businessService";
import "../css/business.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function BusinessList() {
  const [businesses, setBusiness] = useState([]);
  useEffect(() => {
    let businessService = new BusinessService();
    businessService
      .getBusiness()
      .then((result) => setBusiness(result.data.data));
  });

  return (
    <>
      <div className="containers">
{
  businesses.map((business) =>(
    <div className="cart" key={business.id}>
    <div className="resim">Bu Alana Resim Gelcek</div>
    <div className="content">
    <div className="str">
        <div className="label">Id:</div>
        <div className="text">{business.id}</div>
      </div>
      <div className="str">
        <div className="label">Firma Adı :</div>
        <div className="text">{business.company.name}</div>
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
    <div className="btn"><Button><Link to={`/business/${business.id}`}>FAS10VER</Link></Button></div>
    
  </div>
  ))
}
       

      </div>
    </>
  );
}
