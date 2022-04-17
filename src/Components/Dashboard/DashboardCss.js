import styled from 'styled-components';


export const InnerContainer = styled.div`
  width:80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position:absolute;
  top:0%;
  left:20%;
  padding-left:15px;
  background: #fbf2d1;
  @media (max-width: 910px) {
    width:100%;
    top:72px;
    min-height:300vh;
    left:0px
  }
`;

export const ParentSection=styled.div`
width:100%;
display:flex;
@media (max-width: 910px) {
    flex-direction :column;
 
   }
`
export const Lsection = styled.div`
display:flex;
flex-direction:column;
width:30%;
@media (max-width: 910px) {
    width:100%;
    margin: 20px 0px;
 
   }

`
export const TlSection= styled.div`
display:flex;
width:100%;
justify-content: space-between;
margin-bottom: 10px;
`

export const Span =styled.h4`
// font-family: 'Sansation';
// font-style: normal;
// font-weight: 400;
// font-size: 35px;
// line-height: 39px;
color: #11324D;
font-size: 18px;
`

export const Button=styled.button`
background-color:#F4C444;
border:none;
border-radius:20px;
font-size: x-small;
color:#11324D;
`
export const Bsection = styled.div`
display:flex;
width:100%;
background: #F2DEC4;
border-radius: 25px;
flex-direction: column;
margin-bottom:10px;
`

export const BsectionContent = styled.div`
display:flex;
width:100%;
justify-content:space-between;
padding: 10px 20px 0px 20px;
color: #11324D;
font-weight: 400;

font-size: 15px;


`
export const MiddleSection=styled.div`
display:flex;
flex-direction:column;
width:30%;
margin:0px 20px ;
@media (max-width: 910px) {
    width:100%;
    margin: 20px 0px;
   }

`
export const MiddleSectionContent = styled.div`
width:100%;
background: rgba(208, 148, 148, 0.21);
border-radius: 35px;
padding:10px;
display:flex;
flex-direction:column;
`
export const PaymentInfo = styled.div`
width:100%;
display:flex;
justify-content: space-between;
padding:15px;
`

export const RightSection=styled.div`
width:40%;
display:flex;
flex-direction:column;
border: 2px solid gray;
@media (max-width: 910px) {
  width:100%;
  margin: 20px 0px;
 }
`
export const ColorDiv =styled.div`
width:95%;
display:flex;
justify-content: space-between;
`
export const ColorButton = styled.div`
border: none;
    border-radius: 50px;
    width: 15px;
    height: 15px;
    margin: 5px;

   

`
export const ColorContainer=styled.div`
display:flex;
flex-direction:column;

`