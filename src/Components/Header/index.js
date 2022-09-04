import React from "react";
import PButton from "../PButton";
import * as S from "./styled";
const Header = () => {
  return (
    <S.Wrapper>
      <div>
        <img src="http://localhost:3000/logo192.png" width="48" heigth="48" style={{margin:'16px'}} />
      </div>
      <div>
        <form id="form-search">
          <input type="text" placeholder="Buscar"  />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </div>
      <S.Nav>
      <S.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="currentColor"
          size="24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 2.25h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V3A.75.75 0 013 2.25zm.75 7h5.5v-5.5h-5.5v5.5zm10.25-7h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75V3a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5zm-.75 4h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-7a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5zM3 13.25h7a.75.75 0 01.75.75v7a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-7a.75.75 0 01.75-.75zm.75 7h5.5v-5.5h-5.5v5.5z"
          ></path>
        </svg>
        <a href="#">Meus Anúncios</a>
      </S.Button>
      <S.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="currentColor"
          size="24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M20.77 15.635a9.25 9.25 0 01-8.268 5.115 9.13 9.13 0 01-3.854-.842l-5.41 1.804a.75.75 0 01-.95-.95l1.804-5.41A9.128 9.128 0 013.25 11.5a9.249 9.249 0 015.112-8.27 9.128 9.128 0 014.138-.98l.541.001c4.698.26 8.449 4.01 8.709 8.749v.5a9.127 9.127 0 01-.98 4.135zM8.464 18.39a.75.75 0 01.575.042 7.632 7.632 0 003.462.819 7.751 7.751 0 006.93-4.288 7.63 7.63 0 00.82-3.46l.001-.46C20.034 7.106 16.893 3.965 13 3.75h-.502a7.634 7.634 0 00-3.463.82 7.75 7.75 0 00-4.285 6.932 7.63 7.63 0 00.82 3.46.75.75 0 01.042.575l-1.426 4.277 4.277-1.425z"
          ></path>
        </svg>
        <a href="#">Chat</a>
      </S.Button>
      <S.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="currentColor"
          size="24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M22 17.75H2c-1 0-1-1.5 0-1.5A2.25 2.25 0 004.25 14V9a7.75 7.75 0 0115.5 0v5A2.25 2.25 0 0022 16.25c1 0 1 1.5 0 1.5zM18.25 14V9a6.25 6.25 0 00-12.5 0v5c0 .844-.279 1.623-.75 2.25h14a3.733 3.733 0 01-.75-2.25zm-3.871 7.376a2.75 2.75 0 01-4.758 0 .75.75 0 01.649-1.126h3.46a.75.75 0 01.649 1.126z"
          ></path>
        </svg>
        <a href="#">Notificações</a>
      </S.Button>
      </S.Nav>
      <S.Nav>
        <PButton variant='outlined' >Entrar</PButton>
        <PButton variant='contained' >Anunciar</PButton>
      </S.Nav>
    </S.Wrapper>
  );
};

export default Header;
