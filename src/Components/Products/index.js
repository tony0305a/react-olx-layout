import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import * as S from "./styled";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);
  const arr = [
    {
      img: "http://localhost:3000/images/anunc1.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc2.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc3.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc4.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc5.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc6.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc7.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
    {
      img: "http://localhost:3000/images/anunc8.jpg",
      nome: "Guincho pode Ligar 950520",
      preco: 1,
      local: "Boa vists - RR",
      data: "Ontem, 15:30",
    },
  ];

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirtsProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = arr.slice(indexOfFirtsProduct, indexOfLastProduct);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <S.Wrapper>
      <S.Head>
        <div className="head-item">
          <span>
            <b>Pagamento e entrega</b>
          </span>
          <div className="select">
            <span>Todos os anúncios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              size="16"
              color="#6E0AD6"
              class="ja3zle-3 kBXkul"
            >
              <path
                fill="#6E0AD6"
                fill-rule="evenodd"
                d="M6.28 8.22a.75.75 0 00-1.06 1.06l6 6a.75.75 0 001.06 0l6-6a.75.75 0 00-1.06-1.06l-5.47 5.47-5.47-5.47z"
              ></path>
            </svg>
          </div>
          <div className="select-dropdown">
            <p>Todos os anúncios</p>
            <p>Compra garantida</p>
            <p>Compra garantida + entrega</p>
          </div>
        </div>
        <div className="head-item">
          <span>
            <b>Tipo de anúncio</b>
          </span>
          <div className="select">
            <span>Todos os anúncios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              size="16"
              color="#6E0AD6"
              class="ja3zle-3 kBXkul"
            >
              <path
                fill="#6E0AD6"
                fill-rule="evenodd"
                d="M6.28 8.22a.75.75 0 00-1.06 1.06l6 6a.75.75 0 001.06 0l6-6a.75.75 0 00-1.06-1.06l-5.47 5.47-5.47-5.47z"
              ></path>
            </svg>
          </div>
          <div className="select-dropdown">
            <p>Todos os anúncios</p>
            <p>Particulares</p>
            <p>Profissionais</p>
          </div>
        </div>
        <div className="head-item">
          <span>
            <b>Ordernar por</b>
          </span>
          <div className="select">
            <span>Mais recentes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              size="16"
              color="#6E0AD6"
              class="ja3zle-3 kBXkul"
            >
              <path
                fill="#6E0AD6"
                fill-rule="evenodd"
                d="M6.28 8.22a.75.75 0 00-1.06 1.06l6 6a.75.75 0 001.06 0l6-6a.75.75 0 00-1.06-1.06l-5.47 5.47-5.47-5.47z"
              ></path>
            </svg>
          </div>
          <div className="select-dropdown">
            <p>Mais recentes</p>
            <p>Mais relevantes</p>
            <p>Menor preço</p>
          </div>
        </div>
      </S.Head>
      <S.Products>
        {currentProducts.map((item)=>(
        <S.SingleProduct>
        <img src={item.img} />
        <S.Infos>
          <div className="line up">
            <span>{item.nome}</span>{" "}
            <div>
              <span>R$ {item.preco}</span>
              <a href="#">♥</a>
            </div>
          </div>
          <div className="space"></div>
          <div className="line down ">
            <span>{item.local}</span>
            <span>{item.data}</span>{" "}
          </div>
        </S.Infos>
      </S.SingleProduct>
        ))}
      </S.Products>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={arr.length}
        paginate={paginate}
      />
    </S.Wrapper>
  );
};

export default Products;
