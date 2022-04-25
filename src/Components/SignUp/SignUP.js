import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import LSbackground from '../../Images/SignUp2.jpg';
import {
  Lsection,
  Overlay,
  Title,
  Span,
  Contain,
  Button1,
  Button1C,
  Button2,
  Button2c,
  Input,
  Input2,
  Container,
  Rsection,
  ButtonS,
  Form,
  BlueFacebook,
  RedGoogle,
  HLine,
} from './SignUPcss.js';
import {
  FullScreen,
  Popup,
  ChooseContainer,
  ChooseButton,
  VLine,
} from '../LogIn/LogIncss';
import { useNavigate } from 'react-router';
import $ from 'jquery';
function SignUp() {
  const route = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    $('.popupdiv').fadeTo(700, 1);
    $('.fullscreen').fadeTo(700, 1);
    $('body').css('overflow', 'hidden');
  };
  return (
    <>
      <Navbar />
      <Container>
        <FullScreen className="fullscreen">
          <Popup className="popupdiv">
            <h1
              style={{
                color: 'white',
                paddingBottom: '50px',
                textAlign: 'center',
              }}
            >
              Where would You Go
            </h1>
            <ChooseContainer>
              <ChooseButton
                type="button"
                onClick={() => {
                  route('/Mangment/Dashbord');
                  $('body').css('overflow', 'auto');
                }}
              >
                Manage Your Money
              </ChooseButton>
              <VLine />
              <ChooseButton
                type="button"
                onClick={() => {
                  route('/Shop');
                  $('body').css('overflow', 'auto');
                }}
              >
                Find Your Product
              </ChooseButton>
            </ChooseContainer>
          </Popup>
        </FullScreen>
        <Lsection>
          <img
            src={LSbackground}
            style={{ width: '100%', height: '100%', opacity: '0.4' }}
          />
          <Overlay>
            <Title>start mangment your money stay with all fashion new</Title>
            <Span>
              we will help you to discover the world fashion clothes any where
              you are
            </Span>
          </Overlay>
        </Lsection>
        <HLine />
        <Rsection>
          <Contain>continue with</Contain>

          <ButtonS>
            <Button1>
              <RedGoogle />
              <Button1C>Google</Button1C>
            </Button1>

            <Button2>
              <BlueFacebook />
              <Button2c>FaceBook</Button2c>
            </Button2>
          </ButtonS>

          <Form>
            <Input
              type="text"
              id="fname"
              name="firstname"
              placeholder="     Enter Your Name"
            ></Input>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="     Enter Your Email"
            ></Input>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="     Enter Your Password"
            ></Input>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="     Confirm password "
            ></Input>
            <Input2 type="button" onClick={handlesubmit}>
              Sign Up
            </Input2>
          </Form>
        </Rsection>
      </Container>
    </>
  );
}
export default SignUp;
