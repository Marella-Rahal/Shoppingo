import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 92vh;
  flex-direction: row;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
export const FullScreen = styled.div`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(90, 90, 90, 0.5);
  z-index: 9999;
`;
export const Popup = styled.div`
  display: none;
  width: 90%;
  min-height: 85%;
  background: #382323;
  position: fixed;
  top: 11%;
  left: 5%;
  z-index: 2;
  border-radius: 25px;
  box-shadow: 5px 5px 10px 15px rgba(0, 0, 0, 0.25);
  padding: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 770px) {
    top: 1.5%;
  }
`;
export const ChooseButton = styled.button`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  border: none;
  margin: 10px;
  font-size: 25px;
  font-weight: 700;
  color: #382323;
  background-image: linear-gradient(#f5cb59, #e77f7f);
  @media (max-width: 770px) {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;
export const ChooseContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const VLine = styled.div`
  border-left: 2px solid white;
  height: 400px;
  margin: 0 50px;
  @media (max-width: 770px) {
    border-left: none;
    height: 0px;
    border-bottom: 2px solid white;
    width: 100%;
    margin: 15px 0;
  }
`;
export const Lsection = styled.div`
  position: relative;
  width: 50%;
  background-color: #fbf2d1;
  @media (max-width: 770px) {
    width: 100%;
    min-height: 75vh !important;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 25%;

  @media (max-width: 770px) {
    top: 0%;
    width: 100%;
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

export const Rsection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbf2d1;
  width: 50%;
  padding: 40px 0 0 0;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const Title = styled.h5`
  font-family: 'Cabin';
  font-weight: 700;
  font-size: 70px;
  line-height: 61px;
  color: #5e5a05;
  padding: 75px;
  padding-bottom: 15px;
  padding-left: 117px;

  @media (max-width: 770px) {
    width: 100%;
    margin: auto;
    // padding : 20px 20px 20px 20px;
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
  padding-left: 120px;

  @media (max-width: 770px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 375px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const Content = styled.div`
  width: 65%;
  font-family: 'Cabin';
  font-weight: 400;
  font-size: 38px;
  color: #6b7aa1;
  padding: 35px;
  @media (max-width: 770px) {
    font-size: 23px;
  }
`;

export const Link = styled.a`
color: #A58943;
target="_blank";
font-size: 35px;
text-decoration:none;
@media(max-width:770px){
  font-size:23px;
}
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
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
  width: 30%;
  min-height: 35px;
  background: #a58943;
  border-radius: 10px;
  margin: 15px;
  border: none;
  align-self: self-start;
  font-family: 'Cabin';
  color: #e7e0c9;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;
export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 25px;
`;
export const Link2 = styled.a`
  margin: 15px;
  font-family: 'Cabin';
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #11324d;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;
