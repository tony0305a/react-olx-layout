import styled from "styled-components";

export const Wrapper = styled.aside`
display:flex;
flex-direction:column;

border:1px solid lightgrey;
width:184px;
height:650px;
h1{
    font-weight:bold;
    padding:8px;
    font-size:14px;
    background-color:#F9F9F9;
}
`;
export const Body = styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
justify-content:flex-start;
`;
export const Item = styled.div`
display:flex;
width:80px;
cursor:pointer;
margin:4px;
height:75.66px;
justify-content:center;
align-items:center;
flex-direction:column;
span{
    display:flex;
    height:20px;
    text-overflow:ellipsis;
    text-align:center;
    word-break:break-word;
    font-weight:bold;
    font-size:13px;
}
&:hover{
    background-color:#F9F9F9;
}
`;