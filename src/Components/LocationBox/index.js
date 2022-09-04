import React from "react";
import * as S from "./styled";
const LocationBox = () => {
  return (
    <S.Wrapper>
      <S.Locales>
        <S.Country>
          <span>Brasil</span>
        </S.Country>
        <S.Divider>
          <span> {">"} </span>
        </S.Divider>
        <S.State>
          <span>DDD 82 Alagoas</span>
        </S.State>
        <S.TopBorder />
      </S.Locales>
      <S.Body>
        <S.Column style={{ marginLeft: "4px" }}>
          <a href="#">Acre</a>
          <a href="#">Alagoas</a>
          <a href="#">Amapá</a>
          <a href="#">Amazonas</a>
          <a href="#">Bahia</a>
          <a href="#">Ceará</a>
          <a href="#">Distrito Federal</a>
        </S.Column>
        <S.Column style={{ marginLeft: "104px" }}>
          <a href="#">Espírito Santos</a>
          <a href="#">Goiás</a>
          <a href="#">Maranhão</a>
          <a href="#">Mato Grosso</a>
          <a href="#">Mato Grosso do sul</a>
          <a href="#">Minas Gerais</a>
          <a href="#">Pará</a>
        </S.Column>
        <S.Column style={{ marginLeft: "104px" }}>
          <a href="#">Paraíba</a>
          <a href="#">Paraná</a>
          <a href="#">Pernanbuco</a>
          <a href="#">Piauí</a>
          <a href="#">Rio de Janeiro</a>
          <a href="#">Rio Grande do Norte</a>
          <a href="#">Rio Grande do Sul</a>
        </S.Column>
        <S.Column style={{ marginLeft: "104px" }}>
          <a href="#">Rondônia</a>
          <a href="#">Roraima</a>
          <a href="#">Santa Catarina</a>
          <a href="#">São Paulo</a>
          <a href="#">Sergipe</a>
          <a href="#">Tocantins</a>
        </S.Column>
      </S.Body>
    </S.Wrapper>
  );
};

export default LocationBox;
