import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTextiles } from '../store/actions/textileActions';
import "../css/textile.css"

export default function TextileList() {

    const {textiles} = useSelector((state)=>state.textile);
    const textileDispatch=useDispatch();

    useEffect(()=>{
        textileDispatch(getAllTextiles());
    },[])
  return (
    <>
      <div className="containers">
{
  textiles.map((textile) =>(
    <div className="cart" key={textile.id}>
    <div className="resim">Bu Alana Resim Gelcek</div>
    <div className="content">
      <div className="str">
        <div className="label">Textile Adı :</div>
        <div className="text">{textile.name}</div>
      </div>
      <div className="str">
        <div className="label">Textile Adresi :</div>
        <div className="text">{textile.address}</div>
      </div> 
    </div>  
  </div>
  ))
}
       
      </div>
    </>
  );
}
