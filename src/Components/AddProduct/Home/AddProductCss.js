import styled from 'styled-components';
import myImage from '../../../Images/MyImage.jpg';
import {ProfileInfo} from'../../Profile/ProfileInfo';
export const Container=styled.div`
  Width:100%;
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
  padding-bottom:50px;
  background: #fbf2d1;
  @media (max-width: 910px) {
    width:100%;
    height:165vh ;
    top:72px;
    left:0px
  }
`;
export const TopNavbar = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  margin:0px;
  @media (max-width: 910px) {
    height: 8vh;
  }
`;

export const Title = styled.h1`
  font-family: 'Sansation';
  font-weight: 700;
  color: #11324d;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 910px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  width: 50%;
   height: 85vh;
  // height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 910px) {
    height: 75vh;
    width: 100%;
  }
`;
export const ProductName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-family: 'Sansation';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 39px;
  color: #6b7aa1;
`;

export const InputText = styled.input`
  width: 65%;
  background: #ffffff;
  border: 0px;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  height: 40px;
  font-size: 25px;
  padding-left: 10px;
`;

export const ProductPrice = styled.div`
width:100%
display:flex;
flex-direction: column;
margin: 20px 0px ;
`;
export const RadioSection = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0px;
`;
export const InputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 5px;
  margin-right: 5px;
`;
export const Pargraph = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0px 35px 0px 10px;
`;
export const InputNumber = styled.input`
  width: 65%;
  background: #ffffff;
  border: 0px;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px;
  height: 40px;
  font-size: 25px;
  padding-left: 10px;
`;
export const PriceWithOffer = styled.div`
  width: 100%;
  display: flex;
`;
export const Label2 = styled.label`
  font-family: 'Sansation';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 39px;
  color: #6b7aa1;
  margin-right: 10px;
`;
export const ProductImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ;
`;

export const ProductSize = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px 0px;
`;
export const InputChek = styled.input`
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  width: 20px;
  height: 27px;
`;
export const DivSize = styled.div`
  width: 100%;
  display: flex;
`;
export const InnerDivSize = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;
export const CheckboxDiv = styled.div`
  display:felx;
  width: 50%;
`;

export const ProductType = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px 0px;
`;
export const ProductDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 12px 0px;
`;

export const ColorDiv = styled.div`
  width: 100%;
  display: flex;
`;
export const Button = styled.button`
  background: #f5cb59;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 20%;
  margin-left: 15px;
  color: #6b7aa1;
  border: none;
  &:hover {
    color: #11324d;
    background-color: #846703;
  }
`;
export const DivButton = styled.div`
  width: 100%;
  height: 50px;
  align-items: end;
  justify-content: flex-end;
  margin-top: 30px;
  display: flex;
`;
export const Button2 = styled.button`
  font-family: 'Sansation';
  background: #f5cb59;
  box-shadow: 6px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 10px;
  width: 35%;
  color: #6b7aa1;
  font-size: 26px;
  border: none;
  margin-right: 60px;
  &:hover {
    color: #11324d;
    background-color: #846703;
  }
`;

