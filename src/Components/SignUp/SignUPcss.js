import styled from 'styled-components';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Google } from '@styled-icons/boxicons-logos/Google';

export const Container = styled.div`
  display: flex;
  min-height: 92vh;
  flex-direction: row;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Lsection = styled.div`
  position: relative;
  width: 50%;
  background-color: #fbf2d1;
  @media (max-width: 770px) {
    width: 100%;
    min-height: 45vh !important;
  }
`;
export const HLine = styled.div`
  width: 0%;
  height: 0%;
  display: none;
  @media (max-width: 770px) {
    display: block;
    border-bottom: 1px solid black;
    width: 100%;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 15%;

  @media (max-width: 1115px) {
    top: 0%;
  }
`;
export const Rsection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbf2d1;
  width: 50%;
  padding: 40px 0 0 0;
  @media (max-width: 770px) {
    width: 100%;
    min-height: 55vh !important;
  }
`;

export const Title = styled.h5`
  font-family: 'Cabin';
  font-weight: 700;
  font-size: 35px;
  line-height: 61px;
  color: #5e5a05;
  padding: 75px;
  padding-bottom: 15px;
  padding-left: 97px;

  @media (max-width: 770px) {
    width: 100%;
    margin: 10px;
    padding: 0px;
  }
  @media (max-width: 375px) {
    font-size: 37px;
  }
`;

export const Span = styled.p`
  font-family: 'Cabin';
  font-weight: 600;
  font-size: 23px;
  line-height: 43px;
  color: #6b7aa1;
  padding: 75px;
  padding-top: 0px;
  padding-left: 105px;

  @media (max-width: 770px) {
    width: 100%;
    padding: 0px 10px 0px 10px;
  }
  @media (max-width: 375px) {
    padding: 0px 10px 0px 10px;
  }
`;
export const Contain = styled.span`
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 600;
  font-size: 37px;
  line-height: 61px;
  color: #6b7aa1;
`;
export const ButtonS = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Button1 = styled.button`
  height: 43px;
  background: #ffffff;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a58943;
  margin-right: 10px;
  @media (max-width: 700px) {
    margin: 10px;
  }
`;
export const RedGoogle = styled(Google)`
  color: red;
  width: 41px;
`;
export const Button1C = styled.div`
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  color: #886918;
`;

export const Button2 = styled.button`
  height: 43px;
  background: #ffffff;
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a58943;
`;
export const BlueFacebook = styled(Facebook)`
  color: blue;
  width: 30px;
`;
export const Button2c = styled.div`
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: #886918;
`;
export const Input = styled.input`
  width: 80%;
  height: 51px;
  background: #ffffff;
  border-radius: 27px;
  border: 1px solid #886918;
  margin: 5px;
  padding-left: 15px;
  box-shadow: 0px 0px 3px #886918;

  &::placeholder {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;

    line-height: 29px;
    color: #6b7aa1;
  }
`;

export const Input2 = styled.button`
  width: 15%;
  min-height: 35px;
  background: #a58943;
  border-radius: 10px;
  margin: 15px;
  border: none;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;
