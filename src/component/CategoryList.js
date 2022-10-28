import React, { useState,useEffect} from "react";
import CategoryService from "../services/categoryService"
import '../css/Category.css' 

export default function CategoryList() {
  const [categories, setCategory] = useState([]);

  useEffect(()=>{
    let categoryService = new CategoryService();
    categoryService.getCategories().then(result=>setCategory(result.data.data));
})
  return <>
  <div className="genel">
    <div>Kategoriler</div>
  <div className="box">
    {categories.map(category=>(
         <div className="içerik" key={category.id}>{category.name}</div>
    ))}
  </div>
  </div>
  </>;
}
