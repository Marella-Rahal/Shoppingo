import styled from 'styled-components';
import defaultImage from '../../Images/Default.jpg';

export const Container=styled.div`
  width:100%;
  min-height:100vh;
`

export const InnerContainer = styled.div`
  width:80%;
  height: 100vh;
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
    height:165vh;
    left:0px
  }
`;



export const Title = styled.h1`
  font-family: 'Sansation';
  font-weight: 700;
  color: #11324d;
`;
export const HeaderImage = styled.div`
   background: transparent url(${defaultImage}) no-repeat center 0;
   cursor:pointer; 
   background-size: contain;
   margin-left: 5px;
   width: 40px;
   height: 40px;
   border-radius: 50px;
`;
export const Button1 = styled.button`
width: 20%;
// height: 35px;
box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
background: none;
border-radius: 10px;
margin-left: 20px;
border: none;
font-size:20px;
font-weight: bold;
}



`;
export const Button = styled.button`
  background: #f5cb59;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 65px;
  width: 30%;
  height: 32px;
  margin-left: 15px;
  color: #6b7aa1;
  border: none;
  &:hover {
    color: #11324d;
    background-color: #846703;
  }
`;
