import React, { useState } from "react";
import { useRef } from "react";
import * as S from "./styled";
const Gallery = () => {
const ref = useRef(null)
const [left,setLeft] = useState(true)
const [right,setRight] = useState(false)




  const scroll = () => {
    const box = document.getElementById('innerBox')
    box.scrollLeft = 600
    setLeft(false)
    setRight(true)
  };
  const scrollRight = () => {
    const box = document.getElementById('innerBox')
    box.scrollLeft = -600
    setLeft(true)
    setRight(false)
  };

  return (
    <S.Wrapper>
      <h1>Galeria</h1>
      <S.Box>
        {right?(<><button onClick={()=>scrollRight()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000" size="24"><path fill="#000" fill-rule="evenodd" d="M14.53 6.53a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 000 1.06l6 6a.75.75 0 001.06-1.06L9.06 12l5.47-5.47z"></path></svg></button></>):(<></>)}
        <S.InnerBox  id="innerBox" >
            <S.Boxitem>
            <S.Item>
          <img  src="http://localhost:3000/images/05.jpg"/>
          <span>Mi Tv Stick - Mi Stick</span>
          <b>R$ 299</b>
          </S.Item>
            </S.Boxitem>

          <S.Boxitem>
          <S.Item>
          <img  src="http://localhost:3000/images/04.jpg"/>
          <span>Telha Eternit 2,44X1,10X0,05CM</span>
          <b>R$ 85</b>
          </S.Item>
          </S.Boxitem>

          <S.Boxitem>
          <S.Item>
          <img  src="http://localhost:3000/images/03.jpg"/>
          <span>Fiat Mobi 2021 1.0 evo flex like. manual</span>
          <b>R$ 54.320</b>
          </S.Item>
          </S.Boxitem>

          <S.Boxitem>
          <S.Item>
          <img  src="http://localhost:3000/images/01.jpg"/>
          <span>Apartamento no Ed. St. Patrick</span>
          <b>R$ 395.000</b>
          </S.Item>
          </S.Boxitem>

          <S.Boxitem>
          <S.Item>
          <img  src="http://localhost:3000/images/02.jpg"/>
          <span>XTZ</span>
          <b>R$ 16.000</b>
          </S.Item>
          </S.Boxitem>


        </S.InnerBox>
        {left?(<> <button onClick={()=>scroll()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000" size="24"><path fill="#000" fill-rule="evenodd" d="M9.47 17.47a.75.75 0 001.06 1.06l6-6a.75.75 0 000-1.06l-6-6a.75.75 0 00-1.06 1.06L14.94 12l-5.47 5.47z"></path></svg></button></>):(<></>)} 
      </S.Box>
    </S.Wrapper>
  );
};

export default Gallery;
