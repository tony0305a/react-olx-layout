import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:16px;
width:808px;

`;
export const Locales = styled.div`
display:flex;
width:100%;
z-index:1;
`;

export const Country = styled.div`
display:flex;
padding:4px;
border:1px solid #CCCCCC;
border-bottom:none;
span{
    font-size:12px;

}
`;
export const State = styled.div`
display:flex;
padding:4px;
width:128px;
border:1px solid #CCCCCC;
font-weight:bold;
border-bottom:none;
span{
    font-size:12px;

}
`;
export const Divider = styled.div`
display:flex;
width:32px;
justify-content:center;
border-bottom:1px solid #CCCCCC;
`;
export const TopBorder = styled.div`
display:flex;
width:100%;
border-bottom:1px solid #CCCCCC;
`;
export const Body = styled.div`
display:flex;
padding-top:16px;
padding-bottom:16px;
border-inline:1px solid #CCCCCC;
border-bottom:1px solid #CCCCCC;
`;
export const Column = styled.div`
display:flex;
flex-direction:column;
a{
    color:#3396D3;
    font-size:12px;
    font-weight:bold;
}
`;