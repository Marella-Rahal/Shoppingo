import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import LSbackground from '../../Images/SignUp2.jpg';
import {
  Container,
  FullScreen,
  Popup,
  ChooseButton,
  Lsection,
  Overlay,
  Title,
  ChooseContainer,
  Span,
  Rsection,
  Content,
  Link1,
  Input,
  Input2,
  Form,
  FormContent,
  Link2,
  VLine,
  HLine,
} from './LogIncss';
import { useNavigate } from 'react-router';
import $ from 'jquery';

function LogIn() {
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
            <Title>Welcome Back</Title>
            <Span>
              we will help you to discover the world fashion clothes any where
              you are
            </Span>
          </Overlay>
        </Lsection>
        <HLine />
        <Rsection>
          <Content>
            Sign in to your account or{' '}
            <Link1 href="/SignUP">create a new account</Link1>
          </Content>
          <Form>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="     Enter Your Email address"
            ></Input>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="     Enter Your Password"
            ></Input>
            <FormContent>
              <Input2 onClick={handlesubmit}>Log In</Input2>
              <Link2 onClick={()=>route('/ResetPassword')}>Forget your password?</Link2>
            </FormContent>
          </Form>
        </Rsection>
      </Container>
    </>
  );
}
export default LogIn;
