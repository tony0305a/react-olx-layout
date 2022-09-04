import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin:16px;
`;
export const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .head-item {
    display: block;
    flex-direction: column;
    width: 33%;

    .select {
      display: inline-flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 8px;
      border-radius: 4px;
      width: 100%;
    }

    .select-dropdown {
      position: absolute;
      background-color: white;
      display: none;
      border: 1px solid #ccc;
      width: 33%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      z-index: 1;

      p {
        border-top: 1px solid #ccc;
        padding: 8px;
        cursor: pointer;
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
    &:hover .select-dropdown {
      display: block;
    }
  }
  margin-bottom:8px;
`;
export const Products = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  margin-top:8px;
  position: relative;
  flex-direction: column;
`;
export const SingleProduct = styled.div`
  display: flex;
  height:256px;
  margin-top:16px;
  img{
    background-color:#ccc;
    border-radius:8px;
    padding-inline:40px;
  }
`;
export const Infos = styled.div`
display:flex;
margin-left:12px;
flex-direction:column;
justify-content:flex-start;
width:100%;
height:256px;
.line{
    display:flex;
    width:100%;
    justify-content:space-between;
}
.space{
    width:100%;
    height:200px;
}
.up{
    align-items:flex-start;
}
.down{
    align-self:flex-end
}
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
  align-items: center;
  button {
    margin: 4px;
    padding: 8px;
    background-color: #0d6efd;
    color: white;
    border-radius: 4px;
  }
`;
