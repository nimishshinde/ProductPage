import logo from "./logo.svg";
import "./App.css";
import data from "./product data/productData";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import SideBar from "./component/SideBar";
import NavBar from "./component/NavBar";

function App() {
  const [ myData, setMydata ] = useState(data);
  return (
    <>
      <NavBar />
      <div className="pageFlex">
        <SideBar data={myData} dataFn={setMydata} />
        <div>
          <div className="productDisplay">
            {/* {myData.map((obj) => (
              <ProductCard productObj={obj} />
            ))} */}
            {myData.length == 0 ? (
              <div> No results for this combination </div>
            ) : (
              <>
                {myData.map((obj) => (
                  <ProductCard productObj={obj} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
