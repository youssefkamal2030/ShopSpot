  import React from "react";
  import "./Home.css";
  import ProdcutList from "./ProductListng/ProdcutList"
  function Home() {
    return (
      <div className="home">
        <div className="home__container">
        
        <ProdcutList/>
        </div>
      </div>
    );
  }

  export default Home;