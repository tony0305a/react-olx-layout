import React from "react";
import * as S from "./styled";
import { css } from "styled-components";
const PButton = ({ children,variant }) => {
  return (
    <S.Wrapper>
      <button className={variant}>{children}</button>
    </S.Wrapper>
  );
};

export default PButton;
