import React from "react";
import Gallery from "../Components/Gallery";
import Header from "../Components/Header";
import LocationBox from "../Components/LocationBox";
import Products from "../Components/Products";
import Sidebar from "../Components/Sidebar";
import * as S from './HomeStyled'
const Home = () => {
  return (
    <S.Wrapper>
    <Header/>
    <div style={{display:'flex',width:'100%',height:'250px'}} >

    </div>
    <div className="main">
    <Sidebar/>
    <div className="location-product">
    <LocationBox />
    <Gallery />
    <Products />
    </div>
    </div>
    </S.Wrapper>
  );
};

export default Home;
