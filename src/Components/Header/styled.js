import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content:center;
  height:80px;
  border-bottom:1px solid lightgray;

  #form-search {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #d2d2d2;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      border: 2px solid gray;
    }
    &:focus-within {
      border: 2px solid purple;
    }
    input {
      display: flex;
      width:284px;
      flex-grow: 2;
    }
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  button{
    margin:8px;
  }
`;
export const Button = styled.div`
  display: flex;
  margin: 16px;
  transition: all ease-out 0.3s;
  a {
    color: #4c4c4c;
  }
  &:hover {
    a {
      color: #6e0ad6;
    }
    svg {
      color: #6e0ad6;
    }
  }
`;
