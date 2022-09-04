import styled from "styled-components";

export const Wrapper = styled.div`
  .outlined {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 135px;
    height: 40px;
    border-radius: 16px;
    background-color: white;
    border: 1px solid lightgray;
    transition: all ease-out 0.3s;
    &:hover {
      border: 1px solid #6e0ad6;
      color: #6e0ad6;
    }
  }
  .contained {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 135px;
    height: 40px;
    border-radius: 16px;
    background-color: #f28000;
    color: white;
    border: 1px solid lightgray;
    transition: all ease-out 0.3s;
    &:hover {
      background-color: #df7400;
      color: white;
    }
  }
`;
