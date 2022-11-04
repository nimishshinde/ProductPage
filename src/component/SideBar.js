import React, { useEffect, useState } from "react";
import "../component/Sidebar.css";
import productData from "../product data/productData";

function SideBar({ data, dataFn }) {
  const [size, setSize] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [clear, setClear] = useState(false);

  const [highToLow, setHighToLow] = useState("");

  useEffect(() => {
    let allProduct = productData;
    let updateData = [];

    console.log( size, brand, gender )

    if (gender != "") {
      console.log("1.1")
      updateData = allProduct.filter((obj) => obj.gender == gender);
   }else{
      console.log("1.2")
      updateData = productData;
   }
   console.log(updateData)
   
   
   
   if (size != "") {
      
         updateData = updateData.filter((obj) => obj.size == size);
      // if (updateData.length != 0) {
      //    console.log("2.1")
      // } else {
      //    console.log("2.2")
      //    updateData = allProduct.filter((obj) => obj.size == size);
      // }
   }
   
   console.log(updateData);
   
   if (brand != "") {
      updateData = updateData.filter((obj) => obj.brand == brand);
      // if (updateData.length != 0) {
      //    console.log("3.1")
         
      // } else {
      //    console.log("3.2")
      //   updateData = allProduct.filter((obj) => obj.brand == brand);
      // }
    }
    
   console.log(updateData);

    

   //  if (highToLow == true) {
   //    updateData = updateData.sort(function (objA, objB) {
   //      return objB.price - objA.price;
   //    });
   //  } else {
   //    updateData = updateData.sort(function (objA, objB) {
   //      return objA.price - objB.price;
   //    });
   //  }
  dataFn(updateData.slice());
    setClear(false)
  }, [size, brand, gender]);


  useEffect(() => {
    console.log(highToLow, clear);

   //  if (highToLow != "") {
   //    if (highToLow == true) {
   //      sortHighToLow();
   //    } else {
   //      sortLowToHigh();
   //    }
   //  } else {
   //    dataFn(productData.slice());
   //  }

   dataFn(productData)

  }, [clear]);

  function sortHighToLow() {
    setHighToLow(true);
    let sortedHightToLow = [];
    sortedHightToLow = data.sort(function (objA, objB) {
      return objB.price - objA.price;
    });
    dataFn(sortedHightToLow.slice());
  }

  function sortLowToHigh() {
    setHighToLow(false);
    console.log(data);
    let sortedLowToHigh = [];
    sortedLowToHigh = data.sort(function (objA, objB) {
      return objA.price - objB.price;
    });
    dataFn(sortedLowToHigh.slice());
  }

  function filterSize(e) {
    setSize(e.target.value);
  }

  return (
    <div className="sidebarmain">
      <div className="option">
        Sort by
        <div className="optionBtn" onClick={() => sortLowToHigh()}>
          Low to High
        </div>
        <div className="optionBtn" onClick={() => sortHighToLow()}>
          High to Low
        </div>
      </div>

      <div className="option">
        Filter By
        <div className="optionBtn">
          Size
          <select onChange={(e) => filterSize(e)}>
            <option> S </option>
            <option> M </option>
            <option> L </option>
            <option> XL </option>
          </select>
        </div>
        <div className="optionBtn">
          Brand
          <select onChange={(e) => setBrand(e.target.value)}>
            <option>Addidas</option>
            <option>Nike</option>
            <option>Puma</option>
            <option>Reebok</option>
          </select>
        </div>
        <div className="optionBtn">
          Gender
          <select onChange={(e) => setGender(e.target.value)}>
            <option >Men</option>
            <option>Women</option>
          </select>
        </div>
        <button onClick={() => setClear(true)}> clear all filter </button>
      </div>
    </div>
  );
}

export default SideBar;
